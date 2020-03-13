<template>
  <div class="hello">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import header from './geral-components/header.vue';

export default {
  name: 'HomePage',
  components: {
    'nav-bar': header,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">

</style>
