import { useState } from 'react'
import { publicUrl } from '../utils/publicUrl'

/**
 * Image from `/public` with correct `base` prefix, lazy loading, and a simple fallback if the file fails.
 */
export default function PublicImage({ path, alt, className = '', priority = false, ...imgProps }) {
  const [failed, setFailed] = useState(false)
  const src = publicUrl(path)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-slate-200/90 text-center text-xs font-medium text-slate-600 ${className}`}
      >
        <span className="px-3 py-6">{alt || 'Image unavailable'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' } : {})}
      onError={() => setFailed(true)}
      {...imgProps}
    />
  )
}
