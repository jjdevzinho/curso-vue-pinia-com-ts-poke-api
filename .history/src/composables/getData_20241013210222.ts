import axios from 'axios'
import { ref } from 'vue'

// interface Pokemon {
//   results: string
//   url: string
// }

// const pokemons = ref<Pokemon[]>([])

export const useGetData = () => {
  const data = ref<[]>([])
  const loading = ref<boolean>(false)

  const getData = async (url: string) => {
    loading.value = true
    try {
      const res = await axios.get(url)
      // pokemons.value = data.results as Pokemon[]
      data.value = res.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, getData }
}
