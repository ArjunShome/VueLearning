<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">{{ recipe?.name }}</h1>
    <p class="mb-4">{{ recipe?.description }}</p>
    <div class="font-bold text-red-400 w-25 rounded text-center">
      <RouterLink :to="{ name: 'edit_recipe', params: { id: recipe?.id } }" class="hover:underline">
        Edit Recipe
      </RouterLink>
    </div>
    <div class="py-2">
      <button
        v-if="recipe"
        @click="recipeStore.toggleFavourite(recipe.id)"
        class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
      >
        {{ isFavourite ? 'Remove from Favourites' : 'Add to Favourites' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute();
const recipeStore = useRecipeStore();
const recipe = computed(() => recipeStore.getRecipebyId(route.params.id as string));
const isFavourite = computed(() =>
  recipe.value ? recipeStore.isFavourite(recipe.value.id) : false,
);
</script>
