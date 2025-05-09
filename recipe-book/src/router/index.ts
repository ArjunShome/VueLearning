import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FavouritesView from '@/views/FavouritesView.vue';
import AddRecipeVue from '@/views/AddRecipeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotfoundView from '@/views/NotfoundView.vue';
import EditRecipeView from '@/views/EditRecipeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView,
    },
    {
      path: '/add_recipe',
      name: 'add_recipe',
      component: AddRecipeVue,
    },
    {
      path: '/recipe/:id/edit',
      name: 'edit_recipe',
      component: EditRecipeView,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotfoundView,
    },
  ],
});

export default router;
