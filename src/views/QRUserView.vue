<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'

const levelQR = ref<Level>('H')
const renderQR = ref<RenderAs>('svg')

const route = useRoute()
const userQR = ref('http://localhost:5173' + route.fullPath)
</script>

<template>
  <div class="flex-grow flex flex-col justify-center content-center">
    <qrcode-vue
      class="mx-auto"
      :value="userQR"
      :size="200"
      :level="levelQR"
      :render-as="renderQR"
    />
  </div>
</template>
