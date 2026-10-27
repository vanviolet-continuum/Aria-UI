import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { FileText, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IconButton } from '../icon.button/icon.button'
import { fileSize } from './file.utils'

export function FileItem({
  file,
  onRemove,
  disabled,
}: {
  file: File
  onRemove: () => void
  disabled?: boolean
}) {
  const { t: tr, text: localize } = useI18n()

  const [preview, setPreview] = useState<string>()
  useEffect(() => {
    if (!file.type.startsWith('image/')) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])
  return (
    <li className="upload-file-item">
      <Text as="span" variant="label" tone="inherit" className="upload-file-icon">
        {preview ? <img src={preview} alt="" /> : <FileText size={21} />}
      </Text>
      <Text as="span" variant="label" tone="inherit">
        <Text as="strong" variant="label">
          {file.name}
        </Text>
        <Text as="small" variant="caption">
          {fileSize(file.size)}
          {' ' + tr('· Ready to upload')}
        </Text>
      </Text>
      <IconButton
        label={tr('Remove {{value0}}', { value0: localize(file.name) })}
        size="sm"
        variant="text"
        color="secondary"
        disabled={disabled}
        onClick={onRemove}
      >
        <X size={15} />
      </IconButton>
    </li>
  )
}
