<template>
  <div>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <!-- 二级路由出口 -->
    <router-view />
    <LayoutFooter/>
  </div>
</template>

<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFixed from './components/LayoutFixed.vue';

// 触发获取导航列表的action
import { useCategoryHooks } from '@/store/useHomeCategory';
import { onMounted } from 'vue';

const category = useCategoryHooks()
onMounted(()=>{
  category.getCategory()
})

</script>

<style scoped></style>
