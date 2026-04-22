<template>
  <span
    class="badge"
    :style="{
      backgroundColor: `${color}15`,
      color: color,
    }"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  color?: string
}>()

const colorMap: Record<string, string> = {
  counter: '#6366f1',
  gauge: '#06b6d4',
  histogram: '#f59e0b',
  summary: '#22c55e',
  untyped: '#94a3b8',
}

const color = computed(() => props.color ?? colorMap[props.label.toLowerCase()] ?? '#94a3b8')
</script>