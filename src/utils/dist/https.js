"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// // 自动切换环境
// if (process.env.NODE_ENV == 'development') { // 开发环境
//   axios.defaults.baseURL = '/api'
// } else if (process.env.NODE_ENV == 'debug') { // 测试环境
//   axios.defaults.baseURL = '/api'
// } else if (process.env.NODE_ENV == 'production') { // 生产环境
//   axios.defaults.baseURL = 'http://mountanvil.funthin.com'
// }
// 创建axios实例
var service = {};
service = axios_1["default"].create({
    baseURL: "http://120.77.79.140:3000/api",
    timeout: 50000 // 请求超时时间
});
// request拦截器 axios的一些配置
service.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
});
// respone拦截器 axios的一些配置
service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.error("error:" + error); // for debug
    return Promise.reject(error);
});
exports["default"] = service;
