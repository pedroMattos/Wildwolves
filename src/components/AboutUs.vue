<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h1>Sobre nós</h1>
          <p>
            Mais do que uma equipe de esportes eletrônicos, a Wild Wolves é uma comunidade
            de gamers profissionais e fãs de esports. O que começou com um grupo de amigos
            competindo online evoluiu para uma equipe de esportes eletrônicos de destaque
            apoiado por parceiros e organizações afiliadas.
          </p>
          <p>
            Embora tenham origens diferentes, os jogadores da Wild Wolves são movidos por
            objetivos comuns: a paixão pelos jogos, uma sede pela vitória e o desejo de
            compartilhar nossa emoção e experiências
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <img src="./images/logo-wld.png" alt="logo mascote">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about-page',
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

  #about {
    background: url(./images/banner-sobre.png) no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: $grey-text;
    img {
      width: 350px;
    }
  }
</style>
