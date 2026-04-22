<template>
  <span class="inline-flex items-center rounded-md bg-accent/10 px-1.5 py-0.5 text-xs font-mono font-medium text-accent">
    v{{ version }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  version: string
}>()
</script>