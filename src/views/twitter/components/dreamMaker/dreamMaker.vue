<template>
  <div>
    <div class="dream-maker">
      <p class="dream-maker-title" :class="nftsBol?'check-dream-maker-title':''">NFT
        <i class="check-dream" v-show="nftsBol"></i>
      </p>
    </div>
    <div class="dream-maker-model" v-show="nftsBol">
      <div class="nft-btn">
        <p :class="nftType=='0'?'check-nft':''" @click="OperationNft('0')">NFT</p>
        <P :class="nftType=='1'?'check-nft':''" @click="OperationNft('1')">POSTER</P>
        <p :class="nftType=='2'?'check-nft':''" @click="OperationNft('2')">Co-NFT</p>
      </div>
      <div class="nft-btn">
        <p class="check-nft" >Create a personal NFT</p>
      </div>

      <div class="nft-list">
        <div v-for="(item,index) in nftlist" :key="index" class="dream-maker-nft">
          <!-- xxx为我创建的nft 提示条 item.mintUser 可以获取到用户id，但是不能获取到name -->
          <span v-if="item.creatorTag == 1">User xxx created for you</span>
          <img :src="base_url + JSON.parse(item.nftContent).picturePath " alt="">
          <p>Name：{{JSON.parse(item.nftContent).name}}</p>
          <p>Description：</p>
          <p>{{JSON.parse(item.nftContent).description}}</p>
          <p v-if="(item.status == 0 || item.status == 1 || item.status == 2) && item.type != 2">Status：Minting </p>
          <p v-if="item.status == 3">Status：Minted</p>
          <p v-if="item.status == 4">Status：{{item.status + '铸造失败'}}</p>
          <p v-if="item.status == 0 && item.type == 2">Status：Waiting for Accept</p>
          <p v-if="item.status == 1 && item.type == 2">Status：Accept / Waiting For Mint</p>
          <p v-if="item.status == 2 && item.type == 2">Status：Accept / Minting</p>
          <p v-if="item.status == 3 && item.type == 2">Status：Accept / Minted</p>
          <p>Wallet：{{item.address.substring(0, 5) + "***" +item.address.substr(item.address.length - 4)}}</p>
          <button v-if="item.status == 0 && item.type == 2 && item.creatorTag == 1">Accept</button>
          <button v-if="item.status == 1 && item.type == 2 && item.creatorTag == 1">Mint now</button>
        </div>
        <div class="paginationbox" v-if="nftlist.length > 0">
          <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" src="./dreamMaker.js"></script>
<style lang="scss">
@import "./dreamMaker.scss";
</style>
