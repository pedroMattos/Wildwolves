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
    </div>
  </section>
</template>

<script>
import cardStream from './deep-components/card-stream.vue';

export default {
  name: 'sec-streams',
  components: {
    'card-stream': cardStream,
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
