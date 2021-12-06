<template>
  <div v-loading="loading">
    <div class="ATTADreamMaker-dom">
      <div class="MaskNetworkbox">
        <div
          class="MaskNetwork"
          @click="
            ATTAMakerVisible = true;
            test();">
          <el-dropdown trigger="click" @command="selectclick">
            <div class="flex">
              <svg-icon :svgType="'attaLogo'" class="svg-img"/>
              <p class="wordtitle">ATTA Dream Maker</p>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Create NFT</el-dropdown-item>
              <el-dropdown-item command="2">Create poster NFT</el-dropdown-item>
              <el-dropdown-item command="3">Create Co-NFT</el-dropdown-item>
              <el-dropdown-item command="4">NFT Hall</el-dropdown-item>
              <el-dropdown-item command="5">My NFTs</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="ConnectWalletbox">
        <div class="ConnectWallet flex" @click="ConnectWalletclick()">
          <svg-icon :svgType="'attaLogo'" class="svg-img"/>
          <p class="wordtitle">Connect Wallet</p>
        </div>
        <!-- 选择钱包插件 -->
        <el-dialog
          title="连接钱包"
          :visible.sync="ConnectWalletVisible"
          width="30%"
          :modal="false"
          custom-class="MaskNetwork-dialogbox"
          top="35vh"
        >
          <div class="walletbox" @click="checkwallclick(1)">
            <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
            <p>MetaMask</p>
          </div>
          <div class="walletbox" @click="checkwallclick(2)">
            <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
            <p>MetaMask</p>
          </div>
        </el-dialog>
        <el-dialog
          :title="loadingwallettitle"
          :visible.sync="ConnectWalletloading"
          width="30%"
          :modal="false"
          top="35vh"
          custom-class="MaskNetwork-dialogbox2"
        >
          <div class="useraddressbox flex">
            <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
            <div class="contentbox" v-if="checkwallet <= 0">
              <div class="contentbox-top flex">
                <p>MetaMask</p>
                <img src alt />
              </div>
              <div class="contentbox-bottom flex">
                <p>{{ shearaddress }}</p>
                <img src alt />
                <img src alt />
              </div>
            </div>
            <div class="content-loading" v-else>
              <p class="loading-p">{{ loadingwallettitle }}</p>
              <div class="loading-div">
                <svg-icon class="svg-class" :svgType="'loading'"/>
              </div>
            </div>
            <el-button
              v-if="checkwallet == 0"
              class="editbtn"
              @click="userwalletdialog()"
              >更改</el-button
            >
            <el-button v-else class="editbtn" @click="userwalletdialog()"
              >Retry</el-button
            >
          </div>
        </el-dialog>
      </div>
    </div>
    <!-- Create NFT 弹框 -->
    <div class="modalDom">
      <create-nft
        v-if="showCreateNftModal"
        @closeNftModal="closeNftModal"
        @SelectWalletfun="SelectWalletfun"
      ></create-nft>
    </div>
    <!-- Create Co-NFT 弹框 （已完成）-->
    <el-dialog
      title="Co-NFT instruction"
      :visible.sync="isshowCreateCoNFT"
      width="40%"
      :modal="false"
      top="35vh"
      custom-class="CreateCoNFT_css"
    >
      <div class="rule">
        <p>1. Go to the your friend's profile page</p>
        <p>2. Click the NFT module</p>
        <p>3. Click the button "Create a Co-NFT for him/her</p>
        <p>4. Then follow the steps to upload the basic info</p>
        <p>5. Tell him/her to accept the Co-NFT request</p>
        <p>6. Once your friend finished the minting process, you and your friend</p>
      </div>
    </el-dialog>
    <dream-maker v-if="nftsDom"></dream-maker>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
import CreateNft from "./createNft.vue";
import DreamMaker from "./components/dreamMaker/dreamMaker.vue";
export default {
  components: { SvgIcon, CreateNft,DreamMaker },
  data() {
    return {
      ATTAMakerVisible: false, //ATTA Dream Maker弹框控制
      ConnectWalletVisible: false, //选择钱包插件弹框控制
      ConnectWalletloading: false, // 钱包账户弹框控制
      loadingwallettitle: "账户", //钱包账户标题/选中钱包插件loading标题
      checkwallet: 0, //选择的钱包插件
      chainId: 0,
      loading: false,
      showCreateNftModal: false,
      address: "",
      shearaddress: "",
      isshowCreateCoNFT : false,//Create Co-NFT 弹框 显示隐藏控制
      nftsDom:false
    };
  },
  mounted() {
    console.log(localStorage.getItem("_grecaptcha"), "测试缓存");
    let leftdom = document.querySelector('[aria-label][role="navigation"]');
    let crdom = document.querySelector(".ATTADreamMaker-dom");
    leftdom.appendChild(crdom);
    // let maindom = document.querySelector("body");
    // const modals = document.querySelector(".modalDom");
    // maindom.appendChild(modals);


    // vue中接收的事件
    var event = document.createEvent("Event");
    event.initEvent("msgEventCallback", true, true);
    event.initEvent("switchaddressCallback", true, true); // detail是事件数据
    document.addEventListener("msgEventCallback", (event) => {
      this.jsaddress(event.detail);
    });
    document.addEventListener("switchaddressCallback", (event) => {
      if (event.detail.length > 0) {
        this.address = event.detail[0];
        this.shearaddress =this.address.substring(0, 7) + "******" +this.address.substr(this.address.length - 7);
      }
      this.ConnectWalletVisible = false;
      this.ConnectWalletloading = true;
      this.loadingwallettitle = "账户";
      this.checkwallet = "0";
    });

    this.appendDom();
    this.addClick();
  },
  methods: {
    showNftModal() {
      this.showCreateNftModal = true;
    },
    closeNftModal() {
      this.showCreateNftModal = false;
    },
    // 调用选择钱包弹框
    SelectWalletfun(){
      this.ConnectWalletVisible = true;
    },
    test() {
      console.log(window.CHAIN, "测试数据");
    },
    userwalletdialog() {
      this.ConnectWalletloading = false;
      this.ConnectWalletVisible = true;
    },
    // 选中钱包插件
    checkwallclick(type) {
      this.ConnectWalletVisible = false;
      this.ConnectWalletloading = true;
      this.loadingwallettitle = "Connect to MetaMask";
      this.checkwallet = type;
      const cEvt = new CustomEvent("switchaddress", { detail: true });
      document.dispatchEvent(cEvt);
    },
    // 点击链接钱包
    async ConnectWalletclick() {
      const cEvt = new CustomEvent("msgEvent", { detail: true });
      document.dispatchEvent(cEvt);
    },
    jsaddress(address) {
      if (address.length > 0) {
        this.address = address[0];
        this.shearaddress =
          this.address.substring(0, 7) +
          "******" +
          this.address.substr(this.address.length - 7);
        this.ConnectWalletloading = true;
      } else {
        this.address = "";
        this.ConnectWalletVisible = true;
      }
    },
    // 点击下拉框
    selectclick(type) {
      switch (type) {
        case '1':
          this.showNftModal();
          break;
        case '2':
          this.showNftModal();
          break;
        case '3':
          this.isshowCreateCoNFT = true;
          break;
        case '4':
          this.showNftModal();
          break;
        case '5':
          this.showNftModal();
          break;
        default:
          break;
      }
    },

    // 添加dom操作节点
    appendDom(){
      let self = this;
      let infoDom = document.querySelector('[aria-label="Profile timelines"]');
      if(infoDom){
        this.nftsDom = true;
        $(document).on('click','[aria-label="Profile timelines"]',function(e){
          let crdom = document.querySelector(".dream-maker");
          if(!crdom){
            self.nftsDom = false;
            setTimeout(()=>{
              self.nftsDom = true;
            },500)
          }
        })
      }else{
        this.nftsDom = false;
      }
    },
    // 左侧列表添加点击事件，判断是否需要开启nft列表
    addClick(){
      let self = this;
      let navdom = document.querySelector('[aria-label][role="navigation"]').getElementsByTagName('a');
      $(navdom).on('click',function(event){
        if(event.currentTarget && event.currentTarget.ariaLabel == 'Profile'){
          $(document).ready(function(){
            console.log(event.currentTarget.ariaLabel);
            //此时需要加载nft
            self.nftsDom = true;
          })
        }else{
          self.nftsDom = false;
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
}
.MaskNetworkbox,
.ConnectWalletbox {
  padding: 6px 14px;
  position: relative;
  transition-property: background-color, box-shadow;
  // transition-duration: 0.2s;
  .MaskNetwork,
  .ConnectWallet {
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    .svg-img {
      flex-shrink: 0;
    }
    .wordtitle {
      margin: 4px 16px 4px 20px;
      font-family: inherit;
      font-weight: 400;
      font-size: 20px;
      color: rgb(15, 20, 25);
    }
  }
}
.MaskNetworkbox:hover,
.ConnectWalletbox:hover {
  background: rgba(15, 20, 25, 0.1);
  border-radius: 9999px;
}
.MaskNetwork-dialogbox {
  padding: 32px 36px 16px;
  .walletbox {
    text-align: center;
    height: 151px;
    width: 165px;
    padding: 32px 8px;
    background-color: #f7f9fa;
    border-radius: 15px;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 20px;
    cursor: pointer;
    .svg-img {
      width: 45px;
      height: 45px;
      margin: 0 auto;
    }
    p {
      font-size: 16px;
      font-weight: normal;
      white-space: nowrap;
      margin-bottom: 8px;
    }
  }
}
.MaskNetwork-dialogbox2 {
  padding: 16px 32px 24px;
  .useraddressbox {
    padding: 16px 24px;
    margin-bottom: 16px;
    background-color: #f7f9fa;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    .svg-img {
      width: 48px;
      height: 48px;
    }
    .contentbox,
    .content-loading {
      font-size: 16px;
      margin-left: 8px;
      .contentbox-top,
      .contentbox-bottom {
        p {
          margin: 0;
          margin-right: 6px;
          font-weight: 400;
        }
        img {
          width: 16px;
          height: 16px;
          border: 1px solid black;
        }
      }
      .loading-p,
      .loading-div {
        margin: 0;
        margin-right: 6px;
        font-weight: 400;
      }
    }
    .editbtn {
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: rgb(26, 139, 216);
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
.MaskNetwork-dialogbox .el-dialog__header,
.MaskNetwork-dialogbox2 .el-dialog__header ,
.CreateCoNFT_css .el-dialog__header{
  border-bottom: 1px solid #919ca3;
}
</style>
