
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIsCollStore = defineStore("isColl",()=> {
    const isCollapse = ref(false)

    return{ isCollapse }
})