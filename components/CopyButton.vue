<template>
  <button
    class="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
    @click="copy"
  >
    <Icon :icon="copied ? 'heroicons:check' : 'heroicons:clipboard'" class="h-4 w-4" :class="copied ? 'text-green-500' : ''" />
    <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  text: string
}>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout>

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // fallback
  }
}
</script>