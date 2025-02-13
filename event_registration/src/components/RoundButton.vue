<template>
  <div class="flex justify-end">
    <button
      class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-blue-300"
      @click="$emit('click')"
    >
      <slot> </slot>
    </button>
  </div>
</template>

<script setup>
defineEmits(['click']);
</script>
