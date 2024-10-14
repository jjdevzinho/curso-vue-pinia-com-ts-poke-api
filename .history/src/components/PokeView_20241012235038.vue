<script setup lang="ts">
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon${route.params.name}`,
    )
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getData()
</script>
<template>
  <div>Pokemon: {{ $route.params.name }}</div>
</template>
