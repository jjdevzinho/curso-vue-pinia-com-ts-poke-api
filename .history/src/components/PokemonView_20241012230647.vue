<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const pokemons = ref([])

const getData = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(response.data.results)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div></div>
</template>

<template>
  <h2>POkemon</h2>
</template>
