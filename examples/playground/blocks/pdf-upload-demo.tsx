import { useI18n } from '../../../src/template/i18n'
import { useState } from 'react'
import { Button, FileUpload, PdfViewer } from '@/template/ui'
import { DemoCard } from '../demo-card'
import samplePdf from '../assets/studio-guide.pdf?url'

export function PdfUploadDemo() {
  const { t: tr } = useI18n()

  const [files, setFiles] = useState<File[]>([])
  const [sample, setSample] = useState(true)
  return (
    <DemoCard
      full
      title={tr('Upload & PDF viewer')}
      description={tr(
        'Drop in a document. Read its pages, inspect the details, or take a copy with you.',
      )}
      code={`const [files, setFiles] = useState<File[]>([])\n<FileUpload files={files} onChange={setFiles} accept="application/pdf,.pdf"\n  multiple={false} maxSize={25 * 1024 * 1024} />\n<PdfViewer file={files[0] ?? null} />\n// Also accepts an API URL. Remote servers must allow CORS.\n// Renderer + PDF.js worker are lazy-loaded; thumbnails are bounded to five.\n// Optional: options={{ cMapUrl, standardFontDataUrl }} for custom PDF.js assets.`}
    >
      <div className="demo-stack">
        <FileUpload
          files={files}
          onChange={(next) => {
            setFiles(next)
            setSample(false)
          }}
          accept="application/pdf,.pdf"
          multiple={false}
          maxSize={25 * 1024 * 1024}
          label={tr('Drop a PDF to explore')}
          description={tr('PDF documents · Up to 25 MB · Previewed locally')}
        />
        {!sample && (
          <div>
            <Button
              variant="text"
              size="sm"
              onClick={() => {
                setFiles([])
                setSample(true)
              }}
            >
              {tr('Open sample document')}
            </Button>
          </div>
        )}
        <PdfViewer
          file={files[0] ?? (sample ? samplePdf : null)}
          fileName={files[0]?.name ?? 'studio-guide.pdf'}
        />
      </div>
    </DemoCard>
  )
}
