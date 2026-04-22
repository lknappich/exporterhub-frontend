<template>
  <div class="min-h-screen bg-bg-primary text-text-primary font-sans">
    <nav class="sticky top-0 z-50 border-b border-border bg-bg-secondary/80 backdrop-blur-lg">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-xl font-bold text-accent">Exporter Hub</span>
        </NuxtLink>
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/lknappich/exporterhub"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Icon icon="heroicons:code-bracket" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
    <main class="mx-auto max-w-4xl px-6 py-16">
      <slot />
    </main>
    <footer class="border-t border-border bg-bg-secondary py-8">
      <div class="mx-auto max-w-4xl px-6 text-center text-sm text-text-secondary">
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
import { Icon } from '@iconify/vue'
</script>