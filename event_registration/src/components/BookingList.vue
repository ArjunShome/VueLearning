<template>
  <template v-if="error_bookings">
    <section>
      <div class="space-y-4 items-center flex flex-col">
        <div class="text-blue-900-600">There are no Booking Done for now.</div>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="grid grid-cols-1 gap-4">
      <template v-if="!bookingsLoading">
        <BookingStatusItem
          v-for="booking in bookings"
          :key="booking.id"
          :description="booking.eventTitle"
          :status="booking.status"
          @cancel="cancelBooking(booking.id)"
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
import BookingStatusItem from '@/components/BookingStatusItem.vue';
import useBookings from '@/composables/useBookings';

const { fetchBookings, bookingsLoading, error_bookings, bookings, cancelBooking } = useBookings();

onMounted(() => {
  fetchBookings();
});
</script>
