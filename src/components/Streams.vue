<template>
  <section class="container section" id="main-streams">
    <h1>Streams</h1>

    <card/>
    <card/>
    <card/>
    <card/>
    <card/>
    <card/>

  </section>
</template>

<script>
import card from './geral-components/CardStream.vue';

export default {
  name: 'page-streams',
  components: {
    card,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
  #main-streams {
    h1 {
      text-align: center;
      color: $grey-text;
    }
  }
</style>
