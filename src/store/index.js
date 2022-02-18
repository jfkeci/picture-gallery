import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './posts'
import auth from './auth'

export default new Vuex.Store({
  modules: {
    posts,
    auth
  },
  state: {
    message: false,
    action: 'show'
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    setAction(state, action) {
      state.action = action
    }
  },
  getters: {
    getMessage: state => state.message,
    getAction: state => state.action
  }
})
