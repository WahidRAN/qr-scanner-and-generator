<script setup lang="ts">
import { ref, watch } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'
import { useRouter } from 'vue-router';

// define QR module
const levelQR = ref<Level>('H')
const renderQR = ref<RenderAs>('svg')

// generate QR module
const userInputQR = ref('')
const generatedQR = ref('')
const isValueNotEmpty = (userInput: string) => {
  return 'http://localhost:5173/qr-user/' + userInput
}
watch(
  () => userInputQR.value,
  (newVal) => {
    generatedQR.value = ''
    if (newVal !== '') {
      generatedQR.value = isValueNotEmpty(newVal)
    }
  }
)

const router = useRouter()
</script>

<template>
  <div class="flex-grow flex flex-col justify-center content-center">
    <h1 class="text-center">QR Generator nih</h1>
    <input type="text" name="input-qr-value" id="input-qr-value" v-model="userInputQR" />
    <qrcode-vue
      v-if="generatedQR !== ''"
      class="mx-auto"
      :value="generatedQR"
      :size="200"
      :level="levelQR"
      :render-as="renderQR"
    />
    <p>Generated QR: {{ generatedQR }}</p>
    <button @click="router.push({ name: 'qr-user', params: { username: userInputQR } })">Go To Generated QR</button>
  </div>
</template>
