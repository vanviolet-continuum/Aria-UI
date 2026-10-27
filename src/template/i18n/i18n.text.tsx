import { useI18n } from './use.i18n'

/** Translated content without an extra DOM element, useful in static column definitions. */
export function I18nText({ children }: { children: string }) {
  const { t } = useI18n()
  return <>{t(children)}</>
}
