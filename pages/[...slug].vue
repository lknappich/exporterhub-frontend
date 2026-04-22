<template>
  <div class="flex min-h-screen items-center justify-center bg-bg-primary px-6">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-accent mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-text-primary mb-2">Page not found</h2>
      <p class="text-text-secondary mb-8 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <div class="flex items-center justify-center gap-4">
        <NuxtLink to="/" class="btn-primary">Go home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '404 - Page Not Found',
})
</script>