import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/Home/Home.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
