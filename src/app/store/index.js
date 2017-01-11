const Vuex = window.Vuex
import { state } from './state'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
