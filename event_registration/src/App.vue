<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Registration App</h1>
    <section v-if="!eventsLoading">
      <h2 class="text-2xl font-medium">All Events</h2>
      <section class="grid grid-cols-2 gap-4">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.when"
          :description="event.description"
          @register="handleResgistration(event)"
        >
        </EventCard>
      </section>
      <h2 class="text-2xl font-medium">Your Bookings</h2>
      <section class="grid grid-cols-1 gap-4">
        <BookingStatusItem
          v-for="booking in bookings"
          :key="booking.id"
          :description="booking.eventTitle"
          :status="booking.status"
          @cancel="cancelBooking(booking.id)"
        >
        </BookingStatusItem>
      </section>
    </section>
    <div v-else class="bg-white">
      <svg class="size-10 animate-bounce">
        <!-- ... -->
      </svg>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import EventCard from '@/components/EventCard.vue';
import BookingStatusItem from './components/BookingStatusItem.vue';

const events = ref([]);
const bookings = ref([]);
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

const fetchBookings = async () => {
  try {
    const response = await fetch('http://localhost:5172/bookings');
    bookings.value = await response.json();
  } finally {
    false;
  }
};

const findBookingById = (id) => bookings.value.findIndex((b) => b.id === id);

const handleResgistration = async (event) => {
  // Check for duplicate evenrts booked into.
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You are already registered for this event !!!');
    return;
  }
  // new Booking object
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  };

  // Adding the new Booking to the list of website bookings.
  bookings.value.push(newBooking);

  // Post data into a database.
  try {
    const response = await fetch('http://localhost:5172/bookings', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed'
      })
    });
    // Validation to see if the request was good.
    if (response.ok) {
      const index = findBookingById(newBooking.id);
      bookings.value[index] = await response.json();
    } else {
      throw new Error('Booking Could not be Done successfully!! ');
    }
  } catch (e) {
    console.error(e);
    bookings.value = bookings.value.filter((b) => b.id !== newBooking.id);
  }
};

const cancelBooking = async (bookingId) => {
  const index = findBookingById(bookingId);
  const originalBooking = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`http://localhost:5172/bookings/${bookingId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Booking Cancellation Failed!!');
    }
  } catch (e) {
    alert(e);
    bookings.value.splice(index, 0, originalBooking);
  }
};
onMounted(() => {
  fetchEvents();
  fetchBookings();
});
</script>
