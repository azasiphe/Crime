import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProfileView from '../views/ProfileView.vue';
import AdminView from '../views/AdminView.vue';
import SelectCrimeView from '../views/SelectCrimeView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/admin', name: 'admin', component: AdminView },
  {
    path: '/select-crime',
    name: 'select-crime',
    component: SelectCrimeView,
    props: route => ({ person: route.params.person }),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
