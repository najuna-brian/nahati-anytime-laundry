import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BlogPost, { blogPosts } from '../components/BlogPost'

const quotes = [
  {
    text: "Quality laundry care isn't just about cleaning—it's about preserving the life and beauty of your garments.",
    author: "Professional Fabric Care Association"
  },
  {
    text: "The right care today means your favorite clothes will look great for years to come.",
    author: "Textile Conservation Society"
  },
  {
    text: "Understanding your fabrics is the first step to maintaining a wardrobe that always looks professional.",
    author: "International Garment Care Institute"
  }
]

export default function Learn() {
  const navigate = useNavigate()

  const handleReadMore = (postId) => {
    navigate(`/learn/${postId}`)
  }

  return (
    <div className="container-max py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Learn</h1>
        <p className="mt-2 text-lg text-gray-700">
          Master the art of garment care with professional tips and techniques.
        </p>
      </motion.div>

      {/* Featured Quotes Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 mb-12"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Words of Wisdom</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-brand"
            >
              <blockquote className="text-gray-700 italic mb-4">
                "{quote.text}"
              </blockquote>
              <cite className="text-sm text-brand font-medium not-italic">
                — {quote.author}
              </cite>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Articles Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            {blogPosts.length} articles available
          </motion.div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, i) => (
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

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-gradient-to-r from-brand/5 to-brand/10 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Put Knowledge into Practice?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          While learning proper care techniques is valuable, sometimes you need the expertise of professionals. 
          Let us handle your laundry with the same care and attention you've learned about.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/booking')}
            className="btn-primary"
          >
            Schedule Professional Care
          </button>
          <button
            onClick={() => navigate('/services')}
            className="btn-outline"
          >
            View Our Services
          </button>
        </div>
      </motion.section>
    </div>
  )
}
