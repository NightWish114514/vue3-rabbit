import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartDataType } from '@/types/details'
import { addCartAPI, getCartListAPI } from '@/apis/cart'
import { useUserInfo } from '@/store/userInfo'
import { delCartAPI } from '@/apis/cart'


export const useCartStore = defineStore('cart', () => {
  const userInfoStore = useUserInfo()
  const isLogin = computed(() => {
    return userInfoStore.userInfo.token
  })
  const cartList = ref<CartDataType[]>([])

  // 获取购物车列表
  const getCartList = async () => {
    const res = await getCartListAPI()
    cartList.value = res.data.result.map((item: CartDataType) => ({
      ...item,
      // 默认不选中
      selected: false,
      // 默认有效 能正常结算
      isEffective: true
    }))
  }
  // 添加购物车商品
  const addCart = async (detail: CartDataType) => {
    const { skuId, count } = detail
    // 登录状态下添加购物车
    if (isLogin.value) {
      console.log('登录状态下添加购物车')
      await addCartAPI({ skuId, count })
      getCartList()
    } else {
      // 判断商品是否已经存在购物车中 找到返回对象，否则返回undefined
      const item = cartList.value.find((item) => item.skuId === detail.skuId)
      if (item) {
        item.count += detail.count
        item.selected = false
        item.isEffective = true
      } else {
        cartList.value.push({
          ...detail,
          selected: false,
          isEffective: true
        })
      }
      console.log(item?.selected)
    }
  }

  // 删除购物车商品
  const delCart = async (skuId: string) => {
    if (isLogin.value) {
      console.log('登录状态下删除购物车商品', skuId)
      await delCartAPI([skuId])
      // 删除后需要重新获取购物车列表，更新本地状态
      getCartList()
    } else {
      const index = cartList.value.findIndex((item) => item.skuId === skuId)
      // console.log(index)
      if (index !== -1) {
        cartList.value.splice(index, 1)
      }
    }
  }

  // 清空购物车
  const clearCart = async () => {
    cartList.value = []
  }

  // 计算购物车商品总数量以及总价格
  const totalCount = computed(() => {
    return cartList.value.reduce((total, item) => total + item.count, 0)
  })
  const totalPrice = computed(() => {
    return cartList.value.reduce((total, item) => total + item.count * item.price, 0)
  })

  // 单选
  const singleCheck = (i: CartDataType, selected: boolean) => {
    const item = cartList.value.find((item) => item.skuId === i.skuId)
    if (item) {
      item.selected = selected
    }
  }
  // 全选
  const isAllCheck = computed(() => {
    return cartList.value.every((item) => item.selected)
  })
  const allCheck = (selected: boolean) => {
    cartList.value.forEach((item) => {
      item.selected = selected
    })
  }
  // 计算选中的商品总数量以及总价格
  const selectedTotalCount = computed(() => {
    return cartList.value.reduce((total, item) => item.selected ? total + item.count : total, 0)
  })
  const selectedTotalPrice = computed(() => {
    return cartList.value.reduce((total, item) => item.selected ? total + item.count * item.price : total, 0)
  })
  return {
    cartList,
    addCart,
    delCart,
    getCartList,
    totalCount,
    totalPrice,
    singleCheck,
    isAllCheck,
    allCheck,
    selectedTotalCount,
    selectedTotalPrice,
    clearCart,
  }

}, {
  persist: true
})
