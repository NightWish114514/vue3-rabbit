import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
  let timer: ReturnType<typeof setInterval> | null = null
  const time = ref(0)
  const formatTime = computed(() =>
    dayjs.unix(time.value).format('mm:ss')
  )
  const start = (currentTime: number) => {
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
    }
  })
  return {
    formatTime,
    start
  }
}
