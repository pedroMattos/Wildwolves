<template>
  <nav id="nav" class="row">
    <div class="col-sm-12">
      <ul class="no-margin no-padding-ul">
        <router-link :to="{ name: 'home' }">
          <li><img src="../images/logo-white.png" alt="Logo Wild"></li>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <li><p>Sobre</p></li>
        </router-link>
        <li><p>Notícias</p></li>
        <li><p>Loja</p></li>
        <router-link :to="{ name: 'Teams' }">
          <li><p>Times</p></li>
        </router-link>
        <router-link :to="{ name: 'Streams' }">
          <li><p>Streams</p></li>
        </router-link>
        <router-link :to="{ name: 'Parceiros' }">
          <li><p>Parceiros</p></li>
        </router-link>
        <li><p>Contato</p></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/breakpoint.scss';

  #nav {
      position: absolute;
      z-index: 1;
      @include breakpoint(smartphones) {
        z-index: 2;
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
        display: block;
        background-color: $black-footer;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
        height: 100px;
        li {
          text-align: center;
        }
      }
      li {
        margin: 0 18px 0;
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
