import { DefineGetters } from 'vuex-type-helper';
import { Getters, State } from './interfaces';

export const getters: DefineGetters<Getters, State> = {
  addTodoList: state => {
    return state.todoList;
  },
  cardList: state => {
    return state.cardList;
  },
  textList: state => {
    return state.textList;
  },
  conceptTextList: state => {
    return state.conceptTextList;
  },
  editConceptTextList: state => {
    return state.editConceptTextList;
  }
};
