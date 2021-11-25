<template>
  <div class="ATTADreamMaker-dom">
    <div class="MaskNetworkbox">
      <div class="MaskNetwork" @click="ATTAMakerVisible = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="342" height="342" viewBox="0 0 342 342" fill="none">
          <path d="M169.2 107.486C148.233 107.486 131.174 124.546 131.174 145.512C131.174 166.478 148.233 183.538 169.2 183.538C190.166 183.538 207.225 166.478 207.225 145.512C207.225 124.546 190.166 107.486 169.2 107.486ZM169.2 163.524C159.265 163.524 151.187 155.447 151.187 145.512C151.187 135.577 159.265 127.5 169.2 127.5C179.134 127.5 187.212 135.577 187.212 145.512C187.212 155.447 179.134 163.524 169.2 163.524Z" fill="black"/>
          <path d="M304.387 214.835L208.197 37.6586C199.824 22.2383 184.695 13.0289 167.736 13.0289C150.778 13.0289 135.649 22.2383 127.276 37.6586L31.0862 214.835C20.8613 233.668 27.6096 252.586 38.83 262.973C50.8043 274.053 67.6093 275.917 81.6476 267.714L99.3308 257.391C120.249 245.176 143.905 238.715 167.736 238.715C191.568 238.715 215.216 245.169 236.142 257.391L253.825 267.714C259.644 271.112 265.946 272.783 272.175 272.783C280.972 272.783 289.631 269.456 296.643 262.973C307.863 252.586 314.612 233.668 304.387 214.835ZM284.047 250.023C281.148 252.7 273.324 258.297 263.223 252.401L245.54 242.078C221.782 228.206 194.876 220.868 167.736 220.868C140.597 220.868 113.691 228.199 89.933 242.078L72.2496 252.401C62.1491 258.297 54.3249 252.7 51.4264 250.023C45.2197 244.276 41.5162 233.746 47.2545 223.188L143.444 46.0113C148.589 36.5378 157.673 30.8765 167.736 30.8765C177.8 30.8765 186.884 36.5306 192.029 46.0113L288.219 223.188C293.949 233.753 290.253 244.276 284.047 250.023Z" fill="black"/>
          <path d="M102.341 288.833C99.0731 286.29 94.9737 285 90.1425 285C85.0757 285 80.6104 286.972 76.877 290.854C73.1435 294.662 71.252 299.555 71.252 305.404C71.252 311.252 73.1435 316.145 76.877 319.953C80.6352 323.786 85.1005 325.733 90.1425 325.733C94.8807 325.733 98.98 324.462 102.341 321.962V325.218H112.971V285.527H102.341V288.833ZM99.1785 313.367C97.0203 315.376 94.5706 316.393 91.8852 316.393C85.7207 316.393 81.5779 311.978 81.5779 305.404C81.5779 298.786 85.7207 294.34 91.8852 294.34C94.5954 294.34 97.0451 295.382 99.1723 297.434C101.3 299.493 102.335 302.098 102.335 305.398C102.341 308.709 101.312 311.314 99.1785 313.367Z" fill="black"/>
          <path d="M127.223 294.948H141.536V325.522H152.166V294.948H166.387V285.521H127.223V294.948Z" fill="black"/>
          <path d="M180.629 294.948H194.943V325.522H205.572V294.948H219.793V285.521H180.629V294.948Z" fill="black"/>
          <path d="M265.13 288.833C261.862 286.29 257.763 285 252.932 285C247.865 285 243.399 286.972 239.666 290.854C235.933 294.662 234.041 299.555 234.041 305.404C234.041 311.252 235.933 316.145 239.666 319.953C243.424 323.786 247.89 325.733 252.932 325.733C257.67 325.733 261.769 324.462 265.13 321.962V325.218H275.76V285.527H265.13V288.833ZM261.968 313.367C259.809 315.376 257.36 316.393 254.674 316.393C248.51 316.393 244.367 311.978 244.367 305.404C244.367 298.786 248.51 294.34 254.674 294.34C257.384 294.34 259.834 295.382 261.961 297.434C264.095 299.493 265.13 302.098 265.13 305.398C265.13 308.709 264.095 311.314 261.968 313.367Z" fill="black"/>
        </svg>
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
      <div class="ConnectWallet" @click="ConnectWalletloading = true">
        <span>图标</span>
        <p>Connect Wallet</p>
      </div>
      <!-- 选择钱包插件 -->
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
      <el-dialog
        title="账户"
        :visible.sync="ConnectWalletloading"
        width="50%"
        :modal="false"
      >
        <img src="" alt="">
        <div>
          <p>MetaMask</p>
          <img src="" alt="">
          <p>address地址</p>
          <img src="" alt="">
          <img src="" alt="">
        </div>
        <el-button @click="userwalletdialog()">更改</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ATTAMakerVisible: false,//ATTA Dream Maker弹框控制
      ConnectWalletVisible: false,//选择钱包插件弹框控制
      ConnectWalletloading: false, // 钱包账户弹框控制
    };
  },
  mounted() {
    let leftdom = document.querySelector('[aria-label][role="navigation"]');
    let crdom = document.querySelector(".ATTADreamMaker-dom");
    console.log(leftdom);
    leftdom.appendChild(crdom);
  },
  methods: {
    userwalletdialog(){
      this.ConnectWalletloading = false;
      this.ConnectWalletVisible = true;
    }
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