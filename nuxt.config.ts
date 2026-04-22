export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      registryUrl: process.env.REGISTRY_URL ||
        'https://raw.githubusercontent.com/lknappich/exporterhub/main/registry/exporters.json',
      appVersion: process.env.npm_package_version || '1.0.0',
    },
  },
  app: {
    head: {
      title: 'Exporter Hub — Production Prometheus Exporters',
      meta: [
        { name: 'description', content: '50 enterprise-grade Prometheus exporters for infrastructure monitoring' },
        { name: 'theme-color', content: '#0a0a0f' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
  },
})