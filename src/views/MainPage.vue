<template>
  <main>
    <LandingPage />
    <!-- <AboutPage /> -->
    <!-- <PortfolioPage /> -->
  </main>
</template>

<script>
// @ is an alias to /src
import LandingPage from './LandingPage.vue';
// import PortfolioPage from './PortfolioPage.vue';
// import AboutPage from './AboutPage.vue';

export default {
  name: 'MainPage',
  components: {
    LandingPage,
  },
};
</script>
