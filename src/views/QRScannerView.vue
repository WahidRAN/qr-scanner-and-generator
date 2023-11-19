<script setup lang="ts">
import { computed, ref } from 'vue'
import { QrcodeStream } from 'vue-qrcode-reader'

const isFullscreen = ref(true)
const onFullscreenChange = () => {
  isFullscreen.value = document.fullscreenElement !== null
}

// Scanning QR module
const scannedQR = ref<any>(null)
const paintOutline = (detectedCodes: any, ctx: any) => {
  for (const detectedCode of detectedCodes) {
    const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

    ctx.strokeStyle = 'red'

    ctx.beginPath()
    ctx.moveTo(firstPoint.x, firstPoint.y)
    for (const { x, y } of otherPoints) {
      ctx.lineTo(x, y)
    }
    ctx.lineTo(firstPoint.x, firstPoint.y)
    ctx.closePath()
    ctx.stroke()
  }
}
const logErrors = (error: any) => {
  console.log(error)
}
const paused = ref(false)
const isValid = ref(undefined)
const validationPending = computed(() => {
  return isValid.value === undefined && paused.value
})
const validationSuccess = computed(() => {
  return isValid.value === true
})
const validationFailure = computed(() => {
  return isValid.value === false
})
const resetValidationState = () => {
  isValid.value = undefined
}

const timeout = (ms: number) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}
const onDetect = async ([firstDetectedCode]: any[]) => {
  scannedQR.value = firstDetectedCode.rawValue
  paused.value = true

  // pretend it's taking really long
  await timeout(3000)
  if (scannedQR.value) {
    isValid.value = scannedQR.value.startsWith('http')
  }

  // some more delay, so users have time to read the message
  // await timeout(2000)
  // paused.value = false
}
</script>

<template>
  <div class="about">
    <h1>Result: {{ scannedQR }}</h1>
    <section :class="{ fullscreen: isFullscreen }" @fullscreenchange="onFullscreenChange">
      <qrcode-stream
        :paused="paused"
        :track="paintOutline"
        @detect="onDetect"
        @camera-on="resetValidationState"
        @error="logErrors"
      >
        <div v-if="validationSuccess" class="validation-success">
          This is a URL, result: {{ scannedQR }}
        </div>

        <div v-if="validationFailure" class="validation-failure">This is NOT a URL!</div>

        <div v-if="validationPending" class="validation-pending">
          Long validation in progress...
        </div>
      </qrcode-stream>
    </section>
  </div>
</template>

<style>
.fullscreen {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
