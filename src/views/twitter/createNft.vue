<template>
  <div class="create-nft-wrap">
    <el-dialog
      title="Upload your file"
      :visible.sync="upload_dialog"
      :modal="false"
      custom-class="CreateNFTbox-css"
      top="30vh"
      @close="closeModal"
    >
      <!-- 上传弹框 -->
      <div v-if="nowStep == 1" class="uploadbox">
        <el-upload
          class="avatar-uploader"
          ref="upload"
          accept="image/*, video/*"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleSuccessFile"
          :on-change="onChange"
          :auto-upload="false"
          :data="addlist"
          v-loading="loading"
          :on-error='handleErrorFile'
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button type="primary" :disabled='loading' @click="uploaddialogclick">Next</el-button>
      </div>
      <!-- 上传文件弹框 -->
      <div v-if="nowStep == 2">
        <div class="demo-input-suffix">
          <span>Name :</span>
          <el-input placeholder v-model="input1_info"></el-input>
        </div>
        <div class="demo-input-suffix">
          <span>Description :</span>
          <el-input type="textarea" :rows="3" placeholder v-model="input2_info"></el-input>
        </div>
        <div class="btns">
          <el-button type="primary" @click="nowStep=1">Previous</el-button>
          <el-button type="primary" @click="nowStep=3">Next</el-button>
        </div>
      </div>
      <!-- 选择钱包弹框 -->
      <div v-if="nowStep == 3">
        <div :class="ischeckwallet == '1' ? 'checkwalletcss walletbox' : 'walletbox'" @click="checkwallet(1)">
        <!-- <div class="walletbox" @click="checkwallclick(1)"> -->
          <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
          <p>MetaMask</p>
        </div>
        <!-- <div :class="ischeckwallet == '2' ? 'checkwalletcss walletbox' : 'walletbox'" @click="checkwallet(2)">
          <svg-icon :svgType="'mateMask'" class="svg-img" :svgW='48' :svgH='48'/>
          <p>MetaMask</p>
        </div> -->
        <div class="btns">
          <el-button type="primary" @click="nowStep=2">Previous</el-button>
          <el-button type="primary" @click="SelectWalletclick">Next</el-button>
        </div>
      </div>
      <!-- Your NFT info 弹框-->
      <div v-if="nowStep == 4">
        <img class="imageurl_show" :src="imageUrl" alt="">
        <p>Name:{{input1_info}}</p>
        <p>Description:{{input2_info}}</p>
        <p>Wallet:{{addressinfo}}</p>
        <div class="btns">
          <el-button type="primary" @click="nowStep=3">Previous</el-button>
          <el-button type="primary" @click="topay">Next</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
import Web3 from 'web3'
export default {
  components: { SvgIcon },
  props:['address','userInfo'],
  data() {
    return {
      addlist: null,
      imageUrl: "",
      upload_dialog: true,
      input1_info: "",
      input2_info: "",
      uploadUrl: '',
      file: {},
      nowStep: 1,
      loading:false,
      ischeckwallet : 0,
      addressinfo : '',
      previewImgUrl: '',
      picturePath : "",
      sourceFileIpfs : '',
      returnaddress : "",
      metadataIpfs : "",
      tokenId : "",
    };
  },
  mounted() {
    setTimeout(()=>{
      console.log('引入web3');
      console.log(new Web3());
    },3000)
    this.uploadUrl = process.env.VUE_APP_BASEURL + 'v2/twitter/nft/upload';
    // vue中接收的事件
    var event = document.createEvent("Event");
    event.initEvent("switchaddressCallback2", true, true); // detail是事件数据
    document.addEventListener("switchaddressCallback2", (event) => {
      if (event.detail.length > 0) {
        this.addressinfo = event.detail[0];
        this.createnft();
      }
    });
  },

  methods: {
    closeModal() {
      this.$emit("closeNftModal", true);
    },

    onChange(file, fileList) {
      var _this = this;
      var event = event || window.event;
      if (fileList.length && fileList[0].response) {
        this.picturePath = fileList[0].response.data.fileUri;
        this.sourceFileIpfs = fileList[0].response.data.ipfsUri;
      }
      if (!event.target.files) {
        return;
      }
      this.previewImgUrl=''
      var file = event.target.files[0];
      var reader = new FileReader();
      this.file = file
      console.log(file);
      //转base64
      reader.onload = function (e) {
        _this.imageUrl = e.target.result //将图片路径赋值给src
      }
      reader.readAsDataURL(file);
    },
    handleErrorFile(res, file, fileList){
      console.log(res, file, fileList);
      this.loading=false
    },
    handleSuccessFile(res, file, fileList) {
      this.loading=false
      console.log(res);
      if (res.data) {
        this.previewImgUrl = res.data.fileUri
      }
      this.nowStep = 2;
    },
    // 调用选择钱包弹框
    SelectWalletclick() {
      if (this.ischeckwallet == 0) {
        alert('请选择钱包');
        return;
      }
      const cEvt = new CustomEvent("switchaddress", { detail: {Callbackname : 'switchaddressCallback2'}  });
      document.dispatchEvent(cEvt);
    },
    // 上传弹框 下一步
    uploaddialogclick() {
      if (JSON.stringify(this.file) == '{}') {
        alert('请先上传图片！');
        return;
      }
      if (this.previewImgUrl) {
        this.nowStep = 2;
        return
      }
      this.loading=true
      this.$refs.upload.submit();
    },
    // 点击选中钱包
    checkwallet(type){
      this.ischeckwallet = type;
    },
    // 支付
    topay(){
      if (!this.input1_info || !this.input2_info || !this.imageUrl) {
        alert('请填写完整信息');
      }
      let {tokenId,metadataIpfs,returnaddress} = this;
      const cEvt = new CustomEvent("paymentaddress", { detail: {tokenId,metadataIpfs,returnaddress}  });
      document.dispatchEvent(cEvt);
    },
    // 创建nft
    async createnft(){
      let obj = {
        address : this.addressinfo,
        description : this.input2_info,
        name : this.input1_info,
        mintUser : this.userInfo.identity_id,
        receiveUser : this.userInfo.identity_id,
        picturePath : this.picturePath,
        sourceFileIpfs : this.sourceFileIpfs,
        type : 0,
      };
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/create_nft`;
      const res = await fetch(getNfts, {
        method: 'POST', 
        body: JSON.stringify(obj),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      const listData = await res.json();
      const artList = listData.data;
      this.returnaddress = artList[0].address;
      this.metadataIpfs = artList[0].metadataIpfs;
      this.tokenId = artList[0].tokenId;
      this.nowStep = 4;
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
  .btns,.uploadbox {
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
.checkwalletcss{
  background-color: rgba(70, 171, 238, 0.2);
}
.imageurl_show{
  width: 30%;
  margin-left: 35%;
}
</style>
<style lang="css">
.CreateNFTbox-css .el-dialog__header {
  border-bottom: 1px solid #919ca3;
}
</style>
