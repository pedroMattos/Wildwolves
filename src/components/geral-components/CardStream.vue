<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card-stream-page">
        <div class="row">
          <div class="col-sm-4 streamer">
            <img src="../images/img-person.png" alt="Person">
          </div>
          <div class="col-sm-8 info-streamer">
            <div class="details">
              <p>Thay Maia</p>
              <h2>thaywowzk1</h2>
            </div>
            <div class="social-medias">
              <social-fb id="fb"></social-fb>
              <social-tt id="tt"></social-tt>
              <social-is id="is"></social-is>
            </div>
            <img src="../images/logo-dark.png" alt="Logo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socialFb from '../svg/social-fb.vue';
import socialTt from '../svg/social-tt.vue';
import socialIs from '../svg/social-is.vue';

export default {
  name: 'card-stream-page',
  components: {
    'social-fb': socialFb,
    'social-tt': socialTt,
    'social-is': socialIs,
  },
};
</script>
