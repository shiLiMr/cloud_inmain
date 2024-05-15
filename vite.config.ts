import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  //加载环境变量的内容
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    base: './',
    server: {
      //端口号
      port: 8888,
      // 是否自动打开浏览器
      open: true,
      // 主机名
      host: 'localhost',
      // 跨域
      proxy: {
        // '/dev-api': {
          [env.VITE_APP_BASE_API]:{
            // 要跨域的地址
            // target: 'http://localhost:7777',
            target: 'https://mock.apifox.com/m1/4458460-0-default',
            
            changeOrigin: true, //开启跨域
            // rewrite: (path) => path.replace(/^`${env.VITE_APP_BASE_API}`/, "")
            rewrite: (path) => path.replace(new RegExp('^' + `${env.VITE_APP_BASE_API}`), "")
          }
        // [import.meta.env.VITE_APP_BASE_API]: {
        //   //要跨域的地址
        //   target: 'http://localhost:7777',
        //   changeOrigin: true,
        //   //路径重写
        //   rewrite: (path) => path.replace(/^\import.meta.env.VITE_APP_BASE_API/, '')
        // }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
