<template>
  <section class="section" id="main-parceiros">
    <h1>
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
  #main-parceiros {
    #normal-hover {
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
