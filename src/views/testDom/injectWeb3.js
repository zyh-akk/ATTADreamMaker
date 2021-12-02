(function(){
  web3()
})()

function web3() {
  var web3Array = [
    'js/web3/web3.min.js','js/web3/web3-provider.min.js','js/web3/chainSetting.js','js/web3/chainProvider.js','js/web3/injectWeb3.js',
  ]
  web3Array.forEach(element => {
    var jsPath = chrome.extension.getURL(element);
    var temp = document.createElement('script');
    temp.type = 'text/javascript';
    temp.src = jsPath;
    document.documentElement.appendChild(temp);
  });
}
