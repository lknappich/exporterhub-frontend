export interface Exporter {
  name: string
  display_name: string
  version: string
  port: number
  description: string
  category: 'Infrastructure' | 'Networking' | 'Storage' | 'Kubernetes' | 'CI-CD'
  docker_image: string
  docker_hub_url: string
  github_release_prefix: string
  platforms: string[]
  metrics_count: number
  tags: string[]
}

export interface Registry {
  generated_at: string
  total_exporters: number
  exporters: Exporter[]
}

export type Category = Exporter['category']

export const CATEGORIES: Category[] = ['Infrastructure', 'Networking', 'Storage', 'Kubernetes', 'CI-CD']

export const CATEGORY_COLORS: Record<Category, string> = {
  Infrastructure: '#6366f1',
  Networking: '#06b6d4',
  Storage: '#f59e0b',
  Kubernetes: '#22c55e',
  'CI-CD': '#ec4899',
}