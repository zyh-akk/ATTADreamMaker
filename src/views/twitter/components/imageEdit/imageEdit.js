
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
const ImageEditor = require("tui-image-editor");
export default {
  data() {
    return {
      instance: null,
      imagesDialog:true,
      imagesStep:1,
      fileImage:null,
      imageUrl:'',
      input1_info:'',
      input2_info:''
    };
  },
  mounted(){
    setTimeout(() => {
      this.addImageEdit()
    }, 2000);
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
      if(this.imagesStep < 3){
        // 第一步如果没有上传图片，不允许下一步
        if(this.imagesStep == 1 && !this.imageUrl) return;
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
              name: "image",
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

      // this.instance.loadImageFromFile(this.fileImage).then(result => {
      //   console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
      //   console.log('new : ' + result.newWidth + ', ' + result.newHeight);
      // });
    }
  }
};
