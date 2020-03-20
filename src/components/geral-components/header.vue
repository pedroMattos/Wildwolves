<template>
  <nav id="nav" class="row">
    <div class="col-sm-12">
      <ul class="container">
        <li><img src="../images/logo.png" alt=""></li>
        <li><p>Sobre</p></li>
        <li><p>Notícias</p></li>
        <li><p>Loja</p></li>
        <li><p>Times</p></li>
        <li><p>Streams</p></li>
        <li><p>Parceiros</p></li>
        <li><p>Contato</p></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

  #nav {
      position: absolute;
      z-index: 1;
    ul {
      display: inline-flex;
      list-style: none;
      color: $grey-text;
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
    }
  }
</style>
