import { Text } from '../text/text'
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
      <Text as="strong" variant="label">
        {tr('Document details')}
      </Text>
      <Text as="p" variant="body">
        {name}
      </Text>
      <dl>
        <Text as="dt" variant="label">
          {tr('Pages')}
        </Text>
        <Text as="dd" variant="body">
          {pages || '–'}
        </Text>
        <Text as="dt" variant="label">
          {tr('File size')}
        </Text>
        <Text as="dd" variant="body">
          {file instanceof File ? fileSize(file.size) : tr('Remote document')}
        </Text>
        <Text as="dt" variant="label">
          {tr('Title')}
        </Text>
        <Text as="dd" variant="body">
          {info.title || tr('Not provided')}
        </Text>
        <Text as="dt" variant="label">
          {tr('Author')}
        </Text>
        <Text as="dd" variant="body">
          {info.author || tr('Not provided')}
        </Text>
        <Text as="dt" variant="label">
          {tr('Created')}
        </Text>
        <Text as="dd" variant="body">
          {info.created || tr('Not provided')}
        </Text>
        <Text as="dt" variant="label">
          {tr('Page dimensions')}
        </Text>
        <Text as="dd" variant="body">
          {info.dimensions || '–'}
        </Text>
      </dl>
    </aside>
  )
}
