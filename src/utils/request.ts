import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig, type Method } from "axios";

const resive:AxiosInstance = axios.create({
    // baseURL: "/api",
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000,
})
resive.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    return config;
}, (error:AxiosError) => {
    return Promise.reject(error);
})
resive.interceptors.response.use((response:AxiosResponse) => {
    return response;
}, (error:AxiosError) => {
    return Promise.reject(error);
})
// 请求返回数据类型
type DataType<T = any> ={
    code: number,
    message: string,
    data: T
}
// 请求
const request=<T = any>(url:string,method:Method="GET",data?:Object,options?:AxiosRequestConfig)=>{
    return resive.request<T,DataType<T>>({
        url,
        method,
        [method==='GET'?'params':'data']:data,
        ...options,
    })
}
// 请求封装 get post put delete
export const get=<T = any>(url:string,params?:Object)=>request<T>(url,'GET',params)
export const post=<T = any>(url:string,data?:Object)=>request<T>(url,'POST',data)
export const put=<T = any>(url:string,data?:Object)=>request<T>(url,'PUT',data)
export const del=<T = any>(url:string,data?:Object)=>request<T>(url,'DELETE',data)


export default resive;