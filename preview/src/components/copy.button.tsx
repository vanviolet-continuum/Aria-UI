import { useI18n } from '@templates/i18n'
import { Button } from '@templates/ui/button'
import { Copy } from '@templates/icons/interface/copy.icon'
import { toast } from '@templates/ui/toast'

export function CopyButton({ value, label = 'Copy import' }: { value: string; label?: string }) {
  const { t } = useI18n()
  return (
    <Button
      size="sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          toast.success(t('Copied to clipboard'), {
            description: t('You can paste it into your project.'),
          })
        } catch {
          toast.error(t('Copy failed.'), { description: t('Select and copy the code manually.') })
        }
      }}
    >
      <Copy size={14} />
      {t(label)}
    </Button>
  )
}
