<template>
  <section class="container" id="news">
    <div class="row">
      <h2 class="col-sm-12 sec-title">Notícias</h2>
      <div class="col-md-3 col-sm-12">
        <card-news></card-news>
      </div>
      <div class="col-md-3 col-sm-12">
        <card-news></card-news>
      </div>
      <div class="col-md-3 col-sm-12">
        <card-news></card-news>
      </div>
      <div class="col-md-3 col-sm-12">
        <card-news></card-news>
      </div>
      <btn-cta></btn-cta>
    </div>
  </section>
</template>

<script>
import cardNews from './deep-components/card-new.vue';
import btnCta from './deep-components/btn-cta.vue';

export default {
  name: 'new-sec',
  components: {
    'card-news': cardNews,
    'btn-cta': btnCta,
  },
};
</script>
