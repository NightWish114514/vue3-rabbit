import httpInstance from "@/utils/http";
import type { CreateOrderType } from "@/types/checkout";

export const getCheckOutInfoAPI = () => {
  return httpInstance({
    url: '/member/order/pre',
    method: 'GET'
  })
}


export const createOrderAPI = (data: CreateOrderType) => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  })
}
