<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface RouteParams {
  name: string
}

const route = useRoute()
const back = useRouter().back

const pokemon = ref({})

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${(route.params as RouteParams).name}`,
    )
    pokemon.value = data
  } catch (error) {
    console.error(error)
    pokemon.value = {}
  }
}

getData()
</script>
