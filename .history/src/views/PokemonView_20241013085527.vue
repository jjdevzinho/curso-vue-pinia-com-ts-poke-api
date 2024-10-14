<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const back = useRouter().back

const poke = ref({})

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`,
    )
    poke.value = data
  } catch (error) {
    console.error(error)
    poke.value = {}
  }
}

getData()
</script>

<template>
  <h2>{{ poke.name }}</h2>
  <img :src="poke.sprites.front_default" alt="Pokemon" />
  <button @click="back">Back</button>
</template>
