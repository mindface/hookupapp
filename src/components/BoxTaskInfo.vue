<template>
  <div class="content--fixed-bottom" :class="state.isOn ? 'fade' : ''">
    <div class="fade-btn" @click="fadeAction">
      <span class="material-icons">
        keyboard_arrow_down
      </span>
    </div>
    <div class="content--body">
      <div class="content__task-info">
        <div class="task-info _flex_">
          <div class="field">
            <label for="timeTool" class="label">
              <span class="ja">1つのサイクルの使用時間</span>
              <span class="en">time</span>
            </label>
            <br />
            <input type="number" name="timeTool" id="timeTool" v-model="state.timeTool" />
          </div>
          <div class="field">
            <label for="numberExecutions" class="label">
              <span class="ja">解決方法の実行数</span>
              <span class="en">Number of executions</span>
            </label>
            <br />
            <input type="number" name="numberExecutions" id="numberExecutions" v-model="state.numberExecutions" />
          </div>
          <div class="field">
            <label for="numberAchievement" class="label">
              <span class="ja">目的の達成数</span>
              <span class="en">Number of achievement</span>
            </label>
            <br />
            <input type="number" name="numberAchievement" id="numberAchievement" v-model="state.timeTool" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { editConceptTextList } from '../store/pt01/interfaces';

type ReactiveType = {
  isOn: boolean;
  editConceptTextList: editConceptTextList[];
  timeTool: any;
  numberExecutions: any;
  numberAchievement: any;
};

export default defineComponent({
  name: 'BoxTaskInfo',
  setup() {
    const store = useStore();
    const state = reactive<ReactiveType>({
      isOn: true,
      editConceptTextList: store.state.editConceptTextList,
      timeTool: computed(() => {
        return store.state.editConceptTextList[0].timeTool
      }),
      numberExecutions: computed(() => {
        return store.state.editConceptTextList[0].numberExecutions
      }),
      numberAchievement: computed(() => {
        return store.state.editConceptTextList[0].numberAchievement
      }),
    });
    const fadeAction = () => {
      state.isOn = !state.isOn;
    };
    return {
      state,
      fadeAction
    };
  }
});
</script>

<style scoped lang="scss"></style>
