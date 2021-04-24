import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './index.css';
import 'element-plus/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
