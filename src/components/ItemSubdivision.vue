<template>
  <div class="content__subdivision">
    <h3 class="subdivision-title">問題の細分化[フィールド-1]</h3>
    <div class="subdivision">
      <draggable
        tag="ul"
        class="subdivision-list _flex_"
        :options="{ group: 'group', animation: 300 }"
        @change="cardEvent"
        @add="cardUpdateGroupAction($event)"
        group="block"
        :data-groups-id="3"
      >
        <transition-group>
          <li
            class="subdivision-item"
            v-for="element in state.conceptTextList"
            :key="element.id"
            :data-card-id="element.id"
            :data-group-id="element.groupId"
          >
            <h3 class="caption" contenteditable="true">{{ element.title }}</h3>
            <p class="text" @blur="cardUpdateTextAction" contenteditable="true">
              {{ element.text }}
            </p>
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted  } from 'vue';
import { useStore } from 'vuex';
import { VueDraggableNext } from 'vue-draggable-next';
import { conceptTextList } from '../store/pt01/interfaces';

type ReactiveType = {
  conceptTextList: any;
};

export default defineComponent({
  name: 'ItemSubdivision',
   components: {
    draggable: VueDraggableNext
  },
  setup(_, context) {
    const store = useStore();
    const state = reactive<ReactiveType>({
      conceptTextList: computed( () => { return store.getters.conceptTextList; })
    });
    const cardEvent = () => {
      console.log("test");
    };
    return {
      state,
      cardEvent
    }
  }
});
</script>

<style scoped lang="sass"></style>
