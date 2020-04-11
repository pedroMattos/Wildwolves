<template>
  <section class="container" id="streams">
    <div class="row">
      <h2 class="col-sm-12 sec-title">Streams</h2>
      <div class="col-sm-12 col-md-3">
        <card-stream></card-stream>
      </div>
      <div class="col-sm-12 col-md-3">
        <card-stream></card-stream>
      </div>
      <div class="col-sm-12 col-md-3">
        <card-stream></card-stream>
      </div>
      <div class="col-sm-12 col-md-3">
        <card-stream></card-stream>
      </div>
      <btn-cta></btn-cta>
    </div>
  </section>
</template>

<script>
import cardStream from './deep-components/card-stream.vue';
import btnCta from './deep-components/btn-cta.vue';

export default {
  name: 'sec-streams',
  components: {
    'card-stream': cardStream,
    'btn-cta': btnCta,
  },
};
</script>

<style lang="scss">
  #stream .col-sm-12.col-md-3 {
    padding: 0;
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
