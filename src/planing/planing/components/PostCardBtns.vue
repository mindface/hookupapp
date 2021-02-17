<template>
<div class="post-card__actions">
   <div class="post-card__event">
     <p class="event-icon" @click="eventActionClick($event,itemId)" >
       <i class="material-icons">ballot</i>
     </p>
   </div>
   <transition name="slide-fade">
     <div v-if="show" class="post-card__icons-box">
       <div class="post-card__icons">
         <span @click="editEvent" class="l-icon edit">
           <i class="material-icons">edit</i>
         </span>
         <span @click="viewEvent" class="l-icon pageview">
           <i class="material-icons">pageview</i>
         </span>
         <span @click="deleteEvent" class="l-icon delete">
           <i class="material-icons">delete</i>
         </span>
       </div>
     </div>
   </transition>
</div>
</template>

<script>

export default {
  name: 'PostCardBtns',
    props: {
      itemId: {
        type: Number,
        required: true
      },
      itemTyper: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      eventActionClick(){
        this.show = !this.show
      },
      editEvent(){
        this.$emit('edit',{ category: this.itemTyper,id: this.itemId })
      },
      viewEvent(){
        this.$emit('view',{ category: this.itemTyper,id: this.itemId })
      },
      deleteEvent(){
        this.$emit('delete',{ category: this.itemTyper,id: this.itemId })
      }
    },
}
</script>

<style scoped lang="sass">
@import '../styles/contents-card';
@import '../../core/styles/transition-animation';

</style>
