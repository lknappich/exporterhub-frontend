<template>
  <div />
</template>

<script setup lang="ts">
definePageMeta({
  redirect: '/#exporters',
})

await navigateTo('/#exporters', { redirectCode: 301 })
</script>