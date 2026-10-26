import { useI18n } from '../../src/template/i18n'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { LoadingIllustration } from '@/template/ui/illustrations'

export function DeferredPreview({ children }: { children: ReactNode }) {
  const { t: tr } = useI18n()

  const target = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!target.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(target.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={target} className="deferred-preview">
      {visible ? (
        <div className="demo-grid">{children}</div>
      ) : (
        <div className="deferred-placeholder">
          <LoadingIllustration size={60} label={tr('')} />
          <span>{tr('A little more to explore…')}</span>
        </div>
      )}
    </div>
  )
}
