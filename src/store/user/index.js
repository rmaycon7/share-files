import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  token: '',
  email: '',
  id: '',
  loged: false
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}