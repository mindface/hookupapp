<template>
<div class="post-card-box end-process _flex_">
  <post-card-view
    v-if="cardViewSwitch"
    @closeEvent="cardViewClose"
    :post-id="editPostId"
    :post-category="editPostCategory"
  />
  <article class="contents-box">
    <div class="contents-model-edit">
      <div class="content _flex_">
        <div class="contents-card__modal-block">
          <modal
            modal-type="'edit'"
            ref="editItem"
           >
            <template slot="header">
              <div class="header__title">
                <h3 class="title">THINK Update</h3>
              </div>
            </template>
            <template slot="body">
              <post-card-edit
                :post-id="editPostId"
                :post-category="editPostCategory"
              />
            </template> 
            <template slot="footer"></template>
          </modal>
        </div>
      </div>
    </div>
    <div class="_flex_">
      <div class="post-card-blocks limit-none">
        <h3 class="blocks__title">実行終了プロセス</h3>
        <draggable
          :options="{group:'group',animation:300}"
          group="block"
          @end="draggableEnd"
          class="post-card-block"
          data-group="4"
        >
          <div class="post-card post-card--long" v-for="item in flow04"
            :key="item.id"
            :data-post="item.guropsnumber"
            :data-post-id="item.id"
            :data-post-category="item.category"
          >
            <h3 class="post-card__title">
              {{ item.title }}
            </h3>
            <div v-if="false && item.body" class="post-card__text">
              {{ item.body.slice(0,45) }}...
            </div>
            <div class="post-card__category">
              <span class="aid">
                {{ item.id ? item.flow : 'none' }}
              </span>
            </div>
            <div class="post-card__btn" v-if="item.id" >
              <post-card-btns
                @edit="cardEdit"
                @view="cardView"
                @delete="cardDelete"
                :item-id="item.id"
                :item-typer="item.category"
              />
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </article>
</div>
</template>
<script>
import Vue from 'vue'

import {mapActions,mapGetters} from 'vuex'
import draggable from 'vuedraggable'
import Confirm from '../../core/compornents/Confirm.vue'
import PostCardBtns from './PostCardBtns.vue'
import PostCardEdit from './PostCardEdit.vue'
import PostCardView from './PostCardView.vue'
import Modal from './Modal.vue'

export default {
  name: 'PostCardBlock',
  data () {
    return {
      cardsData: {
        part1:[],
        part2:[],
        part3:[],
      },
      message: "console",
      deleteData: false,
      phaseNumber: 1,
      selectCategory: "no",
      groups: [],
      editPostId: 0,
      editPostCategory: 'level',
      cardViewSwitch: false
    }
  },
  components:{
    draggable,
    Confirm,
    PostCardBtns,
    Modal,
    PostCardEdit,
    PostCardView,
  },
  props :{
    dataType :{
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      postDate:"postDate",
      facePatternDate:"facePatternDate",
      statedDate:"statedDate",
    }),
    selectData() {
      const sdata = [
        "認識ベース処理",
        "思考プロセスベース",
        "フローベース",
        "実行の検証ベース",
        "検証の状態管理フロー"
      ]
        // "Level : 改造構造",
        // "State : ヒューリティクス",
        // "face patterns : パタン処理",
      return sdata
    },
    flow04(){
      let data = []
      switch(this.dataType){
        case 'level':
          data = this.postDate ? this.postDistribution(this.postDate ,4) : []
        break;
        case 'state':
          data = this.statedDate ? this.postDistribution(this.statedDate ,4) : []
        break;
        case 'face_pattern':
          data = this.facePatternDate ? this.postDistribution(this.facePatternDate ,4) : []
        break;
      }
      return data
    }
  },
  async mounted() {
    await this.$store.dispatch('levelSettings')
    await this.$store.dispatch('facePatternsSettings')
    await this.$store.dispatch('stateSettings')
    await this.$store.dispatch('stateSettings')
    this.$nextTick(function(){})
  },
  methods: {
    ...mapActions({
      getPostItemDelete:"planing/getPostItemDelete",
      getPostItem: "planing/getPostItem："
    }),
    baseFlowDatePath(selectId){
      switch(selectId){
        case 2:
          return "level";
        case 3:
          return "state";
        default:
          return "face_pattern";
      }
    },
    postDistribution( data, number){
     let mapData
     if(data.length > 0){
       mapData = data.map(value => {
         if(value.guropsnumber === number){
           return value
         }
       })
     } else {
       mapData = []
     }
     return mapData.filter(Boolean)
    },
    cardEdit(cardData){
      this.editPostId = cardData.id
      this.editPostCategory = cardData.category
      this.$refs.editItem.modalAction()
    },
    cardView(cardData){
      this.editPostId = cardData.id
      this.editPostCategory = cardData.category
      this.$store.dispatch('getPostItem',{ basePost: cardData.category,postId: cardData.id })
      this.cardViewSwitch = !this.cardViewSwitch
    },
    cardDelete(cardData){
      const _this = this
      let co = Vue.extend(Confirm)
      let instance = new co({
        propsData: {
          postId: cardData.id,
          editPostCategory: cardData.category,
          methodsName: 'cardConfirm',
        },
        methods: {
          cardConfirm() {
            _this.$store.dispatch('getPostItemDelete',{ basePost: cardData.category,postId: cardData.id })
          }
        }
      }).$mount()
      this.$root.$el.appendChild(instance.$el)
    },
    cardViewClose(){
      this.cardViewSwitch = false
    },
    draggableEnd(e){
      const selectId = this.baseFlowDatePath(e.item.dataset.group)
      const data = {
        basePost: e.item.dataset.postCategory,
        movePath: selectId,
        postId: e.item.dataset.postId,
        moveId: e.item.dataset.postId,
        createData: { [e.item.dataset.postCategory] : {
         guropsnumber: e.to.dataset.group
      }}}
      // console.log(e.item)
      // console.log(e.to.dataset.group)
      // console.log(e.item.dataset.postId)
      this.$store.dispatch('postGroupUpdate',data)
    },
    selectPostData(string){
    }
  },
}
</script>

<style scoped lang="sass">
@import '../../core/styles/mixin';
@import '../styles/contents-card';
@import '../styles/contents-boxs';
@import '../../core/styles/transition-animation';

</style>
