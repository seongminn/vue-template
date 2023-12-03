import { createApp } from 'vue';
import App from './App.vue';
import fetchPlugin from '@/plugins/fetch';
import { store } from './store';
import router from '@/routes';

const app = createApp(App);
app.use(fetchPlugin);
app.use(store);
app.use(router);
app.mount('#app');
