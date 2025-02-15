import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import dotenv from 'dotenv';

dotenv.config();

createApp(App).use(router).mount('#app');