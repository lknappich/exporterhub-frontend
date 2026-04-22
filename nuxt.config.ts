export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'eh-color-mode',
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      registryUrl: process.env.REGISTRY_URL ||
        'https://raw.githubusercontent.com/lknappich/exporterhub/main/registry/exporters.json',
      appVersion: process.env.npm_package_version || '1.0.0',
      appName: 'Exporter Hub',
    },
  },

  app: {
    head: {
      title: 'Exporter Hub',
      titleTemplate: '%s | Exporter Hub',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '60 enterprise-grade Prometheus exporters for infrastructure monitoring' },
        { name: 'theme-color', content: '#0a0a0f' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Exporter Hub' },
        { property: 'og:description', content: '60 enterprise-grade Prometheus exporters' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})