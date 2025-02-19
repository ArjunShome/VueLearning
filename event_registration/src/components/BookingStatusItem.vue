<template>
  <RoundedCard>
    <div class="flex justify-between p-4">
      <div>
        {{ description }}
      </div>
      <RoundButton variant="danger"> Cancel </RoundButton>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundButton from './RoundButton.vue';
import RoundedCard from './RoundedCard.vue';

defineProps({
  description: String,
  isRegistered: Boolean
});
defineEmits(['cancel']);
</script>
