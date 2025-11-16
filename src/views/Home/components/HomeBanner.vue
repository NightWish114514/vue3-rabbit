<script setup lang="ts">

  import { getBannerApi } from '@/apis/home';
  import { onMounted, ref } from 'vue'
  // ts类型检查
  import type { BannerItem } from '@/types/home';

  const bannerList = ref<BannerItem[]>([])
  const getBanner = async () => {
    const res = await getBannerApi()
    bannerList.value = res.data.result as BannerItem[]
  }

  onMounted(()=>{
    getBanner()
  })
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
