import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SpotlightSurface from './SpotlightSurface'

export default function ServiceCard({
  title,
  price,
  description,
  features = [],
  cta = 'Book Now',
  href = '/booking',
  className = '',
  badge,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`h-full ${className}`.trim()}
    >
      <SpotlightSurface className="card group flex h-full flex-col rounded-2xl ring-1 ring-slate-200/80 transition-shadow duration-300 hover:shadow-glow-sm">
        <div className="relative z-[1] flex h-full flex-col">
          <div className="mb-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">{title}</h3>
              {badge && (
                <span className="inline-flex shrink-0 items-center rounded-full border border-brand/25 bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-gradient-brand">{price}</p>
            {description && <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>}
          </div>
          <ul className="mt-1 flex-1 space-y-2 text-sm text-slate-700">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-sky-400 shadow-sm shadow-brand/40" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          {href.startsWith('/') && !href.startsWith('//') ? (
            <Link to={href} className="btn-primary mt-6 block text-center text-sm">
              {cta}
            </Link>
          ) : (
            <a href={href} className="btn-primary mt-6 block text-center text-sm">
              {cta}
            </a>
          )}
        </div>
      </SpotlightSurface>
    </motion.div>
  )
}
