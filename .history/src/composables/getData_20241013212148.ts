import axios from 'axios'
import { ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}

interface DataAPI {
  results: Pokemon[]
}

export const useGetData = () => {
  const data = ref<DataAPI | null>(null)
  const loading = ref<boolean>(false)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get<DataAPI>(url)
      data.value = res.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
