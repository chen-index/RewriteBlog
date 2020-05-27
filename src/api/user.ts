import http from '@/utils/https'

export function login(data:any) {
  return http({
    url: '/users/login?email='+data.email+'&passWord='+data.passWord,
    method: 'post'
  })
}