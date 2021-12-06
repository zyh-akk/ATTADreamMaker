
// console.log(window.CHAIN);
// // 注册一个自定事件
var event = document.createEvent('Event');
event.initEvent('msgEvent', true, true);
// detail是事件数据
// 获取钱包地址
document.addEventListener('msgEvent', function(event){
	window.CHAIN.WALLET.enable()
	.then((address)=>{
	    var newEvent = new CustomEvent('msgEventCallback', { bubbles:true,cancelable:true,composed:true ,detail : address});
	    document.dispatchEvent(newEvent);
	})
});
// 更改钱包地址-强制唤起
document.addEventListener('switchaddress', function(event){
	window.CHAIN.WALLET.connect('MetaMask')
	.then((address)=>{
	    var newEvent = new CustomEvent(event.detail.Callbackname, { bubbles:true,cancelable:true,composed:true ,detail : address ? address : []});
	    document.dispatchEvent(newEvent);
	})
});
function loginweb3(susses = null,errorcatch = null){
	// this.chainId = await window.CHAIN.WALLET.chainId();
	window.CHAIN.WALLET.enable()
	.then((address)=>{
		if (susses) {
			susses(address);
		}
	})
}
