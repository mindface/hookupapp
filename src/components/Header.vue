<template>
  <header class="header">
    <h1 class="title">{{ msg }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    msg: String
  }
});
</script>

<style scoped lang="scss"></style>
