<template>
  <div class="dream-maker css-1dbjc4n r-16y2uox r-6b64d0 r-cpa5s6">
    <p class="dream-maker-title">Dream</p>
    <div class="dream-maker-model">
    </div>
  </div>
</template>
<script>
import SvgIcon from '@/components/svgIcon.vue'
export default {
  components: { SvgIcon },
  data() {
    return {
      imageUrl: ''
    };
  },
  mounted(){

    let leftdom = document.querySelector('[aria-label="Profile timelines"]');
    let crdom = document.querySelector(".dream-maker");
    leftdom.appendChild(crdom);


    setTimeout(()=>{
      let infoDom = document.querySelector('[aria-label="Profile timelines"]').parentElement.lastElementChild;
      infoDom.style.display = 'none';
        console.log(document.querySelector('[aria-label="Profile timelines"]').parentElement.lastElementChild,'获取dom标签');
    },3000)
  },

  methods: {
  }
};
</script>

<style lang="scss" scoped>
.dream-maker{
  max-width: 100px;
  width: 100px;
  padding: 0 16px;
    &:hover{
      background-color: rgba(15, 20, 25, 0.1);
      cursor: pointer;
    }
  .dream-maker-title{
    text-align: center;
    color: rgb(83, 100, 113);
  }
  .dream-maker-model{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    top: 0;
    left: 0;
  }
}
</style>
