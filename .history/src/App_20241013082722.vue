<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand d-flex" href="#">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="48"
            height="28"
          />
          Pokemon App
        </a>
        <nav>
          <RouterLink to="/" exact>Home</RouterLink>
          <RouterLink to="/pokemons">Pokemons</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <main class="container my-5">
    <RouterView />
  </main>
</template>
