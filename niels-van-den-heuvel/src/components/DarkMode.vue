<template>
  <div class="toggle-wrapper">
    <button class="btn" type="button" @click="darkMode.toggle()">
      <transition name="icon-fade">
        <font-awesome-icon :icon="['fas', `${darkMode.isEnabled ? 'sun' : 'cloud-moon'}`]" />
      </transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/stores/darkmode'
import { watchEffect } from 'vue'

const darkMode = useDarkMode()

watchEffect(() => {
  const theme = localStorage.getItem('data-theme')
  if (theme) {
    darkMode.isEnabled = theme == 'dark'
  }
})
</script>

<style lang="scss" scoped>
.form-check-input::before {
  background-color: black;
}

.toggle-wrapper {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  margin-bottom: 8px;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out;

  button {
    color: var(--color-text-vague);
    background-color: transparent;

    font-size: 1rem;

    &:focus, &:active {
      transform: none;
      outline: none;
      box-shadow: none;
    }

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
