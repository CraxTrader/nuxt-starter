<script lang="ts" setup></script>

<template>
<div class="relative container antialiased text-gray-700 flex flex-col gap-3">
  <header class="bg-purple-400">
    <h1>Header</h1>
  </header>
  <main class="container">
    <slot />
  </main>
  <footer class="bg-french-blue">
    <h3>Footer</h3>
  </footer>
</div>
</template>

<style scoped></style>
