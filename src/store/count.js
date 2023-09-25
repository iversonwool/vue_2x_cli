export default {
  namespaced: true,
  state: {
    sum: 0,
    msg: 'Hello world',
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
}