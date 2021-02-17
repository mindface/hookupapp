<template>
<div class="post-card-box _flex_">
  <article class="contents-card" v-if="postDate.length > 0">
    <div class="contents-card__modal-block">
      <modal>
        <template slot="header">
          <div class="header__title">
            <h3 class="title">HOME THINK</h3>
          </div>
        </template>
        <template slot="body">
          <postCardEdit card-type="home">
          </postCardEdit>
        </template> 
        <template slot="footer">
        </template>
      </modal>
    </div>
    <draggable
      :options="{animation:300}"
      group="block"
      @end="draggableEnd"
      class="post-card-block"
    >
      <div class="post-card" v-for="(item,id) in postDate" :data-id="item.id">
        <h3 class="post-card__title">
          {{ item.title }}
        </h3>
        <div class="post-card__text" v-if="item.body">
          {{ item.body.slice(0,15) }}...
          /{{item.categorynumber}}/
        </div>
        <div class="post-card__category">
          <span class="aid">
            {{ item.id ? selectData[item.categorynumber] : 'none' }}
          </span>
        </div>
        <div class="" v-if="item.id" >
          <post-card-btns
            :itemid="item.id"
          >
          </post-card-btns>
        </div>
      </div>
    </draggable>
  </article>
  <article class="contents-card" v-if="faceDate.length > 0">
    <div class="contents-card__modal-block">
      <modal>
        <template slot="header">
          <div class="header__title">
            <h3 class="title">FACE THINK</h3>
          </div>
        </template>
        <template slot="body">
          <postCardEdit card-type="face">
          </postCardEdit>
        </template> 
        <template slot="footer">
        </template>
      </modal>
    </div>
    <draggable
     :options="{animation:300}"
     group="block"
     @end="draggableEnd"
     class="post-card-block"
    >
      <div class="post-card" v-for="(item,id) in faceDate" :data-id="item.id">
        <h3 class="post-card__title">
          {{ item.title }}
        </h3>
        <div class="post-card__text" v-if="item.body">
          {{ item.body.slice(0,15) }}...
          /{{item.categorynumber}}/
        </div>
        <div class="post-card__category">
          <span class="aid">
            {{ item.id ? selectData[item.categorynumber] : 'none' }}
          </span>
        </div>
        <div class="" v-if="item.id" >
          <post-card-btns :itemid="item.id">
          </post-card-btns>
        </div>
      </div>
    </draggable>
  </article>
  <article class="contents-card" v-if="endedDate.length > 0">
    <div class="contents-card__modal-block">
      <modal>
        <template slot="header">
          <div class="header__title">
            <h3 class="title">ENDED THINK</h3>
          </div>
        </template>
        <template slot="body">
          <postCardEdit card-type="ended">
          </postCardEdit>
        </template> 
        <template slot="footer">
        </template>
      </modal>
    </div>
    <draggable
      :options="{animation:300}"
      group="block"
      @end="draggableEnd"
      class="post-card-block"
    >
      <div class="post-card" v-for="(item,id) in endedDate" :data-id="item.id">
        <h3 class="post-card__title">
          {{ item.title }}
        </h3>
        <div class="post-card__text" v-if="item.body">
          {{ item.body.slice(0,15) }}...
          /{{item.categorynumber}}/
        </div>
        <div class="post-card__category">
          <span class="aid">
            {{ item.id ? selectData[item.categorynumber] : 'none' }}
          </span>
        </div>
        <div class="" v-if="item.id" >
          <post-card-btns
            :itemid="item.id"
          >
          </post-card-btns>
        </div>
      </div>
    </draggable>
  </article>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import draggable from 'vuedraggable'
import PostCardBtns from './PostCardBtns.vue'
import PostCardEdit from './PostCardEdit.vue'
import Modal from './Modal.vue'

export default {
  name: 'PostCardOuter',
  data () {
    return {
      eventAction: {},
      message: "console",
      selectCategory: "no",
      groups: []
    }
  },
  components:{
    draggable,
    postCardBtns,
    modal,
    postCardEdit
  },
  props :{
    dataBase :{
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      postDate:"postDate",
      faceDate:"faceDate",
      endedDate:"endedDate"
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
    baseFlowDate(){
      const data = ['face','home','ended']
      return data
    }
  },
  async mounted() {
    await this.$store.dispatch('homeSettings')
    await this.$store.dispatch('faceSettings')
    await this.$store.dispatch('endedSettings')
   this.$nextTick(function(){
   })
  },
  methods: {
    ...mapActions({
      // postDate:"planing/postDate"
    }),
    draggableEnd(e){
      console.log(e)
    }
  },
}
</script>

<style scoped lang="sass">
@import '../styles/contents-card';
@import '../../core/styles/transition-animation';

</style>
