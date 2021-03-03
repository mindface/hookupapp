<template>
  <section class="l-section c-section">
    <ContentsMean v-if="type === 'mean'" />
    <ContentsVerbalizing v-if="type === 'verbalizing'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentsMean from '@/components/ContentsMean.vue';
import ContentsVerbalizing from '@/components/ContentsVerbalizing.vue';

export default defineComponent({
  name: 'SectionContents',
  components: {
    ContentsMean,
    ContentsVerbalizing
  },
  props: {
    type: String
  },
  data() {
    return {
      sendText: 'input'
    };
  },
  methods: {}
});
</script>
verbalizing
<style scoped lang="scss"></style>
