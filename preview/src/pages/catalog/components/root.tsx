import { ModuleArtwork } from '../../../components/module.artwork'
import { Suspense, lazy } from 'react'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { PageHeader } from '@templates/ui/page.header'
import { SearchInput } from '@templates/ui/search.input'
import { Combobox } from '@templates/ui/combobox'
import { Card, CardBody, CardHeader } from '@templates/ui/card'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { CodeBlock } from '@templates/ui/code.block'
import { EmptyState } from '@templates/ui/empty.state'
import { components } from '../../../catalog/components'
import { CopyButton } from '../../../components/copy.button'
import { AdvancedExample } from './advanced.examples'
import { ComponentGuide } from './guide'

const Collections = lazy(() => import('./collections'))
const codec = createZodSearchCodec(
  z.object({ component: z.string().catch('overview'), componentSearch: z.string().catch('') }),
  { component: 'overview', componentSearch: '' },
)
export default function ComponentsPage() {
  const { t } = useI18n(),
    url = useUrlState(codec)
  const selected = components.find((item) => item.id === url.state.component)
  const list = components.filter((item) =>
    (item.id + ' ' + item.label)
      .toLowerCase()
      .replace(/[.\s]/g, '')
      .includes(url.state.componentSearch.toLowerCase().replace(/[.\s]/g, '')),
  )
  return (
    <section className="w-full min-w-0 space-y-aria-lg p-aria-md lg:p-aria-xl">
      <PageHeader
        titleAs="h1"
        eyebrow={t('Aria UI library')}
        title={t('Components, with room to compose.')}
        description={t(
          'Browse the public UI folders, read the usage guide, and try working examples.',
        )}
        actions={
          <Badge variant="primary">{t('{{count}} components', { count: components.length })}</Badge>
        }
        artwork={<ModuleArtwork subject={'Components'} />}
      />
      <div className="grid items-start gap-aria-lg lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden space-y-aria-md rounded-aria-lg border border-outline bg-surface p-aria-md lg:sticky lg:top-aria-md lg:block">
          <SearchInput
            value={url.state.componentSearch}
            onChange={(componentSearch) => url.setState({ componentSearch }, { resetPage: false })}
            placeholder={t('Find a component…')}
          />
          <nav
            aria-label={t('UI components')}
            className="grid max-h-[65vh] grid-cols-1 gap-aria-xs overflow-y-auto"
          >
            <button
              type="button"
              onClick={() =>
                url.setState({ component: 'overview' }, { replace: false, resetPage: false })
              }
              className={
                'col-span-full cursor-pointer rounded-aria-sm px-aria-sm py-aria-xs text-start type-aria-label ' +
                (url.state.component === 'overview'
                  ? 'bg-primary-soft text-primary'
                  : 'hover:bg-surface-hover')
              }
            >
              {t('Interactive collections')}
            </button>
            {list.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-current={selected?.id === item.id ? 'page' : undefined}
                onClick={() =>
                  url.setState({ component: item.id }, { replace: false, resetPage: false })
                }
                className={
                  'cursor-pointer rounded-aria-sm px-aria-sm py-aria-xs text-start type-aria-navigation wrap-anywhere ' +
                  (selected?.id === item.id
                    ? 'bg-primary-soft text-primary'
                    : 'text-content-secondary hover:bg-surface-hover')
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
          {!list.length && <Text variant="caption">{t('No matching components.')}</Text>}
        </aside>
        <div className="min-w-0 space-y-aria-lg">
          <div className="lg:hidden">
            <Combobox
              value={url.state.component}
              options={[
                { value: 'overview', label: t('Interactive collections') },
                ...components.map((item) => ({ value: item.id, label: item.label })),
              ]}
              onChange={(component) =>
                url.setState({ component }, { replace: false, resetPage: false })
              }
              aria-label={t('Choose a component')}
            />
          </div>
          {url.state.component === 'overview' ? (
            <Suspense fallback={<Text>{t('Loading examples…')}</Text>}>
              <Collections />
            </Suspense>
          ) : selected ? (
            <>
              <Card>
                <CardHeader
                  title={selected.label}
                  titleAs="h2"
                  description={'templates/ui/' + selected.id}
                />
                <CardBody className="space-y-aria-md">
                  <div className="flex flex-wrap items-center justify-between gap-aria-sm">
                    <Text variant="caption">
                      {t(
                        'Import from the public module. The full component registry belongs only to this demo.',
                      )}
                    </Text>
                    <CopyButton value={'@templates/ui/' + selected.id} label="Copy module path" />
                  </div>
                  <CodeBlock className="rounded-aria-md bg-surface-subtle p-aria-md">
                    {selected.publicApi}
                  </CodeBlock>
                </CardBody>
              </Card>
              <AdvancedExample component={selected.id} />
              <ComponentGuide component={selected.id} />
            </>
          ) : (
            <EmptyState
              title={t('Component not found')}
              description={t('Choose a component from the sidebar.')}
            />
          )}
        </div>
      </div>
    </section>
  )
}
