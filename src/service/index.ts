import JPRequest from "./request";
import { BASE_URL,TIME_OUT } from "./request/config";
const jpRequest = new JPRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT,
  interceptors:{
    requestInterceptor:(config) => {
      const token = localStorage.getItem('token')
      if (token) {
        (config as any).headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error: any) => {
      console.log('请求失败的拦截', error)
    },
    responseInterceptor: (res) => {
      console.log('res',res)
      if(res.status === 200){
        return res.data
      }else{
        return Promise.reject(res)
      }
      
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败的拦截', error)
      return Promise.reject(error)
    }
  }
})
export default jpRequest