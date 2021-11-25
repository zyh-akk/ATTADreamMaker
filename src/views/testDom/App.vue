<template>
  <div class="ATTADreamMaker-dom">
    <div class="MaskNetworkbox">
      <div class="MaskNetwork" @click="open()">
        <span>图标</span>
        <p>Mask Network</p>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="10%"
        :modal="false"
        :show-close="false"
        custom-class="MaskNetwork-dialogbox"
      >
        <el-button @click="dialogVisible = false">按钮1</el-button>
        <el-button @click="dialogVisible = false">按钮2</el-button>
        <el-button @click="dialogVisible = false">按钮3</el-button>
        <el-button @click="dialogVisible = false">按钮4</el-button>
      </el-dialog>
    </div>
    <div class="ConnectWalletbox">
      <div class="ConnectWallet" @click="alert(123)">
        <span>图标</span>
        <p>Connect Wallet</p>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  mounted() {
    let leftdom = document.querySelector('[aria-label][role="navigation"]');
    let crdom = document.querySelector(".ATTADreamMaker-dom");
    console.log(leftdom);
    leftdom.appendChild(crdom);
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.MaskNetworkbox{
  position: relative;
  .MaskNetwork-dialogbox{
    position: absolute;
  }
}
</style>