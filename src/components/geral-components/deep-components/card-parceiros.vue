<template>
  <div class="col-sm-12 col-md-4">
    <div class="card-partner">
      <p class="centered">
        <img src="../../images/logo-log.png" alt="Parceiro">
      </p>
      <p class="description">Lupo é uma das maiores empresas brasileiras que atua
        no segmento têxtil há mais de 98 anos. Líder do mercado
        de meias, cuecas e lingeries</p>
        <p class="centered">
          <button class="btn btn-external-link">Website</button>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-parceiros',
};
</script>

<style lang="scss">
@import '../../../assets/scss/variables.scss';
  .card-partner {
    padding: 0 20px;
    color: $grey-text;
    border: 1px solid $black-body;
    transition-duration: .5s;
    max-width: 315px;
    margin: 0 auto;
    &:hover {
      border: 1px solid $grey-text;
    }
    .description {
      text-align: center;
      font-size: 10px;
      margin-bottom: 30px;
    }
    img {
      width: 100px;
      height: auto;
      transform: scale(1);
      transition-duration: .5s;
      &:hover {
        transition-duration: .5s;
        transform: scale(1.1);
      }
    }
  }
</style>
