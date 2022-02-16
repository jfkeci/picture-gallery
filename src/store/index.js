import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './posts'

export default new Vuex.Store({
  modules: {
    posts
  },
})
