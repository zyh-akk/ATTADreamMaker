// 注册一个自定事件
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
// 钱包支付
document.addEventListener('paymentaddress', function(event){
	var web3 = new window.Web3(window.CHAIN.WALLET.provider());
	window.CHAIN.WALLET.chainId()
		.then(function (res) {
			let {orderNo,metadataIpfs,returnaddress,wallteaddress} = event.detail;
			let chainId = web3.utils.hexToNumber(res); 
			let setting_proof = contractSetting["dreammaker_minfnft"];
			let address = setting_proof[chainId].address; // 监听 网络切换 会 让 用户 处于 正确的网络，这里 只负责 配置 当前网络下正确的 合约地址
			var abiName = contractSetting['dreammaker_minfnft']['abi'];
			
			paymentexample = new web3.eth.Contract(abiName, address);  
			paymentexample.methods.mintNFT(returnaddress,metadataIpfs).send({ 
				from: wallteaddress
			})
			.then(function (res) {
				var newEvent = new CustomEvent('paymentaddressCallback', { bubbles:true,cancelable:true,composed:true ,detail : {orderNo,transactionHash : res.transactionHash,status : 2}});
			    document.dispatchEvent(newEvent);
			})
			.catch(function (error) {
				var newEvent = new CustomEvent('paymentaddressCallback', { bubbles:true,cancelable:true,composed:true });
			    document.dispatchEvent(newEvent);
			})
		});
});
// 钱包支付-多个
document.addEventListener('paymentsaddress', function(event){
	var web3 = new window.Web3(window.CHAIN.WALLET.provider());
	window.CHAIN.WALLET.chainId()
		.then(function (res) {
			let {orderNo,metadataIpfs,returnaddress,wallteaddress} = event.detail;
			let chainId = web3.utils.hexToNumber(res); 
			let setting_proof = contractSetting["dreammaker_minfnft"];
			let address = setting_proof[chainId].address; // 监听 网络切换 会 让 用户 处于 正确的网络，这里 只负责 配置 当前网络下正确的 合约地址
			var abiName = contractSetting['dreammaker_minfnft']['abi'];
			
			paymentexample = new web3.eth.Contract(abiName, address);  
			paymentexample.methods.batchMintNFT(returnaddress,metadataIpfs).send({ 
				from: wallteaddress
			})
			.then(function (res) {
				var newEvent = new CustomEvent('paymentsaddressCallback', { bubbles:true,cancelable:true,composed:true ,detail : {orderNo,transactionHash : res.transactionHash,status : 2}});
			    document.dispatchEvent(newEvent);
			})
			.catch(function (error) {
				var newEvent = new CustomEvent('paymentsaddressCallback', { bubbles:true,cancelable:true,composed:true });
			    document.dispatchEvent(newEvent);
			})
		});
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
