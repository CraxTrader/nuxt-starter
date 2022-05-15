import { defineStore } from "pinia";
// import { useNuxtApp } from "#app"

export const usePlatformStore = defineStore('platform', {

  state: () => ({
    platformItems: []
  }),

  actions: {

    async fetchPlatform() {
      // const { $supabase } = useNuxtApp()
      // // console.log(useNuxtApp())
      // const { data: platform } = await $supabase.from('platform').select('*')
      const data = await $fetch('/api/platform')
      this.platformItems = data
    }
  },

  getters: {
    getterPlatformItem: (state) => state.platformItems
  }
})
