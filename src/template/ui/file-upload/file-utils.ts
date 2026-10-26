export interface RejectedFile {
  file: File
  reason: string
  code?: 'type' | 'size' | 'count'
}
export const fileId = (file: File) => `${file.name}:${file.size}:${file.lastModified}`
export function fileSize(bytes: number) {
  return bytes < 1024
    ? `${bytes} B`
    : bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1024 / 1024).toFixed(1)} MB`
}
export function acceptsFile(file: File, accept?: string) {
  if (!accept) return true
  return accept.split(',').some((raw) => {
    const type = raw.trim().toLowerCase()
    if (type.startsWith('.')) return file.name.toLowerCase().endsWith(type)
    if (type.endsWith('/*'))
      return (
        file.type.startsWith(type.slice(0, -1)) ||
        (!file.type && type === 'image/*' && /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(file.name))
      )
    return (
      file.type === type || (!file.type && type === 'application/pdf' && /\.pdf$/i.test(file.name))
    )
  })
}
export function validateFiles(
  incoming: File[],
  current: File[],
  options: {
    accept?: string
    maxFiles: number
    maxSize: number
  },
) {
  const accepted = [...current]
  const rejected: RejectedFile[] = []
  const seen = new Set(current.map(fileId))
  for (const file of incoming) {
    if (seen.has(fileId(file))) continue
    const code = !acceptsFile(file, options.accept)
      ? 'type'
      : file.size > options.maxSize
        ? 'size'
        : accepted.length >= options.maxFiles
          ? 'count'
          : undefined
    const reason =
      code === 'type'
        ? 'This file type is not supported.'
        : code === 'size'
          ? `File exceeds ${fileSize(options.maxSize)}.`
          : `Choose up to ${options.maxFiles} files.`
    if (code) rejected.push({ file, reason, code })
    else {
      accepted.push(file)
      seen.add(fileId(file))
    }
  }
  return { accepted, rejected }
}
