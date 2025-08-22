import { motion } from 'framer-motion'
import { FaYoutube, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

export default function Contact() {
  return (
    <div className="container-max py-12">
      <div className="relative">
        <img src="/images/outside-1.webp" alt="Nahati Outside" className="h-40 w-full object-cover rounded-xl" />
        <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="text-3xl font-bold mt-6">Contact Us</motion.h1>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">Reach us</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              Phone: <a className="text-brand hover:underline" href="tel:+256200981445">+256 200 981 445</a>
            </li>
            <li>
              WhatsApp: <a className="text-brand hover:underline" href="https://wa.me/256200981445" target="_blank" rel="noreferrer">Chat now</a>
            </li>
            <li>
              Open 24/7 – We collect and deliver any time
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Social</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><FaYoutube className="text-gray-500" /> Youtube: <a className="text-brand hover:underline" href="https://www.youtube.com/@nahati_anytime_laundry" target="_blank" rel="noreferrer">@nahati_anytime_laundry</a></li>
              <li className="flex items-center gap-2"><FaInstagram className="text-gray-500" /> Instagram: <a className="text-brand hover:underline" href="https://www.instagram.com/nahati_anytime_laundry" target="_blank" rel="noreferrer">nahati_anytime_laundry</a></li>
              <li className="flex items-center gap-2"><FaXTwitter className="text-gray-500" /> Twitter/X: <a className="text-brand hover:underline" href="https://twitter.com/nahati_launders" target="_blank" rel="noreferrer">@nahati_launders</a></li>
              <li className="flex items-center gap-2"><FaLinkedin className="text-gray-500" /> LinkedIn: <a className="text-brand hover:underline" href="https://www.linkedin.com/company/nahati-anytime-laundry" target="_blank" rel="noreferrer">Nahati Anytime Laundry</a></li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Find us</h2>
          <div className="mt-2 rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7486884884743!2d32.56840547410713!3d0.3385054639935111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb19d164ea2d%3A0x46bf437b2b38b7a9!2sNahati%20Anytime%20Laundry!5e0!3m2!1sen!2sug!4v1755817421411!5m2!1sen!2sug" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Nahati+Anytime+Laundry" target="_blank" rel="noreferrer" className="btn-primary mt-4 inline-flex">Get Directions</a>
        </div>
      </div>
    </div>
  )
}
