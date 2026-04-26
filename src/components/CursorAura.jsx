import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Soft teal/cyan glow that smoothly follows the pointer for a premium, futuristic feel.
 */
export default function CursorAura() {
  const [enabled, setEnabled] = useState(true)
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const springX = useSpring(mouseX, { stiffness: 90, damping: 26, mass: 0.35 })
  const springY = useSpring(mouseY, { stiffness: 90, damping: 26, mass: 0.35 })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setEnabled(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const leave = () => {
      mouseX.set(-9999)
      mouseY.set(-9999)
    }
    window.addEventListener('mousemove', move, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [enabled, mouseX, mouseY])

  const left = useTransform(springX, (v) => `${v - 280}px`)
  const top = useTransform(springY, (v) => `${v - 280}px`)

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[36rem] w-[36rem] rounded-full opacity-90"
      style={{
        left,
        top,
        background:
          'radial-gradient(circle at 40% 40%, rgba(45, 212, 191, 0.22) 0%, rgba(56, 189, 248, 0.08) 42%, transparent 68%)',
        filter: 'blur(72px)',
      }}
    />
  )
}
