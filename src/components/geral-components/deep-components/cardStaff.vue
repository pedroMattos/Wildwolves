<template>
  <div class="staff-card">
    <p>Gabriel Melo</p>
    <div class="staff-infos">
      <p>Gabriel</p>
      <social-fb id="fb"></social-fb>
      <social-tt id="tt"></social-tt>
      <social-is id="is"></social-is>
    </div>
  </div>
</template>

<script>
import socialFb from '../../svg/social-fb.vue';
import socialTt from '../../svg/social-tt.vue';
import socialIs from '../../svg/social-is.vue';

export default {
  name: 'card-staff',
  components: {
    'social-fb': socialFb,
    'social-tt': socialTt,
    'social-is': socialIs,
  },
};
</script>

<style lang="scss">
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/breakpoint.scss';
  .staff-card {
    border-bottom: 1px solid $grey-transp;
    max-width: 190px;
    position: relative;
    color: $grey-text;
    margin-bottom: 50px;
    @include breakpoint(smartphones) {
      margin-left: auto;
      margin-right: auto;
    }
    &:hover {
      p {
        transform: translateY(-21px);
        transition-duration: .5s;
      }
      .staff-infos {
        p {
          transform: translateY(0px);
          opacity: 0;
        }
        &::after {
          position: absolute;
          height: 50px;
          width: 190px;
          transition-duration: .5s;
          content: '';
          background-color: $black-body;
          z-index: 0;
        }
        svg {
          width: 25px;
          height: 25px;
          &:hover {
            fill: white;
            transform: scale(1.1);
            cursor: pointer;
          }
          &#tt {
            right: 150px;
          }
          &#fb {
            right: 90px;
          }
          &#is {
            right: 20px;
          }
        }
      }
    }
    p {
      font-size: 10px;
      margin: 0;
      transition-duration: .5s;
    }
    .staff-infos {
      width: 100%;
      &::after {
        position: absolute;
        height: 50px;
        width: 50px;
        content: '';
        background-color: $black-body;
        right: 0;
        transition-duration: .5s;
        bottom: 0;
        z-index: 1;
      }
      p {
        font-size: 14px;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
      svg {
        position: absolute;
        fill: $grey-text;
        width: 10px;
        height: 10px;
        bottom: 10px;
        z-index: 2;
        &#tt {
          right: 24px;
        }
        &#fb {
          right: 12px;
        }
        &#is {
          right: 0;
        }
      }
    }
  }
</style>
