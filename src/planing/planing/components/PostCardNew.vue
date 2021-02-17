<template>
<div class="post-card-box">
  <article class="contents-card-edit">
    <ul class="contents-card-edit__list">
      <li class="contents-card-edit__item think-select item-part">
        <label for="edit-06" class="label">ベースとなるカテゴリ</label>
        <select id="edit-06" v-model="createCardType" @change="settingModalText" class="select">
          <option value="" disabled selected >選んでください</option>
          <option value="level">01 | 処理方法の言語化</option>
          <option value="state">02 | 概念としての意味状態</option>
          <option value="face_pattern">03 | 環境因子の言語化</option>
        </select>
      </li>
      <li class="contents-card-edit__item title">
        <label for="edit-01" class="label">タイトル</label>
        <input id="edit-01" type="text" v-model="title">
      </li>
      <li class="contents-card-edit__item detail">
        <label for="edit-02" class="label">情報の詳細概念</label>
        <textarea id="edit-02" v-model="body" class="textarea"></textarea>
      </li>
      <li class="contents-card-edit__item _flex_">
        <div class="item-part flow">
          <label for="edit-04" class="label no-arrow">階層構造[状態]</label>
          <input id="edit-04" class="input-flow"  type="text" v-model="flow">
        </div>
      </li>
      <li class="contents-card-edit__item _flex_">
        <div class="item-part">
          <label for="edit-05" class="label">カテゴリーパターン</label>
          <select id="edit-05" v-model="categorynumber" class="select">
            <option selected value="1">認識ベース処理</option>
            <option value="2">思考プロセスベース</option>
            <option value="3">フローベース</option>
            <option value="4">実行の検証ベース</option>
            <option value="5">検証の状態管理フロー</option>
          </select>
          </select>
        </div>
        <div class="item-part">
          <label for="edit-06" class="label">{{ createCardTypeText }}グループナンバー</label>
          <select id="edit-06" v-model="guropsnumber" class="select">
            <option selected value="1">知覚</option>
            <option value="2">認識</option>
            <option value="3">言語処理</option>
          </select>
        </div>
      </li>
      <li class="contents-card-edit__item">
        <button class="btn submit btn--right-blue" @click="dataCreate()">submit</button>
      </li> 
    </ul>
  </article>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'


export default {
  name: 'PostCardNew',
  data () {
    return {
      eventAction: {},
      title: "ex) 選択形成過程としての情報",
      body: "",
      category: "",
      flow: "ex)　時間経過に対する方法の影響",
      createCardType: "",
      categorynumber: 1,
      selectCategory: "no",
      guropsnumber: 1,
      createCardTypeText: this.createCardTypeTextAction
    }
  },
  computed: {
    ...mapGetters({}),
    createCardTypeTextAction: { 
      get: function(){
        this.createCardTypeText = '01 | 処理方法の言語化'
      },
      set: function(value){
        let setText = '01 | 処理方法の言語化'
        switch(value){
          case 'state':
            setText = '02 | 概念としての意味状態'
          break
          case 'face_pattern':
            setText = '03 | 環境因子の言語化'
          break
        }
        this.createCardTypeText = setText
      }
    }
  },
  async mounted() {
    this.$nextTick(() => {
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
    })
  //  console.log(this.$store.commit('postSettings'))

  },
  methods: {
    ...mapActions({
      postCreateDate:"planing/postCreateDate"
    }),
    dataCreate(){
      const user_token = document.getElementsByName('user_token')[0].value
      // let sendhtmml = document.getElementById('edit-02').value
      let sendhtmml = this.$el.getElementsByClassName('textarea')[0].innerHTML
      const data = {
        basePost: this.createCardType,
        createData: {
         [this.createCardType] : {
           title: this.title,
           body: sendhtmml,
           category: this.createCardType,
           flow: this.flow,
           categorynumber: this.categorynumber,
           guropsnumber: this.guropsnumber,
           user_token: user_token,
          }
        }
      }
      this.$store.dispatch('postCreateDate',data,this.createCardType)
      location.reload()
    },
    settingModalText(){
      this.createCardTypeTextAction = this.createCardType
    }
  },
}
</script>

<style scoped lang="sass">
@import '../styles/contents-card-edit';
@import '../../core/styles/transition-animation';

</style>
