<template>
  <h1 class="text-2xl font-bold mb-4">Add Form</h1>
  <form @submit.prevent="addRecipe" class="space-8-4">
    <div>
      <input
        type="text"
        v-model="name"
        placeholder="Recipe Name"
        required
        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      />
    </div>
    <div class="py-2">
      <textarea
        v-model="description"
        placeholder="Recipe Description"
        required
        class="border rounded w-full py-3 px-3 text-gray-700 leading-tight"
      />
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useRecipeStore();

const name = ref('');
const description = ref('');
const router = useRouter();
const addRecipe = () => {
  const recipe = store.addRecipe({
    name: name.value,
    description: description.value,
  });
  router.push({
    name: 'recipe',
    params: {
      id: recipe.id,
    },
  });
};
</script>
