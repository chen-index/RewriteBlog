"use strict";
exports.__esModule = true;
exports.login = void 0;
var https_1 = require("@/utils/https");
function login(data) {
    return https_1["default"]({
        url: '/users/login?email=' + data.email + '&passWord=' + data.passWord,
        method: 'post'
    });
}
exports.login = login;
