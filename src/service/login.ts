import http from '@/utils/request'
import Api from './api'

export const getToken = async (data:any) => await http.post(Api.login.getToken, data)