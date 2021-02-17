<template>
<div class="post-card-list _flex_">
</div>
</template>
<script>
import Vue from 'vue'
import Confirm from '../../core/compornents/Confirm.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'PostCardList',
  data () {
    return {
      cardsData: {
        part1:[],
        part2:[],
        part3:[],
      },
    }
  },
  components:{
  },
  props :{
    dataType :{
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      postDate:"postDate",
      facePatternDate:"facePatternDate",
      statedDate:"statedDate",
    }),
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
