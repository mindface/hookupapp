import { State } from './interfaces';

const list = [
  { name: 'John01', id: 1, groupId: 1 },
  { name: 'Joao01', id: 2, groupId: 1 },
  { name: 'Jean01', id: 3, groupId: 1 },
  { name: 'Gerard01', id: 4, groupId: 1 },
  { name: '評価形成', id: 5, groupId: 2 },
  { name: '意味', id: 6, groupId: 2 },
  { name: '抽象性', id: 7, groupId: 2 },
  { name: 'フィールド', id: 8, groupId: 2 },
  { name: 'John', id: 9, groupId: 3 },
  { name: 'Joao', id: 10, groupId: 3 },
  { name: 'Jean', id: 11, groupId: 3 },
  { name: 'Gerard', id: 12, groupId: 3 },
  { name: 'John', id: 13, groupId: 4 },
  { name: 'Joao', id: 14, groupId: 4 },
  { name: 'Jean', id: 15, groupId: 4 },
  { name: 'Gerard', id: 16, groupId: 4 }
];

const textList = [
  { id: 1, groupId: 1, title: 'ex) タスク量が多い', text: '現状のタスク範囲拡大' },
  { id: 2, groupId: 2, title: 'ex) 自動化を行う', text: 'タスク処理の仕様確認' },
  { id: 3, groupId: 3, title: 'ex) 自身のスキル拡大', text: '調査範囲と現状の方法を言語化して確立' },
  { id: 4, groupId: 4, title: 'ex) プログラムスキル', text: 'python | Rust | ツールのアプリケーションを調査' },
];

const editConceptTextList = [{
    id: 1,
    actionDo: 'add text',
    actionInformatization: 'add text',
    actionGathering: 'add text',
    analysisInterpretation: 'add text',
    analysisObservation: 'add text',
    analysisImageModel: 'add text',
    categorizeMeanField: 'add text',
    categorizeEnvironment: 'add text',
    categorizeMeanReMake: 'add text',
    categorizeMoveLevel: 'add text',
    timeTool: 1,
    numberExecutions: 1,
    numberAchievement: 1,
  }];

export const state: State = {
  todoList: [{ id: 0, text: 'ttttt' }],
  cardList: list,
  textList: ['類義語が存在すれば出力されます。'],
  conceptTextList: textList,
  editConceptTextList: editConceptTextList,
};
