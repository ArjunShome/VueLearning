<template>
  <div class="border border-gray-900 bg-green-300 rounded-md">
    <SectionCard>
      <template #event_name>
        {{ title }}
      </template>
      <template #event_date>
        {{ when }}
      </template>
      <template #event_desc>
        {{ description }}
      </template>
      <template #footer>
        <div class="p-1">
          <RoundButton @click="$emit('register')">Register</RoundButton>
        </div>
      </template>
    </SectionCard>
  </div>
</template>

<script setup>
import RoundButton from './RoundButton.vue';
import SectionCard from './SectionCard.vue';

defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>
