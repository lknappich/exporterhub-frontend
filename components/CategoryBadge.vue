<template>
  <span
    class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
    :style="{
      backgroundColor: `${CATEGORY_COLORS[category as Category]}15`,
      color: CATEGORY_COLORS[category as Category],
    }"
  >
    <span
      class="h-1.5 w-1.5 rounded-full"
      :style="{ backgroundColor: CATEGORY_COLORS[category as Category] }"
    />
    {{ category }}
  </span>
</template>

<script setup lang="ts">
import { CATEGORY_COLORS } from '~/types/exporter'
import type { Category } from '~/types/exporter'

defineProps<{
  category: string
}>()
</script>