// src/types/home.ts
export interface BannerItem {
  id: string | number
  imgUrl: string
  hrefUrl: string
  type: string
}

export interface NewItem {
  id: string | number
  name: string
  desc: string
  price: string
  picture: string
  discount: null
  orderNum: number
}

export interface HotItem {
  id: string | number
  picture: string
  title: string
  alt: string
}

export interface GoodsItemType {
  id: string | number
  name: string
  desc: string
  price: string
  picture: string
}

export interface GoodsProductItem {
  id: string | number
  name: string
  desc: string
  price: string
  picture: string
  saleInfo: string
  goods: GoodsItemType[]
}

export interface ApiResponse<T> {
  code: string | number
  msg: string
  result: T
}
