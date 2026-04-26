import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAndroid, FaApple, FaDownload } from 'react-icons/fa6'
import { usePWAInstall } from '../hooks/usePWAInstall'

export default function BigInstallButton({ className = '' }) {
  const navigate = useNavigate()
  const { canInstall, install } = usePWAInstall()
  const [loading, setLoading] = useState(false)

  const { isIOS, isAndroid } = useMemo(() => {
    if (typeof navigator === 'undefined') return { isIOS: false, isAndroid: false }
    const ua = navigator.userAgent || ''
    return {
      isIOS: /iphone|ipad|ipod/i.test(ua),
      isAndroid: /android/i.test(ua),
    }
  }, [])

  const onClick = async () => {
    setLoading(true)
    try {
      // If already installed, attempt to open app (opening current site suffices for PWA)
      const installed = typeof localStorage !== 'undefined' && localStorage.getItem('nahati_installed') === '1'
      if (installed) {
        navigate('/')
        return
      }
      if (isIOS) {
        navigate('/install/iphone')
        return
      }
      if (canInstall) {
        await install()
        return
      }
      // Fallback: show instructions if install prompt not available
      navigate('/install/iphone')
    } finally {
      setLoading(false)
    }
  }

  const Icon = isIOS ? FaApple : isAndroid ? FaAndroid : FaDownload
  const label = isIOS ? 'Add to Home Screen' : 'Download App'

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-emerald-500 text-white px-5 py-3 shadow-lg hover:shadow-xl active:scale-[0.99] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      {loading ? (
        <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-white animate-spin" />
      ) : (
        <Icon className="h-5 w-5" />
      )}
      <span className="font-semibold tracking-wide">{label}</span>
    </button>
  )
}
