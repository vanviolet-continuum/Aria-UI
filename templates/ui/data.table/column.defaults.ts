import type { ColumnDef } from './types'

/** Explicit properties remain the escape hatch for a deliberately different layout. */
export function resolveColumnDefaults<T>(columns: ColumnDef<T>[]): ColumnDef<T>[] {
  return columns.map((column) => {
    const actions =
      column.kind === 'actions' ||
      !!column.actions ||
      (column.id === 'actions' && column.kind !== 'data')
    return actions
      ? {
          ...column,
          kind: 'actions' as const,
          width: column.width ?? 72,
          align: column.align ?? 'center',
          defaultPin: column.defaultPin ?? 'right',
          pinable: column.pinable ?? false,
          enableHiding: column.enableHiding ?? false,
        }
      : column
  })
}

export function createActionsColumn<T>(
  actions: NonNullable<ColumnDef<T>['actions']>,
  options: Omit<Partial<ColumnDef<T>>, 'actions' | 'cell'> = {},
): ColumnDef<T> {
  return resolveColumnDefaults<T>([
    { id: 'actions', header: 'Actions', kind: 'actions', ...options, actions },
  ])[0]
}
