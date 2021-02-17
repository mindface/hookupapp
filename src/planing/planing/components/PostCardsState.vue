<template>
<div class="post-card-classter-state _flex_">
  <post-card-view
    v-if="cardViewSwitch"
    @closeEvent="cardViewClose"
    :post-id="editPostId"
    :post-category="editPostCategory"
  />
  <div class="post-card-classter__header">
    <div class="contents-box__header">
      <div class="content">
        <div class="content-body _flex_">
          <h3 class="content-title">概念としての意味状態</h3>
          <p class="content-text">{{ typeText(dataType) }}</p>
          <div class="content-btn _flex_">
            <button @click="selectPostData('endProcesse')" class="btn btn--right-blue">
              <span v-if="!cardBlockViewSwitch">実行終了プロセス</span>
              <span v-else>戻る</span>
            </button>
            <div class="contents-card__modal-block">
              <modal :modal-type="'new'">
                <template slot="header">
                  <div class="block__title">
                    <h3 class="title">新規カードの追加</h3>
                  </div>
                </template>
                <template slot="body">
                  <postCardNew />
                </template> 
                <template slot="footer"></template>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="post-card-box _flex_">
    <section class="classter__data-structure">
      <h3 class="structure__title">Ability assessment<br>of the situation</h3>
      <div class="structure__number">
        <div class="feedback-number">
          <div class="number">{{ this.postDistribution(this.statedDate ,4).length }}</div>
          <div class="text">
            <p class="ja">フィードバック完了数</p>
            <p class="en">Feedback Number</p>
          </div>
        </div>
        <div class="total-task">
          <span class="number-aid">Check task</span>
          <div class="number">{{ this.statedDate.length }}</div>
          <div class="text">
            <p class="ja">全体意味情報</p>
            <p class="en">Total Task</p>
          </div>
        </div>
      </div>
      <ul class="classification-list">
       <li class="classification-item">
         <h4 class="title">新規の発見や変化での変更が予測される意味</h4>
         <div class="graph-box">
           <span class="number _0">0</span>
           <div class="graph">
             <span class="aid" :style="{left:intervalNumber(flow01.length) + '%' }" >{{intervalNumber(flow01.length) + '%'}}</span>
             <div class="graph-item" :style="{width:intervalNumber(flow01.length) + '%' }" ></div>
           </div>
           <span class="number _100">100</span>
         </div>
       </li>
       <li class="classification-item">
         <h4 class="title">現状の意味の概念</h4>
         <div class="graph-box">
           <span class="number _0">0</span>
           <div class="graph">
             <span class="aid" :style="{left:intervalNumber(flow02.length) + '%' }" >{{intervalNumber(flow02.length) + '%'}}</span>
             <div class="graph-item" :style="{width:intervalNumber(flow02.length) + '%' }"></div>
           </div>
           <span class="number _100">100</span>
         </div>
       </li>
       <li class="classification-item">
         <h4 class="title">更新が変更された意味</h4>
         <div class="graph-box">
           <span class="number _0">0</span>
           <div class="graph">
             <span class="aid" :style="{left:intervalNumber(flow03.length) + '%' }" >{{intervalNumber(flow03.length) + '%'}}</span>
             <div class="graph-item" :style="{width:intervalNumber(flow03.length) + '%' }"></div>
           </div>
           <span class="number _100">100</span>
         </div>
       </li>
      </ul>
    </section>
    <article class="classter__data">
      <h3 class="cards-caption">現状の意味構成</h3>
      <div class="cards-box__selector">
        <div class="selector">
          <select @change="selectNumber($event)" name="mean-selector" id="mean-selector" class="select selector--select">
            <option class="selector--option" value="1">予測される意味</option>
            <option class="selector--option" value="2">現状の意味の概念</option>
            <option class="selector--option" value="3">更新が変更された意味</option>
          </select>
        </div>
      </div>
      <div class="cards-box__header">
        <div class="content _flex_">
          <div class="contents-card__modal-block">
            <modal
              modal-type="'edit'"
              ref="editItem"
             >
               <template slot="header">
                 <div class="block__title">
                   <h3 class="title">内容を更新する</h3>
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
       <div class="cards-box__body">
         <div
         v-if="!cardBlockViewSwitch"
         class="post-card-blocks-outer">
          <div class="post-card-blocks">
            <draggable
              :options="{group:'group',animation:300}"
              group="block"
              @end="draggableEnd"
              class="post-card-block"
              data-group="1"
            >
              <div class="post-card"
                v-for="item in stateViewData"
                :key="item.id"
                :data-post="item.guropsnumber"
                :data-post-id="item.id"
                :data-post-category="item.category"
              >
               <h4 class="mean-detail">
                 <span class="aid">{{ item.flow }}</span>
               </h4>
                <h3 class="post-card__title">
                  {{ item.title }}
                </h3>
                <div class="post-card__text" v-if="false && item.body">
                  {{ changeHtml(item.body.slice(0,45)) }}...
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
        <PostCardBlock
          v-if="cardBlockViewSwitch"
          :dataType="dataType"
         />
      </div>
    </article>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import {mapActions,mapGetters} from 'vuex'
import draggable from 'vuedraggable'
import Confirm from '../../core/compornents/Confirm.vue'
import PostCardBtns from './PostCardBtns.vue'
import PostCardEdit from './PostCardEdit.vue'
import PostCardNew from './PostCardNew.vue'
import PostCardView from './PostCardView.vue'
import PostCardBlock from './PostCardBlock.vue'
import Modal from './Modal.vue'

export default {
  name: 'PostCardsState',
  data () {
    return {
      cardsData: {
        part1:[],
        part2:[],
        part3:[],
      },
      stateViewData: [],
      message: "console",
      deleteData: false,
      phaseNumber: 1,
      selectCategory: "no",
      groups: [],
      editPostId: 0,
      editPostCategory: 'level',
      cardViewSwitch: false,
      cardBlockViewSwitch: false
    }
  },
  components: {
    draggable,
    Confirm,
    PostCardBtns,
    Modal,
    PostCardEdit,
    PostCardNew,
    PostCardView,
    PostCardBlock
  },
  props: {
    dataType: {
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
    flow01(){
      return this.statedDate ? this.postDistribution(this.statedDate ,1) : []
    },
    flow02(){
      return this.statedDate ? this.postDistribution(this.statedDate ,2) : []
    },
    flow03(){
      return this.statedDate ? this.postDistribution(this.statedDate ,3) : []
    },
    flow04(){
      let data = []
      data = this.statedDate ? this.postDistribution(this.statedDate ,3) : []
      return data
    },
    reedNumber:{
       get: function(){
       },
       set: function(){}
    }
  },
  async mounted() {
    await this.$store.dispatch('levelSettings')
    await this.$store.dispatch('facePatternsSettings')
    await this.$store.dispatch('stateSettings')
    await this.$store.dispatch('stateSettings')
    this.$nextTick(function(){
      this.selectNumber('1')
    })
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
    selectNumber(e){
      let number = '1'
      if(e.target){
        number = e.target.value
      }
      switch(number){
        case '2':
          this.stateViewData = this.flow02
        break;
        case '3':
          this.stateViewData = this.flow03
        break;
        default:
          this.stateViewData = this.flow01
      }
    },
    intervalNumber(number){
      let num = (number / this.statedDate.length) * 100
      num = Math.round(num*100)/100
      if(!num){
        return 0
      }
      return num
    },
    typeText(text){
      switch(text){
        case 'level':
          return "方法に対する詳細情報化";
        case 'state':
          return "言葉の意味概念の状態";
        default:
          return "方法のモデルのパタン化";
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
      console.log(cardData)
      const _this = this
      let co = Vue.extend(Confirm)
      let instance = new co({
        propsData: {
          postId: cardData.id,
          editPostCategory: cardData.category,
          methodsName: 'cardConfirm',
          type:'delete'
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
      this.cardBlockViewSwitch = !this.cardBlockViewSwitch
    },
    changeHtml(data){
      let d = data
      d = d.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"")
      console.log(d)
      return d
    }
  },
}
</script>

<style scoped lang="sass">
@import '../../core/styles/mixin';
@import '../styles/contents-boxs-header';
@import '../styles/contents-boxs-state';
@import '../../core/styles/transition-animation';

</style>
