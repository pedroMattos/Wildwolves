<template>
  <section class="container" id="campeonatos">
    <div class="row">
      <h2 class="col-sm-12 sec-title">Campeonatos</h2>
      <div class="col-sm-12 col-md-3">
        <p>League of Legends</p>
        <h2>CQL Circuito</h2>
        <p>25 de Jan 2020</p>
      </div>
      <div class="col-sm-12 col-md-3">
        <p>CSGO</p>
        <h2>CQL Circuito</h2>
        <p>25 de Jan 2020</p>
      </div>
      <div class="col-sm-12 col-md-3">
        <p>League of Legends</p>
        <h2>Liga Feminina</h2>
        <p>25 de Jan 2020</p>
      </div>
      <div class="col-sm-12 col-md-3">
        <p>DOTA 2</p>
        <h2>QUALIFQ</h2>
        <p>25 de Jan 2020</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sec-campeonatos',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

  #campeonatos {
    .sec-title {
      margin-bottom: 30px;
    }
    p, h2 {
      margin-bottom: 0;
      color: $grey-text;
    }
    h2 {
      font-weight: 400;
    }
  }
</style>
