<template>
  <div v-if="exporter" class="min-h-screen text-text-primary">
    <!-- Hero -->
    <section class="border-b border-border bg-bg-secondary">
      <div class="mx-auto max-w-7xl px-6 py-8">
        <NuxtLink to="/#exporters" class="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-4">
          <Icon icon="heroicons:arrow-left" class="h-4 w-4" />
          Back to exporters
        </NuxtLink>

        <div class="flex flex-col sm:flex-row sm:items-start gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h1 class="text-3xl font-bold">{{ exporter.display_name }}</h1>
              <VersionBadge :version="exporter.version" />
            </div>
            <p class="text-text-secondary mb-4">{{ exporter.description }}</p>
            <div class="flex flex-wrap items-center gap-3">
              <span
                class="badge"
                :style="{
                  backgroundColor: `${CATEGORY_COLORS[exporter.category]}15`,
                  color: CATEGORY_COLORS[exporter.category],
                }"
              >
                {{ exporter.category }}
              </span>
              <span class="flex items-center gap-1 text-sm text-text-secondary">
                <Icon icon="heroicons:server" class="h-4 w-4" />
                Port {{ exporter.port }}
              </span>
              <span class="flex items-center gap-1 text-sm text-text-secondary">
                <Icon icon="heroicons:chart-bar" class="h-4 w-4" />
                {{ exporter.metrics_count }} metrics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-6 py-12 space-y-12">
      <!-- Quick Start -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:rocket-launch" class="h-5 w-5 text-accent" />
          Quick Start
        </h2>
        <div class="space-y-4">
          <CodeBlock language="bash" :code="dockerPullCmd" />
          <CodeBlock language="bash" :code="dockerRunCmd" />
        </div>
      </section>

      <!-- Metrics -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:chart-bar" class="h-5 w-5 text-accent" />
          Metrics
        </h2>
        <div class="card p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl font-bold text-accent">{{ exporter.metrics_count }}</span>
            <span class="text-text-secondary">exposed metrics</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <MetricBadge label="counter" />
            <MetricBadge label="gauge" />
            <MetricBadge label="histogram" />
          </div>
        </div>
      </section>

      <!-- Prometheus Scrape Config -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:document-text" class="h-5 w-5 text-accent" />
          Prometheus Scrape Config
        </h2>
        <CodeBlock language="yaml" :code="scrapeConfig" />
      </section>

      <!-- Docker Hub -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:cube" class="h-5 w-5 text-accent" />
          Docker Hub
        </h2>
        <div class="card p-6">
          <div class="space-y-3">
            <div>
              <span class="text-sm text-text-secondary">Image</span>
              <p class="font-mono text-sm text-text-primary">{{ exporter.docker_image }}</p>
            </div>
            <div>
              <span class="text-sm text-text-secondary">Platforms</span>
              <div class="flex flex-wrap gap-2 mt-1">
                <span
                  v-for="platform in exporter.platforms"
                  :key="platform"
                  class="badge bg-bg-hover text-text-secondary"
                >
                  {{ platform }}
                </span>
              </div>
            </div>
            <a
              :href="exporter.docker_hub_url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center gap-2 text-sm mt-2"
            >
              <Icon icon="heroicons:arrow-top-right-on-square" class="h-4 w-4" />
              View on Docker Hub
            </a>
          </div>
        </div>
      </section>

      <!-- Alert Rules -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:bell" class="h-5 w-5 text-accent" />
          Alert Rules
        </h2>
        <CodeBlock language="yaml" :code="alertRules" />
      </section>

      <!-- Grafana Dashboard -->
      <section>
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:chart-pie" class="h-5 w-5 text-accent" />
          Grafana Dashboard
        </h2>
        <div class="card p-6">
          <p class="text-text-secondary text-sm mb-4">
            A pre-built Grafana dashboard is included with this exporter.
          </p>
          <a
            :href="dashboardUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            <Icon icon="heroicons:arrow-top-right-on-square" class="h-4 w-4" />
            View Dashboard JSON
          </a>
        </div>
      </section>

      <!-- Tags -->
      <section v-if="exporter.tags.length">
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="heroicons:tag" class="h-5 w-5 text-accent" />
          Tags
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in exporter.tags"
            :key="tag"
            class="badge bg-bg-hover text-text-secondary"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <!-- Navigation -->
      <div class="flex items-center justify-between border-t border-border pt-6">
        <button
          v-if="prevExporter"
          class="btn-secondary text-sm inline-flex items-center gap-2"
          @click="navigateTo(`/exporters/${prevExporter.name}`)"
        >
          <Icon icon="heroicons:arrow-left" class="h-4 w-4" />
          {{ prevExporter.display_name }}
        </button>
        <span v-else />
        <button
          v-if="nextExporter"
          class="btn-secondary text-sm inline-flex items-center gap-2"
          @click="navigateTo(`/exporters/${nextExporter.name}`)"
        >
          {{ nextExporter.display_name }}
          <Icon icon="heroicons:arrow-right" class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div v-if="store.loading" class="text-text-secondary">Loading exporter...</div>
    <div v-else class="text-center">
      <h1 class="text-2xl font-bold mb-2">Exporter not found</h1>
      <p class="text-text-secondary mb-4">The exporter you are looking for does not exist.</p>
      <NuxtLink to="/" class="btn-primary">Back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CATEGORY_COLORS } from '~/types/exporter'
import type { Exporter } from '~/types/exporter'

const route = useRoute()
const store = useRegistryStore()
const { getExporter } = useRegistry()

const name = computed(() => route.params.name as string)
const exporter = computed(() => getExporter(name.value))

const dockerPullCmd = computed(() =>
  exporter.value ? `docker pull ${exporter.value.docker_image}` : ''
)
const dockerRunCmd = computed(() =>
  exporter.value
    ? `docker run -d --name ${exporter.value.name} -p ${exporter.value.port}:${exporter.value.port} ${exporter.value.docker_image}`
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
const dashboardUrl = computed(() =>
  exporter.value
    ? `https://github.com/lknappich/exporterhub/main/exporters/${exporter.value.name}/dashboards/dashboard.json`
    : ''
)

// Prev/next navigation
const exporterList = computed(() => store.registry?.exporters ?? [])
const currentIndex = computed(() =>
  exporterList.value.findIndex(e => e.name === name.value)
)
const prevExporter = computed(() =>
  currentIndex.value > 0 ? exporterList.value[currentIndex.value - 1] : null
)
const nextExporter = computed(() =>
  currentIndex.value < exporterList.value.length - 1 ? exporterList.value[currentIndex.value + 1] : null
)
</script>