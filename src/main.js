import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router';
import store from './store';
import './index.css';
import 'element-plus/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app');
