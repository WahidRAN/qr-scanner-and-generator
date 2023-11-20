<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="flex-grow flex gap-6 items-center justify-center">
    <p @click="router.push('qr-generator')" class="bg-sky-900 p-4 text-sky-300 rounded">QR Generator</p>
    <p @click="router.push('qr-scanner')" class="bg-sky-200 p-4 text-sky-700 rounded">QR Scanner</p>
  </main>
</template>
