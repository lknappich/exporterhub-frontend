<template>
  <div class="min-h-screen text-text-primary">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center bg-bg-primary bg-grid-pattern overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div class="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <ClientOnly>
          <div class="animate-fade-in">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Enterprise Prometheus<br>
              <span class="text-accent">Exporters</span>
            </h1>
            <p class="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
              60 production-grade exporters for infrastructure monitoring.
              Docker-ready, Prometheus-compatible, built for scale.
            </p>
          </div>
        </ClientOnly>

        <!-- Animated counters -->
        <ClientOnly>
          <div class="flex justify-center gap-8 sm:gap-16 mb-12 animate-slide-up">
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-text-primary">
                <CounterAnimation :target="totalExporters" />
              </div>
              <div class="text-sm text-text-secondary mt-1">Exporters</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-text-primary">
                <CounterAnimation :target="totalMetrics" />+
              </div>
              <div class="text-sm text-text-secondary mt-1">Metrics</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-text-primary">
                <CounterAnimation :target="5" />
              </div>
              <div class="text-sm text-text-secondary mt-1">Categories</div>
            </div>
          </div>
        </ClientOnly>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#exporters" class="btn-primary text-base px-8 py-3">
            Browse Exporters
          </a>
          <a
            href="https://github.com/lknappich/exporterhub"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-base px-8 py-3"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="border-y border-border bg-bg-secondary">
      <div class="mx-auto max-w-7xl px-6 py-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">{{ totalExporters }}</div>
            <div class="text-xs text-text-secondary">Exporters</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">{{ totalMetrics }}+</div>
            <div class="text-xs text-text-secondary">Total Metrics</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">5</div>
            <div class="text-xs text-text-secondary">Categories</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent">2</div>
            <div class="text-xs text-text-secondary">Platforms</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Exporters Section -->
    <section id="exporters" class="mx-auto max-w-7xl px-6 py-16">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 class="text-2xl font-bold">Exporters</h2>
        <div class="flex items-center gap-3">
          <!-- Search bar -->
          <div class="relative">
            <svg class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search exporters..."
              class="w-full rounded-lg border border-border bg-bg-card py-2 pl-9 pr-9 text-sm text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors sm:w-64"
            />
            <button
              v-if="searchQuery"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
              @click="searchQuery = ''"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <select
            v-model="sortBy"
            class="rounded-lg border border-border bg-bg-card px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="name">Sort by name</option>
            <option value="metrics">Sort by metrics</option>
            <option value="category">Sort by category</option>
          </select>
        </div>
      </div>

      <!-- Category tabs -->
      <div class="mb-8">
        <div class="relative">
          <div class="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
            <button
              v-for="cat in ['All', ...CATEGORIES]"
              :key="cat"
              class="relative whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="selectedCategory === cat
                ? 'text-text-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'"
              @click="selectedCategory = cat"
            >
              <span
                v-if="cat !== 'All'"
                class="inline-block h-2 w-2 rounded-full mr-1.5"
                :style="{ backgroundColor: CATEGORY_COLORS[cat as Category] }"
              />
              {{ cat === 'All' ? 'All' : cat }}
              <span
                v-if="selectedCategory === cat"
                class="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-accent transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Loading skeletons -->
      <div v-if="pending" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard v-for="i in 6" :key="i" />
      </div>

      <!-- Empty state -->
      <div v-else-if="filteredExporters.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
        <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-card">
          <svg class="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
        </div>
        <h3 class="text-lg font-semibold text-text-primary mb-1">No exporters found</h3>
        <p class="text-sm text-text-secondary max-w-sm">
          Try adjusting your search query or changing the category filter.
        </p>
      </div>

      <!-- Exporter grid -->
      <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ClientOnly>
          <div
            v-for="(exp, i) in filteredExporters"
            :key="exp.name"
            class="animate-slide-up"
            :style="{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }"
          >
            <ExporterCard :exporter="exp" />
          </div>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CATEGORIES, CATEGORY_COLORS } from '~/types/exporter'
import type { Category, Registry } from '~/types/exporter'
import registryData from '~/registry.json'

const registry = ref<Registry>(registryData as Registry)
const pending = ref(false)

const selectedCategory = ref<string>('All')
const searchQuery = ref('')
const sortBy = ref<'name' | 'metrics' | 'category'>('name')

let debounceTimer: ReturnType<typeof setTimeout>
const debouncedQuery = ref('')
watch(searchQuery, (val) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => { debouncedQuery.value = val }, 300)
})

const filteredExporters = computed(() => {
  let list = registry.value.exporters
  if (debouncedQuery.value) {
    const q = debouncedQuery.value.toLowerCase()
    list = list.filter(e =>
      e.name.includes(q) ||
      e.display_name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.tags.some(t => t.includes(q))
    )
  }
  if (selectedCategory.value !== 'All') {
    list = list.filter(e => e.category === selectedCategory.value)
  }
  return [...list].sort((a, b) => {
    if (sortBy.value === 'metrics') return b.metrics_count - a.metrics_count
    if (sortBy.value === 'category') return a.category.localeCompare(b.category)
    return a.name.localeCompare(b.name)
  })
})

const totalExporters = computed(() => registry.value.total_exporters)
const totalMetrics = computed(() =>
  registry.value.exporters.reduce((sum, e) => sum + e.metrics_count, 0)
)

useHead({
  title: 'Exporter Hub - Enterprise Prometheus Exporters',
})
</script>