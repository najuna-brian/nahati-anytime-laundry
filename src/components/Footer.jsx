import { FaYoutube, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container-max py-8 text-sm text-gray-600 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Nahati Anytime Laundry. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <a href="tel:+256200981445" className="hover:text-brand">Call: +256 200 981 445</a>
          <a href="https://wa.me/256200981445" target="_blank" rel="noreferrer" className="hover:text-brand">WhatsApp</a>
          <span className="hidden sm:inline text-gray-400">•</span>
          <span className="text-gray-600">Open 24/7</span>
        </div>
        <div className="flex gap-3 text-gray-600">
          <a className="hover:text-brand" href="https://www.youtube.com/@nahati_anytime_laundry" target="_blank" rel="noreferrer" aria-label="YouTube">
            <FaYoutube size={18} />
          </a>
          <a className="hover:text-brand" href="https://www.instagram.com/nahati_anytime_laundry" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
          <a className="hover:text-brand" href="https://twitter.com/nahati_launders" target="_blank" rel="noreferrer" aria-label="Twitter/X">
            <FaXTwitter size={18} />
          </a>
          <a className="hover:text-brand" href="https://www.linkedin.com/company/nahati-anytime-laundry" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
