import { createApp } from 'vue';
import App from './App.vue';
import VueClipboard from 'vue3-clipboard';
const app = createApp({});

app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});

import './styles/app.css';

createApp(App).mount('#app');
