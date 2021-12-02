<template>
  <div class="create-nft-wrap" v-show="showUploadModal">
    <i class="el-icon-close" @click="showUploadModal=false"></i>
    <el-dialog
        title="loadingwallettitle"
        width="30%"
        :visible="true"
        :modal="false"
        custom-class="MaskNetwork-dialogbox2"
      >
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-dialog>
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
      imageUrl: '',
      showUploadModal: true
    };
  },
  mounted(){

  },

  methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss" scoped>
.create-nft-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 700px;
  height: 300px;
  z-index: 9999;
  background: rgba($color: #000000, $alpha: 0.8);
  transform: translate(-50%,-50%);
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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

</style>
