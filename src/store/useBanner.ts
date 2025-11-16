// 封装banner轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBannerApi } from '@/apis/home'
import type { BannerItem } from '@/types/home'

export function useBanner() {
  const bannerList = ref<BannerItem[]>([])

  const getBanner = async () => {
    const res = await getBannerApi({
      distributionSite: '2'
    })
    bannerList.value = res.data.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}
