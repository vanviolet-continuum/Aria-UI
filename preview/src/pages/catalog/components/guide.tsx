import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useI18n } from '@templates/i18n'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { CodeBlock } from '@templates/ui/code.block'
import { Alert } from '@templates/ui/alert'

const guides = import.meta.glob<string>('/templates/ui/**/*.md', {
  query: '?raw',
  import: 'default',
})
const central: Record<string, string> = {}
for (const id of [
  'box',
  'stack',
  'grid',
  'grid.item',
  'inline',
  'container',
  'center',
  'spacer',
  'divider',
])
  central[id] = 'layout'
for (const id of [
  'text',
  'heading',
  'eyebrow',
  'caption',
  'code',
  'code.block',
  'label',
  'helper.text',
  'field.error',
  'metric.value',
  'link',
])
  central[id] = 'typography'
for (const id of [
  'card',
  'page.header',
  'section.header',
  'heading.group',
  'hero',
  'toolbar',
  'form.section',
  'settings.row',
])
  central[id] = 'composition'
for (const id of [
  'slider',
  'radio.group',
  'accordion',
  'avatar',
  'alert',
  'progress',
  'breadcrumb',
  'multi.select',
  'tooltip',
  'dialog',
])
  central[id] = 'primitives'
export function ComponentGuide({ component }: { component: string }) {
  const { t } = useI18n(),
    [content, setContent] = useState(''),
    [error, setError] = useState(false)
  useEffect(() => {
    let active = true
    setContent('')
    setError(false)
    const loader =
      guides['/templates/ui/' + component + '/readme.md'] ??
      guides['/templates/ui/' + (central[component] ?? 'readme') + '.md']
    void loader?.()
      .then((text) => {
        if (active) setContent(text)
      })
      .catch(() => {
        if (active) setError(true)
      })
    return () => {
      active = false
    }
  }, [component])
  return (
    <Card>
      <CardHeader
        title={t('Usage guide')}
        description={t('This guide is read directly from the portable kit documentation.')}
        titleAs="h2"
      />
      <CardBody className="space-y-aria-md [&_ul]:list-disc [&_ul]:space-y-aria-xs [&_ul]:ps-aria-lg [&_ol]:list-decimal [&_ol]:ps-aria-lg [&_li]:text-aria-body [&_hr]:my-aria-lg [&_hr]:border-outline [&_blockquote]:border-s-2 [&_blockquote]:border-primary [&_blockquote]:ps-aria-md [&_strong]:font-semibold [&_pre]:max-w-full">
        {error ? (
          <Alert
            severity="error"
            description={t('The guide could not be loaded. Reload the page to try again.')}
          />
        ) : !content ? (
          <Text variant="caption">{t('Loading guide…')}</Text>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <Heading as="h2" variant="section">
                  {children}
                </Heading>
              ),
              h2: ({ children }) => (
                <Heading as="h3" variant="card">
                  {children}
                </Heading>
              ),
              h3: ({ children }) => (
                <Heading as="h4" variant="card">
                  {children}
                </Heading>
              ),
              p: ({ children }) => <Text>{children}</Text>,
              code: ({ children, className }) =>
                String(children).includes('\n') || className ? (
                  <CodeBlock className="rounded-aria-md bg-surface-subtle p-aria-md">
                    {String(children).replace(/\n$/, '')}
                  </CodeBlock>
                ) : (
                  <code className="rounded-aria-sm bg-surface-subtle px-aria-xs text-aria-code">
                    {children}
                  </code>
                ),
              pre: ({ children }) => <div>{children}</div>,
              table: ({ children }) => (
                <div className="overflow-x-auto rounded-aria-md border border-outline">
                  <table className="w-full border-collapse text-start text-aria-table [&_th]:bg-surface-subtle [&_td]:border-t [&_td]:border-outline [&_th]:p-aria-sm [&_td]:p-aria-sm">
                    {children}
                  </table>
                </div>
              ),
              a: ({ href, children }) =>
                href?.startsWith('https://') ? (
                  <a
                    href={href}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {children}
                  </a>
                ) : (
                  <span className="text-content-secondary">{children}</span>
                ),
            }}
          >
            {content}
          </Markdown>
        )}
      </CardBody>
    </Card>
  )
}
