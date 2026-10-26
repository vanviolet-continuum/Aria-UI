import { useCallback, useContext } from 'react'
import { I18nContext, useTranslation } from 'react-i18next'
import type { TOptions } from 'i18next'
import { defaultI18n, localeOf, type Language } from './create-i18n'

export function useI18n() {
  const context = useContext(I18nContext)
  const { t: translate, i18n } = useTranslation(['app', 'ui'], {
    i18n: context?.i18n ?? defaultI18n,
  })
  const t = useCallback(
    (key: string, options?: TOptions) => String(translate(key, { defaultValue: key, ...options })),
    [translate],
  )
  const text = useCallback(
    <T>(value: T): T => (typeof value === 'string' ? (t(value) as T) : value),
    [t],
  )
  return {
    t,
    text,
    i18n,
    language: (i18n.resolvedLanguage ?? 'id') as Language,
    locale: localeOf(i18n.resolvedLanguage ?? 'id'),
    setLanguage: (language: Language) => i18n.changeLanguage(language),
  }
}
