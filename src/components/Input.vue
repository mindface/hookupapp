<template>
  <p class="filed">
    <input type="text" :value="modelValue" @input="changePageTitle($event)" />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Props = {
  msg: string;
};
export default defineComponent({
  name: 'Input',
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {
    changePageTitle(title) {
      this.$emit('update:modelValue', title);
    }
  }
});
</script>

<style scoped lang="scss"></style>
