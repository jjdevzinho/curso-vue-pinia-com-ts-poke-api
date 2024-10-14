import { ref } from 'vue'
import axios from 'axios'

interface Pokemon {
  name: string
  url: string
}
const pokemons = ref<Pokemon[]>([])

export const useGetData = () => {
  const getData = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
    pokemons.value = data.results as Pokemon[]
  } catch (error) {
    console.error(error)
  }

  return { getData }
}
