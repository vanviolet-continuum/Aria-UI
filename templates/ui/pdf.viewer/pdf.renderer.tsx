import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { FileText, LockKeyhole } from 'lucide-react'
import { LoadingIllustration } from '../illustrations/states/loading.illustration'
import { Button } from '../button/button'
import { PasswordInput } from '../password.input/password.input'
import { PdfToolbar } from './pdf.toolbar'
import { PdfThumbnails } from './pdf.thumbnails'
import { PdfInfo } from './pdf.info'
import { pdfDate, usePdfSource, usePdfWidth } from './use.pdf.source'
import type { PdfMetadata, PdfViewerProps } from './types'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()
const loading = (
  <div className="pdf-message" role="status">
    <LoadingIllustration size={70} label="Reading your document…" />
  </div>
)
export default function PdfRenderer({
  file,
  fileName,
  className = '',
  showMetadata = true,
  showThumbnails = true,
  options,
  onError,
  onPrint,
}: PdfViewerProps) {
  const { t: tr, text: localize } = useI18n()

  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [metadata, setMetadata] = useState(showMetadata)
  const [thumbnails, setThumbnails] = useState(showThumbnails)
  const [info, setInfo] = useState<PdfMetadata>({})
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [challenge, setChallenge] = useState<{
    submit: (password: string) => void
    incorrect: boolean
  } | null>(null)
  const printFrame = useRef<HTMLIFrameElement | null>(null)
  const alive = useRef(true)
  const url = usePdfSource(file)
  const viewport = usePdfWidth(pages > 0)
  const name = fileName ?? (file instanceof File ? file.name : 'document.pdf')
  useEffect(() => {
    alive.current = true
    return () => {
      alive.current = false
      printFrame.current?.remove()
    }
  }, [])
  const print = () => {
    if (onPrint) {
      onPrint(url)
      return
    }
    printFrame.current?.remove()
    const frame = document.createElement('iframe')
    frame.className = 'pdf-print-frame'
    frame.title = 'Print document'
    frame.onload = () => {
      try {
        frame.contentWindow?.focus()
        frame.contentWindow?.print()
      } catch {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }
    frame.src = url
    document.body.appendChild(frame)
    printFrame.current = frame
  }
  const passwordForm = challenge ? (
    <form
      className="pdf-message pdf-password"
      onSubmit={(event) => {
        event.preventDefault()
        challenge.submit(password)
        setPassword('')
      }}
    >
      <LockKeyhole size={30} />
      <Text as="strong" variant="label">
        {challenge.incorrect
          ? tr('Incorrect password. Try again.')
          : tr('This PDF is password protected')}
      </Text>
      <PasswordInput
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-label={tr('PDF password')}
        autoComplete="off"
        showStrength={false}
        showRequirements={false}
      />
      <Button type="submit" variant="contained" disabled={!password}>
        {tr('Unlock document')}
      </Button>
    </form>
  ) : null
  return (
    <section
      className={`pdf-viewer ${className}`}
      aria-label={tr('PDF viewer: {{value0}}', { value0: localize(name) })}
    >
      <PdfToolbar
        page={page}
        pages={pages}
        zoom={zoom}
        onPage={setPage}
        onZoom={setZoom}
        url={url}
        name={name}
        onPrint={print}
        metadata={metadata}
        thumbnails={thumbnails}
        onMetadata={() => setMetadata(!metadata)}
        onThumbnails={() => setThumbnails(!thumbnails)}
      />
      <Document
        file={file}
        options={options}
        loading={passwordForm ?? loading}
        externalLinkTarget="_blank"
        externalLinkRel="noopener noreferrer nofollow"
        noData={
          <div className="pdf-message">
            <FileText size={38} />
            <Text as="strong" variant="label">
              {tr('Your document goes here')}
            </Text>
            <Text as="span" variant="label">
              {tr('Upload a PDF to preview its pages.')}
            </Text>
          </div>
        }
        error={localize(
          <div className="pdf-message" role="alert">
            <FileText size={34} />
            <Text as="strong" variant="label">
              Unable to open this PDF
            </Text>
            <Text as="span" variant="label">
              {localize(error || 'Choose a valid PDF file or check the document URL.')}
            </Text>
          </div>,
        )}
        onLoadError={(cause) => {
          setError(cause.message)
          onError?.(cause)
        }}
        onSourceError={(cause) => {
          setError(cause.message)
          onError?.(cause)
        }}
        onPassword={(submit, reason) => setChallenge({ submit, incorrect: reason === 2 })}
        onLoadSuccess={async (pdf) => {
          setPages(pdf.numPages)
          setChallenge(null)
          setError('')
          try {
            const [details, first] = await Promise.all([pdf.getMetadata(), pdf.getPage(1)])
            const data = details.info as Record<string, string>
            const size = first.getViewport({ scale: 1 })
            if (alive.current)
              setInfo({
                title: data.Title,
                author: data.Author,
                created: pdfDate(data.CreationDate),
                dimensions: `${Math.round(size.width)} × ${Math.round(size.height)} pt`,
              })
          } catch {
            /* The document can still render without optional metadata. */
          }
        }}
      >
        <div
          className={`pdf-body${thumbnails && pages ? ' pdf-body--thumbnails' : ''}${metadata && pages ? ' pdf-body--info' : ''}`}
        >
          {pages > 0 && thumbnails && <PdfThumbnails page={page} pages={pages} onPage={setPage} />}
          <div
            className="pdf-viewport"
            ref={viewport.ref}
            tabIndex={0}
            aria-label={tr('PDF page content')}
          >
            {pages > 0 && (
              <Page
                pageNumber={page}
                width={Math.min(900, viewport.width)}
                scale={zoom}
                loading={loading}
              />
            )}
          </div>
          {pages > 0 && metadata && <PdfInfo file={file} name={name} pages={pages} info={info} />}
        </div>
      </Document>
    </section>
  )
}
