
console.log(window.CHAIN);
// 注册一个自定事件
var event = document.createEvent('Event');
event.initEvent('msgEvent', true, true);
// detail是事件数据
document.addEventListener('msgEvent', ({detail}) => {
	// 接受数据
	let { type, data } = detail;
	console.log(type.data);


  window.CHAIN.WALLET.connect("MetaMask")
});
