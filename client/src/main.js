import { createApp } from 'vue';

import App from '@/App.vue';
import AppSvg from '@/components/AppSvg.vue';
import router from '@/router/index.js';

const app = createApp(App);

app.component('AppSvg', AppSvg);
app.use(router);

app.mount('#app');
