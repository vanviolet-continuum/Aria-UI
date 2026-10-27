import { createInstance, type Resource } from 'i18next'
import ui from './locales/id/ui.json'
import en from './locales/en/ui.json'

export const supportedLanguages = ['id', 'en'] as const
export type Language = (typeof supportedLanguages)[number]
export const LOCALE_STORAGE_KEY = 'admin-template-language-v1'
export const localeOf = (language: string) => (language.startsWith('en') ? 'en-US' : 'id-ID')
export function createTemplateI18n(
  options: { language?: Language; storageKey?: string; resources?: Resource } = {},
) {
  const storageKey = options.storageKey ?? LOCALE_STORAGE_KEY
  let language: Language = options.language ?? 'id'
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'id' || saved === 'en') language = saved
  } catch {
    /* Storage is optional. */
  }
  const instance = createInstance()
  const overrides = (language: Language) => {
    const value = options.resources?.[language]?.ui
    return value && typeof value === 'object' ? value : {}
  }
  void instance.init({
    lng: language,
    fallbackLng: 'en',
    supportedLngs: [...supportedLanguages],
    load: 'languageOnly',
    initAsync: false,
    keySeparator: false,
    nsSeparator: false,
    defaultNS: 'app',
    fallbackNS: 'ui',
    interpolation: { escapeValue: false },
    returnNull: false,
    resources: {
      id: { app: {}, ...options.resources?.id, ui: { ...ui, ...overrides('id') } },
      en: { app: {}, ...options.resources?.en, ui: { ...en, ...overrides('en') } },
    },
  })
  const sync = () => {
    if (typeof document !== 'undefined')
      document.documentElement.lang = instance.resolvedLanguage ?? 'id'
    try {
      localStorage.setItem(storageKey, instance.resolvedLanguage ?? 'id')
    } catch {
      /* Current language remains available in memory. */
    }
  }
  instance.on('languageChanged', sync)
  sync()
  return instance
}
export const defaultI18n = /* @__PURE__ */ createTemplateI18n()
