<script setup lang="ts">
import IconInformationCircle from './icons/IconInformationCircle.vue'
import IconClose from './icons/IconClose.vue'

defineProps<{
  title?: string
  message?: string
}>()
</script>

<template>
  <div class="flex rounded-lg bg-blue-200 p-3 text-blue-950">
    <section class="mr-3">
      <IconInformationCircle class="fill-blue-500" />
    </section>
    <section class="mr-2 flex flex-grow flex-col">
      <p>{{ title }}</p>
      <p>{{ message }}</p>
    </section>
    <section class="self-center">
      <IconClose />
    </section>
  </div>
</template>
