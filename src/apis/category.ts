import httpInstance from "@/utils/http"

export const getTopCategoryAPI = (id: string) => {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}


export const getSubCategoryFilterAPI = (id: string) => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

export const getSubCategoryGoodsAPI = (data: {
  id: string
  page?: number
  pageSize?: number
  sortField?: 'publishTime' | 'orderNum' | 'evaluateNum'
}) => {
  return httpInstance({
    method: 'POST',
    url: '/category/goods/temporary',
    data: {
      id: data.id,
      page: data.page ?? 1,
      pageSize: data.pageSize ?? 20,
      sortField: data.sortField ?? 'publishTime'
    }
  })
}

