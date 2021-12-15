<template>
  <div class="image-nft">
    <!-- 上传文件弹框 -->
    <el-dialog title="Upload your file" width="50vw" :close-on-click-modal="false" :visible.sync="imagesDialog" :modal="false" custom-class="CreateNFTbox-css" top="35vh" @close="closeModal">
      <!-- 图片上传部分 -->
      <div v-show="imagesStep == 1">
        <el-upload class="avatar-uploader" accept="image/*" action="" :show-file-list="false" :on-change="onChange" :auto-upload="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <!-- 填写内容 -->
      <div v-show="imagesStep == 2">
        <div class="demo-input-suffix">
          <span>Name :</span>
          <el-input placeholder v-model="input1_info"></el-input>
        </div>
        <div class="demo-input-suffix">
          <span>Description :</span>
          <el-input type="textarea" :rows="3" placeholder v-model="input2_info"></el-input>
        </div>
      </div>
        <!-- 图片编辑部分 -->
      <div v-show="imagesStep == 3" v-loading="loading" class="image-edit">
        <div id="tui-image-editor"></div>
        <div class="btns">
          <el-button v-if="imagesStep > 1" type="primary" @click="stepPrevious">Previous</el-button>
          <el-button type="primary" @click="nextStep">Next</el-button>
        </div>
      </div>
      <!-- 选择钱包弹框 -->
      <div v-if="imagesStep == 4" v-loading="loading">
        <div :class="ischeckwallet ? 'checkwalletcss walletbox' : 'walletbox'"
          @click="ischeckwallet = true">
          <svg-icon
            :svgType="'mateMask'"
            class="svg-img"
            :svgW="48"
            :svgH="48"
          />
          <p>MetaMask</p>
        </div>
        <div class="btns">
          <el-button v-if="imagesStep > 1" type="primary" @click="stepPrevious">Previous</el-button>
          <el-button type="primary" @click="nextStep">Next</el-button>
        </div>
      </div>
      <!-- YOUR NFT内容 -->
      <div v-if="imagesStep == 5" v-loading="loading">
        <img class="imageurl_show" :src="base64String" alt="" />
        <p>Name:{{ input1_info }}</p>
        <p>Description:{{ input2_info }}</p>
        <p>Wallet:{{ addressinfo }}</p>
        <div class="btns">
          <el-button type="primary" @click="imagesStep = 4">Previous</el-button>
          <el-button type="primary" @click="topay">Next</el-button>
        </div>
      </div>
      <!-- 前两步的按钮 -->
      <div v-if="imagesStep < 3" class="btns">
        <el-button v-if="imagesStep > 1" type="primary" @click="stepPrevious">Previous</el-button>
        <el-button type="primary" @click="nextStep">Next</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="js" src="./imageEdit.js"></script>
<style lang="scss">
@import "./imageEdit.scss";
</style>
