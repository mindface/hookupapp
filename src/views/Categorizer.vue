<template>
  <div class="categorizer">
    <Header msg="Hook Up Thinking" />
    <Section />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Section from '@/components/Section.vue';

export default defineComponent({
  name: 'Categorizer',
  components: {
    Header,
    Footer,
    Section
  }
});
</script>
