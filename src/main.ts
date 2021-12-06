import { createApp } from 'vue';
import App from './App.vue';

// normalize.css
import 'normalize.css'

// elementUI plus
import ElementPlus from 'element-plus'
// 引入基础的样式
import './element-theme/menu.scss'
import './element-theme/base.scss'
import './element-theme/col.scss'
import './element-theme/header.scss'
import './element-theme/container.scss'
import './element-theme/aside.scss'
import './element-theme/footer.scss'
import './element-theme/main.scss'

// router
import router from './router/index'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app');
