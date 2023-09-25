import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import countModel from './count'
import userModel from './user'

export default new Vuex.Store({
  modules: {
    countModel,
    userModel
  }
})