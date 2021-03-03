import { createStore, useStore } from 'vuex';
import { state } from './pt01/state';
import { mutations } from './pt01/mutations';
import { getters } from './pt01/getters';
import { actions } from './pt01/actions';

export default createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
});
