<template>
  <div id="main-home">
    <div id="banner-area">
      <img id="banner" src="./images/Home-wild.png" alt="Home-banner">
      <h1>Jersey<span><p>2020</p></span></h1>
    </div>
    <news-section></news-section>
    <champ-section></champ-section>
    <stream-section></stream-section>
  </div>
</template>

<script>
import news from './geral-components/News.vue';
import campeonatos from './geral-components/Campeonatos.vue';
import streams from './geral-components/Streams.vue';

export default {
  name: 'HomePage',
  components: {
    'news-section': news,
    'champ-section': campeonatos,
    'stream-section': streams,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoint.scss';

  #main-home {
    #banner {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    #banner-area {
      position: relative;
      h1 {
        position: absolute;
        color: $grey-text;
        top: 40%;
        left: 100px;
        font-size: 60px;
        @include breakpoint(smartphones) {
          left: 20px;
          top: 60%;
        }
        span {
          position: relative;
          p {
            position: absolute;
            color: black;
            font-size: 30px;
            margin: 0;
            top: 10px;
          }
        }
      }
    }
  }
</style>
