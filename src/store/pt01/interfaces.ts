
export interface UpdateCardData {
  groupsId: number;
  cardId: number;
  type: string;
  name: string;
}

export interface ideaCard {
  name: string;
  id: number;
  groupId: number;
}

export interface conceptTextList {
  id: number;
  groupId: number;
  title: string;
  text: string;
}

export interface editConceptTextList {
  id: number;
  actionDo: string;
  actionInformatization: string;
  actionGathering: string;
  analysisInterpretation: string;
  analysisObservation: string;
  analysisImageModel: string;
  categorizeMeanField: string;
  categorizeEnvironment: string;
  categorizeMeanReMake: string;
  categorizeMoveLevel: string;
  timeTool: number;
  numberExecutions: number;
  numberAchievement: number;
}

export interface State {
  todoList: object[];
  cardList: ideaCard[];
  textList: string[];
  conceptTextList: conceptTextList[];
  editConceptTextList: editConceptTextList[];
}

export interface Getters {
  addTodoList: object[];
  cardList: ideaCard[];
  textList: string[];
  conceptTextList: conceptTextList[];
  editConceptTextList: editConceptTextList[];
}

export interface Mutations {
  addTodoList: object[];
  addCardList: ideaCard[];
  deleteCardList: number;
  updateCardList: UpdateCardData;
  cardList: ideaCard[];
  textList: object[];
  conceptTextList: conceptTextList[];
  editConceptTextList: editConceptTextList[];
}

export interface Actions {
  addTodoListAction: object[];
  getCardListAction: ideaCard[];
  addCardListAction: ideaCard[];
  updateCardListAction: UpdateCardData;
  deleteCardListAction: number;
  addTextList: string[];
  getConceptTextListAction: conceptTextList[];
  getEditConceptTextListAction: editConceptTextList[];
}
