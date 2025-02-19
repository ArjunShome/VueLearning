<template>
  <div class="flex justify-end">
    <button
      :class="['text-sm font-medium rounded-full px-3 py-1', variants[variant] ?? variant.default]"
      @click="$emit('click')"
    >
      <slot> </slot>
    </button>
  </div>
</template>

<script setup>
const variants = {
  default: 'border border-gray-200 hover:bg-blue-300',
  danger: 'bg-red-200 enabled:hover:bg-red-100 text-red-900'
};
defineProps({
  variant: {
    type: String,
    default: 'default'
  }
});
defineEmits(['click']);
</script>
