import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutUs.vue';
import ParceirosPage from '@/components/Parceiros.vue';
import StreamsPage from '@/components/Streams.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/sobre',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/parceiros',
      name: 'Parceiros',
      component: ParceirosPage,
    },
    {
      path: '/streams',
      name: 'Streams',
      component: StreamsPage,
    },
  ],
});
