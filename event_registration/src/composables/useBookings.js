import { ref } from 'vue';

const bookings = ref([]);
const bookingsLoading = ref(false);

const events = ref([]);
const eventsLoading = ref(false);

const error_events = ref(null);
const error_bookings = ref(null);

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
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
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

const fetchEvents = async () => {
  eventsLoading.value = true;
  error_events.value = null;
  try {
    const response = await fetch('http://localhost:5172/events');
    events.value = await response.json();
  } catch (e) {
    error_events.value = e;
  } finally {
    eventsLoading.value = false;
  }
};
const fetchBookings = async () => {
  bookingsLoading.value = true;
  error_bookings.value = null;
  try {
    const response = await fetch('http://localhost:5172/bookings');
    bookings.value = await response.json();
  } catch (e) {
    error_bookings.value = e;
  } finally {
    bookingsLoading.value = false;
  }
};
export default function useBookings() {
  return {
    bookings,
    bookingsLoading,
    fetchBookings,
    handleResgistration,
    cancelBooking,
    fetchEvents,
    eventsLoading,
    error_bookings,
    error_events,
    events
  };
}
