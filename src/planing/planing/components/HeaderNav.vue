<template>
<header class="header">
  <div class="header--inner">
    <h1 class="header__title">
      <a href="/" class="header__link">
        <img src="../../core/images/Logo_01.png" class="logo-img" alt="coding">
      </a>
    </h1>
    <div class="header__gnav-btn">
      <label class="gnav-btn" for="gnav" @click="gnavBtn" :class="{on:show}">
        <span class="gnav-btn--parts"></span>
        <span class="gnav-btn--parts"></span>
        <span class="gnav-btn--parts"> </span>
      </label>
    </div>
   </div>
   <div class="gnav" :class="{show: show }">
     <ul class="gnav-list">
       <li class="gnav-item">
         <a href="/logout" class="link icon icon--logout">logout</a>
       </li>
       <li class="gnav-item">
         <button @click="changeTypeEvent('level')" class="gnav-link" >処理方法の言語化 | 01</button>
         <button @click="changeTypeEvent('state')" class="gnav-link" >概念としての意味状態 | 02</button>
         <button @click="changeTypeEvent('face_pattern')" class="gnav-link" >環境因子の言語化 | 03</button>
       </li>
       <li class="gnav-item">
         <a :href="serviceUrlSet('remodel')" class="link icon icon--pattern" target="_new" >方法のパタン化</a>
       </li>
       <li class="gnav-item">
         <a :href="serviceUrlSet('evaluation')" class="link icon icon--human-sh" target="_new" >メタ認知について</a>
       </li>
       <li class="gnav-item">
         <a :href="serviceUrlSet('setting')" class="link icon icon--settings">設定</a>
       </li>
    </ul>
  </div>
</header> 
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      show: false,
      serviceUrl: '',
      serviceUrlswitch: false
    }
  },
  mounted() {
  },
  methods: {
    gnavBtn(){
      this.show = !this.show
    },
    changeTypeEvent(cardType){
      this.$emit('switchEvent',{ cardType: cardType})
    },
    serviceUrlSet(name){
      const value = document.getElementsByName('token_url')[0].value
      return value + '/' + name
    },
  },
}
</script>

<style lang="sass">
@import "../styles/header"
</style>
