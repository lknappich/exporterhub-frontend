<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <CookieBanner />
    <CookieSettings />
  </ClientOnly>
</template>

<style>
.page-enter-active,
.page-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to   { opacity: 0; transform: translateY(-12px); }
</style>

<script setup lang="ts">
</script>