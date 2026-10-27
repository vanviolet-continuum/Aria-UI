import type { DocumentProps } from 'react-pdf'

export interface PdfViewerProps {
  file: File | string | null
  fileName?: string
  className?: string
  showMetadata?: boolean
  showThumbnails?: boolean
  options?: DocumentProps['options']
  onError?: (error: Error) => void
  /** Supply a custom print handler for browsers with no embedded PDF printing. */
  onPrint?: (url: string) => void
}
export interface PdfMetadata {
  title?: string
  author?: string
  created?: string
  dimensions?: string
}
