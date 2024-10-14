<script setup lang="ts">
import { useFavoritosStore } from '@/store/favoritos'
import { storeToRefs } from 'pinia'
const usefavoritosStore = useFavoritosStore()
const { favoritos } = storeToRefs(usefavoritosStore)
const { remove } = usefavoritosStore
</script>

<template>
  <h1>Lista de favoritos</h1>
  <ul class="list-group">
    <li
      v-for="favorito in favoritos"
      :key="favorito.id"
      class="list-group-item d-flex gap-2 align-items-center"
    >
      <img :src="favorito.sprites?.front_default" alt="Pokemon" height="48" />
      <RouterLink :to="`/pokemons/${favorito.name}`">{{
        favorito.name
      }}</RouterLink>
      <button
        @click="remove(favorito.id)"
        class="btn btn-sm btn-outline-danger ms-auto"
      >
        ✕
      </button>
    </li>
  </ul>
</template>
