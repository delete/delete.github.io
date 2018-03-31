<template>
  <svg
    class="svg-inline--fa"
    aria-hidden="true"
    data-prefix="fab"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512">
      <slot/>
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
};
</script>
<style scoped>
  .svg-inline--fa {
    width: 1.5rem;
  }
</style>
