<template>
  <nav id="nav" class="row">
    <div class="col-sm-12">
      <ul id="menu" class="no-margin no-padding-ul">
        <router-link :to="{ name: 'home' }">
          <li id="first" class="list-iten"><img src="../images/logo-white.png" alt="Logo Wild"></li>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <li class="list-iten"><p>Sobre</p></li>
        </router-link>
        <li class="list-iten"><p>Notícias</p></li>
        <li class="list-iten"><p>Loja</p></li>
        <router-link :to="{ name: 'Teams' }">
          <li class="list-iten"><p>Times</p></li>
        </router-link>
        <router-link :to="{ name: 'Streams' }">
          <li class="list-iten"><p>Streams</p></li>
        </router-link>
        <router-link :to="{ name: 'Parceiros' }">
          <li class="list-iten"><p>Parceiros</p></li>
        </router-link>
        <li class="list-iten"><p>Contato</p></li>
      </ul>
    </div>
    <div class="drop-menu collapsed">
      <div id="controller" class="open-menu"></div>
      <div id="clone" class="open-menu"></div>
    </div>
  </nav>
</template>

<script>
import menu from '../mixins/menu-control';

export default {
  name: 'nav-bar',
  mixins: [menu],
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/breakpoint.scss';

  #nav {
      position: absolute;
      z-index: 1;
      @include breakpoint(smartphones) {
        z-index: 999991;
      }
      a {
        text-decoration: none;
        color: $grey-text;
        transition-duration: .5s;
        &:hover {
          transition-duration: .5s;
          color: white;
        }
      }
    ul {
      display: inline-flex;
      list-style: none;
      color: $grey-text;
      @include breakpoint(smartphones) {
        #first {
          margin-bottom: 60px;
          padding: 0;
        }
        margin-top: 100px;
        display: block;
        background-color: $black-footer;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
        height: 100px;
        transition-duration: .5s;
        li {
          text-align: center;
        }
      }
      li {
        margin: 0 18px 0;
        @include breakpoint(smartphones) {
          margin: 0;
          height: 50px;
          padding: 20px 0;
          p {
            margin-top: 0 !important;
          }
        }
        p {
          margin-top: 50px;
          &:first-child {
            margin-left: 10px;
          }
        }
      }
    }
    img {
      margin-top: 30px;
      margin-right: 100px;
      width: 182px;
      height: 58px;
      @include breakpoint(smartphones) {
        margin: 10px auto;
        margin-top: 20px;
        margin-right: unset;
      }
    }
  }
</style>
