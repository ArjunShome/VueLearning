<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Registration App</h1>
    <section v-if="!eventsLoading">
      <h2 class="text-2xl font-medium">All Events</h2>
      <section class="grid grid-cols-2 gap-4">
        <EventCard
          v-for="(event, index) in events"
          :key="event.id"
          :title="event.title"
          :when="event.when"
          :description="event.description"
          @register="confirmBooking(index)"
        >
        </EventCard>
      </section>
      <h2 class="text-2xl font-medium">Your Bookings</h2>
      <section class="grid grid-cols-1 gap-4">
        <BookingStatusItem
          v-for="(event, index) in events"
          :key="event.id"
          :description="event.description"
          v-model="event.registered"
          @cancel="cancelBooking(index)"
        >
        </BookingStatusItem>
      </section>
    </section>
    <section v-else class="flex flex-auto">
      <img src="./images/loop loading GIF by Derek Fitzpatrick.gif" alt="" />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import EventCard from '@/components/EventCard.vue';
import BookingStatusItem from './components/BookingStatusItem.vue';

const events = ref([]);
const eventsLoading = ref(false);

const fetchEvents = async () => {
  eventsLoading.value = true;
  try {
    const response = await fetch('http://localhost:5172/events');
    events.value = await response.json();
  } finally {
    eventsLoading.value = false;
  }
};
onMounted(() => fetchEvents());
</script>
