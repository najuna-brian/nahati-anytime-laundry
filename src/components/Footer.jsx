import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import { usePWAInstall } from '../hooks/usePWAInstall'

export default function Footer() {
  const { canInstall, install } = usePWAInstall()
  return (
    <footer className="relative mt-auto border-t border-slate-800/80 bg-ink-950 text-slate-400">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent)]" />
      <div className="container-max relative flex flex-col gap-6 py-10 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="font-medium text-slate-500">
          &copy; {new Date().getFullYear()} Nahati Anytime Laundry. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="tel:+256200981445" className="font-medium text-slate-300 transition hover:text-brand">
            +256 200 981 445
          </a>
          <a
            href="https://wa.me/256200981445"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-300 transition hover:text-brand"
          >
            WhatsApp
          </a>
          {canInstall && (
            <button type="button" onClick={install} className="font-medium text-brand-light/90 underline-offset-4 hover:text-brand hover:underline">
              Install app
            </button>
          )}
          <span className="hidden text-slate-600 sm:inline">·</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-200/90">
            Open 24/7
          </span>
        </div>
        <div className="flex gap-4 text-slate-500">
          <a
            className="transition hover:text-brand"
            href="https://www.youtube.com/@nahati_anytime_laundry"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            className="transition hover:text-brand"
            href="https://www.instagram.com/nahati_anytime_laundry"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            className="transition hover:text-brand"
            href="https://twitter.com/nahati_launders"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter/X"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            className="transition hover:text-brand"
            href="https://www.linkedin.com/company/nahati-anytime-laundry"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        <div className="w-full text-xs text-slate-500 sm:w-auto sm:text-right">
          <Link to="/install/iphone" className="underline-offset-4 transition hover:text-brand hover:underline">
            How to install on iPhone
          </Link>
        </div>
      </div>
    </footer>
  )
}
