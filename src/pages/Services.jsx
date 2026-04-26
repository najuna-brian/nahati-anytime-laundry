import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { SERVICES, ADDONS } from '../utils/constants'
import { motion } from 'framer-motion'
import SpotlightSurface from '../components/SpotlightSurface'
import PublicImage from '../components/PublicImage'

export default function Services() {
  const coreNames = new Set(['Ordinary Service', 'Normal Service', 'Express Service'])
  const core = SERVICES.filter((s) => coreNames.has(s.name))
  const others = SERVICES.filter((s) => !coreNames.has(s.name))

  const highlights = [
    {
      path: 'images/momo-pay.png',
      label: 'Mobile money',
      desc: 'Pay with MTN Mobile Money or Airtel Money. We confirm the total with you on WhatsApp.',
      alt: 'Mobile money payment logos',
    },
    {
      path: 'images/lint-remover.png',
      label: 'Professional tools',
      desc: 'Commercial washers, dryers, and finishing equipment built for volume and fabric safety.',
      alt: 'Professional laundry equipment',
    },
    {
      path: 'images/outside-2.webp',
      label: 'Easy to find',
      desc: 'Clear signage and pickup-friendly access—come by or send a rider.',
      alt: 'Second exterior view of Nahati laundry',
    },
  ]

  return (
    <div className="container-max py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Pricing</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink-900">Services and prices</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          All rates below are what we quote before we start. Final billing follows the actual weight we record at the
          laundry.
        </p>
      </motion.div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-ink-900">Everyday laundry</h2>
        <p className="mt-1 text-sm text-slate-600">Pick the speed that fits your week—ordinary, normal, or express.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ServiceCard
                title={s.name}
                price={s.price}
                description={s.description}
                features={s.features}
                className="ring-1 ring-brand/15 hover:ring-brand/30"
                badge={s.name === 'Express Service' ? 'Fastest' : s.name === 'Normal Service' ? 'Next day' : 'Best value'}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-sky-500/5 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <h3 className="font-display text-lg font-bold text-ink-900">Dry cleaning (on request)</h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
              For delicate or tailored pieces we quote per item before we proceed—ask in your booking or on WhatsApp.
            </p>
          </div>
          <Link to="/booking" className="btn-primary shrink-0 self-start sm:self-center">
            Book dry cleaning
          </Link>
        </motion.div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-ink-900">Special items</h2>
        <p className="mt-1 text-sm text-slate-600">Add-ons for shoes, suits, bedding, and more.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ServiceCard title={s.name} price={s.price} description={s.description} features={s.features} />
            </motion.div>
          ))}
        </div>
      </section>

      <SpotlightSurface className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
        <p className="relative z-[1] text-sm leading-relaxed text-slate-600">
          Tell us in your booking if you need a specific detergent, no fabric softener, hand-wash only, or extra care for
          stains. The more we know, the better we can match the wash to your clothes.
        </p>
      </SpotlightSurface>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <SpotlightSurface className="card rounded-2xl">
          <div className="relative z-[1]">
            <h2 className="font-display text-xl font-bold text-ink-900">Optional add-ons</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-ink-900">Ironing:</span> {ADDONS.ironing}
              </li>
              <li>
                <span className="font-semibold text-ink-900">Pickup and delivery:</span> {ADDONS.transport}
              </li>
            </ul>
          </div>
        </SpotlightSurface>
        <SpotlightSurface className="card rounded-2xl">
          <div className="relative z-[1]">
            <h2 className="font-display text-xl font-bold text-ink-900">Good to know</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Estimates use approximate weight; you pay for the actual weight we record.</li>
              <li>We are open 24/7 for pickups and deliveries, every day of the year.</li>
              <li>Duvets and blankets are priced by size (15,000–30,000 UGX). We confirm before we wash.</li>
              <li>Dry cleaning is always on request with a clear per-item quote.</li>
              <li>Unusual or very delicate items may need a custom price—we tell you first.</li>
            </ul>
          </div>
        </SpotlightSurface>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {highlights.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <SpotlightSurface className="card h-full rounded-2xl transition-shadow duration-300 hover:shadow-glow-sm">
              <div className="relative z-[1] flex h-full flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <PublicImage path={a.path} alt={a.alt} className="h-16 w-16 shrink-0 object-contain" />
                  <div className="font-display text-base font-bold text-ink-900">{a.label}</div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{a.desc}</p>
              </div>
            </SpotlightSurface>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
