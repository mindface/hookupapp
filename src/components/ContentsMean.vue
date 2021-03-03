<template>
  <div class="content">
    <div class="content--body _flex_">
      <div class="content__edit">
        <textarea
          class="textarea"
          name="established"
          id=""
          rows="10"
        ></textarea>
      </div>
      <ContentRLang />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentRLang from '@/components/ContentRLang.vue';

export default defineComponent({
  name: 'ContentsMean',
  components: {
    ContentRLang
  }
});
</script>

<style scoped lang="scss"></style>
