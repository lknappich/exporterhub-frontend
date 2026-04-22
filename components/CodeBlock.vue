<template>
  <div class="relative rounded-lg border border-border bg-[#0d1117] overflow-hidden">
    <div class="flex items-center justify-between border-b border-border px-4 py-2">
      <span v-if="language" class="text-xs text-text-secondary font-mono">{{ language }}</span>
      <span v-else />
      <CopyButton v-if="copyable" :text="code" />
    </div>
    <pre class="overflow-x-auto p-4 text-sm text-text-primary font-mono leading-relaxed"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  code: string
  language?: string
  copyable?: boolean
}>()
</script>