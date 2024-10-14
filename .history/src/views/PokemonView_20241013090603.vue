<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Pokemon {
  name: string
  sprites: {
    front_default: string
  }
}

const route = useRoute()
const back = useRouter().back

const poke = ref<Pokemon | null>(null)

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`,
    )
    poke.value = data
  } catch (error) {
    console.error(error)
    poke.value = null
  }
}

getData()
</script>

<template>
  <div v-if="poke">
    <p>{{ poke.name }}</p>
    <img :src="poke.sprites.front_default" alt="Pokemon" />
  </div>
  <div v-else>
    <p>Pokemon not found</p>
  </div>
  <button @click="back" class="btn btn-outline-secondary">Back</button>
</template>
