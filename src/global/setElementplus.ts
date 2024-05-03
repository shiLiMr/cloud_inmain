
// 全局引入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import type {App} from 'vue'

export default {
    install(app:App){
        // 全局注册 
        app.use(ElementPlus)
    }
}