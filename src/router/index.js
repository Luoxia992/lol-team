import Vue from 'vue';
import VueRouter from 'vue-router';
import loginRegister from '../views/loginRegister.vue';
import teamProcessing from '../views/teamProcessing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginRegister,
  },
  {
    path: '/organizeteam',
    name: 'teamProcessing',
    component: teamProcessing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
