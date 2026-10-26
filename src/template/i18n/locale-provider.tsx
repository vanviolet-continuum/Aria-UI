import { I18nextProvider } from 'react-i18next'
import type { i18n } from 'i18next'
import type { ReactNode } from 'react'
import { defaultI18n } from './create-i18n'

export function LocaleProvider({
  children,
  instance = defaultI18n,
}: {
  children: ReactNode
  instance?: i18n
}) {
  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>
}
