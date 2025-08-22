import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <motion.nav initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.3}} className="container-max flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/nahati_logo.png" alt="Nahati Logo" className="h-9 w-9 rounded-md" />
          <span className="text-lg font-semibold">Nahati Anytime Laundry</span>
          <span className="hidden sm:inline text-xs text-brand font-medium ml-1">Your Anytime Laundry</span>
        </Link>
        <button className="sm:hidden rounded-md p-2 hover:bg-gray-100" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/booking" className={navLinkClass}>Booking</NavLink>
          <NavLink to="/learn" className={navLinkClass}>Learn</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <Link to="/booking" className="btn-primary ml-2">Schedule Pickup</Link>
        </div>
      </motion.nav>
      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <div className="container-max py-2 flex flex-col">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/booking" className={navLinkClass}>Booking</NavLink>
            <NavLink to="/learn" className={navLinkClass}>Learn</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <Link to="/booking" className="btn-primary mt-2">Schedule Pickup</Link>
          </div>
        </div>
      )}
    </header>
  )
}
