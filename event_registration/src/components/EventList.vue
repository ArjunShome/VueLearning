<template>
  <template v-if="error_events">
    <section>
      <div class="space-y-4 items-center flex flex-col">
        <div class="text-red-600">Could not load events at the moment, Please try again.</div>
        <div>
          <RoundButton variant="retry" @click="fetchEvents">Retry Now</RoundButton>
        </div>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <template v-if="!eventsLoading">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.when"
          :description="event.description"
          @register="handleResgistration(event)"
        />
      </template>
      <div v-else class="animate-pulse col-span-2 flex justify-center">
        <img src="../images/loading-gif.gif" alt="" class="rounded-md" />
      </div>
    </section>
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import RoundButton from '@/components/RoundButton.vue';
import useBookings from '@/composables/useBookings';

const { handleResgistration, eventsLoading, fetchEvents, error_events, events } = useBookings();

onMounted(() => {
  fetchEvents();
});
</script>
