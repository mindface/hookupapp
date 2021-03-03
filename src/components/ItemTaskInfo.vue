<template>
<div class="content__task-info">
  <div class="task-info">
      <ul class="info-list _flex_">
        <li class="info-item">
          <h4 class="caption">テキスト数の情報量</h4>
          <div class="result-box"><span class="number">{{ state._textTotallNumber  }}</span>数</div>
          <div class="detail">入力できる情報量の全ての文字数</div>
        </li>
        <li class="info-item">
          <h4 class="caption">情報量の精度</h4>
          <div class="result-box"><span class="number">{{ state._textEvaluationRate  }}</span>%</div>
          <div class="detail">目的の達成数と情報量(テキスト数)を100で割った数値</div>
        </li>
        <li class="info-item">
          <h4 class="caption">達成率</h4>
          <div class="result-box"><span class="number">{{ state._achievementRate  }}</span>%</div>
          <div class="detail">実行数 / 達成数</div>
        </li>
        <li class="info-item">
          <h4 class="caption">テキストが持つ評価率</h4>
          <div class="result-box"><span class="number">{{ state._accuracyInfo  }}</span>%</div>
          <div class="detail">情報量の精度 / 達成率</div>
        </li>        
        <li class="info-item">
          <h4 class="caption">検証スパン</h4>
          <div class="result-box"><span class="number">{{ state._spanTime  }}</span>分</div>
          <div class="detail">1つの検証することに利用した時間の平均値</div>
        </li>
        <li class="info-item">
          <h4 class="caption">検証概念</h4>
          <div class="detail">実行方法、物体の解釈、教えてもらった方法、カテゴリごとの処理</div>
        </li>
        <li class="info-item info-item--wide">
          <h4 class="caption">言語化される単位の規定</h4>
          <div class="result-box">
            <p class="text"><span class="status">現状</span><span class="current-status" contenteditable="true">企業</span></p>
          </div>
          <div class="detail">1つの検証することに利用した時間の平均値</div>
        </li>
      </ul>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted  } from 'vue';
import { useStore } from 'vuex';
import { editConceptTextList } from '../store/pt01/interfaces';

type Props = {
  msg: string;
};

type ReactiveType = {
  editConceptTextList: editConceptTextList[];
  _textTotallNumber: number;
  _spanTime: number;
  _achievementRate: number;
  _textEvaluationRate: number;
  _accuracyInfo: number;
}

export default defineComponent({
  name: 'ItemTaskInfo',
  props: {
    text: String
  },
  setup(_, context) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      editConceptTextList: store.state.editConceptTextList,
      _textTotallNumber: 0,
      _spanTime: 0,
      _achievementRate: 0,
      _textEvaluationRate: 0,
      _accuracyInfo: 0
    });

    const textNumber = (text:string) => {
      return text.length
    };
    
    const totalCounter = () => {
      let _textTotallNumber = 0;
      _textTotallNumber += textNumber(state.editConceptTextList[0].actionDo);
      _textTotallNumber += textNumber(state.editConceptTextList[0].actionInformatization);
      _textTotallNumber += textNumber(state.editConceptTextList[0].actionGathering);
      _textTotallNumber += textNumber(state.editConceptTextList[0].analysisInterpretation);
      _textTotallNumber += textNumber(state.editConceptTextList[0].analysisObservation);
      _textTotallNumber += textNumber(state.editConceptTextList[0].analysisImageModel);
      _textTotallNumber += textNumber(state.editConceptTextList[0].categorizeMeanField);
      _textTotallNumber += textNumber(state.editConceptTextList[0].categorizeEnvironment);
      _textTotallNumber += textNumber(state.editConceptTextList[0].categorizeMeanReMake);
      _textTotallNumber += textNumber(state.editConceptTextList[0].categorizeMoveLevel);
      return Number(_textTotallNumber);
    };

    const spanTime = () => {
      let _number = 0;
      _number = store.state.editConceptTextList[0].timeTool / store.state.editConceptTextList[0].numberExecutions;
      return _number;
    };

    const achievementRate = () => {
      let _number = 0;
      _number = store.state.editConceptTextList[0].numberAchievement / store.state.editConceptTextList[0].numberExecutions;
      return _number;
    };

    const textEvaluationRate = () => {
      let _number = 0;
      _number =  store.state.editConceptTextList[0].numberExecutions / state._achievementRate;
      return _number;
    };

    const accuracyInfo = () => {
      let _number = 0;
      _number = Number(state._achievementRate) / Number(state._textTotallNumber)
      return _number * 100;
    };


    onMounted( () => {
      state._textTotallNumber = totalCounter();
      state._spanTime = spanTime();
      state._achievementRate = achievementRate();
      state._textEvaluationRate = textEvaluationRate();
      state._accuracyInfo = accuracyInfo();
    });

    return {
      state,
      accuracyInfo,
      textEvaluationRate
    }
  }
});
</script>

<style scoped lang="sass"></style>
