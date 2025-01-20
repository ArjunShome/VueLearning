<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Registration App</h1>
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
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue';
import BookingStatusItem from './components/BookingStatusItem.vue';
const events = [
  {
    id: 1,
    title: "Arjun's Wedding",
    when: 'November 2022',
    description: "Arjun and Sanchita's Wedding",
    registered: false
  },
  {
    id: 2,
    title: 'Python Conference',
    when: 'February 2025',
    description: 'Python Conference 2025 in Hyderabad',
    registered: false
  },
  {
    id: 3,
    title: 'Ml & AI Training',
    when: 'February 2025',
    description: 'Training on Machine Learning and Artificcial Intelligence',
    registered: false
  },
  {
    id: 4,
    title: 'Intex Presentation',
    when: 'March 2025',
    description: 'Presentation on Intex Restructure deployments',
    registered: false
  }
];
const cancelBooking = (index) => {
  events[index].registered = false;
};
const confirmBooking = (index) => {
  events[index].registered = true;
};
</script>
