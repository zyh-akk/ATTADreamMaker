<template>
  <div class="create-nft-wrap">
    <el-dialog
      title="Your NFT info"
      :visible.sync="upload_dialog"
      :modal="false"
      custom-class="CreateNFTbox-css"
      top="30vh"
      @close="closeModal"
      :close-on-click-modal="false"
      v-loading="loading"
    >
      <div class="showinfodatabox">
        <span class="tips">User XXXXX created for you</span>
        <img class="imageurl_show" :src="base_url + JSON.parse(conftdataobject.nftContent).picturePath " alt="">
        <video autoplay class="imageurl_show" :src='base_url + JSON.parse(conftdataobject.nftContent).picturePath'></video>
        <p>Name:{{ JSON.parse(conftdataobject.nftContent).name}}</p>
        <p>Description:{{ JSON.parse(conftdataobject.nftContent).description }}</p>
        <p>Creator Wallet:{{conftdataobject.address ? conftdataobject.address.substring(0, 5) + "***" +conftdataobject.address.substr(conftdataobject.address.length - 4) : ""}}</p>
        <p>Note: This NFT is a Co-NFT, twitter user XXXXX created for you. You can accept it if you like it.</p>
        <div class="btns">
          <el-button v-if="!modal2status" type="primary" @click="topay2">Accept</el-button>
          <el-button v-else type="primary" @click="getnftjl">Mint now</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
export default {
  components: { SvgIcon },
  props: ["address", "userInfo","modal2status","conftdataobject"],
  data() {
    return {
      upload_dialog: true,
      file: {},
      loading: false,
      base_url : process.env.VUE_APP_BASEURL,
    };
  },
  mounted() {
    // vue中接收的事件
    var event = document.createEvent("Event");
    event.initEvent("paymentsaddressCallback", true, true); // detail是事件数据
    document.addEventListener("paymentsaddressCallback", (event) => {
      if (event.detail) {
        this.sussescasting(event.detail);
      }else{
        this.loading = false;
      }
    });
  },

  methods: {
    closeModal() {
      this.$emit("closeNftModal2", true);
    },

    isVideo(path) {
      return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    },

    isImage(path) {
      return /\.(xbm|tif|pjp|svgz|jpg|jpeg|ico|tiff|gif|svg|jfif|webp|png|bmp|pjpeg|avif)/.test(
        path
      );
    },
    // 支付
    async getnftjl(){
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/mint_record/${this.conftdataobject.orderNo}`;
      const res = await fetch(getNfts);
      const listData = await res.json();
      let arr = listData.data;
      let str1 = [],str2 = [],orderNo = "";
      arr.forEach(item => {
        str1.push(item.address);
        str2.push(item.metadataIpfs);
        orderNo = item.orderNo;
      });
      const cEvt = new CustomEvent("paymentsaddress", {
        detail: { orderNo, metadataIpfs : str2.toString(), returnaddress : str1 ,wallteaddress : this.address},
      });
      document.dispatchEvent(cEvt);
      this.loading = true;
    },
    async sussescasting(obj){
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/mint`;
      const res = await fetch(getNfts, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const listData = await res.json();
      this.loading = false;
      if (listData.code == 0) {
        alert("铸造nft成功");
      }
      this.closeModal();
    },
    async topay2(){
      if (!this.address) {
        alert("请先连接钱包");
      }
      let {id:tokenId,orderNo} = this.conftdataobject;
      let obj = {
        address : this.address,
        status : 1,
        tokenId,orderNo
      }
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/accept`;
      const res = await fetch(getNfts, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const listData = await res.json();
      this.loading = false;
      if (listData.code == 0) {
        alert("铸造nft成功");
        this.closeModal();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader {
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  width: 175px;
  height: 175px;
  margin: 30px auto;
  position: relative;
  .svg-class {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 48px;
    height: 48px;
  }
}
.CreateNFTbox-css {
  .demo-input-suffix {
    margin: 20px;
  }
  .btns,
  .uploadbox {
    text-align: center;
  }
}
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
  margin-bottom: 20px;
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
.checkwalletcss {
  background-color: rgba(70, 171, 238, 0.2);
}
.imageurl_show {
  width: 30%;
  margin-left: 35%;
}
.showinfodatabox{
  position: relative;
  .tips{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #409eff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 0px 5px 5px 0px;
  }
}
</style>
<style lang="css">
.CreateNFTbox-css .el-dialog__header {
  border-bottom: 1px solid #919ca3;
}
</style>
