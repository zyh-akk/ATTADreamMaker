
import SvgIcon from '@/components/svgIcon.vue'
import OAuth from 'oauth';
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
      nftType:'0',
      nftlist : [],
      base_url : process.env.VUE_APP_BASEURL,
      total : 10,
      pageSize : 10,
      current : 1,
      loading:false
    };
  },
  destroyed(){
    console.log('重载');
    $('nav.r-qklmqi[aria-label][role="navigation"]').unbind('click');
  },
  mounted(){
    let self = this;
    $(document).ready(function(){
      self.appendDom();
    })
  },

  methods: {
    OperationNft(type,obj = null){
      if(type == 'createNft' || type == 'accept' || type == 'mint'){
        this.$emit("createNftAccept", type,obj ? obj : null);
      }else{
        this.nftType = type;
        this.search();
      }
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


      $('nav.r-qklmqi[aria-label][role="navigation"]').on('click',function(e){
        let infoDom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').parentElement;
        console.log();
        // 如果点击到当前标签
        if(e.target.className.indexOf('dream-maker-title')>-1 || e.target.className.indexOf('dream-maker')>-1){
          self.domBorderBottom('none');
          // 关闭当前内容
          if($(infoDom.childNodes[2]).prop('class').indexOf('dream-maker-model') > -1){
            $(infoDom.childNodes[3]).attr('style','display:none !important');
          }else{
            $(infoDom.childNodes[2]).attr('style','display:none !important');
          }
          self.nftsBol = true;
          self.search();
        }else{
          self.domBorderBottom('blcok');
          if($(infoDom.childNodes[2]).prop('class').indexOf('dream-maker-model') > -1){
            $(infoDom.childNodes[3]).attr('style','display:flex !important');
          }else{
            $(infoDom.childNodes[2]).attr('style','display:flex !important');
          }
          self.nftsBol = false;
        }
      });
        }
      })
    },
    // 所有标签下标去掉
    domBorderBottom(type){
      console.log(type);
      // 获取整个tab
      let navdom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').childNodes[0];
      // 获取teitter的tab
      let twitterDom = navdom.childNodes[1];
      // 获取twitter对应的几个tab
      let twitterDomChild = twitterDom.childNodes[0].childNodes;
      // 遍历，并且根据参数判断是否显示或者是隐藏
      twitterDomChild.forEach(element => {
        let childDom = element.childNodes[0].childNodes[0].childNodes[1];
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
    async search(){
      if(this.loading) return;
      this.loading = true;
      let mintUser = this.userInfo.id;//用户id
      let {pageSize,current,nftType:type} = this;
      let obj = {mintUser,type,pageSize,current};
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/list`;
      const res = await fetch(getNfts, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const listData = await res.json();
      this.loading = false;
      if(listData.data.total){
        this.total = listData.data.total;
        this.nftlist = listData.data.records;
      }
    },
    handleCurrentChange(val){
      this.current = val;
      this.search();
    },




    // 推特api
    ttApi(){
      // let consumer_key = process.env.CONSUMER_KEY;
      // let consumer_secret = process.env.CONSUMER_SECRET;
    }
  }
};
