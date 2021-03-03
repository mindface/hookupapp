<template>
  <div class="content--fixed-top measurement" :class=" state.isOn ? 'fade' : '' " >
    <div class="measurement-btn" @click="fadeAction" >
      <span class="material-icons">
        view_module
      </span>
    </div>
    <div class="content--body">
      <div class="content__title">
        <h3 class="title">
          <span class="en">Output result</span>
          <span class="ja">出力結果</span>
        </h3>
      </div>
      <ItemTaskInfo />
      <ItemSubdivision />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';
import ItemTaskInfo from '@/components/ItemTaskInfo.vue';
import ItemSubdivision from '@/components/ItemSubdivision.vue';

type ReactiveType = {
  isOn: boolean;
};

export default defineComponent({
  name: 'BoxMeasurement',
  components: {
    ItemTaskInfo,
    ItemSubdivision
  },
  setup(props) {
    const state = reactive<ReactiveType>({
      isOn: false
    });
    const fadeAction = () => {
       state.isOn = !state.isOn
    };
    return {
      state,
      fadeAction
    }
  }
});
</script>

<style scoped lang="scss"></style>
