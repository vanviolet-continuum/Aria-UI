import { useEffect, useRef, useState } from 'react'

export function usePdfSource(file: File | string | null) {
  const [url, setUrl] = useState(typeof file === 'string' ? file : '')
  useEffect(() => {
    if (typeof file === 'string') {
      setUrl(file)
      return
    }
    if (!file) {
      setUrl('')
      return
    }
    const local = URL.createObjectURL(file)
    setUrl(local)
    return () => URL.revokeObjectURL(local)
  }, [file])
  return url
}
export function usePdfWidth(ready: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(500)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.max(160, Math.floor(entry.contentRect.width - 40))),
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ready])
  return { ref, width }
}
export function pdfDate(value?: string) {
  const match = value?.match(/^(?:D:)?(\d{4})(\d{2})(\d{2})/)
  return match ? `${match[1]}-${match[2]}-${match[3]}` : undefined
}
