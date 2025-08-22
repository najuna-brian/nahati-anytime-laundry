import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../utils/constants'

export default function Home() {
  const coreNames = new Set(['Ordinary Service', 'Normal Service', 'Express Service'])
  const core = SERVICES.filter(s => coreNames.has(s.name))
  const others = SERVICES.filter(s => !coreNames.has(s.name))
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/outside-1.webp" alt="Nahati Anytime Laundry" className="h-full w-full object-cover opacity-20 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/95"></div>
        </div>
        <div className="container-max py-16 sm:py-24 grid gap-10 sm:grid-cols-2 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-sm font-medium">Your Anytime Laundry</span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Professional Laundry Services Made Simple</h1>
            <p className="mt-4 text-lg text-gray-700">Fast, reliable, and professional care for your garments. 24/7 pickup and delivery available every day.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/booking" className="btn-primary">Schedule Pickup Now</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="relative">
            <div className="card">
              <img src="/images/staff-reception.png" alt="Reception" className="w-full h-64 object-cover rounded-lg opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-max py-12">
        <h2 className="text-2xl font-bold">Our Services</h2>

        {/* Core Services (match Services page styling) */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Core Laundry Services</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((s, idx) => (
              <motion.div key={s.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:idx*0.05}}>
                <ServiceCard
                  title={s.name}
                  price={s.price}
                  // Keep Home concise: omit description/features to avoid repetition
                  className="ring-1 ring-brand/20 hover:ring-brand/40"
                  badge={s.name === 'Express Service' ? 'Fastest' : s.name === 'Normal Service' ? 'Next-day' : 'Best value'}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dry Cleaning Callout (match Services page) */}
        <div className="mt-8 bg-gradient-to-r from-brand/5 to-brand/10 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-base font-semibold">Dry Cleaning (On Request)</h4>
            <p className="text-sm text-gray-700 mt-1">Professional care for delicate items. Pricing varies by item—confirmed at the laundry.</p>
          </div>
          <a href="/services" className="btn-outline self-start">View Details</a>
          <a href="/booking" className="btn-primary self-start">Book Dry Cleaning</a>
        </div>

        {/* Additional Services */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Additional Care Services</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, idx) => (
              <motion.div key={s.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:idx*0.05}}>
                <ServiceCard title={s.name} price={s.price} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-max py-12">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{t:'Fast Turnaround',d:'Same-day and next-day options available. Perfect for busy schedules and urgent needs.',img:'/images/airdry.png'},{t:'Reliable Service',d:'Trusted by households and businesses across Kampala for consistent quality.',img:'/images/outside-1.webp'},{t:'Professional Care',d:'Expert handling with attention to detail ensures your garments receive the best treatment.',img:'/images/wall-logo.webp'}].map((it,i)=> (
              <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="card group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-md mb-4">
                  <img src={it.img} alt="" className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <h3 className="font-semibold text-lg">{it.t}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{it.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
