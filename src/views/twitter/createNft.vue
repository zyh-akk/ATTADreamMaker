<template>
  <div class="create-nft-wrap">
    <el-dialog
      title="Upload your file"
      width="30%"
      :visible="true"
      :modal="false"
      @close="closeModal"
      custom-class="CreateNFTbox-css"
    >
      <el-upload
        class="avatar-uploader"
        action=uploadUrl
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
        <svg-icon class="svg-class" :svgType="'add'" :svgW='48' :svgH='48'/>
        <!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
      </el-upload>
      <el-button type="primary">Next</el-button>
    </el-dialog>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon.vue";
export default {
  components: { SvgIcon },
  data() {
    return {
      imageUrl: "",
      uploadUrl: ''
    };
  },
  mounted() {
    this.uploadUrl = process.env.VUE_APP_BASEURL + '/v2/twitter/nft/upload'
  },

  methods: {
    closeModal() {
      this.$emit("closeNftModal", true);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      debugger;
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },
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
.avatar-uploader{
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  width: 175px;
  height: 175px;
  margin: 30px auto;
  position: relative;
  .svg-class{
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
</style>
<style lang="css">
.CreateNFTbox-css .el-dialog__header{
  border-bottom: 1px solid #919ca3;
}
.CreateNFTbox-css .el-dialog__body{
  text-align: center;
}
</style>
