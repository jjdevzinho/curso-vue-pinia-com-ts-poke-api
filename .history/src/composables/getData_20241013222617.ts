import axios from 'axios'
import { ref } from 'vue'

export const useGetData = <T>() => {
  const data = ref<T | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get<T>(url)
      data.value = res.data
    } catch (e) {
      console.error(e)
      error.value = 'Error fetching data'
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
