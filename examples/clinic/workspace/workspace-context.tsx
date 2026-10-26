import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react'
import { useLocalStorage } from '@/template/hooks/use-local-storage'
import { receiveDelivery } from '../lib/utils'
import { abortableDelay } from '@/template/lib/async'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { initial, isWorkspace, type WorkspaceData } from './workspace-schema'
import type { DirectoryRecord, Product, StockOrder, WorkspaceSettings } from '../types'

function useWorkspaceState() {
  const [data, setData] = useLocalStorage('zendenta-workspace-v1', initial, isWorkspace)
  const { runTask } = useMutationTask()
  const mutate = useCallback(
    async (label: string, update: (previous: WorkspaceData) => WorkspaceData) => {
      const result = await runTask(label, async () => {
        // Replace this demo delay with an awaited API mutation.
        await abortableDelay(550)
        setData(update)
      })
      return result.success
    },
    [runTask, setData],
  )
  const actions = useMemo(
    () => ({
      addOrder: (order: StockOrder) =>
        mutate('Creating your stock order…', (previous) => ({
          ...previous,
          orders: [order, ...previous.orders],
        })),
      deleteOrder: (id: string) =>
        mutate('Deleting the order…', (previous) => ({
          ...previous,
          orders: previous.orders.filter((order) => order.id !== id),
        })),
      markEmailSent: (id: string) =>
        mutate('Updating email status…', (previous) => ({
          ...previous,
          orders: previous.orders.map((order) =>
            order.id === id ? { ...order, emailSent: true } : order,
          ),
        })),
      receiveOrder: (id: string, quantity: number) =>
        mutate('Receiving your delivery…', (previous) => {
          const order = previous.orders.find((item) => item.id === id)
          if (!order) return previous
          const delivery = receiveDelivery(order, previous.products, quantity)
          return {
            ...previous,
            products: delivery.products,
            orders: previous.orders.map((item) => (item.id === id ? delivery.order : item)),
          }
        }),
      addProduct: (product: Product) =>
        mutate('Adding a new product…', (previous) => ({
          ...previous,
          products: [product, ...previous.products],
        })),
      updateSettings: (settings: WorkspaceSettings) =>
        mutate('Saving workspace settings…', (previous) => ({ ...previous, settings })),
      saveRecords: (page: string, records: DirectoryRecord[]) =>
        mutate('Saving your changes…', (previous) => ({
          ...previous,
          records: { ...previous.records, [page]: records },
        })),
    }),
    [mutate],
  )
  return useMemo(() => ({ ...data, ...actions }), [data, actions])
}
type WorkspaceContextValue = ReturnType<typeof useWorkspaceState>
const WorkspaceContext = createContext<WorkspaceContextValue | null>(null)
export function WorkspaceProvider({ children }: { children: ReactNode }) {
  return (
    <WorkspaceContext.Provider value={useWorkspaceState()}>{children}</WorkspaceContext.Provider>
  )
}
export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (!context) throw new Error('useWorkspace must be used within WorkspaceProvider')
  return context
}
