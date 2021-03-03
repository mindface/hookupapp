<template>
  <div class="actiondesign">
    <Header msg="Hook Up Thinking" />
    <SectionContents type="verbalizing" />
    <Footer />
    <BoxTaskInfo />
    <BoxMeasurement />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SectionContents from '@/components/SectionContents.vue';
import BoxTaskInfo from '@/components/BoxTaskInfo.vue';
import BoxMeasurement from '@/components/BoxMeasurement.vue';

export default defineComponent({
  name: 'ActionDesign',
  components: {
    Header,
    Footer,
    SectionContents,
    BoxTaskInfo,
    BoxMeasurement
  }
});
</script>
