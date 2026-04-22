<template>
  <div class="relative">
    <div class="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
      <button
        v-for="cat in ['All', ...CATEGORIES]"
        :key="cat"
        class="relative whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-colors"
        :class="modelValue === cat
          ? 'text-text-primary'
          : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'"
        @click="$emit('update:modelValue', cat)"
      >
        <span
          v-if="cat !== 'All'"
          class="inline-block h-2 w-2 rounded-full mr-1.5"
          :style="{ backgroundColor: CATEGORY_COLORS[cat as Category] }"
        />
        {{ cat === 'All' ? 'All' : cat }}
        <span
          v-if="modelValue === cat"
          class="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-accent"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CATEGORIES, CATEGORY_COLORS } from '~/types/exporter'
import type { Category } from '~/types/exporter'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>