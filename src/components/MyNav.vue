<template>
  <nav class="nav-page">
    <main>
      <ul class="menu">
        <li class="menu__item">About</li>
        <li class="menu__item">Portfolio</li>
      </ul>
    </main>
  </nav>
</template>
<script>
export default {
  name: 'MyNav',
};
</script>
<style scoped>
  .nav-page {
    align-items: center;
    background-color: rgba(250, 250, 250, 0.75);
    display: flex;
    height: 3rem;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .menu {
    display: flex;
    margin-right: 1rem;
  }

  .menu__item {
    margin: 0 1rem;
  }
</style>
