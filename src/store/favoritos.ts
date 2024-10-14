import { defineStore } from 'pinia'
import { ref } from 'vue'

// Defina a interface Pokemon fora da função defineStore
interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

export const useFavoritosStore = defineStore('favoritos', () => {
  const favoritos = ref<Pokemon[]>([])

  if (localStorage.getItem('favoritos')) {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos') || '')
  }

  const add = (pokemon: Pokemon) => {
    favoritos.value.push(pokemon)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const remove = (id: number) => {
    favoritos.value = favoritos.value.filter(item => item.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const findPokemon = (name: string): boolean => {
    return favoritos.value.some(item => item.name === name)
  }

  return {
    favoritos,
    add,
    remove,
    findPokemon,
  }
})
