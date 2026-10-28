import { useState, type ReactNode } from 'react'
import { Code, Eye } from '@templates/icons'
import { useI18n } from '@templates/i18n'
import { Card, CardHeader, CardBody, CardFooter } from '@templates/ui/card'
import { Button } from '@templates/ui/button'
import { CodeBlock } from '@templates/ui/code.block'
import { Inline } from '@templates/ui/inline'
import { CopyButton } from './copy.button'

export function DemoCard({
  title,
  description,
  code,
  children,
  className = '',
}: {
  title: string
  description: string
  code: string
  children: ReactNode
  className?: string
}) {
  const { t } = useI18n()
  const [showCode, setShowCode] = useState(false)
  return (
    <Card className={className}>
      <CardHeader
        titleAs="h2"
        title={t(title)}
        description={t(description)}
        size="sm"
        actions={
          <Button
            variant="text"
            color="secondary"
            size="sm"
            aria-expanded={showCode}
            onClick={() => setShowCode((value) => !value)}
          >
            {showCode ? <Eye size={15} /> : <Code size={15} />}
            {t(showCode ? 'Preview' : 'Code')}
          </Button>
        }
      />
      <CardBody className="min-w-0">{children}</CardBody>
      {showCode && (
        <CardFooter
          divider
          className="flex flex-col items-stretch bg-surface-subtle [&>.aria-inline]:w-full [&>.aria-code-block]:rounded-aria-md [&>.aria-code-block]:bg-surface-subtle [&>.aria-code-block]:p-aria-md"
        >
          <Inline justify="end">
            <CopyButton value={code} label="Copy code" />
          </Inline>
          <CodeBlock>{code}</CodeBlock>
        </CardFooter>
      )}
    </Card>
  )
}
