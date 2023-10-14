<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="flex-grow">
    <p @click="router.push('qr-generator')">QR Generator</p>
    <p @click="router.push('qr-scanner')">QR Scanner</p>
  </main>
</template>
