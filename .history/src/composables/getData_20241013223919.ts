import axios from 'axios'
import { ref } from 'vue'

export const useGetData = <T>() => {
  const data = ref<T | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getData = async (url: string) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get<T>(url)
      data.value = res.data
    } catch (err) {
      console.error(err)
      error.value = 'Error fetching data'
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
