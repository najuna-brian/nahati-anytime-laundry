import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import BlogPost, { blogPosts } from '../components/BlogPost'
import SpotlightSurface from '../components/SpotlightSurface'

const quotes = [
  {
    text: 'Sorting lights from darks and reading care labels takes a few minutes—and it protects the clothes you wear most.',
    kicker: 'Sorting',
  },
  {
    text: 'On fresh stains, blot—do not rub—and use cool water unless the label says otherwise. When unsure, leave it to us.',
    kicker: 'Stains',
  },
  {
    text: 'Regular professional washing helps work uniforms and bedding stay fresh longer than home machines alone.',
    kicker: 'Every week',
  },
]

export default function Learn() {
  const navigate = useNavigate()

  const handleReadMore = (postId) => {
    navigate(`/learn/${postId}`)
  }

  return (
    <div className="container-max py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Learn</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink-900">Garment care tips</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Short guides you can use at home—then hand the heavy loads to Nahati when you are ready.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mb-14 mt-12"
      >
        <h2 className="font-display mb-8 text-center text-2xl font-bold text-ink-900">Quick reminders</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.kicker}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <SpotlightSurface className="card h-full rounded-2xl border-l-4 border-l-brand">
                <div className="relative z-[1]">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-dark">{quote.kicker}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{quote.text}</p>
                </div>
              </SpotlightSurface>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl font-bold text-ink-900">Articles</h2>
          <p className="text-sm text-slate-600">{blogPosts.length} guides — tap a card to read</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              onReadMore={() => handleReadMore(post.id)}
            />
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-16 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-sky-500/5 to-transparent p-8 text-center"
      >
        <h3 className="font-display text-2xl font-bold text-ink-900">Ready for us to take over?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Send a booking with your address and service choice—we confirm weight, price, and pickup time on WhatsApp before we
          collect anything.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/booking" className="btn-primary">
            Book a pickup
          </Link>
          <Link to="/services" className="btn-outline">
            View services
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
