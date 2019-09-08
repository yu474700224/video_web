import request from '../request'

export function getVideoList () {
  return request({
    url:"/videoapi/videos/list/1",
    method:"GET"
  })
}

export function Login (data) {
  return request({
    url:"/videoapi/user/login",
    method: "POST",
    data
  })
}

export function Register (data) {
  return request({
    url:"/videoapi/user/create",
    method:"POST",
    data
  })
}


export function addComment (data) {
  return request({
    url:"/videoapi/comment/add",
    method:"POST",
    data
  })
}

export function getCommentList (params) {
  return request({
    url:"/videoapi/comment/list",
    method:"GET",
    params
  })
}
