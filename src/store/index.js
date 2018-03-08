import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import user from './modules/user'
import login from './modules/login'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'
// const debug = false

export default new Vuex.Store({
  actions,
  getters,
  modules: {
      user,
      login
  },
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
