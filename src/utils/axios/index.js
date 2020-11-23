import http from './axios';
// 轮播图
export function getBanner() {
  return http.get('/api/getbanner')
}
// 首页获取商品信息
export function getIndexGoods() {
  return http.get('/api/getindexgoods')
}
// 首页分类
export function getCateTree() {
  return http.get('/api/getcatetree')
}
// 获取商品列表
export function getGoods(params) { 
    return http.get('/api/getgoods',{params})
 }
// 获取一个商品
export function getGoodsInfo(params) {
    return http.get('/api/getgoodsinfo',{params})
  }
// 加入购物车
export function addCart(data) {  
    return http.post('/api/cartadd',data)
}
export function deleteCart(data){
  return http.post('/api/cartdelete',data)
}
// 购物车列表
export function getCartList(params) {  
    return http.get('/api/cartlist',{params})
}
// 注册
export function getRegister(data) {  
    return http.post('/api/register',data)
}
// 登录
export function getLogin(data){
    return http.post('/api/login',data)
}