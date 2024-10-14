<script setup lang="ts">
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const back = useRouter().back

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`,
    )
  } catch (error) {
    console.error(error)
  }
}

getData()
</script>
<template>
  <div>Pokemon: {{ $route.params.name }}</div>
  <button @click="back">Back</button>
</template>
