import { Check, Languages } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button/button'
import { Popover } from '../ui/popover/popover'
import { useI18n } from './use-i18n'
import { supportedLanguages } from './create-i18n'

export function LanguageSwitcher() {
  const { t, language, setLanguage } = useI18n()
  const [open, setOpen] = useState(false)
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="language-menu"
      align="end"
      trigger={
        <Button
          variant="text"
          color="secondary"
          size="sm"
          className="language-switcher"
          aria-label={t('Choose language')}
          title={t('Language')}
        >
          <Languages size={15} />
          <span>{language.toUpperCase()}</span>
        </Button>
      }
    >
      <strong>{t('Language')}</strong>
      {supportedLanguages.map((value) => (
        <button
          type="button"
          key={value}
          aria-pressed={language === value}
          onClick={() => {
            void setLanguage(value)
            setOpen(false)
          }}
        >
          <span>{value === 'id' ? 'Bahasa Indonesia' : 'English'}</span>
          <small>{value.toUpperCase()}</small>
          {language === value && <Check size={14} />}
        </button>
      ))}
    </Popover>
  )
}
