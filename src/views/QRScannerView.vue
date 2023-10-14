<script setup lang="ts">
import { ref } from 'vue'

const scannedQR = ref('QR Scanner nih')
</script>

<template>
  <div class="about">
    <h1>{{ scannedQR }}</h1>
  </div>
</template>
