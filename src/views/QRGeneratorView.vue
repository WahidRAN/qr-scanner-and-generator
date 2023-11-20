<script setup lang="ts">
import { ref, watch } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'
import { useRouter } from 'vue-router'

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
  <div class="mx-6 flex flex-grow flex-col content-center justify-around">
    <section class="flex flex-col">
      <label for="input-qr-value" class="mb-2 text-gray-800 font-semibold">Fullname</label>
      <input
        type="text"
        name="input-qr-value"
        id="input-qr-value"
        v-model="userInputQR"
        class="rounded-md px-3 py-2 text-xl font-light border border-sky-900 bg-gray-100"
      />
    </section>
    <!-- <qrcode-vue
      v-if="generatedQR !== ''"
      class="mx-auto"
      :value="generatedQR"
      :size="200"
      :level="levelQR"
      :render-as="renderQR"
    /> -->
    <!-- <p>Generated QR: {{ generatedQR }}</p> -->
    <button @click="router.push({ name: 'qr-user', params: { username: userInputQR } })">
      Go To Generated QR
    </button>
  </div>
</template>
