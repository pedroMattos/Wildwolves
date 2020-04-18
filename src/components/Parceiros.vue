<template>
  <section id="main-parceiros">
    <h1 style="display:none">Parceiros</h1>
    <p id="normal-hover" class="centered">
      <img id="normal" src="./images/parceiros-normal.png" alt="Title Page">
      <img id="hover" src="./images/parceiros-hover.png" alt="Title Page">
    </p>

    <div class="row"></div>
  </section>
</template>

<script>
export default {
  name: 'page-parceiros',
};
</script>

<style lang="scss">
  #main-parceiros {
    padding-top: 150px;
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
