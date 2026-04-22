<template>
  <div class="min-h-screen text-text-primary">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center bg-bg-primary bg-grid-pattern overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div class="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <div v-motion="fadeIn">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Enterprise Prometheus<br>
            <span class="text-accent">Exporters</span>
          </h1>
          <p class="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            50 production-grade exporters for infrastructure monitoring.
            Docker-ready, Prometheus-compatible, built for scale.
          </p>
        </div>

        <!-- Animated counters -->
        <div v-motion="slideUp" class="flex justify-center gap-8 sm:gap-16 mb-12">
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

        <!-- CTA buttons -->
        <div v-motion="slideUp" class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#exporters" class="btn-primary text-base px-8 py-3">
            <Icon icon="heroicons:arrow-down" class="h-5 w-5 mr-2 inline" />
            Browse Exporters
          </a>
          <a
            href="https://github.com/lknappich/exporterhub"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-base px-8 py-3"
          >
            <Icon icon="heroicons:code-bracket-square" class="h-5 w-5 mr-2 inline" />
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
          <select
            v-model="store.sortBy"
            class="rounded-lg border border-border bg-bg-card px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="name">Sort by name</option>
            <option value="metrics">Sort by metrics</option>
            <option value="category">Sort by category</option>
          </select>
        </div>
      </div>

      <!-- Search (mobile) -->
      <div class="mb-6 md:hidden">
        <SearchBar />
      </div>

      <!-- Category tabs -->
      <div class="mb-8">
        <CategoryTabs v-model="store.selectedCategory" />
      </div>

      <!-- Grid -->
      <ExporterGrid :exporters="store.filteredExporters" :loading="store.loading" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const store = useRegistryStore()

const totalExporters = computed(() => store.registry?.total_exporters ?? 50)
const totalMetrics = computed(() =>
  store.registry?.exporters.reduce((sum, e) => sum + e.metrics_count, 0) ?? 1250
)

const { fadeIn, slideUp } = useAnimations()
</script>