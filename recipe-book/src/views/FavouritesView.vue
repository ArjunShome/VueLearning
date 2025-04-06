<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Favourite Recipes</h1>
  </div>
  <div class="px-10">
    <RecipeList :recipes="store.favouriteRecipes" />
  </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();
</script>
