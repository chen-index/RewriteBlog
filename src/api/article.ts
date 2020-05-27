import http from '@/utils/https'

// 文章列表
export function getArticleList(data:any) {
  return http({
    url: 'article/articles?pagenum='+data.pagenum+'&pagesize='+data.pagesize,
    method: 'get'
  })
}

// 查询文章详情
export function getArticleDetail(data:any) {
  return http({
    url: 'article/article?_id='+data._id,
    method: 'get'
  })
}