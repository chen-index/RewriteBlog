"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("./utils/element.js");
require("./less/style.less");
var vue_particles_1 = require("vue-particles");
vue_1["default"].use(vue_particles_1["default"]);
var https_1 = require("./utils/https");
var urls_1 = require("./utils/urls");
vue_1["default"].prototype.$https = https_1["default"]; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
vue_1["default"].prototype.$urls = urls_1["default"]; // 其他页面在使用 urls 的时候直接  this.$urls 就可以了
vue_1["default"].config.productionTip = false;
new vue_1["default"]({
    router: router_1["default"],
    store: store_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
