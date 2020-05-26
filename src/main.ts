import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/element.js'
import './less/style.less'

import VueParticles from 'vue-particles'  
 
Vue.use(VueParticles)

import http from "./utils/https";
import urls from "./utils/urls";

Vue.prototype.$https = http; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$urls = urls; // 其他页面在使用 urls 的时候直接  this.$urls 就可以了

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
