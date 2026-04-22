export interface ConsentState {
  version: string
  timestamp: number
  necessary: boolean
  analytics: boolean
  preferences: boolean
}

const CURRENT_VERSION = '1.0'
const EXPIRY_SECONDS = 365 * 24 * 60 * 60

export const useCookieConsent = () => {
  const consentCookie = useCookie<ConsentState | null>('eh_consent', {
    default: () => null,
    maxAge: EXPIRY_SECONDS,
    sameSite: 'lax',
    secure: true,
  })

  const showBanner = computed(() => {
    if (!consentCookie.value) return true
    if (consentCookie.value.version !== CURRENT_VERSION) return true
    return false
  })

  const showSettings = ref(false)
  const consent = computed(() => consentCookie.value)

  const applyConsent = (state: ConsentState) => {
    if (!import.meta.client) return
    if (state.analytics) {
      if (!document.getElementById('plausible-script')) {
        const s = document.createElement('script')
        s.id = 'plausible-script'
        s.defer = true
        s.dataset.domain = window.location.hostname
        s.src = 'https://plausible.io/js/script.js'
        document.head.appendChild(s)
      }
    } else {
      document.getElementById('plausible-script')?.remove()
    }
  }

  const saveConsent = (state: ConsentState) => {
    consentCookie.value = { ...state, version: CURRENT_VERSION, timestamp: Date.now() }
    showSettings.value = false
    applyConsent(consentCookie.value!)
  }

  const acceptAll = () => {
    saveConsent({ version: CURRENT_VERSION, timestamp: Date.now(), necessary: true, analytics: true, preferences: true })
  }

  const rejectAll = () => {
    saveConsent({ version: CURRENT_VERSION, timestamp: Date.now(), necessary: true, analytics: false, preferences: false })
  }

  const withdraw = () => {
    consentCookie.value = null
    if (import.meta.client) {
      document.getElementById('plausible-script')?.remove()
    }
  }

  const openSettings = () => {
    showSettings.value = true
  }

  onMounted(() => {
    if (consentCookie.value) {
      applyConsent(consentCookie.value)
    }
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