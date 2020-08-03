import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 将username储存到local storage中
export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      state.user = ''
      window.localStorage.removeItem('user')
      location.reload()
    }
  }
})
