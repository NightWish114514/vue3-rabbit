import httpInstance from '@/utils/http'

// ts类型检查
export const getBannerApi = (params: { distributionSite?: string } = {}) => {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}

export const getNewApi = () => {
  return httpInstance({
    url: '/home/new'
  })
}


export const getHotApi = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
