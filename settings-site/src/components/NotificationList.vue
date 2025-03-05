<template>
  <Teleport to="body">
    <ol class="notification-list">
      <li
        v-for="notification in notifications"
        :key="notification.id"
        class="mb-4 group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md p-4 pr-6 shadow-lg transition-all border bg-white text-black"
      >
        <div class="text-sm font-semibold">
          {{ notification.message }}
        </div>
        <button @click="removeNotification(notification.id)" class="notification-ack-button">
          OK
        </button>
      </li>
    </ol>
  </Teleport>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
const { notifications, removeNotification } = useNotifications();
</script>
