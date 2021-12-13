<template>
  <div>
    <div class="dream-maker">
      <p class="dream-maker-title" :class="nftsBol?'check-dream-maker-title':''">NFT
        <i class="check-dream" v-show="nftsBol"></i>
      </p>
    </div>
    <div class="dream-maker-model" v-show="nftsBol">
      <div class="nft-btn">
        <p :class="nftType=='nft'?'check-nft':''" @click="OperationNft('nft')">NFT</p>
        <P :class="nftType=='posterNft'?'check-nft':''" @click="OperationNft('posterNft')">POSTER</P>
        <p :class="nftType=='jointNft'?'check-nft':''" @click="OperationNft('jointNft')">Co-NFT</p>
      </div>
      <div class="nft-btn">
        <p :class="nftType=='createNft'?'check-nft':''" @click="OperationNft('createNft')">Create a personal NFT</p>
      </div>

      <div class="nft-list">
        <div v-for="item in 5" class="dream-maker-nft">
          <img src="https://pbs.twimg.com/media/FFqb5N5XMAATxP5?format=jpg&name=small" alt="">
          <p>Name：{{item + '姓名'}}</p>
          <p>Description：</p>
          <p>{{item + '描述：'}}</p>
          <p>Status：{{item + '铸币/铸币'}}</p>
          <p>Wallet：{{item + '0xF210...21AF'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" src="./dreamMaker.js"></script>
<style lang="scss">
@import "./dreamMaker.scss";
</style>
