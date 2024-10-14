import axios from 'axios'
import { ref } from 'vue'

interface Pokemon {
  results: []
}

const pokemons = ref<Pokemon[]>([])

export const useGetData = () => {
  const data = ref<Pokemon[]>([])
  const loading = ref<boolean>(false)
  const getData = async (url: string) => {
    try {
      const { data } = await axios.get(url)
      pokemons.value = data.results as Pokemon[]
    } catch (error) {
      console.error(error)
    }
  }

  return { data, loading, getData }
}
