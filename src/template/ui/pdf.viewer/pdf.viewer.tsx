import { useI18n } from '../../i18n/use.i18n'
import { lazy, Suspense } from 'react'
import { LoadingIllustration } from '../illustrations/states/loading.illustration'
import type { PdfViewerProps } from './types'

const Renderer = /* @__PURE__ */ lazy(() => import('./pdf.renderer'))
export function PdfViewer(props: PdfViewerProps) {
  const { t: tr } = useI18n()

  return (
    <Suspense
      fallback={
        <div className="pdf-message" role="status">
          <LoadingIllustration size={76} label={tr('Loading PDF viewer…')} />
        </div>
      }
    >
      <Renderer
        key={
          typeof props.file === 'string'
            ? props.file
            : props.file
              ? `${props.file.name}:${props.file.lastModified}:${props.file.size}`
              : 'empty'
        }
        {...props}
      />
    </Suspense>
  )
}
