import { useMemo, useState, type ReactNode } from 'react'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec, searchStringArray } from '@templates/integrations/zod'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { PageHeader } from '@templates/ui/page.header'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import {
  DataTable,
  TableToolbar,
  createActionsColumn,
  type ColumnDef,
} from '@templates/ui/data.table'
import {
  filterTableData,
  type TableFilterDef,
  type TableFilterValue,
} from '@templates/ui/table.filter'
import { Drawer, useDrawerPresence } from '@templates/ui/drawer'
import { ConfirmDialog } from '@templates/ui/confirm.dialog'
import { EmptyState } from '@templates/ui/empty.state'
import { Alert } from '@templates/ui/alert'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Tabs } from '@templates/ui/tabs'
import { Eye, Plus, Trash } from '@templates/icons'
import { Pencil } from 'lucide-react'
import { toast } from '@templates/ui/toast'
import type { ActionMenuItem } from '@templates/ui/action.menu'
import { RecordEditor } from './record.editor'
import type { RecordField } from './record.fields'
import type { BaseRecord } from '../data/operations/model'
import { ModuleArtwork } from './module.artwork'

export type RecordFilterKey = 'status' | 'client' | 'project' | 'owner' | 'category' | 'priority'
type View = 'table' | 'board' | 'calendar' | 'grid'
export interface RecordActions<T> {
  view: (record: T) => void
  edit: (record: T) => void
  create: (patch?: { day?: string; time?: string; stage?: string }) => void
  menu: (record: T) => ActionMenuItem[]
}
export type RecordFilter<T> = Extract<TableFilterDef<T>, { type: 'choice' }> & {
  id: RecordFilterKey
}
function codec(view: View) {
  return createZodSearchCodec(
    z.object({
      q: z.string().catch(''),
      page: z.coerce.number().int().min(1).catch(1),
      pageSize: z.coerce.number().int().min(1).max(100).catch(8),
      sort: z.string().catch('updatedAt'),
      order: z.enum(['asc', 'desc']).catch('desc'),
      panel: z.enum(['', 'add', 'edit', 'detail']).catch(''),
      record: z.string().catch(''),
      status: searchStringArray,
      client: searchStringArray,
      project: searchStringArray,
      owner: searchStringArray,
      category: searchStringArray,
      priority: searchStringArray,
      view: z.enum(['table', 'board', 'calendar', 'grid']).catch(view),
      day: z.iso.date().or(z.literal('')).catch(''),
      time: z.string().catch(''),
      stage: z.string().catch(''),
    }),
    {
      q: '',
      page: 1,
      pageSize: 8,
      sort: 'updatedAt',
      order: 'desc',
      panel: '',
      record: '',
      status: [],
      client: [],
      project: [],
      owner: [],
      category: [],
      priority: [],
      view,
      day: '',
      time: '',
      stage: '',
    },
  )
}
export interface RecordPageProps<T extends BaseRecord, V extends object> {
  title: string
  singular: string
  description: string
  eyebrow?: string
  artwork?: ReactNode
  onCreate?: () => void
  newLabel: string
  records: T[]
  getTitle: (record: T) => string
  getSubtitle?: (record: T) => string
  searchText?: (record: T) => string
  columns: ColumnDef<T>[]
  filters?: RecordFilter<T>[]
  sorters?: Record<string, (record: T) => string | number>
  schema: z.ZodType<V, V>
  initialValues: (record?: T, context?: { day: string; time: string; stage: string }) => V
  fields: RecordField<V>[]
  onSave: (values: V, id?: string) => void
  onDelete: (record: T) => void
  renderDetail: (record: T) => ReactNode
  extraActions?: (record: T) => ActionMenuItem[]
  canDelete?: (record: T) => boolean
  deleteDisabledReason?: string
  deleteDescription?: string
  metrics?: ReactNode
  persistent?: boolean
  defaultView?: View
  customView?: {
    value: 'board' | 'calendar' | 'grid'
    label: string
    render: (rows: T[], actions: RecordActions<T>) => ReactNode
  }
}
export function RecordPage<T extends BaseRecord, V extends object>(props: RecordPageProps<T, V>) {
  const { t, locale } = useI18n()
  const searchCodec = useMemo(() => codec(props.defaultView ?? 'table'), [props.defaultView])
  const url = useUrlState(searchCodec)
  const [deleting, setDeleting] = useState<T | null>(null)
  const selected = props.records.find((record) => record.id === url.state.record)
  const detail = useDrawerPresence(url.state.panel === 'detail' ? selected : undefined)
  const editorInput = useMemo(
    () =>
      url.state.panel === 'add'
        ? { key: 'new', record: undefined }
        : url.state.panel === 'edit' && selected
          ? { key: selected.id, record: selected }
          : undefined,
    [url.state.panel, selected],
  )
  const editor = useDrawerPresence(editorInput)
  const close = () => url.setState({ panel: '', record: '' }, { resetPage: false })
  const open = (panel: 'detail' | 'edit', record: T) =>
    url.setState({ panel, record: record.id }, { resetPage: false, replace: false })
  const actions: RecordActions<T> = {
    view: (record) => open('detail', record),
    edit: (record) => open('edit', record),
    create: (patch) =>
      url.setState(
        {
          panel: 'add',
          record: '',
          day: patch?.day ?? '',
          time: patch?.time ?? '',
          stage: patch?.stage ?? '',
        },
        { resetPage: false, replace: false },
      ),
    menu: (record) => [
      {
        id: 'view',
        label: t('View details'),
        icon: <Eye size={16} />,
        onSelect: () => open('detail', record),
      },
      {
        id: 'edit',
        label: t('Edit'),
        icon: <Pencil size={16} />,
        onSelect: () => open('edit', record),
      },
      ...(props.extraActions?.(record) ?? []),
      {
        id: 'delete',
        label: t('Delete'),
        icon: <Trash size={16} />,
        separator: true,
        destructive: true,
        disabled: props.canDelete ? !props.canDelete(record) : false,
        description:
          props.canDelete && !props.canDelete(record)
            ? t(props.deleteDisabledReason ?? 'Remove linked records first.')
            : undefined,
        onSelect: () => setDeleting(record),
      },
    ],
  }
  const filters = props.filters ?? []
  const filterValue: TableFilterValue = Object.fromEntries(
    filters.map((filter) => [filter.id, url.state[filter.id]]),
  )
  const changeFilters = (values: TableFilterValue) => {
    const next: Partial<Record<RecordFilterKey, string[]>> = {}
    for (const filter of filters)
      next[filter.id] = Array.isArray(values[filter.id]) ? (values[filter.id] as string[]) : []
    url.setState(next)
  }
  const query = url.state.q.trim().toLocaleLowerCase(locale)
  const sorter =
    props.sorters?.[url.state.sort] ??
    (url.state.sort === 'name' ? props.getTitle : (record: T) => record.updatedAt)
  const filtered = filterTableData(props.records, filters, filterValue)
    .filter((record) =>
      (props.searchText?.(record) ?? props.getTitle(record))
        .toLocaleLowerCase(locale)
        .includes(query),
    )
    .sort((a, b) => {
      const left = sorter(a),
        right = sorter(b)
      const result =
        typeof left === 'number' && typeof right === 'number'
          ? left - right
          : String(left).localeCompare(String(right), locale)
      return result * (url.state.order === 'asc' ? 1 : -1)
    })
  const page = Math.min(
    url.state.page,
    Math.max(1, Math.ceil(filtered.length / url.state.pageSize)),
  )
  const columns: ColumnDef<T>[] = [
    {
      id: 'name',
      header: t(props.singular),
      width: 280,
      sortable: true,
      enableHiding: false,
      defaultPin: 'left',
      pinable: false,
      cell: (record) => (
        <Stack gap="none">
          <Text
            as="button"
            type="button"
            variant="label"
            className="cursor-pointer border-0 bg-transparent p-0 text-start text-content hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            onClick={() => actions.view(record)}
          >
            <span>{props.getTitle(record)}</span>
          </Text>
          {props.getSubtitle && (
            <Text variant="caption">
              <span>{props.getSubtitle(record)}</span>
            </Text>
          )}
        </Stack>
      ),
    },
    ...props.columns,
    createActionsColumn<T>(actions.menu, {
      header: t('Actions'),
      actionLabel: (record) => t('Actions') + ': ' + props.getTitle(record),
    }),
  ]
  const search = {
    value: url.state.q,
    onChange: (q: string) => url.setState({ q }),
    label: t('Search records'),
    placeholder: t('Search by name or keyword…'),
  }
  const viewControls = props.customView ? (
    <Tabs
      label={t('View')}
      value={url.state.view}
      onChange={(value) => url.setState({ view: value as View }, { resetPage: false })}
      items={[
        { value: props.customView.value, label: t(props.customView.label) },
        { value: 'table', label: t('Table') },
      ]}
    />
  ) : undefined
  const custom = props.customView && url.state.view === props.customView.value
  return (
    <Box
      as="section"
      className="w-full min-w-0 p-aria-md lg:p-aria-xl [&>.aria-stack>.aria-page-header]:mb-0 [&_.ui-table-pagination]:px-aria-md"
    >
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          eyebrow={t(props.eyebrow ?? 'Workspace')}
          title={t(props.title)}
          description={t(props.description)}
          artwork={props.artwork ?? <ModuleArtwork subject={props.title} />}
        />
        {props.metrics}
        {props.persistent === false && (
          <Alert
            severity="warning"
            description={t('Browser storage is unavailable. Changes last for this session.')}
          />
        )}
        <Card className="overflow-clip shadow-aria-sm [&>.aria-card-header]:p-aria-lg [&_.ui-table-container]:rounded-none [&_.ui-table-container]:border-0">
          <CardHeader
            title={t('All {{entities}}', { entities: t(props.title).toLocaleLowerCase(locale) })}
            titleAs="h2"
            description={t('{{count}} records in this workspace', { count: props.records.length })}
            actions={
              <Button
                variant="contained"
                onClick={() => (props.onCreate ? props.onCreate() : actions.create())}
              >
                <Plus size={16} />
                {t(props.newLabel)}
              </Button>
            }
          />
          <CardBody padding={0}>
            {custom ? (
              <>
                <TableToolbar
                  search={search}
                  filters={filters}
                  filterValue={filterValue}
                  onFilterChange={changeFilters}
                  actions={viewControls}
                />
                <div className="min-w-0 p-aria-md lg:p-aria-lg">
                  {props.customView!.render(filtered, actions)}
                </div>
              </>
            ) : (
              <DataTable
                data={filtered.slice((page - 1) * url.state.pageSize, page * url.state.pageSize)}
                columns={columns}
                getRowId={(record) => record.id}
                pinable
                itemLabel={t(props.title).toLocaleLowerCase(locale)}
                filters={filters}
                filterValue={filterValue}
                onFilterChange={changeFilters}
                search={search}
                toolbarActions={viewControls}
                server={{
                  page,
                  pageSize: url.state.pageSize,
                  totalItems: filtered.length,
                  sort: { column: url.state.sort, direction: url.state.order },
                  onSortChange: (sort) =>
                    url.setState({ sort: sort.column, order: sort.direction }),
                  onPageChange: (next) => url.setState({ page: next }),
                  onPageSizeChange: (pageSize) => url.setState({ pageSize }),
                }}
                emptyState={
                  <EmptyState
                    title={t('No matching records')}
                    description={t('Try another keyword or adjust your filters.')}
                  />
                }
              />
            )}
          </CardBody>
        </Card>
        <Text variant="caption">
          {t('Demo data is stored in this browser. No external service is contacted.')}
        </Text>
      </Stack>
      {editor.value && (
        <RecordEditor
          key={editor.value.key}
          open={editor.open}
          onAfterClose={editor.onAfterClose}
          onClose={close}
          title={
            editor.value.record
              ? t('Edit {{entity}}', { entity: t(props.singular).toLocaleLowerCase(locale) })
              : t(props.newLabel)
          }
          successTitle={t('{{entity}} saved', { entity: t(props.singular) })}
          initial={props.initialValues(editor.value.record, {
            day: url.state.day,
            time: url.state.time,
            stage: url.state.stage,
          })}
          fields={props.fields}
          schema={props.schema}
          onSave={(values) => props.onSave(values, editor.value?.record?.id)}
        />
      )}
      {detail.value && (
        <Drawer
          open={detail.open}
          onAfterClose={detail.onAfterClose}
          restoreFocus={!editor.open}
          onOpenChange={(next) => {
            if (!next) close()
          }}
          title={t('{{entity}} details', { entity: t(props.singular) })}
          description={t(props.title)}
          size="lg"
          footer={
            <Button variant="contained" onClick={() => actions.edit(detail.value!)}>
              <Pencil size={16} />
              {t('Edit')}
            </Button>
          }
        >
          {props.renderDetail(detail.value)}
        </Drawer>
      )}
      {['edit', 'detail'].includes(url.state.panel) &&
        !selected &&
        !editor.value &&
        !detail.value && (
          <Alert
            severity="warning"
            title={t('Record not found')}
            description={t('This record may have been removed.')}
            actions={<Button onClick={close}>{t('Close')}</Button>}
          />
        )}
      <ConfirmDialog
        open={!!deleting}
        onOpenChange={(next) => {
          if (!next) setDeleting(null)
        }}
        title={
          deleting
            ? t('Delete {{name}}?', { name: props.getTitle(deleting) })
            : t('Delete this record?')
        }
        description={t(
          props.deleteDescription ?? 'This removes the selected record from the demo workspace.',
        )}
        confirmLabel={t('Delete')}
        onConfirm={() => {
          if (!deleting) return
          props.onDelete(deleting)
          if (deleting.id === url.state.record) close()
          setDeleting(null)
          toast.success(t('{{entity}} deleted', { entity: t(props.singular) }), {
            description: t('The record has been removed from your workspace.'),
          })
        }}
      />
    </Box>
  )
}
