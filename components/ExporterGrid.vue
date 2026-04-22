<template>
  <div>
    <div v-if="loading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <LoadingSkeleton v-for="i in 6" :key="i" />
    </div>

    <div v-else-if="exporters.length === 0">
      <EmptyState />
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(exporter, i) in exporters"
        :key="exporter.name"
        v-motion-slide-up
        :style="{ animationDelay: `${i * 50}ms` }"
        class="animate-slide-up"
      >
        <ExporterCard :exporter="exporter" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Exporter } from '~/types/exporter'

defineProps<{
  exporters: Exporter[]
  loading?: boolean
}>()
</script>