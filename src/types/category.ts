export interface CategoryDataType {
  id: string
  name: string
  picture: string
  children: CategoryDataChildType[]
}
export interface CategoryDataChildType {
  id: string
  name: string
  picture: string
  parentId: number | string
  parentName: string
  goods: CategoryDataGoodsType[]
}

export interface CategoryDataGoodsType {
  id: string
  name: string
  picture: string
  desc: string
  price: string
  orderNum: number
  discount: null
}
export interface SubCategoryFilterDataType {
  categories: SubCategoryFilterCategoriesType[]
  goods: SubCategoryFilterGoodsDataType[]
  id: string
  name: string
  parentId: number | string
  parentName: string
  picture: string
  saleProperties: []
  brands: []
}

export interface SubCategoryFilterCategoriesType {
  id: string
  layer: number
  name: string
  parent: null
}

export interface SubCategoryFilterGoodsDataType {
  id: string
  name: string
  desc: string
  orderNum: number
  picture: string
  price: string
}
