"use strict";
exports.__esModule = true;
exports.getArticleDetail = exports.getArticleList = void 0;
var https_1 = require("@/utils/https");
// 文章列表
function getArticleList(data) {
    return https_1["default"]({
        url: 'article/articles?pagenum=' + data.pagenum + '&pagesize=' + data.pagesize,
        method: 'get'
    });
}
exports.getArticleList = getArticleList;
// 查询文章详情
function getArticleDetail(data) {
    return https_1["default"]({
        url: 'article/article?_id=' + data._id,
        method: 'get'
    });
}
exports.getArticleDetail = getArticleDetail;
