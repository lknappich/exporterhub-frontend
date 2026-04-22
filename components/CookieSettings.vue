<template>
  <Transition name="fade">
    <div v-if="cookieConsent.showSettings.value" class="fixed inset-0 z-[70] flex items-center justify-center">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60" @click="cancel" />

      <!-- Modal -->
      <div class="relative w-full max-w-lg rounded-xl border border-border bg-bg-card shadow-card mx-4">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-text-primary mb-1">Cookie Settings</h2>
          <p class="text-sm text-text-secondary mb-6">
            Manage your cookie preferences. Necessary cookies cannot be disabled as they are required for the site to function.
          </p>

          <div class="space-y-4">
            <!-- Necessary -->
            <div class="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <h3 class="text-sm font-medium text-text-primary">Necessary</h3>
                <p class="text-xs text-text-secondary mt-0.5">Required for the site to function properly</p>
              </div>
              <div class="flex h-6 w-11 items-center rounded-full bg-accent/80 cursor-not-allowed opacity-60">
                <div class="h-4 w-4 translate-x-6 rounded-full bg-white transition-transform" />
              </div>
            </div>

            <!-- Analytics -->
            <div class="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <h3 class="text-sm font-medium text-text-primary">Analytics</h3>
                <p class="text-xs text-text-secondary mt-0.5">Help us understand how the site is used</p>
              </div>
              <button
                class="relative h-6 w-11 rounded-full transition-colors"
                :class="analyticsEnabled ? 'bg-accent' : 'bg-bg-hover'"
                @click="analyticsEnabled = !analyticsEnabled"
              >
                <div
                  class="absolute top-1 h-4 w-4 rounded-full bg-white transition-transform"
                  :class="analyticsEnabled ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>

            <!-- Preferences -->
            <div class="flex items-center justify-between rounded-lg border border-border p-4">
              <div>
                <h3 class="text-sm font-medium text-text-primary">Preferences</h3>
                <p class="text-xs text-text-secondary mt-0.5">Remember your settings and preferences</p>
              </div>
              <button
                class="relative h-6 w-11 rounded-full transition-colors"
                :class="preferencesEnabled ? 'bg-accent' : 'bg-bg-hover'"
                @click="preferencesEnabled = !preferencesEnabled"
              >
                <div
                  class="absolute top-1 h-4 w-4 rounded-full bg-white transition-transform"
                  :class="preferencesEnabled ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 border-t border-border px-6 py-4">
          <button class="btn-secondary text-sm" @click="cancel">Cancel</button>
          <button class="btn-primary text-sm" @click="save">Save preferences</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const cookieConsent = useCookieConsent()

const analyticsEnabled = ref(false)
const preferencesEnabled = ref(false)

watch(() => cookieConsent.showSettings.value, (open) => {
  if (open && cookieConsent.consent.value) {
    analyticsEnabled.value = cookieConsent.consent.value.analytics
    preferencesEnabled.value = cookieConsent.consent.value.preferences
  }
})

const save = () => {
  cookieConsent.saveConsent({
    version: '1.0',
    timestamp: Date.now(),
    necessary: true,
    analytics: analyticsEnabled.value,
    preferences: preferencesEnabled.value,
  })
  cookieConsent.showSettings.value = false
}

const cancel = () => {
  cookieConsent.showSettings.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>