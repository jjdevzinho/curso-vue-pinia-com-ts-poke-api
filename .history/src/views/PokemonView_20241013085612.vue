<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const back = useRouter().back

const pokemon = ref({})

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`,
    )
    pokemon.value = data
  } catch (error) {
    console.error(error)
    pokemon.value = {}
  }
}

getData()
</script>

<template>
  <h2>{{ pokemon.name }}</h2>
  <img :src="pokemon.sprites.front_default" alt="{{ pokemon.name }}" />
  <button @click="back">Back</button>
</template>
