import type { Exporter, Registry } from '~/types/exporter'

export const useRegistry = () => {
  const config = useRuntimeConfig()
  const registry = useState<Registry | null>('registry', () => null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchRegistry = async () => {
    if (registry.value) return
    loading.value = true
    try {
      registry.value = await $fetch<Registry>(config.public.registryUrl)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  const exportersByCategory = computed(() => {
    if (!registry.value) return {}
    return registry.value.exporters.reduce((acc, exp) => {
      if (!acc[exp.category]) acc[exp.category] = []
      acc[exp.category].push(exp)
      return acc
    }, {} as Record<string, Exporter[]>)
  })

  const getExporter = (name: string) =>
    registry.value?.exporters.find(e => e.name === name)

  const searchExporters = (query: string) => {
    if (!registry.value) return []
    const q = query.toLowerCase()
    return registry.value.exporters.filter(e =>
      e.name.includes(q) ||
      e.display_name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.tags.some(t => t.includes(q))
    )
  }

  return { registry, loading, error, fetchRegistry, exportersByCategory, getExporter, searchExporters }
}