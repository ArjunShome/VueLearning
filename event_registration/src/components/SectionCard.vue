<template>
  <h3 class="p-2 font-medium text-xl border-b border-blue-200">
    <slot name="event_name"></slot>
  </h3>
  <div class="p-2 font-medium text-xl border-b border-blue-600">
    <slot name="event_date"></slot>
  </div>
  <div class="p-4">
    <slot name="event_desc"></slot>
  </div>
  <div class="p-3">
    <slot name="footer"></slot>
  </div>
  <RoundedCard> </RoundedCard>
</template>

<script setup lang="ts">
import RoundedCard from './RoundedCard.vue';
</script>
