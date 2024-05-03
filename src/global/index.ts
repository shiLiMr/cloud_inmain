

import setElementplus from "./setElementplus";
import setElementplusIcon from "./setElementplusIcon";

export default {
    
    install(app: any) {
        // 设置elementplus
        app.use(setElementplus);
        // 设置elementplus icon
        app.use(setElementplusIcon);
    }
}