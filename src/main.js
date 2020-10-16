import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 使用图片懒加载插件
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
