<template>
  <NuxtLink :to="`/exporters/${exporter.name}`" class="card group block p-5">
    <!-- Category color strip -->
    <div
      class="mb-3 h-1 w-10 rounded-full"
      :style="{ backgroundColor: CATEGORY_COLORS[exporter.category] }"
    />

    <!-- Name and version -->
    <div class="flex items-center gap-2 mb-1">
      <h3 class="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
        {{ exporter.display_name }}
      </h3>
      <VersionBadge :version="exporter.version" />
    </div>

    <!-- Description -->
    <p class="text-xs text-text-secondary mb-3 line-clamp-2">
      {{ exporter.description }}
    </p>

    <!-- Meta row -->
    <div class="flex items-center gap-3 text-xs text-text-secondary">
      <span class="flex items-center gap-1">
        <Icon icon="heroicons:server" class="h-3.5 w-3.5" />
        :{{ exporter.port }}
      </span>
      <span class="flex items-center gap-1">
        <Icon icon="heroicons:chart-bar" class="h-3.5 w-3.5" />
        {{ exporter.metrics_count }} metrics
      </span>
    </div>

    <!-- Category badge -->
    <div class="mt-3 flex items-center gap-2">
      <span
        class="badge text-xs"
        :style="{
          backgroundColor: `${CATEGORY_COLORS[exporter.category]}15`,
          color: CATEGORY_COLORS[exporter.category],
        }"
      >
        {{ exporter.category }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CATEGORY_COLORS } from '~/types/exporter'
import type { Exporter } from '~/types/exporter'

defineProps<{
  exporter: Exporter
}>()
</script>