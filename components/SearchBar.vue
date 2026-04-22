<template>
  <div class="relative">
    <Icon
      icon="heroicons:magnifying-glass"
      class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary pointer-events-none"
    />
    <input
      ref="inputRef"
      v-model="localQuery"
      type="text"
      placeholder="Search exporters..."
      class="w-full rounded-lg border border-border bg-bg-card py-2 pl-9 pr-9 text-sm text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
      @keydown.escape="clear"
    />
    <button
      v-if="localQuery"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
      @click="clear"
    >
      <Icon icon="heroicons:x-mark" class="h-4 w-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const store = useRegistryStore()
const localQuery = ref(store.searchQuery)
const inputRef = ref<HTMLInputElement>()

let debounceTimer: ReturnType<typeof setTimeout>
watch(localQuery, (val) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    store.searchQuery = val
  }, 300)
})

watch(() => store.searchQuery, (val) => {
  if (val !== localQuery.value) localQuery.value = val
})

const clear = () => {
  localQuery.value = ''
  store.searchQuery = ''
  inputRef.value?.blur()
}
</script>