export interface CheckoutAddressType {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  fullLocation: string
  postalCode: null | string
  addressTags: null | string
}

export interface CheckoutInfoType {
  userAddresses: CheckoutAddressType[]
  goods: CheckoutGoodsType[]
  summary: CheckoutSummaryType
}

export interface CheckoutGoodsType {
  id: string
  name: string
  picture: string
  price: number
  count: number
  skuId: string
  attrsText: string
  payPrice: number
  totalPrice: number
  totalPayPrice: number
}

export interface CheckoutSummaryType {
  goodsCount: number
  totalPrice: number
  postFee: number
  totalPayPrice: number
  discountPrice: number
}

export interface CreateOrderType {
  deliveryTimeType: number
  payType: number
  payChannel: number
  buyerMessage: string
  goods: {
    skuId: string
    count: number
  }[]
  addressId: string
}
