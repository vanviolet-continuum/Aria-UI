import { Box } from '@templates/ui/box'
import { PageHeader } from '@templates/ui/page.header'
import { useI18n } from '@templates/i18n'
import { appConfig } from '@/config/app.config'

export function HomePage() {
  const { t } = useI18n()

  return (
    <Box as="section" width="100%" minWidth={0} padding={{ base: 'md', md: 'lg' }}>
      <PageHeader
        titleAs="h1"
        title={t('Home')}
        description={t('Welcome to {{name}}.', { name: appConfig.name })}
      />
    </Box>
  )
}
