<template>
  <main class="hero">
    <Intro />
    <SocialIcons />
  </main>
</template>
<script>
import SocialIcons from '@/components/SocialIcons.vue';
import Intro from '@/components/Intro.vue';

export default {
  name: 'Hero',
  components: {
    SocialIcons,
    Intro,
  },
};
</script>

<style scoped>
  .hero {
    display: felx;
    flex-direction: column;
  }
</style>
