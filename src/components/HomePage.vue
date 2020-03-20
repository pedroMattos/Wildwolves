<template>
  <div id="main-home">
    <nav-bar></nav-bar>
    <img id="banner" src="./images/Home-wild.png" alt="Home-banner">
    <news-section></news-section>
    <champ-section></champ-section>
  </div>
</template>

<script>
import header from './geral-components/header.vue';
import news from './geral-components/News.vue';
import campeonatos from './geral-components/Campeonatos.vue';

export default {
  name: 'HomePage',
  components: {
    'nav-bar': header,
    'news-section': news,
    'champ-section': campeonatos,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
  #main-home {
    #banner {
      width: 100vw;
      height: 100vh;
      object-fit: cover;

    }
  }
</style>
