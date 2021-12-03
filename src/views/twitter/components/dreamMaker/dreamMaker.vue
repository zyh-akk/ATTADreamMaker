<template>
  <div>
    <div class="dream-maker">
      <p class="dream-maker-title">Dream
        <i class="check-dream" v-show="nftsBol"></i>
      </p>
    </div>
    <div class="dream-maker-model" v-show="nftsBol">
      <div v-for="item in 5" class="dream-maker-nft">
        <img src="https://pbs.twimg.com/media/FFqb5N5XMAATxP5?format=jpg&name=small" alt="">
        <p>姓名：{{item + '姓名'}}</p>
        <p>描述：{{item + '描述：'}}</p>
        <p>状态：{{item + '状态：'}}</p>
        <p>钱包：{{item + '钱包：'}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="js" src="./dreamMaker.js"></script>
<style lang="scss">
@import "./dreamMaker.scss";
</style>
