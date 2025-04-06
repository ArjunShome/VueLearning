<template>
  <header>
    <nav>
      <ul class="flex gap-4 p-8 bg-orange-200 text-orange-800 text-lg">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favourites' }" class="hover:underline">Favourites</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'add_recipe' }" class="hover:underline">Add Recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="h-screen p-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
