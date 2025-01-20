<template>
  <div class="border border-gray-900 bg-green-300 rounded-md">
    <h3 class="p-2 font-medium text-xl border-b border-blue-600">{{ title }}</h3>
    <p class="p-2 font-medium text-xl border-b border-blue-600">{{ when }}</p>
    <p class="p-3">{{ description }}</p>
    <section class="fles justify-end p-4">
      <button
        class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-blue-300"
        @click="$emit('register')"
      >
        Register
      </button>
    </section>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>
