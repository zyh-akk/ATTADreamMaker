<template>
  <div class="create-nft-wrap">
    <el-dialog
      title="Upload your file"
      width="30%"
      :visible.sync="upload_dialog"
      :modal="false"
      custom-class="CreateNFTbox-css"
      top="35vh"
      @close="closeModal"
    >
      <!-- 上传弹框 -->
      <div v-if="nowStep == 1">
        <el-upload
          class="avatar-uploader"
          ref="upload"
          accept="image/video"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleSuccessFile"
          :on-change="onChange"
          :auto-upload="false"
          :data="addlist"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button type="primary" @click="uploaddialogclick">Next</el-button>
      </div>
      <!-- 上传文件弹框 -->
      <div  v-if="nowStep == 2">
        <div class="demo-input-suffix">
          <span>Name :</span>
          <el-input placeholder v-model="input1_info"></el-input>
        </div>
        <div class="demo-input-suffix">
          <span>Description :</span>
          <el-input type="textarea" :rows="3" placeholder v-model="input2_info"></el-input>
        </div>
        <div class="btns">
          <el-button type="primary">Previous</el-button>
          <el-button type="primary" @click="SelectWalletclick">Next</el-button>
        </div>

      </div>
    </el-dialog>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
export default {
  components: { SvgIcon },
  data() {
    return {
      addlist: null,
      imageUrl: "",
      upload_dialog: true,
      info_dialog: false,
      input1_info: "",
      input2_info: "",
      uploadUrl: '',
      file: {},
      nowStep : 1,
    };
  },
  mounted() {
    this.uploadUrl = process.env.VUE_APP_BASEURL + 'v2/twitter/nft/upload'
  },

  methods: {
    closeModal() {
      this.$emit("closeNftModal", true);
    },

    onChange(file, fileList) {
      var _this = this;
      var event = event || window.event;
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
    handleSuccessFile(res, file, fileList){
      console.log(res, file, fileList,'-----');
      this.info_dialog = true;
      this.upload_dialog = false;
      this.nowStep = 2;
    },

    // 调用选择钱包弹框
    SelectWalletclick() {
      this.upload_dialog = false;
      this.$emit("SelectWalletfun", true);
    },
    // 上传弹框 下一步
    uploaddialogclick() {
      this.$refs.upload.submit();
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
.CreateNFT-info-css {
  .demo-input-suffix {
    margin: 20px;
  }
  .btns {
    text-align: center;
  }
}
</style>
<style lang="css">
.CreateNFTbox-css .el-dialog__header,
.CreateNFT-info-css .el-dialog__header {
  border-bottom: 1px solid #919ca3;
}
.CreateNFTbox-css .el-dialog__body {
  text-align: center;
}
</style>
