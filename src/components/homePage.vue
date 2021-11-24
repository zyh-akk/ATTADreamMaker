<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <p class="joke">{{ joke }}</p>
    </div>
    <el-input placeholder="请输入内容"></el-input>
    <button @click="againTest()">againTest</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      loading: true,
      joke: "",
    }
  },
  mounted() {
    axios.get(
      // eslint-disable-next-line quote-props
      // eslint-disable-next-line quotes
      "https://icanhazdadjoke.com/", { headers: { Accept: 'application/json' } }
    )
      .then(res => {
        this.joke = res.data.joke
        this.loading = false;
      });
  },
  methods:{
    againTest(){
      let color = "#3aa757";
    //  chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.set({color: '#3aa757'}, function() {
          console.log("The color is green.");
        });
      // });

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('color', color);
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });


      axios.get(
      "https://icanhazdadjoke.com/",
      { headers: { Accept: 'application/json' } }
    )
      .then(res => {
        this.joke = res.data.joke
          this.loading = false;
        });

      console.log("跳转",this.$route);
    }
  }
}
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
