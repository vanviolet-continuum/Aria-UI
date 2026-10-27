import { useI18n } from '../i18n/use.i18n'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme.provider'
import { IconButton } from '../ui/icon.button/icon.button'

export function ThemeToggle() {
  const { text: localize } = useI18n()

  const { resolvedTheme, setTheme } = useTheme()
  return (
    <IconButton
      label={localize(resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')}
      variant="text"
      color="secondary"
      size="sm"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={17} />}
    </IconButton>
  )
}
