import httpInstance from '@/utils/http'

export const getOrderAPI = (id: string) => {
  return httpInstance({
    url: `/member/order/${id}`
  })
}
