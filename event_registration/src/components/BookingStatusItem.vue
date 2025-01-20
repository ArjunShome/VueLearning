<template>
  <div class="flex justify-between border border-gray-900 bg-white rounded-md">
    <p class="p-3">{{ description }} - Status:</p>
    <input
      type="checkbox"
      class="mr-auto"
      :checked="isRegistered"
      @change="$emit('Update:isRegistered', $event.target.checked)"
    />
    <section class="p1 my-auto mx-2">
      <button
        class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-red-600 bg-red-300"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
    </section>
  </div>
</template>

<script setup>
defineProps({
  description: String,
  isRegistered: Boolean
});
defineEmits(['cancel']);
</script>
