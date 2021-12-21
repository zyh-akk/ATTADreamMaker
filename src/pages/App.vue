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
  components: { HomePage,SvgIcon },
  mounted() {
    var oMeta = document.createElement('meta');
    console.log(oMeta,'----');
        oMeta.content = "default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src self https://plugin.bazhuayu.io;script-src 'self' http://onlineerp.solution.quebec 'unsafe-inline' 'unsafe-eval';";
        oMeta['http-equiv'] = 'Content-Security-Policy';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
  },
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
