<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="flex-grow">
    <p @click="router.push('qr-generator')">QR Generator</p>
    <p @click="router.push('qr-scanner')">QR Scanner</p>
    <p @click="router.push({ name: 'qr-user', params: { username: 'wahid' } })">QR User</p>
  </main>
</template>
