import axios from "axios"
import qs from "qs" //对象转字符串方法
//2  封装get post方法
const axiosGet = (url, params) => {
  return new Promise((resolve, reject) => {
    //根据url和参数请求数据，如果请求成功resolve
    //如果失败 reject
    axios.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data) //请求成功
    }).catch((err) => {
      reject(err)
    })
  })
}
//post的参数  对象转字符串 qs
const axiosPost = (url, params) => {
  return new Promise((resolve, reject) => {
    //根据url和参数请求数据，如果请求成功resolve
    //如果失败 reject
    params = qs.stringify(params) //对象转字符串
    axios.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data) //请求成功
    }).catch((err) => {
      reject(err)
    })
  })
}
export default {
  get: axiosGet,
  post: axiosPost
}
