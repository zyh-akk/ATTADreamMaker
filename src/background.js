// background.js
var systems = {
  a: '趣谈前端',
  b: '掘金',
  c: '微信'
}

chrome.runtime.onInstalled.addListener(function() {
  // 上下文菜单
  for (var key of Object.keys(systems)) {
    console.log(key);
    chrome.contextMenus.create({
      id: key,
      title: systems[key],
      type: 'normal',
      contexts: ['selection']
    });
  }
});
