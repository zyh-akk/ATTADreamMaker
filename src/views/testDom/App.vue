<template>
  <div class="ATTADreamMaker-dom">
    <div class="MaskNetworkbox">
      <div class="MaskNetwork" @click="ATTAMakerVisible = true;test()">
         <el-dropdown trigger="click">
           <div class="flex">
            <svg-icon :svgType="'attaLogo'"/>
            <p class="wordtitle">ATTA Dream Maker</p>
           </div>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Create NFT</el-dropdown-item>
              <el-dropdown-item>Create poster NFT</el-dropdown-item>
              <el-dropdown-item>Create Co-NFT</el-dropdown-item>
              <el-dropdown-item>NFT Hall</el-dropdown-item>
              <el-dropdown-item>My NFTs</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="ConnectWalletbox">
      <div class="ConnectWallet flex" @click="ConnectWalletloading = true">
        <svg-icon :svgType="'attaTextLogo'"/>
        <p class="wordtitle">Connect Wallet</p>
      </div>
      <!-- 选择钱包插件 -->
      <el-dialog
        title="连接钱包"
        :visible.sync="ConnectWalletVisible"
        width="30%"
        :modal="false"
        custom-class="MaskNetwork-dialogbox"
        top="40vh"
      >
        <div class="walletbox" @click="checkwallclick(1)">
          <svg-icon :svgType="'mateMask'"/>
          <p>MetaMask</p>
        </div>
        <div class="walletbox" @click="checkwallclick(2)">
          <svg-icon :svgType="'mateMask'"/>
          <p>MetaMask</p>
        </div>
      </el-dialog>
      <el-dialog
        :title="loadingwallettitle"
        :visible.sync="ConnectWalletloading"
        width="30%"
        :modal="false"
        top="40vh"
        custom-class="MaskNetwork-dialogbox2"
      >
        <div class="useraddressbox flex">
          <svg-icon :svgType="'mateMask'"/>
          <div class="contentbox" v-if="checkwallet == 0">
            <div class="contentbox-top flex">
              <p>MetaMask</p>
              <img src="" alt="">
            </div>
            <div class="contentbox-bottom flex">
              <p>address地址</p>
              <img src="" alt="">
              <img src="" alt="">
            </div>
          </div>
          <div class="content-loading" v-else>
            <p class="loading-p">{{loadingwallettitle}}</p>
            <div class="loading-div">
              Initializing…
            </div>
          </div>
          <el-button v-if="checkwallet == 0" class="editbtn" @click="userwalletdialog()">更改</el-button>
          <el-button v-else class="editbtn" @click="userwalletdialog()">Retry</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import '../../../public/js/web3/web3.min.js'
import '../../../public/js/web3/web3-provider.min.js'
import '../../../public/js/web3/chainSetting.js'
import '../../../public/js/web3/chainProvider.js'
import SvgIcon from '@/components/svgIcon.vue'
export default {
  components: { SvgIcon },
  data() {
    return {
      ATTAMakerVisible: false,//ATTA Dream Maker弹框控制
      ConnectWalletVisible: false,//选择钱包插件弹框控制
      ConnectWalletloading: false, // 钱包账户弹框控制
      loadingwallettitle : '账户',//钱包账户标题/选中钱包插件loading标题
      checkwallet : 0,//选择的钱包插件
    };
  },
  mounted() {
    console.log(localStorage.getItem("_grecaptcha"),'测试缓存');
    let leftdom = document.querySelector('[aria-label][role="navigation"]');
    let crdom = document.querySelector(".ATTADreamMaker-dom");
    console.log(leftdom);
    leftdom.appendChild(crdom);
  },
  methods: {
    test(){

    console.log(window.CHAIN,'测试数据');
    },
    userwalletdialog(){
      this.ConnectWalletloading = false;
      this.ConnectWalletVisible = true;
    },
    // 选中钱包插件
    checkwallclick(type){
      this.ConnectWalletVisible = false;
      this.ConnectWalletloading = true;
      this.loadingwallettitle = 'Connect to MetaMask';
      this.checkwallet = type;
    }
  },
};
</script>

<style lang="scss" scoped>
.flex{
  display: flex;
  align-items: center;
}
.MaskNetworkbox,.ConnectWalletbox{
  padding: 6px 14px;
  position: relative;
  transition-property: background-color, box-shadow;
  // transition-duration: 0.2s;
  .MaskNetwork,.ConnectWallet{
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    svg{
      flex-shrink: 0;
    }
    .wordtitle{
      margin: 4px 16px 4px 20px;
      font-family: inherit;
      font-weight: 400;
      font-size: 20px;
      color: rgb(15, 20, 25);
    }
  }
}
.MaskNetworkbox:hover,.ConnectWalletbox:hover{
  background: rgba(15, 20, 25, 0.1);
  border-radius: 9999px;
}
.MaskNetwork-dialogbox{
  padding: 32px 36px 16px;
  .walletbox{
    text-align: center;
    height: 151px;
    width: 165px;
    padding: 32px 8px;
    background-color: #F7F9FA;
    border-radius: 15px;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 20px;
    cursor: pointer;
    svg{
      width: 45px;
      height: 45px;
    }
    p{
      font-size: 16px;
      font-weight: normal;
      white-space: nowrap;
      margin-bottom: 8px;
    }
  }
}
.MaskNetwork-dialogbox2{
  padding: 16px 32px 24px;
  .useraddressbox{
    padding: 16px 24px;
    margin-bottom: 16px;
    background-color: #F7F9FA;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    svg{
      width: 48px;
      height: 48px;
    }
    .contentbox,.content-loading{
      font-size: 16px;
      margin-left: 8px;
      .contentbox-top,.contentbox-bottom{
        p{
          margin: 0;
          margin-right: 6px;
          font-weight: 400;
        }
        img{
          width: 16px;
          height: 16px;
          border: 1px solid black;
        }
      }
      .loading-p,.loading-div{
        margin: 0;
        margin-right: 6px;
        font-weight: 400;
      }
    }
    .editbtn{
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: rgb(26,139,216);
      min-width: 64px;
      height: 30px;
      padding: 4px 10px;
      color: #fff;
      border-radius: 500px;
    }
  }
}
</style>
<style lang="css">
  .MaskNetwork-dialogbox .el-dialog__header,.MaskNetwork-dialogbox2 .el-dialog__header{
    border-bottom: 1px solid #919ca3;
  }
</style>
