
import SvgIcon from '@/components/svgIcon.vue'
export default {
  components: { SvgIcon },
  props: {
    userInfo: Object
  },
  data() {
    return {
      imageUrl: '',
      nftsBol:false,
      appendDomIndex:0,
      nftType:'',
    };
  },
  mounted(){
    let self = this;
    $(document).ready(function(){
      self.appendDom();
      $(document).on('click','nav.r-qklmqi[aria-label][role="navigation"]',function(e){
        let infoDom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').parentElement;
        // 如果点击到当前标签
        if(e.target.className == 'dream-maker-title' || e.target.className == 'dream-maker'){
          self.domBorderBottom('none');
          // 关闭当前内容
          $(infoDom.childNodes[2]).attr('style','display:none');
          self.nftsBol = true;
          self.search();
        }else{
          self.domBorderBottom('blcok');
          $(infoDom.childNodes[2]).attr('style','display:flex');
          self.nftsBol = false;
        }
      });
    })
  },

  methods: {
    OperationNft(type){
      this.nftType = type;
    },
    appendDom(){
      let self = this;
      // 获取10次，页面还没有加载该dom就不在创建了，避免死循环
      if(this.appendDomIndex > 10) return;
      this.appendDomIndex = this.appendDomIndex + 1;
      $(document).ready(function(){
        let navdom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]');
        if(!navdom){
          setTimeout(()=>{
            self.appendDom();
          },1000)
        }else{
          // 将dream标签添加到当前页面的dom上
          let crdom = document.querySelector(".dream-maker");
          navdom.appendChild(crdom);
          // 构建nft
          let crdomNft = document.querySelector(".dream-maker-model");
          let parentDom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').parentElement;
          parentDom.appendChild(crdomNft);
        }
      })
    },
    // 所有标签下标去掉
    domBorderBottom(type){
      // 获取整个tab
      let navdom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').childNodes[0];
      // 获取teitter的tab
      let twitterDom = navdom.childNodes[1];
      // 获取twitter对应的几个tab
      let twitterDomChild = twitterDom.childNodes[0].childNodes;
      // 遍历，并且根据参数判断是否显示或者是隐藏
      twitterDomChild.forEach(element => {
        let childDom = element.childNodes[0].childNodes[0].childNodes[1];
        console.log(element.childNodes[0]);
        if(type == 'none'){
          // web3，去掉底部选中样式
          if(navdom.childNodes[3]){
            $(navdom.childNodes[3]).attr('style','height:49px;overflow:hidden');
          }
          $(childDom).attr('style','display:none');
        }else{
          if(document.querySelector('.MuiTypography-root')){
            $(navdom.childNodes[3]).attr('style','height:auto;overflow:initial');
          }
          $(childDom).attr('style','display:inline-block');
        }
      });
    },
    // 获取nft
    search(){
      let mintUser = this.userInfo.identity_id;//用户id
      let type = this.nftType=='nft'?0:this.nftType=='posterNft'?1:this.nftType=='jointNft'?2:0;//nft类型type类型    0:NFT/1:POSTER/2:Co-NFT
      let getNfts = `${process.env.VUE_APP_BASEURL}/v2/twitter/nft/list?mintUser=${mintUser}&type=${type}`;
      console.log(getNfts);
      fetch(getNfts)
      .then(response => response.json())
      .then(data =>{
        console.log(data,'测试接口')
      });
    }
  }
};
