<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePlatformStore } from "@/store/platformStore";
const platformStore = usePlatformStore()

await platformStore.fetchPlatform()
const { platformItems } = storeToRefs(platformStore)

let initName = $ref()
const checkData = () => {
  platformStore.fetchPlatform()
}
</script>

<template>
<div class="flex flex-col gap-3">
  <div class="flex flex-row gap-3">
    <div class="basis-1/3 bg-slate-200">
      <button @click="checkData" type="button" name="button" class="bg-indigo-500 px-3 py-1 text-white">Check Data</button>
    </div>
    <div class="basis-1/3 bg-slate-200">
      myName : {{initName}}
    </div>
    <div class="basis-1/3 bg-slate-200">
      <ul>
        <li v-for="item in platformItems" :key="item.id">{{item.platformName}}</li>
      </ul>
    </div>
  </div>
  <NuxtLink to="/">Home</NuxtLink>
</div>
</template>

<style scoped></style>
