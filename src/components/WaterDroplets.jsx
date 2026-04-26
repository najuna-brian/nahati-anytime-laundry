/**
 * Decorative glass “droplets” for hero / section backgrounds — no images, pure CSS.
 */
export default function WaterDroplets({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="droplet droplet-a" />
      <div className="droplet droplet-b" />
      <div className="droplet droplet-c" />
      <div className="droplet droplet-d" />
      <div className="mesh-grid opacity-[0.35]" />
    </div>
  )
}
