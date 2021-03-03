<template>
  <div class="content">
    <div class="content--body" :data-tab-box="state.tabNumber" >
      <div class="content__tab">
        <button class="btn" data-tab="1" @click="tabAction">行動設計</button>
        <button class="btn" data-tab="2" @click="tabAction">分析</button>
        <button class="btn" data-tab="3" @click="tabAction">問題の細分化</button>
        <button class="btn" data-tab="4" @click="tabAction">評価の再構成</button>
      </div>
      <div class="content__tab-boxs">
        <ContentsTab :tab-id="state.tabNumber" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';
import ContentsTab from '@/components/ContentsTab.vue';

type ReactiveType = {
  tabNumber: number;
};

export default defineComponent({
  name: 'ContentsVerbalizing',
  components: {
    ContentsTab
  },
  setup(props) {
    const state = reactive<ReactiveType>({
      tabNumber: 1
    });
    const tabAction = (event: MouseEvent) => {
      const targetElement = event.target as HTMLButtonElement
      const fadeId = Number(targetElement.dataset.tab);
      state.tabNumber = fadeId;
    }
    return {
      state,
      tabAction
    };
  }
});
</script>

<style scoped lang="scss"></style>
