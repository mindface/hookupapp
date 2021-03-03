<template>
  <div class="content__lang">
    <p class="text">{{ state.viewText }}</p>
  </div>
  <div class="content__q-pattern">
    <p class="field field--image">
      <label
        for="q-image"
        :class="state.viewRadio01 ? 'active' : ''"
        class="label"
        data-id="1"
        @click="handleRadioEvent"
        >構成イメージを確認する</label
      >
    </p>
    <p class="field field--lang">
      <label
        for="q-lang"
        :class="state.viewRadio02 ? 'active' : ''"
        class="label"
        data-id="2"
        @click="handleRadioEvent"
        >構成を言語化する質問を確認する</label
      >
    </p>
  </div>
  <input type="radio" name="qSelect" id="q-image" />
  <div class="content__image">
    <div class="text-box _flex_">
      <div class="base">記憶ベース</div>
      <div class="b-items">
        <p class="b">イメージベース</p>
        <p class="b">言語野ベース</p>
        <p class="b">運動野</p>
      </div>
    </div>
    <div class="text-box _flex_">
      <div class="base">記憶ベース</div>
      <div class="b-items">
        <p class="b">経験や確認したものベース</p>
        <p class="b">言葉の意味</p>
        <p class="b">行動した結果</p>
      </div>
    </div>
    <div class="image-box">
      <img src="@/assets/established−01.png" alt="" />
    </div>
  </div>
  <input type="radio" name="qSelect" id="q-lang" />
  <div class="content__q-p">
    <ul class="q-p--list">
      <li class="q-p__item" data-q="1" @click="handleText">
        決まった行動パターンを持っていますか。
      </li>
      <li class="q-p__item" data-q="2" @click="handleText">
        対象の言葉からイメージや意味を把握できていますか。
      </li>
      <li class="q-p__item" data-q="3" @click="handleText">
        対象の行動と似たモデル行動を利用して、それを確認対象に含めてください。
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

type Items = {
  id: number;
  text: string;
};
type ReactiveType = {
  qItems: Items[];
  viewText: string;
  viewRadio01: boolean;
  viewRadio02: boolean;
};

export default defineComponent({
  name: 'ContentRLang',
  setup(props) {
    const setQItems = [
      {
        id: 1,
        text:
          '連想されるイメージがない場合練習や意識する内容を含めて記憶を蓄積してください。'
      },
      { id: 2, text: '無意識で処理されている結果を確認しています。' },
      {
        id: 3,
        text:
          '過去の経験、記憶からうまく対処できた方法も連想イメージとしてなり得ます。'
      }
    ];
    const state = reactive<ReactiveType>({
      qItems: setQItems,
      viewText:
        '連想されるイメージがない場合練習や意識する内容を含めて記憶を蓄積してください。01',
      viewRadio01: true,
      viewRadio02: false
    });
    const handleText = (event: MouseEvent) => {
      const targetElement = event.target as HTMLDivElement;
      const id = Number(targetElement.dataset.q);
      state.viewText = setQItems[id - 1].text;
    };
    const handleRadioEvent = (event: MouseEvent) => {
      const idElement = event.target as HTMLDivElement;
      const id = idElement.dataset.id;

      state.viewRadio01 = false;
      state.viewRadio02 = false;
      switch (id) {
        case '1':
          state.viewRadio01 = true;
          break;
        case '2':
          state.viewRadio02 = true;
          break;
        default:
          break;
      }
    };

    return {
      state,
      handleText,
      handleRadioEvent
    };
  }
});
</script>

<style scoped lang="scss"></style>
