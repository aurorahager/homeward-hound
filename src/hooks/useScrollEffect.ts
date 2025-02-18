import { useEffect, useState } from 'react'

/**
 * Hook to adjust opacity and color of search bar on scroll.
 * @param {string} stickyThreshold - the point at which the search bar becomes sticky
 * @returns {string} - rgba
 */
const useScrollEffect = (stickyThreshold = 40): string => {
  const initialOpacity = 0.05
  const maxOpacity = 0.95
  const transitionSpeed = 200

  const [bgColor, setBgColor] = useState(
    `rgba(255, 255, 255, ${initialOpacity})`,
  )

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY

      const newOpacity = Math.min(
        maxOpacity,
        initialOpacity + (scrollTop - stickyThreshold) / transitionSpeed,
      )
      const clampedOpacity = Math.max(initialOpacity, newOpacity)

      if (scrollTop > stickyThreshold) {
        setBgColor(`rgba(197, 229, 190, ${clampedOpacity})`)
      } else {
        setBgColor(`rgba(255, 255, 255, ${clampedOpacity})`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [stickyThreshold, initialOpacity, maxOpacity, transitionSpeed])

  return bgColor
}

export default useScrollEffect
