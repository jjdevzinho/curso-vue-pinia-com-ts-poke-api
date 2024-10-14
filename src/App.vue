<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
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
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" exact class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/pokemons" class="nav-link">Pokemons</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/favoritos" class="nav-link"
                >Favoritos</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="container p-4">
    <RouterView />
  </main>
</template>
