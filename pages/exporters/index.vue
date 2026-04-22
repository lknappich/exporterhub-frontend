<template>
  <div />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

await navigateTo('/#exporters', { redirectCode: 301, external: false })
</script>