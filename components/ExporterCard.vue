<template>
  <NuxtLink
    :to="`/exporters/${exporter.name}`"
    class="card group block relative overflow-hidden"
  >
    <!-- Left border strip -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
      :style="{ backgroundColor: CATEGORY_COLORS[exporter.category] }"
    />

    <div class="p-5 pl-5">
      <!-- Name and description -->
      <h3 class="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors truncate mb-1">
        {{ exporter.display_name }}
      </h3>
      <p class="text-xs text-text-secondary mb-3 line-clamp-2">
        {{ exporter.description }}
      </p>

      <!-- Meta row -->
      <div class="flex items-center gap-3 text-xs text-text-secondary">
        <span class="flex items-center gap-1">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3" /></svg>
          :{{ exporter.port }}
        </span>
        <span class="flex items-center gap-1">
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z" /></svg>
          {{ exporter.metrics_count }} metrics
        </span>
      </div>

      <!-- Footer: version + category badge -->
      <div class="mt-3 flex items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-accent/10 px-1.5 py-0.5 text-xs font-mono font-medium text-accent">
          v{{ exporter.version }}
        </span>
        <CategoryBadge :category="exporter.category" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { CATEGORY_COLORS } from '~/types/exporter'
import type { Exporter } from '~/types/exporter'

defineProps<{
  exporter: Exporter
}>()
</script>

<style scoped>
.card:hover {
  transform: scale(1.015);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
}
</style>