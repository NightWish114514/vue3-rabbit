import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/home'

export const useCategoryHooks = defineStore('category', () => {
  const categoryList = ref()
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.data.result
  }

  return {
    getCategory,
    categoryList
  }
})
