<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style>
  .full-height {
    min-height: 100vh;
  }

  #app {
    font-family: Reem Kufi,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(96, 125, 139);
  }

  /* Resets */
  body {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: rgb(49, 80, 95);
    text-decoration: underline;
  }
</style>
