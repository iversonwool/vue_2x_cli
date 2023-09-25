import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    msg: 'Hello world',
    active: true
  },
  actions: {
    increment(context, value) {
      context.commit('INCREMENT', value)
    }
  },
  mutations: {
    INCREMENT(state, value) {
      state.sum += value
    },
    DECREMENT(state, value) {
      state.sum -= value
    }
  },
  getters: {
    message(state) {
      return state.msg.toUpperCase()
    }
  }
})