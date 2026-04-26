import { useEffect, useState } from 'react'

export default function InstallPWA({ className = '' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const onInstall = async () => {
    // If already installed, just ignore prompt
    try {
      if (localStorage.getItem('nahati_installed') === '1') return
    } catch {}
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setCanInstall(false)
    setDeferredPrompt(null)
  }

  // Hide on iOS Safari where the prompt isn’t available; users install via Share > Add to Home Screen
  const isIOS = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent)
  if (!canInstall || isIOS) return null

  return (
    <div className={`rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-soft backdrop-blur-sm ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display font-bold text-ink-900">Get the app</h3>
          <p className="mt-1 text-sm text-slate-600">Install Nahati on your device for a faster, app-like experience.</p>
        </div>
        <button type="button" onClick={onInstall} className="btn-primary shrink-0 text-sm">
          Install
        </button>
      </div>
    </div>
  )
}
