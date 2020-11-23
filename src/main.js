// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入样式和rem
import './assets/js/rem'
import './assets/css/reset.css'
import './assets/css/public.css'

// 引入vuex
import store from './store';
// 引入vantUI
import VantUI from 'vant';
import '../node_modules/vant/lib/index.css'
Vue.use(VantUI);
// 添加img的url地址域名端口
Vue.prototype.$imgUrl = 'http://localhost:3000'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
