import Vue from 'vue'
import App from './App.vue'
import router from './mrouter'
import store from './store'

import Alert from '@/components/alert'

Vue.use(Alert)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
