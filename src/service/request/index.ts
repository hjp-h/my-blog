import axios from 'axios'
import type {AxiosInstance} from 'axios'
import type { JPRequestConfig,JPRequestInterceptors } from './type'
import { CommonObject } from '@/types/common'
// utils
import { formatUrlOnlyGet } from '@/utils/service'
// 拦截的顺序
// 特定接口的请求拦截
// 每个实例都有的请求成功拦截
// 创建实例时的成功拦截
// 创建实例时的响应成功拦截
// 每个实例都有的响应成功拦截
// 特定接口的响应拦截
export default class JPRequest{
  instance:AxiosInstance
  interceptors?:JPRequestInterceptors
  showLoading?:boolean
  constructor(config:JPRequestConfig){
    // 初始化
    this.instance = axios.create(config)
    this.showLoading = config.showLoading
    this.interceptors = config.interceptors

    // 创建实例时的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor as any,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 每个实例都有的拦截
    // 2.每个实例都会有的拦截写死的
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log('每个实例都会有的请求失败拦截', err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
  request<T>(config:JPRequestConfig<T>):Promise<T> {
    return new Promise((resolve,reject) => {
      if(config.interceptors?.requestInterceptor){
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            console.log('特定接口的响应拦截')
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
  get<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:formatUrlOnlyGet(path,query),...config, method: 'GET' })
  }
  post<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:path,data:query,...config, method: 'POST' })
  }
  delete<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:formatUrlOnlyGet(path,query),...config, method: 'DELETE' })
  }
  deleteJson<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:path,data:query,...config, method: 'DELETE' })
  }
  patch<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:path,data:query,...config, method: 'PATCH' })
  }
  uploadFile<T>(path:string,query:CommonObject={},config: JPRequestConfig<T>={}): Promise<T> {
    return this.request<T>({ url:path,data:query,headers:{'Content-Type': 'multipart/form-data;charset=utf8'},...config, method: 'POST' })
  }
}