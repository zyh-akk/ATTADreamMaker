
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import axios from 'axios'
import SvgIcon from "@/components/svgIcon.vue";
const ImageEditor = require("tui-image-editor");
export default {
  components: { SvgIcon },
  props: ["userInfo"],
  data() {
    return {
      instance: null,
      imagesDialog:true,
      imagesStep:1,
      fileImage:null,
      imageUrl:'',
      input1_info:'',
      input2_info:'',
      ischeckwallet:false,
      loading:false,
      base64String:'',//编辑后的图片
      addressinfo: "",
      uploadUrl:'',//上传地址
      returnaddress: "",
      metadataIpfs: "",
      tokenId: "",
      fileType: ""
      
    };
  },
  mounted(){
    this.uploadUrl = process.env.VUE_APP_BASEURL + "v2/twitter/nft/upload";
    // vue中接收的事件
    var event = document.createEvent("Event");
    event.initEvent("switchaddressCallback2", true, true); // detail是事件数据
    document.addEventListener("switchaddressCallback2", (event) => {
      if (event.detail.length > 0) {
        this.addressinfo = event.detail[0];
        this.imagesStep = 5;
        this.loading = true;
        localStorage.attadreammaker_wallte = event.detail[0]
        this.createnft();
      }
    });
  },

  methods: {
    closeModal() {
      this.$emit("closeImageEdit", true);
    },
    // 上一步
    stepPrevious(){
      if(this.imagesStep > 1){
        this.imagesStep = this.imagesStep - 1;
      }
    },
    nextStep(){
      if(this.imagesStep < 5){
        if(this.imagesStep == 3){//编辑完图片就要上传
          this.imageUpload();
          return;
        }
        // 第一步如果没有上传图片，不允许下一步
        if(this.imagesStep == 1 && !this.imageUrl){
          this.$message({
            message: '请上传图片！',
            type: 'warning'
          });
          return;
        }
        // 判断是否填写数据
        if(this.imagesStep == 2 && (!this.input1_info || !this.input2_info)){
          this.$message({
            message: '请填写完整信息!',
            type: 'warning'
          });
          return;
        }
        // 判断是否选择钱包
        if(this.imagesStep == 4){
          if(!this.ischeckwallet){
            this.$message({
              message: '请选择钱包!',
              type: 'warning'
            });
            return;
          }else{
            console.log('测试钱包');
            this.loading = true;
            // 调用钱包部分
            const cEvt = new CustomEvent("switchaddress", {
              detail: { Callbackname: "switchaddressCallback2" },
            });
            document.dispatchEvent(cEvt);
            return;
          }
        }
        this.imagesStep = this.imagesStep + 1;
        if(this.imagesStep == 3){
          this.addImageEdit();
        }
      }
    },
    onChange(file, fileList) {
      var _this = this;
      var event = event || window.event;
      if (!event.target.files) {
        return;
      }
      var file = event.target.files[0];
      var reader = new FileReader();
      this.file = file
      console.log(file);
      //转base64
      reader.onload = function (e) {
        _this.imageUrl = e.target.result //将图片路径赋值给src
      }
      reader.readAsDataURL(file);
    },
    // 图片编辑
    addImageEdit(){
      var _this = this;
      this.instance = new ImageEditor(
        document.querySelector("#tui-image-editor"),
        {
          includeUI: {
            loadImage: {
              path: _this.imageUrl,
              name:'1639451331(1)'
            },
            menuBarPosition: "right",
            menu: [
              'crop', // 裁切
              'draw', // 添加绘画
              'text', // 添加文本
              // 'rotate', // 旋转
              // 'flip', // 翻转
              // 'shape', // 添加形状
              'icon', // 添加图标
              // 'mask', // 添加覆盖
              'filter' // 添加滤镜
            ]
          },
          cssMaxWidth: 300,
          cssMaxHeight: 200
        }
      );
    },
    imageUpload(){
      this.base64String = this.instance.toDataURL();
      let fileImage = this.dataURLtoFile(this.instance.toDataURL(),'attaDreamMaker.png');
      const fd = new FormData();
      fd.append("image", fileImage);
      this.loading = true;
      fetch(this.uploadUrl, {
        method: 'POST',
        body: fd
      }).then(response => response.json())
      .then(res => {
        this.loading = false;
        this.imagesStep = 4;
        if (res.data) {
          this.previewImgUrl = res.data.fileUri;
          this.sourceFileIpfs = res.data.ipfsUri;
        }
      }).catch(()=>{
        this.loading = false;
      })
    },
    // base64转file
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    // 创建nft
    async createnft() {
      let obj = {
        address: this.addressinfo,
        description: this.input2_info,
        name: this.input1_info,
        mintUser: this.userInfo.identity_id,
        receiveUser: this.userInfo.identity_id,
        picturePath: this.picturePath,
        sourceFileIpfs: this.sourceFileIpfs,
        type: 0,
      };
      let getNfts = `${process.env.VUE_APP_BASEURL}v2/twitter/nft/create_nft`;
      const res = await fetch(getNfts, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const listData = await res.json();
      const artList = listData.data;
      this.returnaddress = artList[0].address;
      this.metadataIpfs = artList[0].metadataIpfs;
      this.tokenId = artList[0].tokenId;
      this.loading = false;
    },
    // 支付
    topay() {
      if (!this.input1_info || !this.input2_info || !this.imageUrl) {
        alert("请填写完整信息");
      }
      let { tokenId, metadataIpfs, returnaddress } = this;
      console.log({ tokenId, metadataIpfs, returnaddress ,wallteaddress : this.addressinfo});
      const cEvt = new CustomEvent("paymentaddress", {
        detail: { tokenId, metadataIpfs, returnaddress ,wallteaddress : this.addressinfo},
      });
      document.dispatchEvent(cEvt);
    },
  }
};
