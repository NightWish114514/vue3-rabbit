export interface PayInfoType {
  id: string
  createTime: string
  payType: number
  orderState: number
  payLatestTime: string
  countdown: number
  postFee: number
  payMoney: number
  payChannel: number
  payState: number
  totalMoney: number
  totalNum: number
  deliveryTimeType: number
  receiverContact: string
  receiverMobile: string
  provinceCode: string
  cityCode: string
  countyCode: string
  receiverAddress: string
  payTime: string | null
  consignTime: string | null
  endTime: string | null
  closeTime: string | null
  evaluationTime: string | null
  skus: PaySkuType[]
  arrivalEstimatedTime: string | null
}
export interface PaySkuType {
  id: string
  spuId: string
  name: string
  quantity: number
  image: string
  realPay: number
  curPrice: number
  totalMoney: number
  properties: {
    propertyMainName: string
    propertyValueName: string
  }[]
  attrsText: string
}
