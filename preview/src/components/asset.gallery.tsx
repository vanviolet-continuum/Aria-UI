import { ModuleArtwork } from './module.artwork'
import { useMemo, useRef, useState, type ComponentType } from 'react'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { Download, RotateCcw, Search } from '@templates/icons'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { PageHeader } from '@templates/ui/page.header'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { Button } from '@templates/ui/button'
import { SearchInput } from '@templates/ui/search.input'
import { Combobox } from '@templates/ui/combobox'
import { Slider } from '@templates/ui/slider'
import { TablePagination } from '@templates/ui/data.table/table.pagination'
import { EmptyState } from '@templates/ui/empty.state'
import { Dialog } from '@templates/ui/dialog'
import { CodeBlock } from '@templates/ui/code.block'
import { toast } from '@templates/ui/toast'
import { SearchIllustration } from '@templates/ui/illustrations/states/search.illustration'
import { CopyButton } from './copy.button'

export interface GalleryAsset {
  name: string
  category: string
  path: string
  Component: ComponentType<{ size?: number; title?: string }>
}

export const categoryLabels: Record<string, string> = {
  commerce: 'Commerce',
  communication: 'Communication',
  development: 'Development',
  files: 'Files',
  interface: 'Interface',
  layout: 'Layout',
  media: 'Media',
  navigation: 'Navigation',
  security: 'Security',
  nature: 'Nature',
  travel: 'Travel',
  food: 'Food & drink',
  health: 'Health & wellness',
  technology: 'Technology',
  finance: 'Finance',
  business: 'Business',
  creative: 'Creative & arts',
  science: 'Science',
  lifestyle: 'Everyday life',
  people: 'People',
  education: 'Education',
  objects: 'Objects',
  decoration: 'Decoration',
  states: 'States & feedback',
  workspace: 'Workspace',
  infrastructure: 'Infrastructure',
}

function downloadSvg(element: SVGSVGElement, name: string) {
  // Resolve theme variables before exporting so the downloaded SVG is standalone.
  const clone = element.cloneNode(true) as SVGSVGElement
  const originals = [element, ...element.querySelectorAll('*')]
  const copies = [clone, ...clone.querySelectorAll('*')]
  const properties = ['fill', 'stroke', 'color', 'stop-color', 'font-family', 'font-size']
  originals.forEach((original, index) => {
    const computed = getComputedStyle(original)
    properties.forEach((property) =>
      (copies[index] as SVGElement).style.setProperty(
        property,
        computed.getPropertyValue(property),
      ),
    )
  })
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.removeAttribute('aria-hidden')
  const url = URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' }),
  )
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${name}.svg`
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function AssetGallery({
  assets,
  kind,
}: {
  assets: GalleryAsset[]
  kind: 'icons' | 'illustrations'
}) {
  const { t, locale } = useI18n()
  const isIcon = kind === 'icons'
  const categories = useMemo(
    () => [...new Set(assets.map((asset) => asset.category))].sort(),
    [assets],
  )
  const codec = useMemo(
    () =>
      createZodSearchCodec(
        z.object({
          q: z.string().catch(''),
          category: z
            .string()
            .refine((value) => value === 'all' || categories.includes(value))
            .catch('all'),
          page: z.coerce.number().int().min(1).catch(1),
          pageSize: z.coerce
            .number()
            .refine((value) => [24, 36, 48, 72].includes(value))
            .catch(24),
        }),
        { q: '', category: 'all', page: 1, pageSize: isIcon ? 36 : 24 },
      ),
    [categories, isIcon],
  )
  const { state, setState, reset } = useUrlState(codec)
  const [selected, setSelected] = useState<GalleryAsset | null>(null)
  const [size, setSize] = useState(isIcon ? 24 : 140)
  const [filterOpen, setFilterOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const search = state.q.trim().toLocaleLowerCase(locale)
  const filtered = assets.filter((asset) => {
    const haystack =
      `${asset.name} ${asset.name.replace(/([a-z])([A-Z])/g, '$1 $2')} ${asset.category} ${t(categoryLabels[asset.category])}`.toLocaleLowerCase(
        locale,
      )
    return (
      (state.category === 'all' || state.category === asset.category) && haystack.includes(search)
    )
  })
  const page = Math.min(state.page, Math.max(1, Math.ceil(filtered.length / state.pageSize)))
  const visible = filtered.slice((page - 1) * state.pageSize, page * state.pageSize)
  const importCode = selected
    ? `import { ${selected.name} } from '${selected.path}'\n\n<${selected.name} size={${size}} />`
    : ''

  return (
    <Box as="section" className="w-full min-w-0 p-aria-md lg:p-aria-xl">
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          eyebrow={t('The asset library')}
          title={t(isIcon ? 'Small details. Big personality.' : 'A little more expression.')}
          description={t(
            isIcon
              ? 'Consistent SVG icons for every interaction. Pick one to copy its import or download.'
              : 'Theme-aware illustrations for the moments that deserve a little more.',
          )}
          actions={
            <Badge variant="primary">
              {assets.length.toLocaleString(locale)} {t(isIcon ? 'icons' : 'illustrations')}
            </Badge>
          }
          artwork={<ModuleArtwork subject={isIcon ? 'Icons' : 'Illustrations'} />}
        />
        <Box
          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-aria-sm [&>*]:min-w-0 [&_.search-input]:col-span-full [&_.search-input]:w-full [&_.search-input]:max-w-none md:grid-cols-[minmax(0,1fr)_minmax(180px,240px)_auto] md:[&_.search-input]:col-span-1"
          variant="outlined"
          padding="md"
        >
          <SearchInput
            label={t('Search assets')}
            placeholder={t(isIcon ? 'Search icons…' : 'Search illustrations…')}
            value={state.q}
            onChange={(q) => setState({ q })}
          />
          <Combobox
            aria-label={t('Category')}
            value={state.category}
            onOpenChange={setFilterOpen}
            onChange={(category) => setState({ category }, { replace: false })}
            options={[
              { value: 'all', label: t('All categories') },
              ...categories.map((category) => ({
                value: category,
                label: `${t(categoryLabels[category])} (${assets.filter((asset) => asset.category === category).length})`,
              })),
            ]}
          />
          <Button
            variant="text"
            color="secondary"
            onClick={reset}
            disabled={!state.q && state.category === 'all' && page === 1}
          >
            <RotateCcw size={14} />
            {t('Reset')}
          </Button>
        </Box>
        <Inline justify="between">
          <Text variant="description" role="status">
            {t('{{count}} assets found', { count: filtered.length })}
          </Text>
          <Text variant="caption">{t('Select an asset to inspect')}</Text>
        </Inline>
        {visible.length ? (
          <div
            className={`grid gap-aria-sm ${isIcon ? 'grid-cols-[repeat(auto-fill,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(125px,1fr))]' : 'grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(185px,1fr))] [&_.asset-artwork]:h-30'}`}
          >
            {visible.map((asset) => (
              <button
                type="button"
                className="flex min-w-0 cursor-pointer flex-col items-center justify-center gap-aria-xs rounded-aria-lg border border-outline bg-surface px-aria-sm py-aria-md text-content transition-colors hover:border-primary hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                key={asset.name}
                onClick={() => setSelected(asset)}
                aria-label={`${t('Inspect')} ${asset.name}`}
              >
                <span className="asset-artwork grid h-17 w-full place-items-center [&>svg]:max-h-full [&>svg]:max-w-full">
                  <asset.Component size={isIcon ? 25 : 145} />
                </span>
                <Text as="span" variant="label" className="max-w-full text-center wrap-anywhere">
                  {asset.name.replace(/Illustration$/, '')}
                </Text>
                {!isIcon && (
                  <Text as="span" variant="caption">
                    {t(categoryLabels[asset.category])}
                  </Text>
                )}
              </button>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<SearchIllustration size={180} />}
            title={t('No matching assets')}
            description={t('Try another name or explore a different category.')}
            action={
              <Button onClick={reset}>
                <Search size={15} />
                {t('Clear filters')}
              </Button>
            }
          />
        )}
        <TablePagination
          page={page}
          pageSize={state.pageSize}
          totalItems={filtered.length}
          onPageChange={(page) => setState({ page }, { replace: false })}
          onPageSizeChange={(pageSize) => setState({ pageSize }, { replace: false })}
          pageSizeOptions={[24, 36, 48, 72]}
          itemLabel={t('assets')}
          disabled={filterOpen}
        />
      </Stack>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
        title={selected?.name ?? t('Asset details')}
        description={selected ? t(categoryLabels[selected.category]) : undefined}
        size="md"
        footer={
          <>
            <CopyButton value={importCode} />
            <Button
              variant="contained"
              onClick={() => {
                const svg = previewRef.current?.querySelector('svg')
                if (!svg || !selected) return
                try {
                  downloadSvg(svg, selected.name)
                } catch {
                  toast.error(t('Download failed.'), {
                    description: t('Please try again or copy the SVG from the code panel.'),
                  })
                }
              }}
            >
              <Download size={15} />
              {t('Download SVG')}
            </Button>
          </>
        }
      >
        {selected && (
          <Stack gap="lg">
            <div
              className="grid h-60 place-items-center rounded-aria-lg bg-surface-subtle [&>svg]:max-h-full [&>svg]:max-w-full"
              ref={previewRef}
            >
              <selected.Component size={size} title={selected.name} />
            </div>
            <Slider
              label={t('Preview size')}
              value={size}
              onValueChange={setSize}
              min={isIcon ? 16 : 80}
              max={isIcon ? 80 : 260}
              step={isIcon ? 4 : 10}
              showValue
              formatValue={(value) => `${value} px`}
            />
            <CodeBlock className="rounded-aria-md bg-surface-subtle p-aria-md text-aria-code wrap-anywhere">
              {importCode}
            </CodeBlock>
          </Stack>
        )}
      </Dialog>
    </Box>
  )
}
