import { motion } from 'framer-motion'
import { FaYoutube, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import SpotlightSurface from '../components/SpotlightSurface'
import PublicImage from '../components/PublicImage'

export default function Contact() {
  return (
    <div className="container-max py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-glow-sm">
        <PublicImage
          path="images/outside-1.webp"
          alt="Nahati Anytime Laundry building in Kampala"
          priority
          className="h-44 w-full object-cover sm:h-52"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-display mt-8 text-4xl font-extrabold tracking-tight text-ink-900"
      >
        Contact us
      </motion.h1>
      <p className="mt-2 max-w-xl text-slate-600">
        One team for phone, WhatsApp, and dispatch. Save the number and message us any time—we reply as soon as we can.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <SpotlightSurface className="card rounded-2xl">
          <div className="relative z-[1]">
            <h2 className="font-display text-xl font-bold text-ink-900">Reach us</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                Phone:{' '}
                <a className="font-semibold text-brand-dark hover:underline" href="tel:+256200981445">
                  +256 200 981 445
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a className="font-semibold text-brand-dark hover:underline" href="https://wa.me/256200981445" target="_blank" rel="noreferrer">
                  Open chat
                </a>
              </li>
              <li className="text-sm text-slate-600">Open 24 hours for pickups and deliveries, every day.</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-slate-500">Social</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <FaYoutube className="shrink-0 text-slate-400" /> YouTube:{' '}
                  <a className="text-brand-dark hover:underline" href="https://www.youtube.com/@nahati_anytime_laundry" target="_blank" rel="noreferrer">
                    @nahati_anytime_laundry
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram className="shrink-0 text-slate-400" /> Instagram:{' '}
                  <a className="text-brand-dark hover:underline" href="https://www.instagram.com/nahati_anytime_laundry" target="_blank" rel="noreferrer">
                    nahati_anytime_laundry
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaXTwitter className="shrink-0 text-slate-400" /> X (Twitter):{' '}
                  <a className="text-brand-dark hover:underline" href="https://twitter.com/nahati_launders" target="_blank" rel="noreferrer">
                    @nahati_launders
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin className="shrink-0 text-slate-400" /> LinkedIn:{' '}
                  <a className="text-brand-dark hover:underline" href="https://www.linkedin.com/company/nahati-anytime-laundry" target="_blank" rel="noreferrer">
                    Nahati Anytime Laundry
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SpotlightSurface>
        <SpotlightSurface className="card rounded-2xl">
          <div className="relative z-[1]">
            <h2 className="font-display text-xl font-bold text-ink-900">Find us</h2>
            <p className="mt-2 text-sm text-slate-600">Tap directions to open Google Maps with our pin.</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200/80 ring-1 ring-slate-100">
              <iframe
                title="Nahati Anytime Laundry on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7486884884743!2d32.56840547410713!3d0.3385054639935111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb19d164ea2d%3A0x46bf437b2b38b7a9!2sNahati%20Anytime%20Laundry!5e0!3m2!1sen!2sug!4v1755817421411!5m2!1sen!2sug"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nahati+Anytime+Laundry"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5 inline-flex"
            >
              Directions in Google Maps
            </a>
          </div>
        </SpotlightSurface>
      </div>
    </div>
  )
}
