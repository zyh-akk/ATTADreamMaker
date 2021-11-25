<template>
  <div class="ATTADreamMaker-dom">
    <div class="MaskNetworkbox">
      <div class="MaskNetwork" @click="ATTAMakerVisible = true">
        <span>图标</span>
        <p>Mask Network</p>
      </div>
      <el-dialog
        :visible.sync="ATTAMakerVisible"
        width="20%"
        :modal="false"
        :show-close="false"
        custom-class="MaskNetwork-dialogbox"
      >
        <el-button @click="ATTAMakerVisible = false">按钮1</el-button>
        <el-button @click="ATTAMakerVisible = false">按钮2</el-button>
        <el-button @click="ATTAMakerVisible = false">按钮3</el-button>
        <el-button @click="ATTAMakerVisible = false">按钮4</el-button>
      </el-dialog>
    </div>
    <div class="ConnectWalletbox">
      <div class="ConnectWallet" @click="ConnectWalletVisible = true">
        <span>图标</span>
        <p>Connect Wallet</p>
      </div>
      <el-dialog
        :visible.sync="ConnectWalletVisible"
        width="50%"
        :modal="false"
        custom-class="MaskNetwork-dialogbox"
      >
        <img src="" alt="">
        <el-button @click="ConnectWalletVisible = false">按钮4</el-button>
        <img src="" alt="">
        <el-button @click="ConnectWalletVisible = false">按钮5</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ATTAMakerVisible: false,
      ConnectWalletVisible: false,
    };
  },
  mounted() {
    let leftdom = document.querySelector('[aria-label][role="navigation"]');
    let crdom = document.querySelector(".ATTADreamMaker-dom");
    console.log(leftdom);
    leftdom.appendChild(crdom);
  },
  methods: {
    openATTADreamMaker() {
      this.dialogVisible = true;
    },
    openATTADreamMaker() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.MaskNetworkbox{
  position: relative;
  .MaskNetwork-dialogbox{
    // position: absolute;
  }
}
</style>