import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemons',
      name: 'about',
      component: () => import('../views/PokemonListView.vue'),
    },
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
    },
  ],
})

export default router
