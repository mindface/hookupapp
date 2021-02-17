<template>
<div class="modal" :class="{'on':showModal}" >
  <transition name="modal">
    <div class="modal-block-outer" v-if="showModal">
      <div class="modal-block">
         <div class="modal-block__header">
           <slot name="header">
           </slot>
         </div>
         <div class="modal-block__body">
           <slot name="body">
           </slot>
         </div>
         <div class="modal-block__footer">
           <slot name="footer">
           </slot>
         </div>
         <div class="modal-btns fade">
           <button class="btn" @click="modalAction">閉じる</button>
         </div>
      </div>
    </div>
  </transition>
  <div v-if="modalType === 'new'" class="modal-btns close">
    <button class="btn btn--right-blue" @click="modalAction">add card</button>
  </div>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'Modal',
  data () {
    return {
      showModal: false
    }
  },
  props :{
    modalType :{
      type: String,
      required: true
    }
  },
  methods: {
    modalAction(){
      this.showModal = !this.showModal
    },
    modalTypeText(type){
      if(type === 'new'){
        return 'new flow'
      }else if(type === 'edit'){
        return 'edit flow'
      }
    }
  },
}
</script>

<style scoped lang="sass">
@import '../../core/styles/modal';

</style>
