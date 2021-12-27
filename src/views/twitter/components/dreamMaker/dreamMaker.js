
import SvgIcon from '@/components/svgIcon.vue';
import {getFriendUserInfo ,getUserInfoid} from "../../utils/utils";
export default {
  components: { SvgIcon },
  props:['userInfo'],
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
      loading:false,
      userInfofriend : {},
    };
  },
  destroyed(){
    $(".dream-maker-dom").attr('style','display:none !important');
    $('nav.r-qklmqi[aria-label][role="navigation"]').unbind('click');
  },
  mounted(){
    let self = this;
    $(document).ready(function(){
      $(".dream-maker-dom").attr('style','display:block !important');
      self.appendDom();
      self.search();
      // 监听页面dom变化
      var observer = new MutationObserver(function(mutations, observer){

        // 添加缓存，判断nft部分是否需要隐藏
        self.domBorderBottom('block');
        let infoDom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').parentElement;
        if($(infoDom.childNodes[2]).prop('class').indexOf('dream-maker-model') > -1){
          $(infoDom.childNodes[3]).attr('style','display:flex !important');
        }else{
          $(infoDom.childNodes[2]).attr('style','display:flex !important');
        }
        self.nftsBol = false;
      });
      // 次数监听用户名，用户名变化，就隐藏nft
      var el = document.querySelector('div[data-testid="primaryColumn"]').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
      var  options = {
        'childList': true,
        'subtree':true,
        'characterData':true
      } ;
      observer.observe(el, options);
    })
  },

  methods: {
    isVideo(path) {
      return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/i.test(path);
    },
    OperationNft(type,obj = null){
      let self = this;
      if(type == 'createNft' || type == 'accept' || type == 'mint'){
        this.$emit("createNftAccept", type,obj ? obj : null);
      }else{
        self.nftType = type;
        self.search();
      }
    },
    OperationNftclick(type){
      this.$emit("createNftAccept", type);
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

          // 需要打开nft列表项
          if(sessionStorage.getItem('myNfts') == 'true'||sessionStorage.getItem('myNfts') == '0'||sessionStorage.getItem('myNfts') == '1'||sessionStorage.getItem('myNfts') == '2'){
            let infoDom = document.querySelector('nav.r-qklmqi[aria-label][role="navigation"]').parentElement;
            self.domBorderBottom('none');
            // 关闭当前内容
            if($(infoDom.childNodes[2]).prop('class').indexOf('dream-maker-model') > -1){
              $(infoDom.childNodes[3]).attr('style','display:none !important');
            }else{
              $(infoDom.childNodes[2]).attr('style','display:none !important');
            }
            self.nftType = sessionStorage.getItem('myNfts') >= 0 ? sessionStorage.getItem('myNfts') : 0;
            self.nftsBol = true;
            self.search();
            sessionStorage.setItem('myNfts','false');
          }
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
      let self = this;
      getFriendUserInfo()
      .then((res)=>{
        console.log(res,'用户信息');
        self.userInfofriend = res;
        self.searchInfo()
      }).catch((err)=>{
        console.log(err);
      })
    },

    async searchInfo(){
      if(this.loading) return;
      this.loading = true;
      let receiveUser = this.userInfofriend.id;
      let mintUser = this.userInfo.id;//用户id
      let {pageSize,current,nftType:type} = this;
      let obj = {mintUser,type,pageSize,current,receiveUser,orders : [{column:"create_time",asc:false}]};
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
      if (!listData.data) {
        return;
      }
      this.nftlist = listData.data.records;
      this.total = listData.data.total;
      if(listData.data.total){
        this.nftlist = this.nftlist.map(item=>{
          item.nftContent = JSON.parse(item.nftContent);
          return item;
        })
        this.getname();
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
    },
    async getname(){
      let arr = [];
      for (let i = 0; i < this.nftlist.length; i++) {
        if (this.nftType == 2 && this.nftlist[i].ohterUser) {
          await getUserInfoid(this.nftlist[i].ohterUser)
          .then(res=>{
            if (res.name) {
              this.nftlist[i].mintUsername = res.name;
              arr.push(this.nftlist[i]);
            }
          })
        }else{
          arr.push(this.nftlist[i]);
        }
      }
      arr = arr.sort((a, b) => a.index - b.index);
      this.nftlist = arr;
    }
  }
};
