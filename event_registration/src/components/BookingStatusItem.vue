<template>
  <RoundedCard>
    <div class="flex justify-between p-4">
      <div class="flex space-x-2">
        <div>{{ description }}</div>
        <div>{{ status }}</div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancel')"> Cancel </RoundButton>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundButton from './RoundButton.vue';
import RoundedCard from './RoundedCard.vue';

defineProps({
  description: String,
  status: String
});
defineEmits(['cancel']);
</script>
