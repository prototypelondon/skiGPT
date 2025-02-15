import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import UserProfile from '../views/UserProfile.vue';
import UserDetails from '../views/UserDetails.vue';
import Friends from '../views/Friends.vue';
import Locations from '../views/Locations.vue';
import Settings from '../views/Settings.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/user-profile', name: 'UserProfile', component: UserProfile, 
    children: [
      { path: 'details', name: 'UserDetails', component: UserDetails },
      { path: 'friends', name: 'Friends', component: Friends },
      { path: 'locations', name: 'Locations', component: Locations },
      { path: 'settings', name: 'Settings', component: Settings },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;