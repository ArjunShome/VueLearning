<template class="bg-lime-50">
  <main class="bg-green-50 max-w-md mx-auto px-4 py-4">
    <nav class="font-semibold text-center text-gray-400 border-gray-300 mb-4">
      <ul class="flex flex-wrap -mb-px justify-center">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :current-tab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransition>
    <NotificationList />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Tab, TabKey } from '@/types';
import TabLink from '@/components/TabLink.vue';
import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationSettings from '@/components/NotificationSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import NotificationList from '@/components/NotificationList.vue';

const currentTab = ref<TabKey>('General');
const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
    component: GeneralSettings
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component: NotificationSettings
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: PrivacySettings
  }
];
const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component
);
</script>
