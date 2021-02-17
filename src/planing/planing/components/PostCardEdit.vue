<template>
<div class="post-card-box">
  <article class="contents-card-edit" v-if="postData">
    <ul class="contents-card-edit__list">
      <li class="contents-card-edit__item title">
        <input id="edit-01" class="input-title" type="text" v-model="editTitile" >
      </li>
      <li class="contents-card-edit__item detail">
        <label for="edit-02" class="label">情報の詳細概念</label>
        <textarea contenteditable="true" v-model="editBody" id="edit-02" class="textarea"></textarea>
      </li>
      <li class="contents-card-edit__item _flex_">
        <div class="item-part category">
          <label for="edit-03" class="label">情報の詳細概念</label>
          <select id="edit-03" v-model="editCategory" class="select">
            <option selected value="level">01 | 処理方法の言語化</option>
            <option value="state">02 | 概念としての意味状態</option>
            <option value="face">03 | 環境因子の言語化</option>
          </select>
        </div>
        <div class="item-part flow">
          <label for="edit-04" class="label no-arrow">階層構造[状態]</label>
          <input id="edit-04" class="input-flow"  type="text" v-model="editFlow">
        </div>
      </li>
      <li class="contents-card-edit__item _flex_">
        <div class="item-part">
          <label for="edit-05" class="label">カテゴリーパターン</label>
          <select id="edit-05" v-model="editCategoryNumber" class="select">
            <option selected value="1">認識ベース処理</option>
            <option value="2">思考プロセスベース</option>
            <option value="3">フローベース</option>
            <option value="4">実行の検証ベース</option>
            <option value="5">検証の状態管理フロー</option>
          </select>
        </div>
        <div class="item-part">
          <label for="edit-06" class="label">グループナンバー</label>
          <select id="edit-06" v-model="editGuropsNumber" class="select">
            <option selected value="1">知覚</option>
            <option value="2">認識</option>
            <option value="3">言語処理</option>
            <option value="4">実行終了プロセス</option>
          </select>
        </div>
      </li>
      <li class="contents-card-edit__item">
        <button class="btn submit btn--right-blue" @click="dataUpdate()">更新</button>
      </li> 
    </ul>
  </article>
  <article class="contents-card-edit">
  </article>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'PostCardEdit',
  data () {
    return {
      eventAction: {},
      cardItem: {},
      selectCategory: "no",
      sendTitle: '',
      sendBody: '',
      sendCategory: '',
      sendFlow: '',
      sendCategoryNumber: 0,
      sendGuropsNumber: 0,
    }
  },
  components:{
  },
  props: {
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
    postData() {
      return this.postItemDate ? this.postItemDate : false
    },
    editTitile: {
      get(){
        this.sendTitle = this.postItemDate ? this.postItemDate.title : 'No data'
        return this.postItemDate ? this.postItemDate.title : 'No data'
      },
      set(text){ 
        this.sendTitle = text
        return text }
    },
    editBody: {
      get(){
        this.sendBody =  this.postItemDate ? this.postItemDate.body : 'No data'
        return this.postItemDate ? this.postItemDate.body : 'No data'
      },
      set(text){
        const l = document.getElementById('edit-02').innterHTML
        this.sendBody = l
        return text }
    },
    editCategory: {
      get(){
        this.sendCategory = this.postItemDate ? this.postItemDate.category : 'No data'
        return this.postItemDate ? this.postItemDate.category : 'No data'
      },
      set(text){ 
        this.sendCategory =  text
        return text }
    },
    editFlow: {
      get(){
        this.sendFlow = this.postItemDate ? this.postItemDate.flow : 'No data'
        return this.postItemDate ? this.postItemDate.flow : 'No data'
      },
      set(text){ 
        this.sendFlow =  text
        return text }
    },
    editCategoryNumber: {
      get(){
        this.sendCategoryNumber = this.postItemDate ? this.postItemDate.categorynumber : 'No data'
        return this.postItemDate ? this.postItemDate.categorynumber : 'No data'
      },
      set(text){ 
        this.sendCategoryNumber =  text
        return text }
    },
    editGuropsNumber: {
      get(){
        this.sendGuropsNumber = this.postItemDate ? this.postItemDate.guropsnumber : 'No data'
        return this.postItemDate ? this.postItemDate.guropsnumber : 'No data'
      },
      set(text){ 
        this.sendGuropsNumber =  text
        return text }
    }
  },
  async mounted() {
    await this.$store.dispatch('getPostItem',{basePost: this.postCategory, postId: this.postId  })
    this.$nextTick( () => {
     setTimeout(() => {
     this.cardItem = this.postItemDate[0]
     let scriptEl = document.createElement('script')
     scriptEl.setAttribute('src',"https://cdn.jsdelivr.net/npm/medium-editor@latest/dist/js/medium-editor.min.js")
     scriptEl.setAttribute('defer',"defer")
     this.$el.appendChild(scriptEl)
     scriptEl.addEventListener('load', () => {
       const editor = new MediumEditor('.textarea',{
              placeholder: {
                text: "文章を入力してください。",
                hideOnClick: true
              },
             toolbar: {
               allowMultiParagraphSelection: true,
               buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
               diffLeft: 0,
               diffTop: -30,
               firstButtonClass: 'medium-editor-button-first',
               lastButtonClass: 'medium-editor-button-last',
               relativeContainer: null,
               standardizeSelectionStart: false,
               static: false,
               align: 'center',
               sticky: false,
               updateOnEmptySelection: false
           }
       })
     })
     },800)
   })
  //  console.log(this.$store.commit('postSettings'))
  },
  methods: {
    ...mapActions({
      postCardUpdate:"planing/postCardUpdate"
    }),
    dataUpdate(){
      const user_token = document.getElementsByName('user_token')[0].value
      let sendhtmml = document.getElementById('edit-02').value
      let data = {
        basePost: this.sendCategory,
        movePath: this.sendCategory,
        postId: this.postId,
        moveId:  this.postId,
        createData: {
          [this.sendCategory]: {
            title: this.sendTitle,
            body: sendhtmml,
            category: this.sendCategory,
            flow: this.sendFlow,
            categorynumber: this.sendCategoryNumber,
            guropsnumber: this.sendGuropsNumber,
            user_token: user_token,
          },
          id: this.postId
        }
      }
  
      this.$store.dispatch('postCardUpdate',data)
      location.reload();
    }
  },
}
</script>

<style scoped lang="sass">
@import '../styles/contents-card-edit';
@import '../../core/styles/transition-animation';

</style>
