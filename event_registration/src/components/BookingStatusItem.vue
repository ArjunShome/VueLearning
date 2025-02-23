<template>
  <RoundedCard>
    <div class="flex justify-between p-4">
      <div class="flex space-x-2">
        <div>{{ description }}</div>
        <div>
          <component :is="icon" :class="{ 'animate-spin': pending, 'text-green-600': !pending }" />
        </div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancel')"> Cancel </RoundButton>
    </div>
  </RoundedCard>
</template>

<script setup>
import { computed } from 'vue';
import RoundButton from './RoundButton.vue';
import RoundedCard from './RoundedCard.vue';
import { LoaderCircle, Check } from 'lucide-vue-next';

const props = defineProps({
  description: String,
  status: String
});
const pending = computed(() => props.status === 'pending');
const icon = computed(() => (pending.value ? LoaderCircle : Check));

defineEmits(['cancel']);
</script>
