<script setup lang="ts">
import { getDetailHotAPI } from '@/apis/details';
import { onMounted, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import type { DetailHotType } from '@/types/details';

// 定义 props
const props = defineProps<{
  type: number
}>()
const TYPE_MAP = {
  1: '24小时榜单',
  2: '周榜单',
}
// 对象类型映射
const title = computed(() => TYPE_MAP[props.type as keyof typeof TYPE_MAP])

const hotList = ref<DetailHotType[]>([])
const route = useRoute()
const getDetailHotList = async () => {
  const res = await getDetailHotAPI({ id: route.params.id as string, type: props.type })
  hotList.value = res.data.result
  // console.log(hotList.value)
}

onMounted(() => {
  getDetailHotList()
})

// 监听路由参数变化，当 id 变化时重新加载数据
watch(() => route.params.id, () => {
  getDetailHotList()
})
</script>


<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/details/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
