import { createApp } from 'vue';
import App from './App.vue';

// normalize.css
import 'normalize.css'

//公共样式
import './style/reset.scss'
import './style/layout.scss'

// elementUI plus
import ElementPlus from 'element-plus'
// 引入基础的样式
import './theme-chalk/menu.scss'
import './theme-chalk/base.scss'
import './theme-chalk/col.scss'
import './theme-chalk/header.scss'
import './theme-chalk/container.scss'
import './theme-chalk/aside.scss'
import './theme-chalk/footer.scss'
import './theme-chalk/main.scss'


// router
import router from './router/index'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app');
