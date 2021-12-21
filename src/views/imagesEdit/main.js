import Vue from 'vue';
import App from './imagesEdit';
import store from '../../store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
global.browser = require('webextension-polyfill');

const timer = setInterval(() => {
  if (document.readyState === 'complete') {
    window.clearInterval(timer);

    Vue.prototype.$browser = global.browser;
    Vue.use(ElementUI);

    /* eslint-disable no-new */
    new Vue({
      el: '#images-edit',
      store,
      render: h => h(App)
    });
  }
}, 500)
