<script setup>
import { ref } from 'vue'
import { useGetData } from '@/composables/getData'

const { data, getData, loading } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
  <h2>Pokemons</h2>
  <p v-if="loading">loading...</p>
  <div v-if="data">
    <ul class="">
      <li v-for="pokemon in data.results" :key="pokemon.name">
        <RouterLink :to="`/pokemons/${pokemon.name}`">
          {{ pokemon.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
