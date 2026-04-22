<template>
  <div class="flex min-h-screen items-center justify-center bg-bg-primary px-6">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-accent mb-4">{{ error?.statusCode || 404 }}</h1>
      <h2 class="text-2xl font-semibold text-text-primary mb-2">
        {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </h2>
      <p class="text-text-secondary mb-8 max-w-md mx-auto">
        {{ error?.statusCode === 404
          ? 'The page you are looking for does not exist or has been moved.'
          : 'An unexpected error occurred. Please try again later.'
        }}
      </p>
      <div class="flex items-center justify-center gap-4">
        <button class="btn-primary" @click="handleError">
          Go home
        </button>
        <button class="btn-secondary" @click="window?.history?.back()">
          Go back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    message?: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>