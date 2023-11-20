<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import type { Level, RenderAs } from 'qrcode.vue'
// Import Components
import QrcodeVue from 'qrcode.vue'
// import Alert from '@/components/AlertWQR.vue'

const levelQR = ref<Level>('H')
const renderQR = ref<RenderAs>('svg')

const route = useRoute()
const userQR = ref('http://localhost:5173' + route.fullPath)
</script>

<template>
  <div class="flex flex-grow flex-col content-center justify-center">
    <section class="self-center rounded-lg border-4 p-4">
      <qrcode-vue
        class="mx-auto"
        :value="userQR"
        :size="200"
        :margin="1"
        :level="levelQR"
        :render-as="renderQR"
      >
        <div class="h-6 w-6 bg-slate-500"></div>
      </qrcode-vue>
    </section>
    <!-- <Alert class="mx-6" message="Show this QR Code to staff!"></Alert> -->
  </div>
</template>
