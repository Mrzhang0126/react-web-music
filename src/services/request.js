import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
  // 3.params/data序列化的操作
  // const token = window.localStorage.getItem("token");
  // if(token) {
  //   config.headers["Authorization"] = token;
  // }
  
  return config;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return Promise.reject(error);
});

export default instance;

