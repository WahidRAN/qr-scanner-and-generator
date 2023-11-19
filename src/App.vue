<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="mx-auto">
    <img
      src="./assets/logo.png"
      alt="logo event"
      class="h-32 w-32"
      @click="router.push({ name: 'home' })"
    />
  </header>

  <RouterView />
</template>
