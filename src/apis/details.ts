import httpInstance from "@/utils/http";

export const getDetailAPI = (id: string) => {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getDetailHotAPI = ({ id, type }: { id: string, type: number }) => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit: 3
    }
  })
}
