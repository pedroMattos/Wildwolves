<template>
  <section class="section" id="main-parceiros">
    <h1>
      <span>Parceiros</span>
      <p id="normal-hover" class="centered">
        <img id="normal" src="./images/parceiros-normal.png" alt="Parceiros">
        <img id="hover" src="./images/parceiros-hover.png" alt="Parceiros">
      </p>
    </h1>

    <sec-part></sec-part>
  </section>
</template>

<script>
import secPartners from './geral-components/Partners.vue';

export default {
  name: 'page-parceiros',
  components: {
    'sec-part': secPartners,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoint.scss';
  #main-parceiros {
    h1 span {
      display: none;
      @include breakpoint(smartphones) {
        display: block;
      }
    }
    #normal-hover {
      @include breakpoint(smartphones) {
        display: none;
      }
      position: relative;
      &:hover {
        #normal {
          opacity: 0;
          transition-duration: .5s;
        }
        #hover {
          opacity: 1;
          transition-duration: .5s;
        }
      }
      #normal {
        position: absolute;
        transition-duration: .5s;
        opacity: 1;
      }
      #hover {
        opacity: 0;
        transition-duration: .5s;
      }
    }
  }
</style>
