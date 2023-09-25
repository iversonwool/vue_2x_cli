export default {
  namespaced: true,
  state: {
    users: [{id: '001', name: 'John'}, {id: '002', name: 'Mary'}]
  },
  actions: {
    createUser(context, user) {
      if (user.name.indexOf('T') !== -1) {
        context.commit('CREATE_USER', user)
      }
    }
  },
  mutations: {
    CREATE_USER(state, user) {
      state.users.unshift(user);
    }
  },
  getters: {
    firstPersonName(state) {
      return state.users[0]?.name
    }
  }
}