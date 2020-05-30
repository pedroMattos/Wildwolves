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
  // watch: {
  //   $route() {
  //     if(this.screenW == 'smartphone') {
  //       const controller = document.getElementById('menu-controller');
  //       // const close = document.getElementById('menu-controller-close');
  //       const menu = document.getElementById('menu-collapsed');
  //       const ctx = this;
  //       if(menu.classList.contains('menu-non-collapsed')) {
  //         menu.classList.remove('menu-non-collapsed');
  //         controller.children[0].classList.remove('close');
  //       }
  //     }
  //   }
  // },
};
</script>

<style>
</style>
