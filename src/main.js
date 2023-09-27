import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import helloPlugin from './plugins/hello'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(helloPlugin)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
