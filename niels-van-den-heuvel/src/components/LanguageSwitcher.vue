<template>
  <div class="dropdown">
    <button
      class="btn"
      type="button"
      id="dropdownMenu2"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <font-awesome-icon class="icon" :icon="['fa', 'globe']" /><span>{{
      }}</span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button
        class="dropdown-item"
        type="button"
        v-for="lang in availableLocales"
        :key="lang"
        @click="changeLanguage(lang)"
      >
        {{ translateLang(lang) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watchEffect, computed } from 'vue'

const { locale, availableLocales, messages } = useI18n()

const currentLocale = computed(() => {
  return locale.value || 'en'
})

const changeLanguage = (newLang: string) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})

const translateLang = (localeCode: string) => {
  return messages.value[localeCode]['locale'] ?? messages.value['en']['locale']
}
</script>

<style scoped lang="scss">
.dropdown > button {
  color: var(--sidebar-text);
  background-color: transparent;

  font-size: 0.8rem;

  .icon {
    font-size: 0.8rem;
  }
}
</style>
