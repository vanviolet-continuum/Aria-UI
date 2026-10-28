import { Toaster as Sonner, toast as sonnerToast, type ExternalToast } from 'sonner'
import { Check, CircleAlert, Info, LoaderCircle, TriangleAlert, X } from 'lucide-react'
import { isValidElement, type ComponentProps, type ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'

type NoticeKind = 'success' | 'info' | 'warning' | 'error' | 'loading' | 'message'
const descriptions = {
  success: 'The action completed successfully.',
  info: 'Here is an update about your workspace.',
  warning: 'Review this information before continuing.',
  error: 'Review the details and try again.',
  loading: 'Please wait while the action is being completed.',
  message: 'Here is an update about your workspace.',
}
function NoticeDescription({ kind }: { kind: NoticeKind }) {
  const { t } = useI18n()
  return t(descriptions[kind])
}
function NoticeTitle({ kind }: { kind: 'success' | 'error' | 'loading' }) {
  const { t } = useI18n()
  return t(
    kind === 'success'
      ? 'Action completed'
      : kind === 'error'
        ? 'Unable to complete the action.'
        : 'Working…',
  )
}
function optionsWithDescription(
  options: ExternalToast | undefined,
  kind: NoticeKind,
): ExternalToast {
  const value = options?.description
  return {
    ...options,
    description:
      value == null || value === false || (typeof value === 'string' && !value.trim()) ? (
        <NoticeDescription kind={kind} />
      ) : (
        value
      ),
  }
}
function resultWithDescription(
  result: ReactNode | (ExternalToast & { message: ReactNode }),
  description: ReactNode,
  kind: 'success' | 'error',
) {
  if (result && typeof result === 'object' && !isValidElement(result) && 'message' in result)
    return {
      ...result,
      ...optionsWithDescription(
        { ...result, description: result.description ?? description },
        kind,
      ),
    }
  return { message: result, ...optionsWithDescription({ description }, kind) }
}
function promiseToast<T>(
  operation: Parameters<typeof sonnerToast.promise<T>>[0],
  options?: Parameters<typeof sonnerToast.promise<T>>[1],
) {
  return sonnerToast.promise(operation, {
    ...options,
    loading: options?.loading ?? <NoticeTitle kind="loading" />,
    description: options?.description ?? <NoticeDescription kind="loading" />,
    success: async (value) => {
      const result =
        typeof options?.success === 'function'
          ? await options.success(value)
          : (options?.success ?? <NoticeTitle kind="success" />)
      const description =
        typeof options?.description === 'function'
          ? await options.description(value)
          : (options?.description ?? <NoticeDescription kind="success" />)
      return resultWithDescription(result, description, 'success')
    },
    error: async (error) => {
      const result =
        typeof options?.error === 'function'
          ? await options.error(error)
          : (options?.error ?? <NoticeTitle kind="error" />)
      const description =
        typeof options?.description === 'function'
          ? await options.description(error)
          : (options?.description ??
            (error instanceof Error ? error.message : <NoticeDescription kind="error" />))
      return resultWithDescription(result, description, 'error')
    },
  })
}

/** Every standard notification gets a description, including older call sites. */
export const toast = Object.assign(
  (message: Parameters<typeof sonnerToast>[0], options?: ExternalToast) =>
    sonnerToast(message, optionsWithDescription(options, 'message')),
  {
    ...sonnerToast,
    success: (message: Parameters<typeof sonnerToast.success>[0], options?: ExternalToast) =>
      sonnerToast.success(message, optionsWithDescription(options, 'success')),
    error: (message: Parameters<typeof sonnerToast.error>[0], options?: ExternalToast) =>
      sonnerToast.error(message, optionsWithDescription(options, 'error')),
    info: (message: Parameters<typeof sonnerToast.info>[0], options?: ExternalToast) =>
      sonnerToast.info(message, optionsWithDescription(options, 'info')),
    warning: (message: Parameters<typeof sonnerToast.warning>[0], options?: ExternalToast) =>
      sonnerToast.warning(message, optionsWithDescription(options, 'warning')),
    loading: (message: Parameters<typeof sonnerToast.loading>[0], options?: ExternalToast) =>
      sonnerToast.loading(message, optionsWithDescription(options, 'loading')),
    message: (message: Parameters<typeof sonnerToast.message>[0], options?: ExternalToast) =>
      sonnerToast.message(message, optionsWithDescription(options, 'message')),
    promise: promiseToast,
    custom: (render: Parameters<typeof sonnerToast.custom>[0], options?: ExternalToast) =>
      sonnerToast.custom((id) => {
        const description = optionsWithDescription(options, 'message').description
        return (
          <div className="workspace-toast toast--default">
            <div className="toast-content">
              {render(id)}
              <div className="toast-description">
                {typeof description === 'function' ? description() : description}
              </div>
            </div>
          </div>
        )
      }, options),
  },
)

export function Toaster({
  toastOptions,
  icons,
  className = '',
  ...props
}: ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      position="bottom-center"
      closeButton
      gap={12}
      visibleToasts={4}
      icons={{
        success: <Check size={17} />,
        info: <Info size={17} />,
        error: <CircleAlert size={17} />,
        warning: <TriangleAlert size={17} />,
        loading: <LoaderCircle size={17} className="ui-spinner" />,
        close: <X size={13} />,
        ...icons,
      }}
      {...props}
      className={'workspace-toaster ' + className}
      toastOptions={{
        duration: 4500,
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: 'workspace-toast',
          title: 'toast-title',
          description: 'toast-description',
          content: 'toast-content',
          icon: 'toast-icon',
          closeButton: 'toast-close',
          actionButton: 'toast-action',
          cancelButton: 'toast-cancel',
          default: 'toast--default',
          success: 'toast--success',
          error: 'toast--error',
          warning: 'toast--warning',
          info: 'toast--info',
          loading: 'toast--loading',
          ...toastOptions?.classNames,
        },
      }}
    />
  )
}
