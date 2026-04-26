import { motion } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { blogPosts } from '../components/BlogPost'

export default function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="container-max py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">Article not found</h1>
        <p className="mt-2 text-slate-600">That link may be out of date.</p>
        <Link to="/learn" className="btn-primary mt-6 inline-flex">
          Back to Learn
        </Link>
      </div>
    )
  }

  return (
    <div className="container-max max-w-4xl py-12 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate('/learn')}
            className="mb-4 inline-flex items-center text-sm font-semibold text-brand-dark hover:underline"
          >
            ← Back to Learn
          </button>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand-dark">
              {post.category}
            </span>
            <span className="text-sm text-slate-500">{post.date}</span>
            <span className="text-sm text-slate-400">·</span>
            <span className="text-sm text-slate-500">{post.readTime}</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map((line) => {
                  if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`
                  if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
                  if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
                  if (line.startsWith('- **') && line.includes('**:')) {
                    const [, bold, rest] = line.match(/- \*\*(.*?)\*\*: (.*)/) || []
                    return `<li><strong>${bold}:</strong> ${rest}</li>`
                  }
                  if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
                  if (line.startsWith('1. ')) return `<li>${line.slice(3)}</li>`
                  if (line.startsWith('2. ')) return `<li>${line.slice(3)}</li>`
                  if (line.startsWith('3. ')) return `<li>${line.slice(3)}</li>`
                  if (line.startsWith('4. ')) return `<li>${line.slice(3)}</li>`
                  if (line.trim() === '') return '<br>'
                  return `<p>${line}</p>`
                })
                .join(''),
            }}
          />
        </article>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-ink-900">Want us to do the wash?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Send a booking with your address and service—we confirm weight and price on WhatsApp before we collect anything.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/booking" className="btn-primary">
                Book a pickup
              </Link>
              <a href="https://wa.me/256200981445" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
