<template>
  <div v-loading="loading">
    <div class="ATTADreamMaker-dom">
      <div class="MaskNetworkbox">
        <div
          class="MaskNetwork"
          @click="
            ATTAMakerVisible = true;
            test();
          "
        >
          <el-dropdown trigger="click" @command="selectclick">
            <div class="flex">
              <svg-icon :svgType="'attaLogo'" class="svg-img" />
              <p class="wordtitle">ATTA Dream Maker</p>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Create NFT</el-dropdown-item>
              <el-dropdown-item command="2">Create poster NFT</el-dropdown-item>
              <el-dropdown-item command="3">Create Co-NFT</el-dropdown-item>
              <!-- <el-dropdown-item command="4">NFT Hall</el-dropdown-item> -->
              <el-dropdown-item command="5">My NFTs</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="ConnectWalletbox">
        <div class="ConnectWallet flex" @click="ConnectWalletclick()">
          <svg-icon :svgType="'attaLogo'" class="svg-img" />
          <p class="wordtitle">
            {{ shearaddress ? shearaddress : "Connect Wallet" }}
          </p>
        </div>
        <!-- 选择钱包插件 -->
        <el-dialog
          title="连接钱包"
          :visible.sync="ConnectWalletVisible"
          :modal="false"
          custom-class="MaskNetwork-dialogbox"
          top="35vh"
        >
          <div class="walletbox" @click="checkwallclick(1)">
            <svg-icon
              :svgType="'mateMask'"
              class="svg-img"
              :svgW="48"
              :svgH="48"
            />
            <p>MetaMask</p>
          </div>
          <!-- <div class="walletbox" @click="checkwallclick(2)">
            <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
            <p>MetaMask</p>
          </div>-->
        </el-dialog>
        <el-dialog
          :title="loadingwallettitle"
          :visible.sync="ConnectWalletloading"
          :modal="false"
          top="35vh"
          custom-class="MaskNetwork-dialogbox2"
        >
          <div class="useraddressbox flex">
            <svg-icon
              :svgType="'mateMask'"
              class="svg-img"
              :svgW="48"
              :svgH="48"
            />
            <div class="contentbox" v-if="checkwallet <= 0">
              <div class="contentbox-top flex">
                <p>MetaMask</p>
                <!-- <img src alt /> -->
              </div>
              <div class="contentbox-bottom flex">
                <p>{{ shearaddress }}</p>
                <!-- <img src alt />
                <img src alt />-->
              </div>
            </div>
            <div class="content-loading" v-else>
              <p class="loading-p">{{ loadingwallettitle }}</p>
              <div class="loading-div">
                <svg-icon class="svg-class" :svgType="'loading'" />
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
        :userInfo="userInfo"
        :conftfun="conftfun"
      ></create-nft>
    </div>
    <!-- Co-NFT 弹框 -->
    <div class="modalDom">
      <conft-accept
        v-if="showCreateNftModal2"
        @closeNftModal2="closeNftModal2"
        :userInfo="userInfo"
        :modal2status="modal2status"
        :conftdataobject="conftdataobject"
        :address="address"
      ></conft-accept>
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
        <p>
          6. Once your friend finished the minting process, you and your friend
        </p>
      </div>
    </el-dialog>
    <dream-maker
      v-if="nftsDom"
      :userInfo="userInfo"
      @createNftAccept="createNftAccept"
    ></dream-maker>
    <image-edit
      v-if="showImageEditModal"
      :userInfo="userInfo"
      @closeImageEdit="closeImageEdit"
    ></image-edit>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
import CreateNft from "./components/createNft.vue";
import ConftAccept from "./components/conftaccept.vue";
import DreamMaker from "./components/dreamMaker/dreamMaker.vue";
import ImageEdit from "./components/imageEdit/imageEdit.vue";
import { twitterInfo,getUserInfo,getFriendUserInfo } from "./utils/utils";
export default {
  components: { SvgIcon, CreateNft, ConftAccept, DreamMaker, ImageEdit },
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
      showCreateNftModal2: false,
      address: "",
      shearaddress: "",
      isshowCreateCoNFT: false, //Create Co-NFT 弹框 显示隐藏控制
      nftsDom: false,
      Returnfromsubassembly: false, //从子组件过来，引用选择钱包弹框
      infoshow_dialog: false, //你的nft信息展示弹框
      userInfo: {}, //推特保存的用户信息
      showImageEditModal: false, //图片编辑
      conftfun: false, // 是否走吊起支付和mint接口
      modal2status: false,
      conftdataobject: {},
    };
  },
  mounted() {
    // 判断页面刷新还是重载
    if (window.performance.navigation.type) {
      console.log("页面被刷新或者重载")
      // 页面刷新重载的时候获取用户名，有用户名就是已登录，没有就是未登录
      let uesrNameDom = document.querySelector('[aria-label="Account menu"][data-testid="SideNav_AccountSwitcher_Button"]');
      if(uesrNameDom){
        this.initializationDom();
      }else{
        console.log('不是登录页面');
      }
    }
    
  },
  methods: {
    initializationDom(){
      getFriendUserInfo()
      .then((res)=>{

      }).catch((err)=>{

      })
      getUserInfo()
      .then(res=>{
        this.getUserInfo(res)
      })
      this.getDom();
    },
     getRequest() {
      let data = twitterInfo('https://api.twitter.com/1.1/statuses/user_timeline.json?cursor=-1&screen_name=fanjiaxiaoxiong&skip_status=true&include_user_entities=false');
    },
    getUserInfo(userName){
      twitterInfo(`https://api.twitter.com/2/users/by/username/${userName}`)
      .then(res=>{
        this.userInfo = res.data;
      })
    },
    getDom() {
      // 获取10次，页面还没有加载该dom就不在创建了，避免死循环
      if (this.appendDomIndex > 10) return;
      this.appendDomIndex = this.appendDomIndex + 1;
      let leftdom = document.querySelector('[aria-label][role="navigation"]');
      if (!leftdom) {
        setTimeout(() => {
          this.getDom();
        }, 1000);
      } else {
        let crdom = document.querySelector(".ATTADreamMaker-dom");
        leftdom.appendChild(crdom);
        // let maindom = document.querySelector("body");
        // const modals = document.querySelector(".modalDom");
        // maindom.appendChild(modals);
        let self = this;

        // vue中接收的事件
        var event = document.createEvent("Event");
        event.initEvent("msgEventCallback", true, true);
        event.initEvent("switchaddressCallback1", true, true); // detail是事件数据
        document.addEventListener("msgEventCallback", (event) => {
          this.jsaddress(event.detail);
        });
        document.addEventListener("switchaddressCallback1", (event) => {
          if (event.detail.length > 0) {
            this.address = event.detail[0];
            this.shearaddress =
              this.address.substring(0, 5) +
              "***" +
              this.address.substr(this.address.length - 4);
          }
          this.ConnectWalletVisible = false;
          this.ConnectWalletloading = true;
          this.loadingwallettitle = "账户";
          this.checkwallet = "0";
        });

        this.appendDomIndex = 0;
        this.appendDom();
        this.addClick();
        if (localStorage.getItem("attadreammaker_wallte")) {
          let str = localStorage.getItem("attadreammaker_wallte");
          this.address = str;
          this.shearaddress =
            str.substring(0, 5) + "***" + str.substr(str.length - 4);
        }
      }
    },
    closeImageEdit() {
      this.showImageEditModal = false;
    },
    showNftModal() {
      this.showCreateNftModal = true;
    },
    showImageModal() {
      this.showImageEditModal = true;
    },
    closeNftModal() {
      this.conftfun = false;
      this.showCreateNftModal = false;
    },
    closeNftModal2() {
      this.showCreateNftModal2 = false;
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
      const cEvt = new CustomEvent("switchaddress", {
        detail: { Callbackname: "switchaddressCallback1" },
      });
      document.dispatchEvent(cEvt);
    },
    // 点击链接钱包
    ConnectWalletclick() {
      const cEvt = new CustomEvent("msgEvent", { detail: true });
      document.dispatchEvent(cEvt);
    },
    jsaddress(address) {
      if (address.length > 0) {
        this.address = address[0];
        this.shearaddress =
          this.address.substring(0, 5) +
          "***" +
          this.address.substr(this.address.length - 4);
        this.ConnectWalletloading = true;
        localStorage.setItem("attadreammaker_wallte", address[0]);
      } else {
        this.address = "";
        this.ConnectWalletVisible = true;
        localStorage.setItem("attadreammaker_wallte", "");
      }
    },
    // 点击下拉框
    selectclick(type) {
      switch (type) {
        case "1":
          this.showNftModal();
          break;
        case "2":
          this.showImageModal();
          break;
        case "3":
          this.isshowCreateCoNFT = true;
          break;
        // case '4':
        //   this.showNftModal();
        //   break;
        case "5":
          this.jumppage();
          break;
        default:
          break;
      }
    },

    // 添加dom操作节点
    appendDom() {
      let self = this;
      let infoDom = document.querySelector(
        'nav.r-qklmqi[aria-label][role="navigation"]'
      );
      if (infoDom) {
        this.nftsDom = true;
        $(document).on(
          "click",
          'nav.r-qklmqi[aria-label][role="navigation"]',
          function (e) {
            let crdom = document.querySelector(".dream-maker");
            if (!crdom) {
              self.nftsDom = false;
              setTimeout(() => {
                self.nftsDom = true;
              }, 500);
            }
          }
        );
      } else {
        this.nftsDom = false;
      }
    },
    // 左侧列表添加点击事件，判断是否需要开启nft列表
    addClick() {
      let self = this;
      let queryDom = document.querySelector(
        'nav.r-1habvwh[aria-label][role="navigation"]'
      );

      if (this.appendDomIndex > 10) return;
      this.appendDomIndex = this.appendDomIndex + 1;

      if (!queryDom) {
        setTimeout(() => {
          self.addClick();
        }, 1000);
      } else {
        let navdom = document
          .querySelector('nav.r-1habvwh[aria-label][role="navigation"]')
          .getElementsByTagName("a");
        $(navdom).on("click", function (event) {
          if (
            event.currentTarget &&
            (event.currentTarget.ariaLabel == "Profile" ||
              event.currentTarget.ariaLabel == "个人资料")
          ) {
            $(document).ready(function () {
              console.log(event.currentTarget.ariaLabel);
              //此时需要加载nft
              self.nftsDom = true;
            });
          } else {
            self.nftsDom = false;
          }
        });
      }
    },
    // my nfts 跳转
    jumppage() {},
    createNftAccept(type, obj) {
      //type取值：createNft  accept  mint  分别对应不同的按钮功能
      if (type == "createNft") {
        this.conftfun = true;
        this.showCreateNftModal = true;
      }
      if (type == "accept") {
        this.modal2status = false;
        this.conftdataobject = obj;
        this.showCreateNftModal2 = true;
      }
      if (type == "mint") {
        this.modal2status = true;
        this.conftdataobject = obj;
        this.showCreateNftModal2 = true;
      }
    },
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
.infoshow_dialog_css {
  p {
    padding-left: 20px;
  }
  .btns {
    text-align: center;
  }
}
</style>
<style lang="css">
.MaskNetwork-dialogbox .el-dialog__header,
.MaskNetwork-dialogbox2 .el-dialog__header,
.CreateCoNFT_css .el-dialog__header,
.infoshow_dialog_css .el-dialog__header {
  border-bottom: 1px solid #919ca3;
}
</style>
