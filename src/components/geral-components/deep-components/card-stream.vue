<template>
  <div class="card-stream">
    <img src="../../images/img-person.png" alt="person">
    <div class="row text-field">
      <div>
        <p>LOL 25 de Março</p>
        <h3>Thaywowzk1</h3>
      </div>
      <span id="fb">
        <social-fb></social-fb>
        <p>Facebook</p>
      </span>
      <span id="tt">
        <social-tt></social-tt>
        <p>Twitter</p>
      </span>
      <span id="is">
        <social-is></social-is>
        <p>Instagram</p>
      </span>
    </div>
  </div>
</template>

<script>
import socialFb from '../../svg/social-fb.vue';
import socialTt from '../../svg/social-tt.vue';
import socialIs from '../../svg/social-is.vue';

export default {
  name: 'card-stream',
  components: {
    'social-fb': socialFb,
    'social-tt': socialTt,
    'social-is': socialIs,
  },
};
</script>

<style lang="scss">
@import '../../../assets/scss/mixins.scss';

  .card-stream {
    position: relative;
    border: .5px solid white;
    border-radius: 5px;
    padding: 4px;
    p {
      font-size: 10px;
    }
    img {
      width: 100%;
      height: 250px;
    }
    &:hover {
      .text-field {
        div {
          transition-duration: .5s;
          bottom: 150px;
        }
        #fb {
          transition-duration: .5s;
          @include svg-stream(245px);
          bottom: 120px;
          p {
            transition-delay: .5s;
            opacity: 1;
          }
        }
        #is {
          transition-duration: .5s;
          @include svg-stream(245px);
          bottom: 90px;
          p {
            transition-delay: .5s;
            opacity: 1;
          }
        }
        #tt {
          transition-duration: .5s;
          @include svg-stream(245px);
          bottom: 60px;
          p {
            transition-delay: .5s;
            opacity: 1;
          }
        }
        &::after {
          transition-duration: .5s;
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.157), rgba(0, 0, 0, 0.411),
          rgba(0, 0, 0, 0.787), #000);
        }
      }
    }
  }
</style>
