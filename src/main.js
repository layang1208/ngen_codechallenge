import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from './plugins/antDesign'
import '@/assets/main.css';


const app = createApp(App);
app.config.productionTip = false;
app.use(Antd);
app.use(router).mount('#app')

