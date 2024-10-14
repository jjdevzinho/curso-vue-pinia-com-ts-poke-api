<script setup lang="ts">
import { useGetData } from '@/composables/getData'

interface Pokemon {
  name: string
  url: string
}

interface PokemonData {
  results: Pokemon[]
  previous: string | null
  next: string | null
}

const { data, getData, loading, error } = useGetData<PokemonData>()

getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
  <h2>Pokemons</h2>
  <p v-if="loading">loading...</p>
  <div class="alert alert-warning" v-if="error">{{ error }}</div>
  <div v-if="data">
    <div class="list-group my-4">
      <RouterLink
        v-for="pokemon in data.results"
        :key="pokemon.name"
        :to="`/pokemons/${pokemon.name}`"
        class="list-group-item list-group-item-action"
      >
        {{ pokemon.name }}
      </RouterLink>
    </div>
    <div class="d-flex gap-3">
      <button
        class="btn btn-outline-secondary"
        @click="data.previous && getData(data.previous)"
        :disabled="!data.previous"
      >
        Previous
      </button>
      <button
        @click="data.next && getData(data.next)"
        class="btn btn-outline-secondary"
        :disabled="!data.next"
      >
        Next
      </button>
    </div>
  </div>
</template>
