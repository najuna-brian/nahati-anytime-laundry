import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Learn from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import AdminInvoice from './pages/AdminInvoice'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
}

function PageWrapper({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="min-h-[70vh]"
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
            <Route path="/learn" element={<PageWrapper><Learn /></PageWrapper>} />
            <Route path="/learn/:id" element={<PageWrapper><BlogDetail /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/admin/invoice" element={<PageWrapper><AdminInvoice /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
