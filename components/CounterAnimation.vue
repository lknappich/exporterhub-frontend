<template>
  <span ref="el">{{ displayValue }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number
  duration?: number
}>()

const el = ref<HTMLElement>()
const displayValue = ref(0)
const isVisible = ref(false)

const duration = computed(() => props.duration ?? 1500)

let animationFrame: number

const animate = () => {
  const start = performance.now()
  const startValue = displayValue.value

  const step = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration.value, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(startValue + (props.target - startValue) * eased)

    if (progress < 1) {
      animationFrame = requestAnimationFrame(step)
    } else {
      displayValue.value = props.target
    }
  }

  animationFrame = requestAnimationFrame(step)
}

const observer = ref<IntersectionObserver>()

onMounted(() => {
  if (!el.value) return
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        animate()
      }
    },
    { threshold: 0.5 }
  )
  observer.value.observe(el.value)
})

onBeforeUnmount(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  observer.value?.disconnect()
})
</script>