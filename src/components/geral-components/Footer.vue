<template>
  <footer id="footer-site">
    <div class="container">
      <div id="partners-area">
        <p class="centered">
          <img id="log" src="../images/logo-log.png" alt="logo log">
          <img id="logo-media" src="../images/logo-media.png" alt="logo media">
          <a href="https://miguelmelodesigner.com/" rel="noreferrer" target="_blank">
            <img src="../images/logo-m.png" alt="logo m">
          </a>
        </p>
      </div>
      <div class="container" id="contact-area">
        <div class="row">
          <div class="col-md-4 col-sm-12 footer-contents">
            <p><span>Contato</span> contato@wldwolves.com</p>
          </div>
          <div class="col-md-4 col-sm-12 footer-contents">
            <p class="centered">
              <router-link :to="{ name: 'home' }">
                <img src="../images/logo-white.png" alt="logo wild">
              </router-link>
            </p>
          </div>
          <div class="col-md-4 col-sm-12 footer-contents">
            <p><span>Social</span>
              <social-fb></social-fb>
              <social-tt></social-tt>
              <social-is></social-is>
            </p>
          </div>
        </div>
          <p class="centered copyright">Copyright © All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import socialFb from '../svg/social-fb.vue';
import socialTt from '../svg/social-tt.vue';
import socialIs from '../svg/social-is.vue';

export default {
  name: 'footer-site',
  components: {
    'social-fb': socialFb,
    'social-tt': socialTt,
    'social-is': socialIs,
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/breakpoint.scss';

  #footer-site {
    background-color: $black-footer;
    margin-top: 80px;
    color: $grey-text;
    padding-bottom: 100px;
    p.copyright {
      font-size: 8px;
    }
    #partners-area {
      img {
        height: 50px;
        margin: 50px 10px;
        width: 50px;
        margin-left: 50px;
        margin-right: 50px;
        transition-duration: .5s;
        transform: scale(1);
        @include breakpoint(smartphones) {
          margin-left: auto;
          margin-right: auto;
        }
        &:hover {
          transition-duration: .5s;
          transform: scale(1.1);
        }
        &#logo-media {
          width: 250px;
          height: 50px;
          padding: 12px;
        }
        &#log {
          width: 50px;
        }
      }
      p {
        text-align: center;
      }
    }
    #contact-area {
      border-top: 1px solid $black-blue;
      padding-top: 20px;
      .footer-contents {
        color: $grey-text;
        img {
          width: 150px;
          height: 50px;
        }
        svg {
          width: 20px;
          height: 20px;
          margin: 0 10px;
          fill: $grey-text;
          transition-duration: .5s;
          transform: scale(1);
          &:hover {
            transition-duration: .5s;
            transform: scale(1.1);
            fill: white;
          }
        }
        p {
          font-weight: 200;
        }
        span {
          font-weight: 600;
          font-style: extended;
          letter-spacing: 3px;
          margin-right: 50px;
        }
      }
    }
  }
</style>
