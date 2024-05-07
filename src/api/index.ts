
// 
import request from "@/utils/request";

// 
export const getmenus=()=>{
    return request.get("/menus");
}