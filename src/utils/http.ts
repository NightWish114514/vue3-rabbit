import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserInfo } from '@/store/userInfo'
import { useRouter } from 'vue-router'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

//拦截器
// 请求拦截
httpInstance.interceptors.request.use(config => {
  const userInfoStore = useUserInfo()
  if (userInfoStore.userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfoStore.userInfo.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
httpInstance.interceptors.response.use(response => {
  return response
}, error => {
  ElMessage({
    type: 'error',
    message: error.response.data.message
  })
  // token过期，跳转到登录页
  if (error.response.status === 401) {
    const router = useRouter()
    const userInfoStore = useUserInfo()
    userInfoStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(error)
})

export default httpInstance
