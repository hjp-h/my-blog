/* eslint-disable no-unused-vars */
import { CommonObject } from '@/types/common'
import type {AxiosRequestConfig,AxiosResponse,AxiosError} from 'axios'
export interface JPRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config:AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?:(error:AxiosError) => any
  responseInterceptor?:(res:T) => T
  responseInterceptorCatch?:(error:AxiosError) => any
} 
export interface JPRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JPRequestInterceptors<T>
  showLoading?: boolean
}
export interface CommonResponce<T=CommonObject> {
  code:number,
  resultData:T
}