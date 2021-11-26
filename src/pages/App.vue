<template>
  <div>
    <home-page />
    <svg-icon class="svg-class" :svgType="'all'"/>
  </div>
</template>

<script>
import HomePage from '@/components/homePage.vue'
import SvgIcon from '@/components/svgIcon.vue'

export default {
  name: 'App',
  components: { HomePage,SvgIcon }
}
</script>

<style lang="scss">
html {
  width: 400px;
  height: 400px;
}
.svg-class{
    width: 100%;
    height: 100%;
    svg{
      width: 50px;
    }
}
</style>
