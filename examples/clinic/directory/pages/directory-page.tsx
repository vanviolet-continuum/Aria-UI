import { useI18n } from '../../../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Download, Plus } from 'lucide-react'
import { directories } from '../../data/directories'
import { useWorkspace } from '../../workspace/workspace-context'
import { downloadCsv } from '../../lib/utils'
import type { DirectoryRecord } from '../../types'
import {
  Button,
  ConfirmDialog,
  DataTable,
  SearchInput,
  Combobox,
  EmptyState,
  toast,
} from '@/template/ui'
import { RecordDrawer } from '../components/record-drawer'
import { DirectoryStats } from '../components/directory-stats'
import { directoryColumns } from '../components/directory-columns'

export function DirectoryPage({ page }: { page: string }) {
  const { t: tr, text: localize } = useI18n()

  const config = directories[page]
  const { records, saveRecords } = useWorkspace()
  const data = records[page] ?? config.records
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [editing, setEditing] = useState<DirectoryRecord | null>(null)
  const [deleting, setDeleting] = useState<DirectoryRecord | null>(null)
  const close = () => {
    setEditing(null)
    setParams({}, { replace: true })
  }
  const filtered = useMemo(
    () =>
      data.filter(
        (record) =>
          `${record.name} ${record.detail} ${record.id}`
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (!status || record.status === status),
      ),
    [data, query, status],
  )

  return (
    <div className="standard-page page-enter">
      <div className="page-intro">
        <span className="eyebrow">{tr('Your practice, organized')}</span>
        <h2>{localize(config.title)}</h2>
        <p>{localize(config.description)}</p>
      </div>
      <DirectoryStats records={data} primaryStatus={config.statuses[0]} />
      <section className="directory-panel">
        <div className="table-toolbar">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder={tr('Search {{value0}}…', { value0: localize(config.singular) })}
          />
          <div className="toolbar-actions">
            <Combobox
              aria-label={tr('Filter by status')}
              value={status}
              placeholder={tr('All statuses')}
              options={config.statuses.map((value) => ({ value, label: value }))}
              onChange={(nextValue) => setStatus(nextValue)}
            />
            <Button
              size="sm"
              onClick={() => {
                downloadCsv(
                  `zendenta-${page}.csv`,
                  ['ID', config.nameLabel, config.detailLabel, config.valueLabel, 'Status'],
                  filtered.map((record) => [
                    record.id,
                    record.name,
                    record.detail,
                    record.value,
                    record.status,
                  ]),
                )
                toast.success(tr('Records exported'))
              }}
            >
              <Download size={15} />
              <span className="hide-mobile">{tr('Export')}</span>
            </Button>
            <Button variant="primary" size="sm" onClick={() => setParams({ new: '1' })}>
              <Plus size={15} />
              {tr('Add') + ' '}
              {config.singular}
            </Button>
          </div>
        </div>
        <DataTable
          data={filtered}
          columns={directoryColumns(config, setEditing, setDeleting)}
          getRowId={(record) => record.id}
          defaultSort={{ column: 'name', direction: 'asc' }}
          resetKey={query + status}
          aria-label={localize(config.singular + ' records')}
          emptyState={
            query || status ? (
              <SearchEmptyState
                onReset={() => {
                  setQuery('')
                  setStatus('')
                }}
              />
            ) : (
              <EmptyState
                title={tr('No {{value0}} records yet', { value0: localize(config.singular) })}
                description={tr('Your workspace has room for something new.')}
                action={
                  <Button variant="contained" onClick={() => setParams({ new: '1' })}>
                    {tr('Add') + ' '}
                    {config.singular}
                  </Button>
                }
              />
            )
          }
        />
      </section>
      <RecordDrawer
        open={params.get('new') === '1' || !!editing}
        record={editing}
        config={config}
        onOpenChange={(value) => {
          if (!value) close()
        }}
        onSave={async (draft) => {
          const entry = {
            ...draft,
            id:
              editing?.id ??
              `${page.slice(0, 2).toUpperCase()}${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
          }
          if (
            !(await saveRecords(
              page,
              editing
                ? data.map((record) => (record.id === editing.id ? entry : record))
                : [entry, ...data],
            ))
          )
            return
          toast.success(
            tr('{{value0}} {{value1}}', {
              value0: localize(config.singular.charAt(0).toUpperCase() + config.singular.slice(1)),
              value1: localize(editing ? 'updated' : 'added'),
            }),
          )
          close()
        }}
      />
      <ConfirmDialog
        open={!!deleting}
        onOpenChange={(value) => {
          if (!value) setDeleting(null)
        }}
        title={tr('Delete this record?')}
        description={tr('{{value0}} will be removed from your workspace.', {
          value0: localize(deleting?.name ?? 'This record'),
        })}
        onConfirm={async () => {
          if (!deleting) return false
          if (
            !(await saveRecords(
              page,
              data.filter((record) => record.id !== deleting.id),
            ))
          )
            return false
          toast.success(tr('Record deleted'))
          setDeleting(null)
        }}
      />
    </div>
  )
}
