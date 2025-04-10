import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkmode', {
  state: () => ({ isEnabled: true }),
  actions: {
    toggle() {
      this.isEnabled = !this.isEnabled
      this.applyTheme()
    },
    applyTheme() {
      const theme = this.isEnabled ? 'dark' : 'light'
      document.documentElement.setAttribute('theme', theme)
    }
  }
})
