<template>
  <button
    class="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
    :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <Icon :icon="colorMode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5 transition-transform duration-300" :class="{ 'rotate-180': toggling }" />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
const toggling = ref(false)

const toggle = () => {
  toggling.value = true
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  setTimeout(() => { toggling.value = false }, 300)
}
</script>