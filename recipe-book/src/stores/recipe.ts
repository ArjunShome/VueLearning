import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favouriteeIds = ref<string[]>([]);

  const toggleFavourite = (id: string) => {
    if (favouriteeIds.value.includes(id)) {
      favouriteeIds.value = favouriteeIds.value.filter((favId) => favId !== id);
    } else {
      favouriteeIds.value.push(id);
    }
  };

  const isFavourite = (id: string) => favouriteeIds.value.includes(id);

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe,
    };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  const getRecipebyId = (id: string) => recipes.value.find((recipe) => recipe.id === id);

  const filteredRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const favouriteRecipes = computed(() =>
    recipes.value.filter((recipe) => favouriteeIds.value.includes(recipe.id)),
  );
  return {
    recipes,
    addRecipe,
    getRecipebyId,
    filteredRecipes,
    editRecipe,
    favouriteeIds,
    toggleFavourite,
    isFavourite,
    favouriteRecipes,
  };
});
