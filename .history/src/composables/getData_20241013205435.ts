import axios from 'axios'
import { ref } from 'vue'

interface Pokemon {
  results: any[]
  url: string
}

// const pokemons = ref<Pokemon[]>([])

export const useGetData = () => {
  const data = ref<Pokemon[]>([])
  const loading = ref<boolean>(false)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get(url)
      // pokemons.value = data.results as Pokemon[]
      data.value = res.data as Pokemon[]
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
