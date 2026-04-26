import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../utils/constants'
import InstallPWA from '../components/InstallPWA'
import BigInstallButton from '../components/BigInstallButton'
import WaterDroplets from '../components/WaterDroplets'
import SpotlightSurface from '../components/SpotlightSurface'
import PublicImage from '../components/PublicImage'

export default function Home() {
  const coreNames = new Set(['Ordinary Service', 'Normal Service', 'Express Service'])
  const core = SERVICES.filter((s) => coreNames.has(s.name))
  const others = SERVICES.filter((s) => !coreNames.has(s.name))

  const trust = [
    { label: 'Open 24/7', sub: 'Pickups and deliveries when you need them' },
    { label: 'Across Kampala', sub: 'Homes, hostels, and workplaces' },
    { label: 'Same process every time', sub: 'Trained staff, checked weights' },
  ]

  const why = [
    {
      t: 'Fast turnaround',
      d: 'Choose ordinary, normal, or express—so you always know when your laundry is back.',
      path: 'images/airdry.png',
      alt: 'Laundry drying — fresh, airy finish',
    },
    {
      t: 'Reliable week after week',
      d: 'Many customers book us again and again. We keep quality steady so you can plan around it.',
      path: 'images/outside-1.webp',
      alt: 'Nahati Anytime Laundry building exterior',
    },
    {
      t: 'Careful with your fabrics',
      d: 'Tell us about delicates, stains, or preferences—we adjust the wash to the item.',
      path: 'images/wall-logo.webp',
      alt: 'Nahati wall branding inside the laundry',
    },
  ]

  return (
    <div>
      <section className="relative overflow-hidden bg-ink-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-25" aria-hidden>
          <PublicImage
            path="images/outside-1.webp"
            alt=""
            className="h-full min-h-[28rem] w-full scale-105 object-cover blur-[2px]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-hero-mesh opacity-90" />
        <WaterDroplets className="z-[1]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_60%_at_50%_120%,rgba(45,212,191,0.12),transparent)]" />

        <div className="container-max relative z-10 grid items-center gap-12 py-20 sm:grid-cols-2 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-200/90 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand shadow-[0_0_12px_rgba(45,212,191,0.9)]" />
              Nahati Anytime Laundry
            </span>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Clean clothes, <span className="text-gradient-brand">clear prices</span> — pickup and delivery in Kampala.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              We wash, press, and return your items on the schedule you pick. Book once or book every week: you get the
              same careful handling and a straight answer on WhatsApp before we start.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/booking" className="btn-primary">
                Book a pickup
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand/50 hover:bg-white/10"
              >
                See prices
              </Link>
              <BigInstallButton className="ml-0 sm:ml-1" />
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {trust.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
                >
                  <dt className="text-sm font-bold text-white">{item.label}</dt>
                  <dd className="mt-1 text-xs leading-snug text-slate-400">{item.sub}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/25 via-sky-500/10 to-transparent blur-2xl" />
            <SpotlightSurface className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-2 shadow-glow backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <PublicImage
                  path="images/staff-reception.png"
                  alt="Staff at the Nahati reception desk"
                  priority
                  className="h-72 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-slate-200">
                  Walk-ins welcome · Order updates on WhatsApp · Accounts for offices and teams
                </p>
              </div>
            </SpotlightSurface>
          </motion.div>
        </div>
      </section>

      <section className="container-max py-14 sm:py-16">
        <InstallPWA className="mb-8" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Services</p>
            <h2 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-ink-900">Services that scale with you</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Start with our three laundry speeds, then add extras like sneakers, suits, or bedding—everything is listed
              up front.
            </p>
          </div>
          <Link to="/services" className="btn-outline mt-2 shrink-0 self-start sm:mt-0">
            Full price list
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-lg font-bold text-ink-900">Everyday laundry</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <ServiceCard
                  title={s.name}
                  price={s.price}
                  badge={
                    s.name === 'Express Service' ? 'Fastest' : s.name === 'Normal Service' ? 'Next day' : 'Best value'
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-sky-500/5 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <h4 className="font-display text-lg font-bold text-ink-900">Dry cleaning (on request)</h4>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
              Delicates, suits, and special pieces are priced per item—we confirm the quote on WhatsApp before we begin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="btn-outline">
              How it works
            </Link>
            <Link to="/booking" className="btn-primary">
              Request dry cleaning
            </Link>
          </div>
        </motion.div>

        <div className="mt-14">
          <h3 className="font-display text-lg font-bold text-ink-900">Special items</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <ServiceCard title={s.name} price={s.price} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-surface-elevated/80 py-14 backdrop-blur-sm sm:py-16">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Why Nahati</p>
            <h2 className="font-display mt-1 text-3xl font-extrabold tracking-tight text-ink-900">Straightforward service you can recommend</h2>
            <p className="mt-3 text-slate-600">
              No guesswork: you see how we work, you know what you pay, and you can reach us any time on WhatsApp.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <SpotlightSurface className="card group h-full rounded-2xl transition-shadow duration-300 hover:shadow-glow-sm">
                  <div className="relative z-[1]">
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <PublicImage
                        path={it.path}
                        alt={it.alt}
                        className="h-36 w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/25 to-transparent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{it.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.d}</p>
                  </div>
                </SpotlightSurface>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
