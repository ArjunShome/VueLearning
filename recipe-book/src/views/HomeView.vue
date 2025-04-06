<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">Recipe Book</h1>
    <div>
      <input
        type="text"
        placeholder="Search Recipes ..."
        v-model="searchQuery"
        class="p2 border rounded mb4 w-full"
      />
    </div>
    <div class="p-4">
      <RecipeList :recipes="filteredRecipes" />
    </div>
  </main>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const searchQuery = ref<string>('');
const filteredRecipes = computed(() => recipeStore.filteredRecipes(searchQuery.value));

const recipeStore = useRecipeStore();
</script>
