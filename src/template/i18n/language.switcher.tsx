import { Languages } from 'lucide-react'
import { Button } from '../ui/button/button'
import { Menu } from '../ui/menu/menu'
import { useI18n } from './use.i18n'
import { supportedLanguages } from './create.i18n'

export function LanguageSwitcher() {
  const { t, language, setLanguage } = useI18n()
  return (
    <Menu
      label={t('Language')}
      selection="single"
      value={language}
      onValueChange={(value) => {
        const next = supportedLanguages.find((item) => item === value)
        if (next) void setLanguage(next)
      }}
      items={supportedLanguages.map((value) => ({
        id: value,
        label: value === 'id' ? 'Bahasa Indonesia' : 'English',
        shortcut: value.toUpperCase(),
      }))}
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
    />
  )
}
