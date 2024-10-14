<script setup lang="ts">
import { useGetData } from '@/composables/getData'
import { useRoute, useRouter } from 'vue-router'

interface Pokemon {
  name: string
  sprites: {
    front_default: string
  }
}

const route = useRoute()
const back = useRouter().back

const { data, getData, loading, error } = useGetData<Pokemon>()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
  <p v-if="loading">loading...</p>
  <div class="alert alert-warning" v-if="error">Pokemon not found</div>
  <button @click="back" class="btn btn-outline-secondary">Back</button>
  <div v-if="data" class="text-center">
    <h1>{{ data.name }}</h1>
    <img :src="data.sprites?.front_default" alt="Pokemon" />
  </div>
  <div v-else>
    <p>Pokemon not found</p>
  </div>
</template>
