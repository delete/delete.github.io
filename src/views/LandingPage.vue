<template>
  <section class="landing-page full-height">
    <!-- <MyNav /> -->
    <Hero />
  </section>
</template>
<script>
// import MyNav from '@/components/MyNav.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: 'LadingPage',
  components: {
    // MyNav,
    Hero,
  },
};
</script>
<style scoped>
  .landing-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>

