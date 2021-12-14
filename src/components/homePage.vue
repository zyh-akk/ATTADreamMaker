<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <a target="_blank" href="https://twitter.com">twitter</a>
    </div>
    <button @click="topay">支付</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      loading: true,
      joke: ''
    }
  },
  mounted () {
    localStorage.setItem("lastname01", "扩展的页面");
    console.log(window.CHAIN,'测试数据');
    axios.get(
      // eslint-disable-next-line quote-props
      // eslint-disable-next-line quotes
      "https://icanhazdadjoke.com/", { headers: { Accept: 'application/json' } }
    )
      .then(res => {
        this.joke = res.data.joke
        this.loading = false;
      });
  },
  methods:{
    againTest (){
      const color = '#3aa757';
      //  chrome.runtime.onInstalled.addListener(function() {
      chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log('The color is green.');
      });
      // });

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log('color', color);
        chrome.tabs.executeScript(
          tabs[0].id,
          { code: 'document.body.style.backgroundColor = "' + color + '";' });
      });

      axios.get(
        'https://icanhazdadjoke.com/',
        { headers: { Accept: 'application/json' } }
      )
        .then(res => {
          this.joke = res.data.joke
          this.loading = false;
        });

      console.log('跳转', this.$route);
    },
    topay(){
      debugger
      console.log(window.Web3);
      var web3 = new window.Web3(window.CHAIN.WALLET.provider());
      window.CHAIN.WALLET.chainId()
      .then(function (res) {
        let {tokenId,metadataIpfs,returnaddress} = event.detail;
        metadataIpfs = 'https://ipfs.io/ipfs/' + metadataIpfs
        let chainId = web3.utils.hexToNumber(res); 
        let setting_proof = chainSetting["contractSetting"]["dreammaker_minfnft"];
        let address = setting_proof[chainId].address; // 监听 网络切换 会 让 用户 处于 正确的网络，这里 只负责 配置 当前网络下正确的 合约地址
        var abiName = contractSetting['dreammaker_minfnft']['abi'];
        
        paymentexample = new web3.eth.Contract(abiName, address);  
        
        paymentexample.methods.safeMint(tokenId,returnaddress,metadataIpfs).send({ 
          from: returnaddress
        })
        .then(function (res) {
          debugger
          // tips(self.chEnTextHtml[self.lang].tipsjs4);
          // self.getNftLists();
        });
        // setTimeout(() => {
        // 	tips(self.chEnTextHtml[self.lang].tipsjs5);
        // 	setTimeout(function(){
        // 		cancelMobile();
        // 	},1800);
        // }, 1000);
      });
    }
  }
}
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
