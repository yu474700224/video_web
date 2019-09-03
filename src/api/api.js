import request from '../request'

export function getVideoList () {
  return request({
    url:"/videoapi/videos/list/1",
    method:"GET"
  })
}

export function Login (params) {
  return request({
    url:"/videoapi/user/login",
    method: "POST",
    data:params
  })
}
