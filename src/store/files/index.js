import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  list: [],
  Music: [],
  Doc: [],
  Compress: [],
  Video: [],
  Image: [],
  Program: [],
  Unknow: [],
  Error: {}
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};