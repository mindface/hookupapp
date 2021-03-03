<template>
  <div class="established">
    <Header msg="Hook Up Thinking" />
    <SectionContents type="mean" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SectionContents from '@/components/SectionContents.vue';

export default defineComponent({
  name: 'Categorizer',
  components: {
    Header,
    Footer,
    SectionContents
  }
});
</script>
