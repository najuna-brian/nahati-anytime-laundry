import { useCallback, useRef } from 'react'

/**
 * Radial highlight that tracks the cursor within the element (modern “spotlight” card hover).
 */
export default function SpotlightSurface({ className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - r.left}px`)
    el.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }, [])

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-surface ${className}`} {...rest}>
      {children}
    </div>
  )
}
