<template>
  <div>
    <h2 class="text-2xl mb-4">Notification</h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notification.email" />
        <label>Email Notification</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notification.sms" />
        <label>SMS Notification</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';
import { ref } from 'vue';

const { notification } = useSettings();
const { addNotification } = useNotifications();
const save = () => {
  addNotification('Notification Settings Saved Successfully');
};
</script>
