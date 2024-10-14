import axios from 'axios'
import { ref } from 'vue'

interface DataAPI {
  results: string[]
}

export const useGetData = () => {
  const data = ref<DataAPI[] | null>([])
  const loading = ref<boolean>(false)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get(url)
      data.value = res.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
