<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <p class="joke">{{ joke }}</p>
    </div>
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
      "https://icanhazdadjoke.com/",
      { 'headers': { 'Accept': 'application/json' } }
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
      { 'headers': { 'Accept': 'application/json' } }
    )
      .then(res => {
        this.joke = res.data.joke
        this.loading = false;
      });

          console.log("The color is green.");
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
