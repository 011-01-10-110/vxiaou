import axios from 'axios';

const http = axios.create({
  baseURL:'/api'
})

// 请求拦截
http.interceptors.request.use(req => {
  req.headers.authorization = sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')).token:'';
  return req;
})

// 响应拦截
http.interceptors.response.use(res => {
  return res
})

export default http
