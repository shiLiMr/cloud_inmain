
// 全局引入 icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

import SvgIcon from '@/components/Svgicon.vue'  // 引入自定义icon 组件

export default{
    install(app:App){
        // 注册element plus icon
        for(const [key, component] of Object.entries(ElementPlusIconsVue)){
            app.component(key, component)
        }
        
        // 注册自定义icon 组件
        app.component('SvgIcon', SvgIcon)

    }
}