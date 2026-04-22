<template>
  <div v-if="exporter" class="min-h-screen text-text-primary">
    <!-- Breadcrumb + back link -->
    <section class="border-b border-border bg-bg-secondary">
      <div class="mx-auto max-w-7xl px-6 py-8">
        <NuxtLink to="/#exporters" class="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-4">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to exporters
        </NuxtLink>

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-start gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h1 class="text-3xl font-bold">{{ exporter.display_name }}</h1>
              <span class="inline-flex items-center rounded-md bg-accent/10 px-1.5 py-0.5 text-xs font-mono font-medium text-accent">
                v{{ exporter.version }}
              </span>
            </div>
            <p class="text-text-secondary mb-4">{{ exporter.description }}</p>
            <div class="flex flex-wrap items-center gap-3">
              <CategoryBadge :category="exporter.category" />
              <span class="flex items-center gap-1 text-sm text-text-secondary">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3" /></svg>
                Port {{ exporter.port }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-6 py-12 space-y-12">
      <!-- Quick Metrics -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" /></svg>
          Metrics
        </h2>
        <div class="card p-6">
          <div class="flex items-center gap-3 mb-4">
            <ClientOnly>
              <span class="text-3xl font-bold text-accent">
                <CounterAnimation :target="exporter.metrics_count" />
              </span>
            </ClientOnly>
            <span class="text-text-secondary">exposed metrics</span>
          </div>
        </div>
      </section>

      <!-- Install -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-8.42a14.927 14.927 0 00-2.58 5.841" /></svg>
          Install
        </h2>
        <div class="space-y-4">
          <CodeBlock language="bash" :code="dockerPullCmd" :copyable="true" />
          <CodeBlock language="bash" :code="dockerRunCmd" :copyable="true" />
        </div>
      </section>

      <!-- Prometheus Scrape Config -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
          Prometheus Scrape Config
        </h2>
        <CodeBlock language="yaml" :code="scrapeConfig" :copyable="true" />
      </section>

      <!-- Alert Rules -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7A9 9 0 008 2.83m-2.147 14.15A8.947 8.947 0 015.25 12.75V9.75a8.967 8.967 0 012.457-6.042M9.75 16.5h.008v.008H9.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.375 0h.008v.008h-.008v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
          Alert Rules
        </h2>
        <CodeBlock language="yaml" :code="alertRules" :copyable="true" />
      </section>

      <!-- Related exporters -->
      <section v-if="relatedExporters.length > 0">
        <h2 class="text-xl font-semibold mb-4">Related Exporters</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ExporterCard
            v-for="exp in relatedExporters"
            :key="exp.name"
            :exporter="exp"
          />
        </div>
      </section>

      <!-- Prev/next navigation -->
      <div class="flex items-center justify-between border-t border-border pt-6">
        <button
          v-if="prevExporter"
          class="btn-secondary text-sm inline-flex items-center gap-2"
          @click="navigateTo(`/exporters/${prevExporter.name}`)"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          {{ prevExporter.display_name }}
        </button>
        <span v-else />
        <button
          v-if="nextExporter"
          class="btn-secondary text-sm inline-flex items-center gap-2"
          @click="navigateTo(`/exporters/${nextExporter.name}`)"
        >
          {{ nextExporter.display_name }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2">Exporter not found</h1>
      <p class="text-text-secondary mb-4">The exporter you are looking for does not exist.</p>
      <NuxtLink to="/" class="btn-primary">Back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Registry } from '~/types/exporter'

const route = useRoute()
const config = useRuntimeConfig()
const { data: registry } = await useFetch<Registry>(config.public.registryUrl)

const name = computed(() => route.params.name as string)
const exporter = computed(() =>
  registry.value?.exporters.find(e => e.name === name.value)
)

const harborImage = computed(() =>
  exporter.value ? `reg.homesec.data.server.lan/exporterhub/${exporter.value.name}:latest` : ''
)

const dockerPullCmd = computed(() =>
  exporter.value ? `docker pull ${harborImage.value}` : ''
)
const dockerRunCmd = computed(() =>
  exporter.value
    ? `docker run -d --name ${exporter.value.name} -p ${exporter.value.port}:${exporter.value.port} ${harborImage.value}`
    : ''
)
const scrapeConfig = computed(() =>
  exporter.value
    ? `scrape_configs:
  - job_name: '${exporter.value.name}'
    static_configs:
      - targets: ['localhost:${exporter.value.port}']`
    : ''
)
const alertRules = computed(() =>
  exporter.value
    ? `groups:
  - name: ${exporter.value.name}_alerts
    rules:
      - alert: ${exporter.value.name}Down
        expr: up{job="${exporter.value.name}"} == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "${exporter.value.display_name} is down"`
    : ''
)

// Related exporters from same category
const relatedExporters = computed(() => {
  if (!exporter.value || !registry.value) return []
  return registry.value.exporters
    .filter(e => e.category === exporter.value!.category && e.name !== exporter.value!.name)
    .slice(0, 3)
})

// Prev/next navigation
const exporterList = computed(() => registry.value?.exporters ?? [])
const currentIndex = computed(() =>
  exporterList.value.findIndex(e => e.name === name.value)
)
const prevExporter = computed(() =>
  currentIndex.value > 0 ? exporterList.value[currentIndex.value - 1] : null
)
const nextExporter = computed(() =>
  currentIndex.value < exporterList.value.length - 1 ? exporterList.value[currentIndex.value + 1] : null
)

useHead({
  title: computed(() => exporter.value ? `${exporter.value.display_name} — Exporter Hub` : 'Exporter Not Found'),
})
</script>