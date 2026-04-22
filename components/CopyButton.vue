<template>
  <button
    class="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
    @click="copy"
  >
    <svg v-if="!copied" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-9a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h.888" /><path stroke-linecap="round" stroke-linejoin="round" d="M18 6.75A2.25 2.25 0 0120.25 9v9A2.25 2.25 0 0118 20.25h-9A2.25 2.25 0 016.75 18v-.888" /></svg>
    <svg v-else class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
    <span>{{ label || (copied ? 'Copied!' : 'Copy') }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  label?: string
}>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout>

const copy = async () => {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // clipboard not available
  }
}
</script>