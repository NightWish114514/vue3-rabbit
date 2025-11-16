// 商品详情相关类型定义

// 分类类型
export interface DetailCategoryType {
  id: string
  name: string
  layer: number
  parent: DetailCategoryType | null
}

// 品牌类型
export interface DetailBrandType {
  id: string
  name: string
  nameEn: string
  picture: string
  logo: string
  type: string
  desc: string
  place: string
}

// 详情图片类型
export interface DetailPictureType {
  url: string
  desc: string
}

// 详情属性类型
export interface DetailPropertyType {
  name: string
  value: string
}

// 详情信息类型
export interface DetailInfoType {
  pictures: string[]
  properties: DetailPropertyType[]
}

// 评价信息类型
export interface DetailEvaluationType {
  id: string
  orderInfo: {
    specs: Array<{ name: string; valueName: string }>
    quantity: number
    createTime: string
  }
  member: {
    id: string
    nickname: string
    avatar: string
  }
  score: number
  tags: string[]
  content: string
  pictures: string[]
  praiseCount: number
  praisePercent: number
  createTime: string
  officialReply: string | null
}

// 热门商品类型
export interface DetailHotType {
  id: string
  name: string
  picture: string
  price: number
  orderNum: number
  desc: string
}

// 相似商品类型
export interface DetailSimilarProductType {
  id: string
  name: string
  picture: string
  price: number
  oldPrice: number
  desc: string
  orderNum: number
  discount: number
}

// SKU 规格值类型
export interface DetailSkuSpecValueType {
  name: string
  picture: string | null
  desc: string
}

// SKU 规格类型
export interface DetailSkuSpecType {
  valueName: string
  values: DetailSkuSpecValueType[]
}

// SKU 类型
export interface DetailSkuType {
  skuId: string
  id: string
  price: number
  oldPrice: number
  inventory: number
  specsText: string
  specs: DetailSkuSpecType[]
}

// 商品规格类型
export interface DetailSpecType {
  name: string
  values: Array<{
    name: string
    picture: string | null
    desc: string
  }>
}

// 用户地址类型
export interface DetailUserAddressType {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  fullLocation: string
  postalCode: string
  addressTags: string
}

// 推荐商品类型
export interface DetailRecommendType {
  id: string
  name: string
  picture: string
  price: number
  orderNum: number
}

// 商品详情主类型
export interface DetailDataType {
  id: string
  name: string
  spuCode: string
  desc: string
  price: number
  oldPrice: number
  brand: DetailBrandType | null
  categories: DetailCategoryType[]
  collectCount: number
  commentCount: number
  details: DetailInfoType
  discount: number
  evaluationInfo: DetailEvaluationType | null
  hotByDay: DetailHotType[]
  inventory: number
  isCollect: boolean | null
  isPreSale: boolean
  mainPictures: string[]
  mainVideos: string[]
  recommends: DetailRecommendType[] | null
  salesCount: number
  similarProducts: DetailSimilarProductType[]
  skus: DetailSkuType[]
  specs: DetailSpecType[]
  userAddresses: DetailUserAddressType[] | null
  videoScale: number | null
}

export interface CartDataType {
  id: string
  name: string
  picture: string | undefined
  price: number
  count: number
  skuId: string
  attrsText: string
  selected: boolean
  specs: []
  nowPrice: number
  nowOriginalPrice: number
  stock: number
  coupon: number
  isEffective: boolean
  discount: null
  isCollect: boolean
  postFee: number
}
