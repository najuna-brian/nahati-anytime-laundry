import { motion } from 'framer-motion'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogPosts } from '../components/BlogPost'

export default function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="container-max py-12 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <button onClick={() => navigate('/learn')} className="btn-primary mt-4">
          Back to Learn
        </button>
      </div>
    )
  }

  return (
    <div className="container-max py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <button
            onClick={() => navigate('/learn')}
            className="inline-flex items-center text-brand hover:text-brand-dark mb-4"
          >
            ← Back to Learn
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-brand/10 text-brand rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
        </div>

        <article className="prose prose-lg prose-brand max-w-none">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .split('\n')
                .map(line => {
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
                .join('')
            }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-brand/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Need Professional Help?</h3>
            <p className="text-gray-700 mb-4">
              Let Nahati Anytime Laundry handle your garment care with our professional expertise.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/booking')}
                className="btn-primary"
              >
                Schedule Pickup
              </button>
              <a
                href="https://wa.me/256200981445"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
