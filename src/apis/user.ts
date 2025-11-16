import httpInstance from '@/utils/http'

export const userLoginAPI = (data: { account: string, password: string }) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account: data.account,
      password: data.password
    }
  })
}
