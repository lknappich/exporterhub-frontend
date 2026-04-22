export const useAnimations = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 300 } },
  }

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 300, ease: 'easeOut' } },
  }

  const staggerChildren = (count: number) => ({
    initial: { opacity: 0, y: 20 },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 300, delay: i * 50, ease: 'easeOut' },
    }),
  })

  return { fadeIn, slideUp, staggerChildren }
}