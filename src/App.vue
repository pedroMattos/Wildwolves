<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-site></footer-site>
  </div>
</template>

<script>
import header from './components/geral-components/header.vue';
import footer from './components/geral-components/Footer.vue';

export default {
  name: 'App',
  components: {
    'nav-bar': header,
    'footer-site': footer,
  },
};
</script>

<style>
</style>
