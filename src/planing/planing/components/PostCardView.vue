<template>
<div class="post-card-view">
  <div class="card-data">
      <div class="attribute">
        <p class="tag">{{ categoryNumber(viewData.categorynumber) }}</p>
        <p class="tag">{{ guropsNumber(viewData.guropsnumber) }}</p>
      </div>
    <h3 class="title">{{ viewData.title }}</h3>
    <div class="sentence" v-html="viewData.body" >
    </div>
    <div class="category">
      <p>{{ viewData.category }}</p>
    </div>
    <div class="flow">
      <p>{{ viewData.flow }}</p>
    </div>
    <div class="close-btn">
      <button class="btn btn--primary" @click="cardViewClose">close</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'PostCardView',
  data () {
    return {
      viewData: {},
    }
  },
  components:{},
  props :{
    postId: {
      type: Number,
      required: true
    },
    postCategory: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      postItemDate:"postItemDate",
    }),
  },
  async mounted() {
    await this.$store.dispatch('getPostItem',{basePost: this.postCategory, postId: this.postId  })
    this.viewData = this.postItemDate
    this.$nextTick(function(){
      console.log(this.postId)
    })
  },
  methods: {
    ...mapActions({
      postCardUpdate:"planing/postCardUpdate"
    }),
    cardViewClose(){
      this.$emit('closeEvent')
    },
    categoryNumber(number){
      switch(number){
        case 1:
          return '認識ベース処理'
          break;
        case 2:
          return '思考プロセスベース'
          break;
        case 3:
          return 'フローベース'
          break;
        case 4:
          return '実行の検証ベース'
          break;
        case 5:
          return '検証の状態管理フロー'
          break;
      }
    },
    guropsNumber(number){
      switch(number){
        case 1:
          return '知覚'
          break;
        case 2:
          return '認識'
          break;
        case 3:
          return '言語処理'
          break;
      }
    }
  },
}
</script>

<style scoped lang="sass">
@import '../styles/contents-card';
@import '../../core/styles/transition-animation';

</style>
