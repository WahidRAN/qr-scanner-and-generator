<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const userQR = ref('QR User nih')
const route = useRoute()
</script>

<template>
  <div class="about">
    <h1>{{ userQR }}, {{ route.params.username }}</h1>
  </div>
</template>
