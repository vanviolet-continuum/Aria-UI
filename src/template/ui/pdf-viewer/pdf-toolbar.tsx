import { useI18n } from '../../i18n/use-i18n'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Info,
  Maximize,
  PanelLeft,
  Printer,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { IconButton } from '../icon-button/icon-button'

export function PdfToolbar({
  page,
  pages,
  zoom,
  onPage,
  onZoom,
  url,
  name,
  onPrint,
  metadata,
  thumbnails,
  onMetadata,
  onThumbnails,
}: {
  page: number
  pages: number
  zoom: number
  onPage: (page: number) => void
  onZoom: (zoom: number) => void
  url: string
  name: string
  onPrint: () => void
  metadata: boolean
  thumbnails: boolean
  onMetadata: () => void
  onThumbnails: () => void
}) {
  const { t: tr } = useI18n()

  const loaded = pages > 0
  return (
    <div className="pdf-toolbar">
      <div>
        <IconButton
          label={tr('Toggle page thumbnails')}
          size="sm"
          variant={thumbnails ? 'soft' : 'text'}
          aria-pressed={thumbnails}
          onClick={onThumbnails}
        >
          <PanelLeft size={15} />
        </IconButton>
        <IconButton
          label={tr('Previous PDF page')}
          size="sm"
          variant="text"
          disabled={!loaded || page <= 1}
          onClick={() => onPage(page - 1)}
        >
          <ChevronLeft size={16} />
        </IconButton>
        <span aria-live="polite">{loaded ? `${page} / ${pages}` : '– / –'}</span>
        <IconButton
          label={tr('Next PDF page')}
          size="sm"
          variant="text"
          disabled={!loaded || page >= pages}
          onClick={() => onPage(page + 1)}
        >
          <ChevronRight size={16} />
        </IconButton>
      </div>
      <div>
        <IconButton
          label={tr('Zoom out PDF')}
          size="sm"
          variant="text"
          disabled={!loaded || zoom <= 0.5}
          onClick={() => onZoom(Math.max(0.5, zoom - 0.25))}
        >
          <ZoomOut size={15} />
        </IconButton>
        <span>{Math.round(zoom * 100)}%</span>
        <IconButton
          label={tr('Zoom in PDF')}
          size="sm"
          variant="text"
          disabled={!loaded || zoom >= 2}
          onClick={() => onZoom(Math.min(2, zoom + 0.25))}
        >
          <ZoomIn size={15} />
        </IconButton>
        <IconButton
          label={tr('Fit PDF to width')}
          size="sm"
          variant="text"
          disabled={!loaded}
          onClick={() => onZoom(1)}
        >
          <Maximize size={14} />
        </IconButton>
      </div>
      <div>
        {url && (
          <a
            className="pdf-download"
            href={url}
            download={name}
            aria-label={tr('Download PDF')}
            title={tr('Download PDF')}
          >
            <Download size={16} />
          </a>
        )}
        <IconButton
          label={tr('Print PDF')}
          size="sm"
          variant="text"
          disabled={!loaded || !url}
          onClick={onPrint}
        >
          <Printer size={15} />
        </IconButton>
        <IconButton
          label={tr('Toggle PDF information')}
          size="sm"
          variant={metadata ? 'soft' : 'text'}
          aria-pressed={metadata}
          onClick={onMetadata}
        >
          <Info size={15} />
        </IconButton>
      </div>
    </div>
  )
}
