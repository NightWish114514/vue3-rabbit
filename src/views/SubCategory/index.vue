<script setup lang="ts">
import { getSubCategoryFilterAPI, getSubCategoryGoodsAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { SubCategoryFilterDataType } from '@/types/category'
import type { SubCategoryFilterGoodsDataType } from '@/types/category'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

// 分类筛选数据
const subCategoryFilterData = ref<SubCategoryFilterDataType>({} as SubCategoryFilterDataType)
const route= useRoute()
const getSubCategoryFilterData = async () => {
  const res = await getSubCategoryFilterAPI(route.params.id as string)
  subCategoryFilterData.value = res.data.result
}

// 商品列表
const subCategoryGoodsData = ref<SubCategoryFilterGoodsDataType[]>([])
const reqData = ref({
  id: route.params.id as string,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime' as 'publishTime' | 'orderNum' | 'evaluateNum'
})
const getSubCategoryGoodsData = async () => {
  const res = await getSubCategoryGoodsAPI(reqData.value)
  subCategoryGoodsData.value = res.data.result.items
}
// 切换排序方式
const tabchange = () => {
  reqData.value.page = 1
  getSubCategoryGoodsData()
}

// 无限滚动实现
const disable = ref(false)
const loadMore = async ()=>{
  reqData.value.page++
  const res = await getSubCategoryGoodsAPI(reqData.value)
  subCategoryGoodsData.value.push(...res.data.result.items)
  // subCategoryGoodsData.value = [...subCategoryGoodsData.value, ...res.data.result.items]
  // 如果返回的数据为空，则禁用无限滚动
  if(res.data.result.items.length === 0){
    disable.value = true
  }
}

onMounted(() => {
  getSubCategoryFilterData()
  getSubCategoryGoodsData()
})
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryFilterData.parentId}` }">
          {{subCategoryFilterData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{subCategoryFilterData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="loadMore" :infinite-scroll-disabled="disable">
         <!-- 商品列表-->
         <GoodsItem v-for="item in subCategoryGoodsData" :key="item.id" :goods="item" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
