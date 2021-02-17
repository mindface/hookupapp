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
          <h3 class="content-title">環境因子の言語化</h3>
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
          <div class="number">{{endPhaseNumber}}</div>
        </div>
        <div class="total-task">
          <span class="number-aid">Check task</span>
          <div class="number"><span class="aid">Total Number</span>{{phaseTotalNumber}}</div>
        </div>
      </div>
    </section>
    <article class="classter__data">
      <div class="cards-box__header">
        <div class="content _flex_">
          <div class="contents-card__modal-block">
            <modal
              modal-type="'edit'"
              ref="editItem"
             >
               <template slot="header">
                 <div class="header__title">
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
       <section class="cards-box__body">
         <div
         v-if="!cardBlockViewSwitch"
         class="post-card-blocks-outer">
          <div class="outer-header">
             <h3 class="caption">環境
               <span class="aid">Environment</span>
             </h3>
          </div>
          <div class="post-card-blocks">
            <draggable
              :options="{group:'group',animation:300}"
              group="block"
              @end="draggableEnd"
              class="post-card-block _flex_"
              data-group="1"
            >
              <div class="post-card"
                v-for="item in flow02"
                :key="item.id"
                :data-post="item.guropsnumber"
                :data-post-id="item.id"
                :data-post-category="item.category"
              >
               <div class="card-face">
                 <h4 class="mean-detail">
                   <span class="aid">{{ item.flow }}</span>
                 </h4>
                  <h3 class="post-card__title">
                    {{ item.title }}
                  </h3>
                  <div class="post-card__text" v-if="false && item.body">
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
              </div>
            </draggable>
          </div>
        </div>
       </section>
       <section class="cards-box__body">
       <div class="body-face">
         <div
         v-if="!cardBlockViewSwitch"
         class="post-card-blocks-outer">
           <div class="outer-header">
              <h3 class="caption">時間への関与
                <span class="aid">Time Involvement</span>
              </h3>
           </div>
           <div class="post-card-blocks">
             <draggable
               :options="{group:'group',animation:300}"
               group="block"
               @end="draggableEnd"
               class="post-card-block _flex_"
               data-group="2"
             >
               <div class="post-card"
                 v-for="item in flow03"
                 :key="item.id"
                 :data-post="item.guropsnumber"
                 :data-post-id="item.id"
                 :data-post-category="item.category"
               >
                <div class="card-face">
                  <h4 class="mean-detail">
                    <span class="aid">{{ item.flow }}</span>
                  </h4>
                   <h3 class="post-card__title">
                     {{ item.title }}
                   </h3>
                   <div class="post-card__text" v-if="false && item.body">
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
               </div>
             </draggable>
           </div>
         </div>
       </div> 
       </section>
       <section class="cards-box__body">
       <div class="body-face">
         <div
         v-if="!cardBlockViewSwitch"
         class="post-card-blocks-outer">
           <div class="outer-header">
              <h3 class="caption">記憶とツールの検索範囲
                <span class="aid">Search Area</span>
              </h3>
           </div>
           <div class="post-card-blocks">
             <draggable
               :options="{group:'group',animation:300}"
               group="block"
               @end="draggableEnd"
               class="post-card-block _flex_"
               data-group="3"
             >
               <div class="post-card"
                 v-for="item in flow01"
                 :key="item.id"
                 :data-post="item.guropsnumber"
                 :data-post-id="item.id"
                 :data-post-category="item.category"
               >
               <div class="card-face">
                 <h4 v-if="false" class="mean-detail">
                   <span class="aid">{{ item.flow }}</span>
                 </h4>
                  <h3 class="post-card__title">
                    {{ item.title }}
                  </h3>
                  <div class="post-card__text" v-if="false && item.body">
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
               </div>
             </draggable>
           </div>
          </div>
        </div>
        </section>
        <PostCardBlock
          v-if="cardBlockViewSwitch"
          :dataType="dataType"
         />
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
  name: 'PostCardsFacePattern',
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
      endPhaseNumber: 0,
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
      return sdata
    },
    phaseTotalNumber(){
      let data = []
      switch(this.dataType){
        case 'level':
          data = this.postDate ? this.postDate.length : 0
          this.endPhaseNumber = this.endCardsCounter(this.postDate).length
        break;
        case 'state':
          data = this.statedDate ? this.statedDate.length : 0
          this.endPhaseNumber = this.endCardsCounter(this.statedDate).length
        break;
        case 'face_pattern':
          data = this.facePatternDate ? this.facePatternDate.length : 0
          this.endPhaseNumber = this.endCardsCounter(this.facePatternDate).length
        break;
      }
      return data
    },
    flow01(){
      let data = []
      switch(this.dataType){
        case 'level':
          data = this.postDate ? this.postDistribution(this.postDate ,1) : []
        break;
        case 'state':
          data = this.statedDate ? this.postDistribution(this.statedDate ,1) : []
        break;
        case 'face_pattern':
          data = this.facePatternDate ? this.postDistribution(this.facePatternDate ,1) : []
        break;
      }
      return data
    },
    flow02(){
      let data = []
      switch(this.dataType){
        case 'level':
          data = this.postDate ? this.postDistribution(this.postDate ,2) : []
        break;
        case 'state':
          data = this.statedDate ? this.postDistribution(this.statedDate ,2) : []
        break;
        case 'face_pattern':
          data = this.facePatternDate ? this.postDistribution(this.facePatternDate ,2) : []
        break;
      }
      return data
    },
    flow03(){
      let data = []
      switch(this.dataType){
        case 'level':
          data = this.postDate ? this.postDistribution(this.postDate ,3) : []
        break;
        case 'state':
          data = this.statedDate ? this.postDistribution(this.statedDate ,3) : []
        break;
        case 'face_pattern':
          data = this.facePatternDate ? this.postDistribution(this.facePatternDate ,3) : []
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
    endCardsCounter(data){
      let data_face = []
      data.map( (value, index) => {
        if(value.guropsnumber === 4){
          data_face.push(value)
        }
      })
      return data_face
      
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
      this.$store.dispatch('postGroupUpdate',data)
    },
    selectPostData(string){
      this.cardBlockViewSwitch = !this.cardBlockViewSwitch
    }
  },
}
</script>

<style scoped lang="sass">
@import '../../core/styles/mixin';
@import '../styles/contents-boxs-header';
@import '../styles/contents-boxs-face-pattern';
@import '../../core/styles/transition-animation';

</style>
