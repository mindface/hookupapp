<template>
  <div class="card">
    <h3 class="card__title">title</h3>
    <div class="card__body">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Props = {
  msg: string;
};
export default defineComponent({
  name: 'Card',
  props: {
    text: String
  },
  methods: {}
});
</script>

<style scoped lang="sass"></style>
