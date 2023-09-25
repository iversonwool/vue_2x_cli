import Vue from 'vue'
import App from './App.vue'

import helloPlugin from './plugins/hello'


Vue.config.productionTip = false
Vue.use(helloPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
