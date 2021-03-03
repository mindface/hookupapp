<template>
  <div :class="`contents contents--tab fade-tab0`+tabId">
    <div class="content tab01">
       <div class="content__title">
         <h3 class="title"><span class="en">Action Design</span>行動設計[オペレーティングで関与できること]</h3>
       </div>
       <div class="content__body">
         <div class="reed">
           <ul class="reed-list list">
             <li class="reed-item item">
               <h3 class="title">計画の実行</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.actionDo }}</p>
               </div>
             </li>
             <li class="reed-item item">
               <h3 class="title">修正に対する情報化</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.actionInformatization }}</p>
               </div>
             </li>
             <li class="reed-item item">
               <h3 class="title">行動ベースの情報収集</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.actionGathering }}</p>
               </div>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div class="content tab02">
       <div class="content__title">
         <h3 class="title"><span class="en">analysis</span>分析</h3>
       </div>
       <div class="content__body">
         <div class="analysis">
           <ul class="analysis-list list">
             <li class="analysis-item item">
               <h3 class="title">状況の解釈</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.analysisInterpretation }}</p>
               </div>
             </li>
             <li class="analysis-item item">
               <h3 class="title">現象の観察</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.analysisObservation }}</p>
               </div>
             </li>
             <li class="analysis-item item">
               <h3 class="title">修正/新規イメージモデルの構築</h3>
               <div class="text-box">
                 <p class="text" contenteditable="true">{{ state.analysisImageModel }}</p>
               </div>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div class="content tab03">
       <div class="content__title">
         <h3 class="title"><span class="en">categorize</span>問題の細分化</h3>
       </div>
       <div class="content__body">
         <div class="reed-categorize">
            <div class="categorize-text">
              問題を区分けして、解決できる範囲と調整が必要な部分のタスクを分ける。
            </div>
            <ul class="categorize-list list">
              <li class="categorize-item item">
                <h3 class="title">問題の範囲規定</h3>
                <div class="text-box">
                  <p class="text" contenteditable="true">{{ state.categorizeMeanField }}</p>
                </div>
              </li>
              <li class="categorize-item item">
                <h3 class="title">環境と思考フィールドの範囲規定</h3>
                <div class="text-box">
                  <p class="text" contenteditable="true">{{ state.categorizeEnvironment }}</p>
                </div>
              </li>
              <li class="categorize-item item">
                <h3 class="title">意味概念の再確認及び、定義範囲をリメイク</h3>
                <div class="text-box">
                  <p class="text" contenteditable="true">{{ state.categorizeMeanReMake }}</p>
                </div>
              </li>
              <li class="categorize-item item">
                <h3 class="title">間接的な問題解決の優先順位変更からタスクレベル移行</h3>
                <div class="text-box">
                  <p class="text" contenteditable="true">{{ state.categorizeMoveLevel }}</p>
                </div>
              </li>
            </ul>
         </div>
       </div>
    </div>
    <div class="content tab04">
       <div class="content__title">
         <h3 class="title"><span class="en">rebuilding</span>評価の再構成</h3>
       </div>
       <div class="content__body">
         <div class="rebuilding">
           <ul class="rebuilding-list list">
             <li class="rebuilding-item item">
               <h3 class="title">目的に対して、環境、方法、調査範囲、プログラムの組み立ての無意識処理</h3>
                <div class="text-box">
                  <p class="text" contenteditable="true">{{ state.categorizeMoveLevel }}</p>
                </div>
             </li>
           </ul>
         </div>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { editConceptTextList } from '../store/pt01/interfaces';

export default defineComponent({
  name: 'ContentsTab',
  components: {
  },
  props: {
    tabId: Number
  },
  setup(_, context) {
    const store = useStore();
    const data = store.state.editConceptTextList[0];
    const state = reactive<editConceptTextList>({
      id: 0,
      actionDo: data.actionDo,
      actionInformatization: data.actionInformatization,
      actionGathering: data.actionGathering,
      analysisInterpretation: data.analysisInterpretation,
      analysisObservation: data.analysisObservation,
      analysisImageModel: data.analysisImageModel,
      categorizeMeanField: data.categorizeMeanField,
      categorizeEnvironment: data.categorizeEnvironment,
      categorizeMeanReMake: data.categorizeMeanReMake,
      categorizeMoveLevel: data.categorizeMoveLevel,
      timeTool: data.timeTool,
      numberExecutions: data.numberExecutions,
      numberAchievement: data.numberAchievement,
    });

    return {
      state
    }
  }
});
</script>

<style scoped lang="scss"></style>
