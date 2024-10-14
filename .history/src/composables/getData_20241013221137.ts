import axios from 'axios'
import { ref } from 'vue'

export const useGetData = <T>() => {
  const data = ref<T | null>(null)
  const loading = ref<boolean>(false)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get<T>(url)
      data.value = res.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
