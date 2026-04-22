<template>
  <footer class="border-t border-border bg-bg-secondary">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <!-- Product -->
        <div>
          <h3 class="text-sm font-semibold text-text-primary mb-4">Product</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/#exporters" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Exporters</NuxtLink>
            </li>
            <li>
              <a href="https://github.com/lknappich/exporterhub/releases" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Releases</a>
            </li>
            <li>
              <a href="https://hub.docker.com/u/lknappich" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Docker Hub</a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-sm font-semibold text-text-primary mb-4">Legal</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink to="/legal/privacy-policy" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/legal/terms-of-service" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms of Service</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/legal/cookie-policy" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Cookie Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/legal/imprint" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Imprint</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-sm font-semibold text-text-primary mb-4">Resources</h3>
          <ul class="space-y-2.5">
            <li>
              <a href="https://prometheus.io/docs/" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Prometheus Docs</a>
            </li>
            <li>
              <a href="https://grafana.com/docs/" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Grafana Docs</a>
            </li>
            <li>
              <a href="https://github.com/lknappich/exporterhub" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-sm font-semibold text-text-primary mb-4">Social</h3>
          <ul class="space-y-2.5">
            <li>
              <a href="https://github.com/lknappich" target="_blank" rel="noopener noreferrer" class="text-sm text-text-secondary hover:text-text-primary transition-colors">GitHub</a>
            </li>
            <li>
              <button
                class="text-sm text-text-secondary hover:text-text-primary transition-colors"
                @click="cookieConsent.openSettings()"
              >
                Cookie Settings
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p class="text-sm text-text-secondary">
          &copy; {{ new Date().getFullYear() }} Exporter Hub. All rights reserved.
        </p>
        <button
          class="text-sm text-text-secondary hover:text-text-primary transition-colors"
          @click="cookieConsent.openSettings()"
        >
          Cookie Settings
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const cookieConsent = useCookieConsent()
</script>