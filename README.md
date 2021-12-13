# element-plus UI 自定义化

## 基于element-plus版本
  ```
    ^1.2.0-beta.5
  ```

## 使用方法
  1. 安装element-plus
    ```
      npm install element-plus@1.2.0-beta.5
    ```
  2. 项目引入
    ```
      // main.ts
      import { createApp } from 'vue'
      import App from './App.vue'

      import ElementPlus from 'element-plus'
      // 不要引入默认的样式
      // import 'element-plus/dist/index.css'
      // 引入自定义样式
      import 'element-plus-theme-cestc'

      const app = createApp(App)

      app.use(ElementPlus)
      app.mount('#app')
    ```

## 项目目录
```
  vite-project
  ├─ .env.development
  ├─ .env.production
  ├─ .eslintrc.js
  ├─ .gitignore
  ├─ .vscode
  │  ├─ extensions.json
  │  └─ settings.json
  ├─ README.md
  ├─ index.html
  ├─ package-lock.json
  ├─ package.json
  ├─ public
  │  └─ favicon.ico
  ├─ src
  │  ├─ App.vue
  │  ├─ assets
  │  │  └─ logo.png
  │  ├─ components
  │  │  ├─ HelloWorld.vue
  │  │  └─ demo.vue
  │  ├─ env.d.ts
  │  └─ main.ts
  ├─ tsconfig.json
  ├─ vite.config.ts
  ├─ 文件命名规范.md
  └─ 目录管理规范.md
```