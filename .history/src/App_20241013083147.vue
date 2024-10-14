<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar bg-body-tertiary">
      <nav class="container">
        <RouterLink to="/" class="navbar-brand" exact>
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="48"
            height="28"
          />
          Pokemon App
        </RouterLink>
        <ul class="navbar-nav">
          <RouterLink to="/" exact>Home</RouterLink>
          <RouterLink to="/pokemons">Pokemons</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <main class="container my-5">
    <RouterView />
  </main>
</template>
