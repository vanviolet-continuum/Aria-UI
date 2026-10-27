import { Toaster as Sonner, toast } from 'sonner'
import { Check, CircleAlert, Info, LoaderCircle, TriangleAlert, X } from 'lucide-react'
import type { ComponentProps } from 'react'

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
      className={`workspace-toaster ${className}`}
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
export { toast }
