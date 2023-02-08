import Vue from 'vue'
import App from './App.vue'
import LbUi from './packages/index'

Vue.config.productionTip = false
Vue.use(LbUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
