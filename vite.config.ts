import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env=loadEnv(mode,process.cwd())
   return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    base:'./',
    server:{
      //端口号
      port: 8888,
      // 是否自动打开浏览器
      open: true,
      // 主机名称
      host: 'localhost',
      //跨域 配置
      proxy:{
        [env.VITE_APP_BASE_API]:{
          target:'http://localhost:7777',
          changeOrigin:true,
          rewrite:(path)=>path.replace(/`^${env.VITE_APP_BASE_API}`/,'')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
