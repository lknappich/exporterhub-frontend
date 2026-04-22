<template>
  <span class="inline-flex items-center gap-1 rounded-md bg-bg-hover px-2 py-0.5 text-xs font-mono text-text-secondary">
    <Icon icon="heroicons:cube" class="h-3.5 w-3.5" />
    {{ formattedCount }} pulls
  </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  count: number
}>()

const formattedCount = computed(() => {
  if (props.count >= 1000000) return `${(props.count / 1000000).toFixed(1)}M`
  if (props.count >= 1000) return `${(props.count / 1000).toFixed(1)}K`
  return String(props.count)
})
</script>