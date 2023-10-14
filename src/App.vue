<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header>
    <h1 class="text-center text-3xl text-blue-500" @click="router.push({ name: 'home' })">Hello</h1>
  </header>

  <RouterView />
</template>
