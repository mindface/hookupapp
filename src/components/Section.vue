<template>
  <section class="l-section">
    <div class="search-box">
      <p class="field _felx_">
        <input
          type="text"
          class="input"
          :value="sendText"
          @input="
            event => {
              sendText = event.target.value;
              reClickAction(event.target.value);
            }
          "
        />
        {{ sendText }}で類義語出力
      </p>
      <ul class="similar-list">
        <li
          class="similar-item"
          v-for="(item, index) in state.textList"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <button @click="clickAction">類義語調査</button>
    </div>
    <div class="add-card-box _flex_">
      <p class="field">
        <input
          type="text"
          name="cardName"
          id="card-name"
          class="input"
          :value="state.addName"
          @input="
            event => {
              sendText = event.target.value;
              setAddDataAction(event.target.value);
            }
          "
        />
      </p>
      <p class="field">
        <label for="field-number" class="label">フィールドナンバー</label>
        <select name="addCard" id="field-number" v-model="state.addGroupNumber">
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
        </select>
      </p>
      <p class="field">
        <button @click="addDataAction">追加</button>
      </p>
    </div>
    <div class="category-box--outer _flex_">
      <div class="category-box">
        <p class="caption" contenteditable="true">フィールド No01 [個人]</p>
        <draggable
          class="dragArea"
          :options="{ group: 'group', animation: 300 }"
          @add="cardUpdateGroupAction($event)"
          group="block"
          :data-groups-id="1"
        >
          <transition-group>
            <div
              class="category-item"
              v-for="element in state.cardList01"
              :key="element.id"
              :data-card-id="element.id"
              :data-group-id="element.groupId"
            >
              <p @blur="cardUpdateTextAction" contenteditable="true">
                {{ element.name }}
              </p>
              <span @click="cardDeleteAction" class="material-icons btn"
                >delete</span
              >
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="category-box">
        <p class="caption" contenteditable="true">フィールド No02 [一般常識]</p>
        <draggable
          class="dragArea"
          :options="{ group: 'group', animation: 300 }"
          @add="cardUpdateGroupAction($event)"
          group="block"
          :data-groups-id="2"
        >
          <transition-group>
            <div
              class="category-item"
              v-for="element in state.cardList02"
              :key="element.id"
              :data-card-id="element.id"
              :data-group-id="element.groupId"
            >
              <p @blur="cardUpdateTextAction" contenteditable="true">
                {{ element.name }}
              </p>
              <span @click="cardDeleteAction" class="material-icons btn"
                >delete</span
              >
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="category-box">
        <p class="caption" contenteditable="true">
          フィールド No03 [コミュニティ]
        </p>
        <draggable
          class="dragArea"
          :options="{ group: 'group', animation: 300 }"
          @change="cardEvent"
          @add="cardUpdateGroupAction($event)"
          group="block"
          :data-groups-id="3"
        >
          <transition-group>
            <div
              class="category-item"
              v-for="element in state.cardList03"
              :key="element.id"
              :data-card-id="element.id"
              :data-group-id="element.groupId"
            >
              <p @blur="cardUpdateTextAction" contenteditable="true">
                {{ element.name }}
              </p>
              <span @click="cardDeleteAction" class="material-icons btn"
                >delete</span
              >
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="category-box">
        <p class="caption" contenteditable="true">
          フィールド No04 [よく利用される意味|
          <a
            href="https://www.jumonji-u.ac.jp/sscs/ikeda/cognitive_bias/cate_d/d_09.html"
            >代表性ヒューリスティック</a
          >]
        </p>
        <draggable
          class="dragArea"
          :options="{ group: 'group', animation: 300 }"
          @change="cardEvent"
          @add="cardUpdateGroupAction($event)"
          group="block"
          :data-groups-id="4"
        >
          <transition-group>
            <div
              class="category-item"
              v-for="element in state.cardList04"
              :key="element.id"
              :data-card-id="element.id"
              :data-group-id="element.groupId"
            >
              <p @blur="cardUpdateTextAction" contenteditable="true">
                {{ element.name }}
              </p>
              <span @click="cardDeleteAction" class="material-icons btn"
                >delete</span
              >
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { VueDraggableNext } from 'vue-draggable-next';
import { ideaCard } from '../store/pt01/interfaces';

type Props = {
  msg: string;
  default: 'rrrrr';
};
type ReactiveType = {
  msg: string;
  addName: string;
  addNumber: number;
  addGroupNumber: number;
  todoList: any;
  textList: any;
  cardList01: any;
  cardList02: any;
  cardList03: any;
  cardList04: any;
};
export default defineComponent({
  name: 'Section',
  components: {
    draggable: VueDraggableNext
  },
  props: {
    msg: String
  },
  setup(_, context) {
    function reList(data: ideaCard[], idNumber: number) {
      const reList: ideaCard[] = [];
      data.map((item, index) => {
        if (item.groupId === idNumber) {
          reList.push(item);
        }
      });
      return reList;
    }

    const store = useStore();
    const state = reactive<ReactiveType>({
      msg: 'hello',
      addName: 'hello',
      addNumber: 17,
      addGroupNumber: 1,
      todoList: computed(() => store.state.todoList),
      textList: computed(() => store.state.textList),
      cardList01: computed(() => {
        return reList(store.state.cardList, 1);
      }),
      cardList02: computed(() => {
        return reList(store.state.cardList, 2);
      }),
      cardList03: computed(() => {
        return reList(store.state.cardList, 3);
      }),
      cardList04: computed(() => {
        return reList(store.state.cardList, 4);
      })
    });
    let text = 'input';
    onMounted(() => {
      console.log(store.state.todoList);
    });
    // onUpdated( () => {
    // });
    const reClickAction = (e: string) => {
      text = e;
    };
    const clickAction = () => {
      store.dispatch('addTextList', { text });
    };
    const cardUpdateGroupAction = (event: any) => {
      const eventItemElement = event.item;
      const cardId = Number(eventItemElement.dataset.cardId);
      const groupsId = Number(event.to.dataset.groupsId);
      const name = eventItemElement.innerHTML;
      const eventData = {
        groupsId: groupsId,
        cardId: cardId,
        name: name,
        type: 'group'
      };
      store.dispatch('updateCardListAction', eventData);
    };
    const cardUpdateTextAction = (event: any) => {
      const inputElement = event.target;
      const cardId = Number(inputElement.parentNode.dataset.cardId);
      const groupsId = Number(inputElement.parentNode.dataset.groupId);
      const name = inputElement.innerHTML;
      const eventData = {
        groupsId: groupsId,
        cardId: cardId,
        name: name,
        type: 'text'
      };
      store.dispatch('updateCardListAction', eventData);
    };
    const cardDeleteAction = (event: any) => {
      const targetElement = event.target;
      const cardId = targetElement.parentNode.dataset.cardId;
      store.dispatch('deleteCardListAction', cardId);
      targetElement.parentNode.remove();
    };
    const setAddDataAction = (value: string) => {
      state.addName = value;
    };
    const addDataAction = () => {
      const sendData = {
        name: state.addName,
        id: state.addNumber,
        groupId: Number(state.addGroupNumber)
      };
      store.dispatch('addCardListAction', sendData);
      state.addNumber++;
    };
    return {
      state,
      clickAction,
      cardUpdateGroupAction,
      cardUpdateTextAction,
      cardDeleteAction,
      setAddDataAction,
      addDataAction,
      reClickAction
    };
  },
  data() {
    return {
      sendText: 'input',
      options: {
        animation: 200
      },
      enabled: true,
      dragging: false,
      sendId: 0
    };
  },
  methods: {
    // changer(event:any){
    //   console.log(event);
    // },
    cardEvent(event: any) {
      if (event.added) {
        this.sendId = event.added.element.id;
      }
    },
    draggableEnd(_event: any) {
      const selectElement = _event.target as HTMLElement;
      const selectId = selectElement.dataset.groupsId;
      console.log(selectId);
    },
    moveEnd(event: any) {
      console.log('event');
      const cardId = event.to.lastElementChild.dataset.cardId;
      console.log(cardId);
      console.log(event.to.dataset.groupsId);
    },
    textChange(_event: MouseEvent) {
      const parentElement = _event.target as HTMLElement;
      //   const id = parentElement.dataset.cardId
      //   console.log(id);
    }
  }
});
</script>

<style scoped lang="scss"></style>
