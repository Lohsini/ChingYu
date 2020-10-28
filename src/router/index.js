import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue'),
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/Information.vue'),
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../views/Reservation.vue'),
  },
  {
    path: '/getform',
    name: 'getform',
    component: () => import('../views/getform.vue'),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'activee',
});

export default router;
