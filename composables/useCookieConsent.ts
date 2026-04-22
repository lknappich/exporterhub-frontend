export interface ConsentState {
  version: string
  timestamp: number
  necessary: boolean
  analytics: boolean
  preferences: boolean
}

const CONSENT_KEY = 'eh_cookie_consent'
const CURRENT_VERSION = '1.0'
const EXPIRY_MONTHS = 12

const isExpired = (timestamp: number): boolean => {
  const expiryMs = EXPIRY_MONTHS * 30 * 24 * 60 * 60 * 1000
  return Date.now() - timestamp > expiryMs
}

export const useCookieConsent = () => {
  const showBanner = ref(false)
  const showSettings = ref(false)
  const consent = ref<ConsentState | null>(null)

  const loadConsent = (): ConsentState | null => {
    if (import.meta.server) return null
    try {
      const raw = localStorage.getItem(CONSENT_KEY)
      if (!raw) return null
      const parsed = JSON.parse(raw) as ConsentState
      if (parsed.version !== CURRENT_VERSION || isExpired(parsed.timestamp)) {
        localStorage.removeItem(CONSENT_KEY)
        return null
      }
      return parsed
    } catch {
      return null
    }
  }

  const saveConsent = (state: ConsentState) => {
    if (import.meta.server) return
    const data: ConsentState = {
      ...state,
      version: CURRENT_VERSION,
      timestamp: Date.now(),
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
    consent.value = data
    showBanner.value = false
    applyConsent(data)
  }

  const applyConsent = (state: ConsentState) => {
    if (import.meta.server) return
    if (state.analytics) {
      const existing = document.getElementById('plausible-script')
      if (!existing) {
        const script = document.createElement('script')
        script.id = 'plausible-script'
        script.async = true
        script.defer = true
        script.dataset.domain = window.location.hostname
        script.src = 'https://plausible.io/js/script.js'
        document.head.appendChild(script)
      }
    } else {
      const existing = document.getElementById('plausible-script')
      if (existing) existing.remove()
    }
  }

  const acceptAll = () => {
    saveConsent({
      version: CURRENT_VERSION,
      timestamp: Date.now(),
      necessary: true,
      analytics: true,
      preferences: true,
    })
  }

  const rejectAll = () => {
    saveConsent({
      version: CURRENT_VERSION,
      timestamp: Date.now(),
      necessary: true,
      analytics: false,
      preferences: false,
    })
  }

  const withdraw = () => {
    if (import.meta.server) return
    localStorage.removeItem(CONSENT_KEY)
    consent.value = null
    showBanner.value = true
    const existing = document.getElementById('plausible-script')
    if (existing) existing.remove()
  }

  const openSettings = () => {
    showSettings.value = true
  }

  const init = () => {
    const stored = loadConsent()
    if (stored) {
      consent.value = stored
      applyConsent(stored)
      showBanner.value = false
    } else {
      showBanner.value = true
    }
  }

  onMounted(() => {
    init()
  })

  return {
    consent,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    saveConsent,
    withdraw,
    openSettings,
  }
}