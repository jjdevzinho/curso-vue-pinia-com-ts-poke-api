<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

interface Pokemon {
  name: string,
  url: string
}

const pokemons = ref<Pokemon[]>([])

const getData = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
    pokemons.value: Pokemon[] = data.results
  } catch (error) {
    console.error(error)
  }
}

getData()
</script>

<template>
  <h2>Pokemons</h2>
  <ul class="">
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      <RouterLink :to="`/pokemons/${pokemon.name}`">
        {{ pokemon.name }}
      </RouterLink>
    </li>
  </ul>
</template>
