import { DefineMutations } from 'vuex-type-helper';
import { Mutations, State, ideaCard, conceptTextList } from './interfaces';

export const mutations: DefineMutations<Mutations, State> = {
  addTodoList(state, data) {
    state.todoList.push(data);
  },
  addCardList(state, data: any) {
    state.cardList.push(data);
  },
  deleteCardList(state, id: number) {
    const reData: ideaCard[] = [];
    state.cardList.map(item => {
      if (item.id !== id) {
        reData.push(item);
      }
    });
    state.cardList = reData;
  },
  updateCardList(state, data) {
    const reData = state.cardList.map((item, index) => {
      if (data.type === 'group' && item.id === data.cardId) {
        item.groupId = data.groupsId;
        return item;
      }
      if (data.type === 'text' && item.id === data.cardId) {
        item.name = data.name;
        return item;
      }
      return item;
    });
    state.cardList = reData;
  },
  cardList(state, data: any) {
    state.cardList = data;
  },
  textList(state, data: any) {
    state.textList.push(data);
  },
  conceptTextList(state, data: any) {
    state.conceptTextList.push(data);
  },
  editConceptTextList(state, data: any) {
    state.conceptTextList.push(data);
  }
};
