import axios from 'axios'
import { getToken } from './cookies'

const service = axios.create({
  baseURL: '/pq-web/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
      config.headers!['token'] = getToken() || ''
      return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res:any = response.data
    if (res.code !== 0) {
      console.error(`service:[${response.config.url}] Error => ${JSON.stringify(res)}`)
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service