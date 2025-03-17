<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favourites' }">Favourites</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'add_recipe' }">Add Recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
