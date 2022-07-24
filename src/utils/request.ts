/*
 * @Author: dongjia
 * @Date: 2022-07-06 20:31:30
 * @LastEditTime: 2022-07-06 22:39:52
 * @LastEditors: aleaner
 * @Description: 接口请求配置
 * @FilePath: \vue3-vite\src\utils\request.ts
 * 怎么可能会有bug！！！
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

/**
 * 其他自定义的请求配置
 * 主要用于请求优化相关
 * 是否需要权限配置
 * 其他的请求效果配置
 */
interface AnotherRquestConfig extends AxiosRequestConfig {
  routeChangeCancel: boolean, //允许切换路由时取消请求
  notCancel: boolean, //不允许取消请求
  token: boolean, //是否携带token
  allowMainLoading: boolean, //是否使用全局loading
}

// 获取取消请求的api
const CancelToken = axios.CancelToken;

// 创建一个Request类
export default class Request {
  public static api: AxiosInstance;

  // 初始化
  public static init() {
    this.api = axios.create({
      baseURL: process.env.VITE_APP_BASE_URL,
      timeout: 20000,  // 请求超时时间
      routeChangeCancel: true, //允许切换路由时取消请求
      notCancel: false, //不允许取消请求
      token: true, //是否携带token
      allowMainLoading: false, //是否使用全局loading
    } as AnotherRquestConfig)

    this.initInterceptors();
    return axios;
  }

  // 初始化拦截器
  public static initInterceptors() {
    /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
    this.api.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(config)
        // const token = Vue.ls.get(ACCESS_TOKEN)
        // if (token) {
        //     config.headers['Authorization'] = 'Bearer ' + token
        // }

        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // if (config.headers.isJwt) {
        // const token = localStorage.getItem('ACCESS_TOKEN');
        // if (token) {
        //   config.headers.Authorization = 'Bearer ' + token;
        // }
        // }
        return config;
      },
      (error: any) => {
        console.log(error);
      },
    )
    // 响应拦截器
    this.api.interceptors.response.use(
      // 请求成功
      (response: AxiosResponse) => {
        // if (res.headers.authorization) {
        //     localStorage.setItem('id_token', res.headers.authorization);
        // } else {
        //     if (res.data && res.data.token) {
        //         localStorage.setItem('id_token', res.data.token);
        //     }
        // }

        if (response.status === 200) {
          return Promise.resolve(response.data);
          return response;
        } else {
          Request.errorHandle(response);
          // return Promise.reject(response.data);
          return response;
        }
      },
      // 请求失败
      (error: any) => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          // Request.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          // 处理断网的情况
          // eg:请求超时或断网时，更新state的network状态
          // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
          // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
          // ElMessage({
          //   message: '网络连接异常,请稍后再试!',
          //   type: 'success',
          // })
        }
      })
  }

  /**
     * http握手错误
     * @param res 响应回调,根据不同响应进行不同操作
     */
  public static errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        // ElMessage({
        //   message: '请求的资源不存在',
        //   type: 'warning',
        // })
        break;
      default:
      // ElMessage.error('连接错误');
    }
  }
}