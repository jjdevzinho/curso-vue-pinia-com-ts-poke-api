import axios from 'axios'
import { ref } from 'vue'

// const pokemons = ref<Pokemon[]>([])

export const useGetData = () => {
  const data = ref(null)
  const loading = ref < boolean > false

  const getData = async url => {
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
