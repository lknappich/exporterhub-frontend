<template>
  <nav class="sticky top-0 z-50 border-b border-border bg-bg-secondary/80 backdrop-blur-lg">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
          <Icon icon="heroicons:chart-bar" class="h-5 w-5 text-white" />
        </div>
        <span class="text-lg font-bold text-text-primary">Exporter Hub</span>
      </NuxtLink>

      <!-- Search (center, hidden on mobile) -->
      <div class="hidden md:flex flex-1 justify-center px-8">
        <SearchBar class="w-full max-w-md" />
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="https://github.com/lknappich/exporterhub"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
          aria-label="GitHub repository"
        >
          <Icon icon="heroicons:code-bracket-square" class="h-5 w-5" />
        </a>
        <!-- Mobile menu toggle -->
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg md:hidden text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon :icon="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="border-t border-border md:hidden p-4 bg-bg-secondary">
      <SearchBar class="mb-3" />
      <a
        href="https://github.com/lknappich/exporterhub"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all"
      >
        <Icon icon="heroicons:code-bracket-square" class="h-5 w-5" />
        <span>GitHub</span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const mobileMenuOpen = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})
</script>