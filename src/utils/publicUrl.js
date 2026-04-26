/**
 * Resolve a file from Vite `public/` for use in `src`, `fetch()`, etc.
 * Honors Vite `base` (e.g. `/` on nahatilaundry.online, or `/repo/` on GitHub Pages).
 */
export function publicUrl(path) {
  const relative = String(path).replace(/^\/+/, '')
  let base = import.meta.env.BASE_URL || '/'
  if (base !== '/' && !base.endsWith('/')) base = `${base}/`
  if (base === '/') return `/${relative}`
  return `${base}${relative}`
}
