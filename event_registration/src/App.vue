<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Registration App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-4">
      <EventCard
        v-for="i in 4"
        :key="i"
        title="Arjun's Practice"
        when="February 2025"
        description="Learning the wonderful view framework"
        @register="console.log('Registered!!!')"
      />
    </section>
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue';
</script>
