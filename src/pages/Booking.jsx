import { motion } from 'framer-motion'
import BookingForm from '../components/BookingForm'
import SpotlightSurface from '../components/SpotlightSurface'

export default function Booking() {
  return (
    <div className="container-max py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Booking</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink-900">Schedule a pickup</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Fill in the form once. We open WhatsApp with your message so you can confirm address, weight, and price before we
          send a rider.
        </p>
      </motion.div>
      <div className="mt-8">
        <SpotlightSurface className="card rounded-2xl p-6 sm:p-8">
          <div className="relative z-[1]">
            <BookingForm />
          </div>
        </SpotlightSurface>
      </div>
    </div>
  )
}
