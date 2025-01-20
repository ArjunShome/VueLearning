<template>
  <div class="border border-gray-900 bg-green-300 rounded-md">
    <h3 class="p-2 font-medium text-xl border-b border-blue-600">{{ title }}</h3>
    <p class="p-2 font-medium text-xl border-b border-blue-600">{{ when }}</p>
    <p class="p-3">{{ description }}</p>
    <section class="p-4">
      <RoundButton @click="$emit('register')">Register</RoundButton>
    </section>
  </div>
</template>

<script setup>
import RoundButton from './RoundButton.vue';

defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>
