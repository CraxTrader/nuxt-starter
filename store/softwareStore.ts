import { defineStore } from "pinia";

export const useSoftwareStore = defineStore('software', {

  state: () => ({
    softwareItems: []
  }),

  actions: {

    async fetchSoftware() {
      const data = await $fetch('/api/software')
      this.softwareItems = data
    }
  },

  getters: {
    getterSoftwareItem: (state) => state.softwareItems
  }
})
