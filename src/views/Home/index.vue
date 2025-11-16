<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面版组件 -->
   <!-- <HomePanel title="新鲜好物" sub-title="11111">

   </HomePanel>
   <HomePanel title="人气推荐" sub-title="11111">

   </HomePanel> -->
</template>

<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from './components/HomePanel.vue'
</script>

<style scoped></style>
