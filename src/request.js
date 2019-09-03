import axios from 'axios'
import cookie from 'vue-cookies'
const service = axios.create({
  timeout:3000
})

//request拦截器
service.interceptors.request.use(config =>{
  config.headers["X-Session-Id"] ='2207bf12-4c1d-4e72-93c6-99db52b1e7e0'
  config.headers["X-User-Name"] = 'yu'
  return config
},error => {
  promise.reject(error)
})

//response拦截器
service.interceptors.response.use(response =>{
  const res = response.data
  return res
},err => {
  console.log(err)
  return Promise.reject(error)
})

export default service




