import ServiceCard from '../components/ServiceCard'
import { SERVICES, ADDONS } from '../utils/constants'
import { motion } from 'framer-motion'

export default function Services() {
  const coreNames = new Set(['Ordinary Service', 'Normal Service', 'Express Service'])
  const core = SERVICES.filter(s => coreNames.has(s.name))
  const others = SERVICES.filter(s => !coreNames.has(s.name))
  return (
    <div className="container-max py-12">
      <h1 className="text-3xl font-bold">Services & Pricing</h1>
      <p className="mt-2 text-gray-700">Transparent pricing with options to match your needs.</p>

      {/* Core Services */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Core Laundry Services</h2>
        <p className="text-sm text-gray-600 mt-1">Our most popular and fastest options</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((s, i) => (
            <motion.div key={s.name} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.35, delay:i*0.05}}>
              <ServiceCard
                title={s.name}
                price={s.price}
                description={s.description}
                features={s.features}
                className="ring-1 ring-brand/20 hover:ring-brand/40"
                badge={s.name === 'Express Service' ? 'Fastest' : s.name === 'Normal Service' ? 'Next-day' : 'Best value'}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dry Cleaning Callout */}
      <section className="mt-10">
        <div className="bg-gradient-to-r from-brand/5 to-brand/10 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Dry Cleaning (On Request)</h3>
            <p className="text-sm text-gray-700 mt-1">Professional dry cleaning available for delicate and special garments. Pricing varies by item—confirmed at the laundry.</p>
          </div>
          <a href="/booking" className="btn-primary self-start">Book Dry Cleaning</a>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Additional Care Services</h2>
        <p className="text-sm text-gray-600 mt-1">Specialized cleaning options for specific items</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, i) => (
            <motion.div key={s.name} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.35, delay:i*0.05}}>
              <ServiceCard title={s.name} price={s.price} description={s.description} features={s.features} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Preferences Note */}
      <div className="mt-6 bg-white rounded-xl p-6 shadow-soft border border-gray-100">
        <p className="text-sm text-gray-700">
          Please share any special care preferences with your order—this helps us tailor the service to your needs. Examples include preferred machine settings, hand-wash requests, detergent type, and fabric softener preferences. If you have delicate or special garments, let us know so we can apply the right process.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">Optional Add-ons</h2>
          <ul className="mt-3 space-y-1 text-gray-700 text-sm">
            <li>Ironing: {ADDONS.ironing}</li>
            <li>Pickup & Delivery: {ADDONS.transport}</li>
          </ul>
        </div>
    <div className="card">
          <h2 className="text-xl font-semibold">Notes</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700 text-sm space-y-1">
      <li>Weights are estimates; final billing based on actual weight.</li>
            <li>Open 24/7: Pickup and delivery available any day, any time.</li>
      <li>Duvet/Blanket pricing varies by size (15,000–30,000 UGX). Default estimate used is 15,000 UGX.</li>
      <li>Dry cleaning services are available on request.</li>
      <li>Special garments may have different pricing—confirmed at the laundry.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[{img:'/images/momo-pay.png', label:'Mobile Money Accepted', desc:'Easy payment through MTN Mobile Money and Airtel Money'},{img:'/images/lint-remover.png', label:'Advanced Equipment', desc:'Professional lint removal and fabric care tools'},{img:'/images/outside-2.webp', label:'Prime Location', desc:'Easily accessible location with convenient pickup zones'}].map((a,i)=> (
          <motion.div key={i} className="card hover:shadow-lg transition-all duration-300" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.3, delay:i*0.05}}>
            <div className="flex items-center gap-4 mb-3">
              <img src={a.img} alt="" className="h-16 w-16 object-contain opacity-90"/>
              <div className="font-medium text-lg">{a.label}</div>
            </div>
            <p className="text-gray-600 text-sm">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
