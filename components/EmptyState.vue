<template>
  <div class="flex flex-col items-center justify-center py-16 text-center">
    <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-card">
      <Icon icon="heroicons:magnifying-glass" class="h-8 w-8 text-text-secondary" />
    </div>
    <h3 class="text-lg font-semibold text-text-primary mb-1">No exporters found</h3>
    <p class="text-sm text-text-secondary max-w-sm">
      Try adjusting your search query or changing the category filter.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>