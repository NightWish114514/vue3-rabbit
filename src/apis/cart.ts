import httpInstance from '@/utils/http'

// 加入购物车
export const addCartAPI = ({ skuId, count }: { skuId: string, count: number }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId: skuId,
      count: count
    }
  })
}

// 获取购物车列表
export const getCartListAPI = () => {
  return httpInstance({
    url: '/member/cart',
  })
}

// 删除购物车商品
export const delCartAPI = (ids: string[]) => {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data: { skuId: string, count: number, selected: boolean }[]) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
