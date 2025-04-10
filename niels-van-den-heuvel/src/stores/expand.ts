import { defineStore } from 'pinia'

export const useExpand = defineStore('expand', {
  state: () => ({ isExpanded: false }),
  actions: {
    toggle() {
      this.isExpanded = !this.isExpanded
    }
  }
})
