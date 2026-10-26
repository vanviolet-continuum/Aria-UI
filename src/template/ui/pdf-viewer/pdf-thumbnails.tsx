import { useI18n } from '../../i18n/use-i18n'
import { Page } from 'react-pdf'
import { Button } from '../button/button'

/** Render at most five small canvases, including in documents with thousands of pages. */
export function PdfThumbnails({
  page,
  pages,
  onPage,
}: {
  page: number
  pages: number
  onPage: (page: number) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const start = Math.max(1, Math.min(page - 2, pages - 4))
  const visible = Array.from({ length: Math.min(5, pages) }, (_, index) => start + index)
  return (
    <nav className="pdf-thumbnails" aria-label={tr('PDF pages')}>
      <span>{tr('Pages')}</span>
      {start > 1 && (
        <Button size="sm" variant="text" onClick={() => onPage(Math.max(1, start - 5))}>
          {tr('← Earlier')}
        </Button>
      )}
      {visible.map((number) => (
        <button
          key={number}
          type="button"
          aria-label={tr('Go to PDF page {{value0}}', { value0: localize(number) })}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onPage(number)}
        >
          <Page
            pageNumber={number}
            width={76}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={<span className="pdf-thumbnail-loading" />}
          />
          <small>{number}</small>
        </button>
      ))}
      {start + visible.length <= pages && (
        <Button size="sm" variant="text" onClick={() => onPage(Math.min(pages, start + 5))}>
          {tr('Later →')}
        </Button>
      )}
    </nav>
  )
}
