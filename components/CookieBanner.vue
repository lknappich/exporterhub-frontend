<template>
  <Transition name="slide-up">
    <div
      v-if="cookieConsent.showBanner.value"
      class="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-bg-secondary/95 backdrop-blur-lg"
    >
      <div class="mx-auto max-w-7xl px-6 py-4">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex-1 text-sm text-text-secondary">
            <p>
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <NuxtLink to="/legal/cookie-policy" class="text-accent hover:text-accent-hover underline">Learn more</NuxtLink>
            </p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <button
              class="text-sm text-text-secondary hover:text-text-primary transition-colors underline"
              @click="cookieConsent.openSettings()"
            >
              Customize
            </button>
            <button
              class="btn-secondary text-sm flex-1 sm:flex-initial"
              @click="cookieConsent.rejectAll()"
            >
              Reject all
            </button>
            <button
              class="btn-primary text-sm flex-1 sm:flex-initial"
              @click="cookieConsent.acceptAll()"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const cookieConsent = useCookieConsent()
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>