import { DefineActions } from 'vuex-type-helper';
import { State, Mutations, Actions, Getters } from './interfaces';

import { ApiFetch } from '../../api/http-client';

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
  addTodoListAction({ commit }, payload) {
    commit('addTodoList', payload);
  },
  getCardListAction({ commit }, payload) {
    commit('cardList', payload);
  },
  getConceptTextListAction({ commit }, payload) {
    commit('conceptTextList', payload);
  },
  getEditConceptTextListAction({ commit }, payload) {
    commit('editConceptTextList', payload);
  },
  addCardListAction({ commit }, payload) {
    commit('addCardList', payload);
  },
  updateCardListAction({ commit }, payload) {
    commit('updateCardList', payload);
  },
  deleteCardListAction({ commit }, payload) {
    commit('deleteCardList', payload);
  },
  addTextList({ commit }, data) {
    const api = new ApiFetch('http://localhost:3000/foo', data);
    api.init().then(res => {
      console.log('payload');
      console.log(res);
      commit('textList', res);
    });
  }
};
