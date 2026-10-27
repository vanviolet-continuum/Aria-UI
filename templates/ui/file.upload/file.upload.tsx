import { FieldError } from '../field.error/field.error'

import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { useRef, useState } from 'react'
import clsx from 'clsx'
import { UploadIllustration } from '../illustrations/files/upload.illustration'
import { FileItem } from './file.item'
import { fileId, fileSize, validateFiles, type RejectedFile } from './file.utils'

export interface FileUploadProps {
  files: File[]
  onChange: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxFiles?: number
  maxSize?: number
  disabled?: boolean
  onReject?: (files: RejectedFile[]) => void
  label?: string
  description?: string
  id?: string
}
export function FileUpload({
  files,
  onChange,
  accept,
  multiple = true,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024,
  disabled,
  onReject,
  label = 'Drop your files here',
  description,
  id,
}: FileUploadProps) {
  const { t: tr, text: localize } = useI18n()

  const input = useRef<HTMLInputElement>(null)
  const depth = useRef(0)
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState<RejectedFile[]>([])
  const rejectMessage = (error: RejectedFile) =>
    error.code === 'size'
      ? tr('File exceeds {{size}}.', { size: fileSize(maxSize) })
      : error.code === 'count'
        ? tr('Choose up to {{count}} files.', { count: multiple ? maxFiles : 1 })
        : localize(error.reason)
  const add = (incoming: File[]) => {
    if (disabled) return
    const result = validateFiles(
      multiple ? incoming : incoming.slice(0, 1),
      multiple ? files : [],
      {
        accept,
        maxFiles: multiple ? maxFiles : 1,
        maxSize,
      },
    )
    setErrors(result.rejected)
    onReject?.(result.rejected.map((error) => ({ ...error, reason: rejectMessage(error) })))
    onChange(result.accepted)
    if (input.current) input.current.value = ''
  }
  return (
    <div className="file-upload">
      <input
        ref={input}
        id={id}
        type="file"
        className="sr-only"
        tabIndex={-1}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        aria-label={tr('Choose files')}
        onChange={(event) => add(Array.from(event.target.files ?? []))}
      />
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={localize(label)}
        className={clsx(
          'upload-dropzone',
          dragging && 'upload-dropzone--active',
          disabled && 'upload-dropzone--disabled',
        )}
        onClick={() => {
          if (!disabled) input.current?.click()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            input.current?.click()
          }
        }}
        onDragEnter={(event) => {
          event.preventDefault()
          depth.current++
          if (!disabled) setDragging(true)
        }}
        onDragOver={(event) => {
          event.preventDefault()
          event.dataTransfer.dropEffect = disabled ? 'none' : 'copy'
        }}
        onDragLeave={(event) => {
          event.preventDefault()
          if (--depth.current <= 0) setDragging(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          depth.current = 0
          setDragging(false)
          add(Array.from(event.dataTransfer.files))
        }}
      >
        <UploadIllustration />
        <Text as="strong" variant="label">
          {dragging ? tr('A perfect place to land.') : localize(label)}
        </Text>
        <Text as="p" variant="body">
          {tr('or') + ' '}
          <Text as="span" variant="label">
            {tr('browse files')}
          </Text>
          {' ' + tr('from your computer')}
        </Text>
        <Text as="small" variant="caption">
          {localize(description) ??
            tr('{{types}} · Up to {{size}} each', {
              types: accept || tr('Any file type'),
              size: fileSize(maxSize),
            })}
        </Text>
      </div>
      {!!files.length && (
        <ul className="upload-file-list">
          {files.map((file) => (
            <FileItem
              key={fileId(file)}
              file={file}
              disabled={disabled}
              onRemove={() => onChange(files.filter((item) => fileId(item) !== fileId(file)))}
            />
          ))}
        </ul>
      )}
      {!!errors.length && (
        <FieldError as="p" variant="error" className="ui-field-error" role="alert">
          {errors[0].file.name}: {rejectMessage(errors[0])}
        </FieldError>
      )}
    </div>
  )
}
export { FileUpload as Dropzone }
