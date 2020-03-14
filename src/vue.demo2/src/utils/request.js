import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
  })
// request interceptor
service.interceptors.request.use(
    config => {
      console.log(process.env);
      return config
    },
    error => {
       
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      console.log(error)
      console.log(error.response)
      Message({
        message: error.response.data || error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )

export default service