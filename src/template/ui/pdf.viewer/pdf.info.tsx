import { useI18n } from '../../i18n/use.i18n'
import { FileText } from 'lucide-react'
import { fileSize } from '../file.upload/file.utils'
import type { PdfMetadata } from './types'

export function PdfInfo({
  name,
  file,
  pages,
  info,
}: {
  name: string
  file: File | string | null
  pages: number
  info: PdfMetadata
}) {
  const { t: tr } = useI18n()

  return (
    <aside className="pdf-info" aria-label={tr('PDF information')}>
      <FileText size={25} />
      <strong>{tr('Document details')}</strong>
      <p>{name}</p>
      <dl>
        <dt>{tr('Pages')}</dt>
        <dd>{pages || '–'}</dd>
        <dt>{tr('File size')}</dt>
        <dd>{file instanceof File ? fileSize(file.size) : tr('Remote document')}</dd>
        <dt>{tr('Title')}</dt>
        <dd>{info.title || tr('Not provided')}</dd>
        <dt>{tr('Author')}</dt>
        <dd>{info.author || tr('Not provided')}</dd>
        <dt>{tr('Created')}</dt>
        <dd>{info.created || tr('Not provided')}</dd>
        <dt>{tr('Page dimensions')}</dt>
        <dd>{info.dimensions || '–'}</dd>
      </dl>
    </aside>
  )
}
