<template>
  <div class="min-h-screen bg-bg-primary text-text-primary font-sans">
    <nav class="sticky top-0 z-50 border-b border-border bg-bg-secondary/80 backdrop-blur-lg">
      <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-lg font-bold text-accent">Exporter Hub</span>
        </NuxtLink>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/"
            class="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
            Back
          </NuxtLink>
          <a
            href="https://github.com/lknappich/exporterhub"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
          </a>
        </div>
      </div>
    </nav>
    <main class="mx-auto max-w-3xl px-6 py-16">
      <slot />
    </main>
    <footer class="border-t border-border bg-bg-secondary py-8">
      <div class="mx-auto max-w-3xl px-6 text-center text-sm text-text-secondary">
        <div class="flex justify-center gap-6 mb-4">
          <NuxtLink to="/legal/privacy-policy" class="hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/legal/terms-of-service" class="hover:text-text-primary transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="/legal/cookie-policy" class="hover:text-text-primary transition-colors">Cookie Policy</NuxtLink>
          <NuxtLink to="/legal/imprint" class="hover:text-text-primary transition-colors">Imprint</NuxtLink>
        </div>
        <p>&copy; {{ new Date().getFullYear() }} Exporter Hub. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>