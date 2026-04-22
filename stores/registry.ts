export const useRegistryStore = defineStore('registry', () => {
  const { registry, loading, error, fetchRegistry, exportersByCategory, searchExporters } = useRegistry()
  const selectedCategory = ref<string>('All')
  const searchQuery = ref('')
  const sortBy = ref<'name' | 'metrics' | 'category'>('name')

  const filteredExporters = computed(() => {
    let list = searchQuery.value
      ? searchExporters(searchQuery.value)
      : registry.value?.exporters ?? []

    if (selectedCategory.value !== 'All') {
      list = list.filter(e => e.category === selectedCategory.value)
    }

    return [...list].sort((a, b) => {
      if (sortBy.value === 'metrics') return b.metrics_count - a.metrics_count
      if (sortBy.value === 'category') return a.category.localeCompare(b.category)
      return a.name.localeCompare(b.name)
    })
  })

  return {
    registry, loading, error, fetchRegistry,
    selectedCategory, searchQuery, sortBy,
    filteredExporters, exportersByCategory,
  }
})