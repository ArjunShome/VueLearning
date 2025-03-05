import { ref, watch } from 'vue';

interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}
interface INotificationSettings {
  email: boolean;
  sms: boolean;
}
interface IPrivacySettings {
  visibility: string;
  searchEngineIndexing: boolean;
}

interface SettingsMap {
  general: IGeneralSettings;
  privacy: IPrivacySettings;
  notification: INotificationSettings;
}

type SettingsKey = keyof SettingsMap;

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);
  return stored !== null ? JSON.parse(stored) : defaults;
};

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const general = ref<IGeneralSettings>(
  init('general', {
    about: '',
    country: 'India',
    gender: 'male',
    email: '',
    username: ''
  })
);

const notification = ref<INotificationSettings>(
  init('notification', {
    email: true,
    sms: false
  })
);

const privacy = ref<IPrivacySettings>(
  init('privacy', {
    visibility: '',
    searchEngineIndexing: true
  })
);

watch(general, watcher('general'), { deep: true });
watch(notification, watcher('notification'), { deep: true });
watch(privacy, watcher('privacy'), { deep: true });

type visibility = 'public' | 'private';

export function useSettings() {
  return {
    general,
    notification,
    privacy
  };
}
