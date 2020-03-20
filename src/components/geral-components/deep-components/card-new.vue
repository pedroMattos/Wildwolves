<template>
  <div class="card-news">
    <img src="../../images/cblol.png" alt="cblol">
    <div class="row text-field">
      <div>
        <p>LOL 25 de Março</p>
        <h3>WLD Garante vaga para CBLOL 2020</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-news',
};
</script>

<style lang="scss">
  .card-news {
    position: relative;
    img {
      height: 320px;
      width: 100%;
      object-fit: cover;
    }
    .text-field {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 0px;
      color: white;
      div {
        height: fit-content;
        position: absolute;
        bottom: 0;
        padding: 10px 10px 10px;
      }
      h3 {
        font-weight: 400;
        margin: 0;
        font-size: 18px;
      }
      p {
        margin: 0;
        font-weight: 200;
      }
      background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.616), #000);
    }
  }
</style>
