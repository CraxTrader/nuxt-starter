<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useSoftwareStore } from "@/store/softwareStore";

const softwareStore = useSoftwareStore()
await softwareStore.fetchSoftware()
const { softwareItems } = storeToRefs(useSoftwareStore())

let initName = $ref()

const checkSoftware = async () => {
  await softwareStore.fetchSoftware()
  console.log('Checked Data....')
}

const getSoftware = computed(() => softwareStore.getterSoftwareItem)
</script>

<template>
<div class="flex flex-col gap-3">
  <div class="flex flex-row gap-3">
    <div class="basis-1/3 bg-slate-200">
      <button @click="checkSoftware" type="button" name="button" class="bg-indigo-500 px-3 py-1 text-white">Check Software</button>
    </div>
    <div class="basis-1/3 bg-slate-200">
      <ul v-for="item in softwareItems" :key="item.id">
        <li>{{item.softwareName}}</li>
      </ul>
    </div>
    <div class="basis-1/3 bg-slate-200">
      <ul v-for="item in getSoftware" :key="item.id">
        <li>{{item.softwareName}}</li>
      </ul>
    </div>
  </div>
  <NuxtLink to="/">Home</NuxtLink>
</div>
</template>

<style scoped></style>
