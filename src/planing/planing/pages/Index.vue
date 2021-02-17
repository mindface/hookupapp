<template>
  <div class="index" :class="triggerClass" >
    <transition tag="div" name="scale-fade">
     <div v-if="triggerLevel" >
       <section class="contents l_section">
         <post-cards-level :data-type="'level'"/>
       </section>
      </div>
    </transition>
    <transition tag="div" name="scale-fade">
      <div v-if="triggerState">
        <section class="contents l_section"> 
          <post-cards-state :data-type="'state'" />
        </section>
      </div>
    </transition>
    <transition tag="div" name="scale-fade">
      <div v-if="triggerFacePattern">
        <section class="contents l_section"> 
          <post-cards-face-pattern :data-type="'face_pattern'" />
        </section>
      </div>
    </transition>
    <core-footer-nav>
    </core-footer-nav>
    <header-nav
      @switchEvent="cardsChange"
    />
    <loading />
  </div>
</template>

<script>
import Loading from '../../core/components/Loading'
import PostCardsLevel from '../components/PostCardsLevel'
import PostCardsState from '../components/PostCardsState'
import PostCardsFacePattern from '../components/PostCardsFacePattern'
import HeaderNav from '../components/HeaderNav'
import CoreFooterNav from '../../core/components/CoreFooterNav'
export default {
  name: 'Index',
  components: {
    Loading,
    PostCardsLevel,
    PostCardsState,
    PostCardsFacePattern,
    HeaderNav,
    CoreFooterNav
  },
  data () {
    return {
      triggerLevel: true,
      triggerState: false,
      triggerFacePattern: false,
      triggerClass: 'level'
    }
  },
  computed: {
    cardList(){
      const d = [
        {id:1,name:'level', switchtype: this.triggerLevel },
        {id:2,name:'face_pattern', switchtype: this.triggerFacePattern},
        {id:3,name:'state', switchtype: this.triggerState},
        ]
      return d
    }
  },
  mounted() {
    this.$nextTick( () => {
      this.webStorgeUserBehavior()
    })
  },
  methods: {
   cardsChange(data){
     // let { triggerLevel, triggerFacePattern, triggerState } = this
     this.triggerLevel = false
     this.triggerFacePattern = false
     this.triggerState = false
     this.triggerClass = data.cardType
     switch(data.cardType){
       case 'level':
         this.triggerLevel = true
         localStorage["planTrigger"] = 'level'
       break;
       case 'face_pattern':
         this.triggerFacePattern = true
         localStorage["planTrigger"] = 'face_pattern'
       break;
       case 'state':
         this.triggerState = true
         localStorage["planTrigger"] = 'state'
       break; 
     }
   },
   webStorgeUserBehavior(){
     if(localStorage.getItem("planTrigger")){
       const storageData = { cardType:localStorage.getItem("planTrigger") } 
       this.cardsChange(storageData)
     }else {
       localStorage["planTrigger"] = ''
     }
   }
  }
}
</script>

<style lang="sass">
@import '../../core/styles/reset';
@import '../../core/styles/animation';
@import '../../core/styles/mixin';
@import '../../core/styles/core_base';
@import '../styles/base';
@import '../styles/common';
@import '../styles/main';
@import '../styles/layout-sort-out';
@import '../../core/styles/transition-animation';

</style>
