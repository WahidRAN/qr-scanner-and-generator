<script setup lang="ts">
import { ref } from 'vue'

const generatedQR = ref('QR Generator nih')
</script>

<template>
  <div class="about">
    <h1>{{ generatedQR }}</h1>
  </div>
</template>
