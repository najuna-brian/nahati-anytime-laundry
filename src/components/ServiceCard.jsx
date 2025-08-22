import { motion } from 'framer-motion'

export default function ServiceCard({ title, price, description, features = [], cta = 'Book Now', href = '/booking', className = '', badge }) {
  return (
    <motion.div whileHover={{ y: -4 }} className={`card h-full flex flex-col ${className}`}>
      <div className="mb-4">
        <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className="ml-2 inline-flex items-center rounded-full bg-brand/10 text-brand px-2 py-0.5 text-xs font-medium">{badge}</span>
          )}
        </div>
        <p className="mt-1 text-2xl font-bold text-brand">{price}</p>
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      </div>
      <ul className="mt-2 space-y-1 text-sm text-gray-700 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand"></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href={href} className="btn-primary mt-6 text-center">{cta}</a>
    </motion.div>
  )
}
