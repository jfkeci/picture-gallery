import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

import axios from 'axios'

import messageMixin from './mixins/messageMixin'
Vue.mixin(messageMixin)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:5001/'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
