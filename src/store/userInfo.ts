import { ref } from 'vue'
import { defineStore } from 'pinia'
import { userLoginAPI } from '@/apis/user'
import type { UserInfo } from '@/types/user'
import { useCartStore } from '@/store/useCartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserInfo = defineStore('userInfo', () => {
  const userInfo = ref<UserInfo>({})
  const cartStore = useCartStore()
  const getuserinfo = async ({ account, password }: { account: string, password: string }) => {
    const res = await userLoginAPI({ account, password })
    userInfo.value = res.data.result
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        count: item.count,
        selected: item.selected
      }
    }))
    cartStore.getCartList()
  }
  // 清空用户信息和购物车
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {
    userInfo,
    getuserinfo,
    clearUserInfo
  }
}, {
  persist: true
})
