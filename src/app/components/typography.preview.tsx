import { useId, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CodeBlock,
  CodeText,
  Eyebrow,
  FieldError,
  FieldHint,
  FieldLabel,
  Grid,
  Heading,
  Inline,
  Input,
  MetricValue,
  Stack,
  Text,
  TextLink,
} from '../../template/ui'
import { useI18n } from '../../template/i18n'
import { typographyTones } from '../../template/theme/typography.config'

export function TypographyPreview({ id }: { id: string }) {
  const { t: tr } = useI18n()
  const inputId = useId()
  const [value, setValue] = useState('')
  const [wrap, setWrap] = useState(true)
  const sample =
    '<Stack gap="lg">\n  <Heading variant="page">Your workspace</Heading>\n  <Text variant="description">Everything follows your theme.</Text>\n</Stack>'
  switch (id) {
    case 'heading':
      return (
        <Stack gap="lg">
          {(['display', 'page', 'section', 'card', 'dialog'] as const).map((variant) => (
            <Stack key={variant} gap="xs">
              <Eyebrow>{tr(`Typography ${variant}`)}</Eyebrow>
              <Heading as="h3" variant={variant}>
                {tr('A clear starting point.')}
              </Heading>
            </Stack>
          ))}
        </Stack>
      )
    case 'text':
      return (
        <Stack gap="lg">
          {(
            [
              'body',
              'description',
              'label',
              'caption',
              'helper',
              'button',
              'input',
              'table',
              'menu',
              'navigation',
            ] as const
          ).map((variant) => (
            <Stack key={variant} gap="xs">
              <Eyebrow>{tr(`Typography ${variant}`)}</Eyebrow>
              <Text variant={variant}>
                {tr('Thoughtful details make a workspace feel familiar.')}
              </Text>
            </Stack>
          ))}
          <Inline gap="md">
            {typographyTones.map((tone) => (
              <Text key={tone} variant="label" tone={tone}>
                {tr(`Text tone ${tone}`)}
              </Text>
            ))}
          </Inline>
        </Stack>
      )
    case 'eyebrow':
      return (
        <Stack gap="lg">
          <Eyebrow>{tr('YOUR WORKSPACE, YOUR WAY')}</Eyebrow>
          <Eyebrow tone="primary">ARIA UI / {tr('COMPONENT LIBRARY')}</Eyebrow>
          <Box variant="subtle">
            <Stack gap="sm">
              <Eyebrow>{tr('Project overview')}</Eyebrow>
              <Heading as="h3" variant="card">
                {tr('Small pieces. Endless possibilities.')}
              </Heading>
              <Text variant="description">
                {tr('Use a small label to introduce the content that follows.')}
              </Text>
            </Stack>
          </Box>
        </Stack>
      )
    case 'field-label':
    case 'field-hint':
    case 'field-error':
      return (
        <Box maxWidth={480}>
          <Stack gap="sm">
            <FieldLabel htmlFor={inputId} required>
              {tr('Workspace name')}
            </FieldLabel>
            <Input
              id={inputId}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              invalid={id === 'field-error' && !value}
              aria-describedby={`${inputId}-message`}
              placeholder={tr('Something worth making')}
            />
            {id === 'field-error' && !value ? (
              <FieldError id={`${inputId}-message`} aria-live="polite">
                {tr('Enter a workspace name to continue.')}
              </FieldError>
            ) : (
              <FieldHint id={`${inputId}-message`}>
                {tr('Choose a name your team will recognize.')}
              </FieldHint>
            )}
          </Stack>
        </Box>
      )
    case 'text-link':
      return (
        <Stack gap="lg">
          <Text variant="body">
            {tr('Make this workspace your own.')}{' '}
            <TextLink href="/settings/appearance">{tr('Customize your theme')}</TextLink>
          </Text>
          <Inline>
            <TextLink href="/components?component=heading">{tr('Explore headings')}</TextLink>
            <TextLink href="/components?component=card" tone="secondary">
              {tr('Explore cards')}
            </TextLink>
          </Inline>
          <Text variant="caption">
            {tr('Links preserve native navigation, focus, and keyboard behavior.')}
          </Text>
        </Stack>
      )
    case 'code-text':
      return (
        <Stack gap="lg">
          <Text variant="body">
            {tr('Use')} <CodeText>variant="description"</CodeText>{' '}
            {tr('to apply a shared text style.')}
          </Text>
          <Box variant="subtle">
            <Inline>
              <CodeText>fontSize</CodeText>
              <CodeText>lineHeight</CodeText>
              <CodeText>letterSpacing</CodeText>
            </Inline>
          </Box>
        </Stack>
      )
    case 'code-block':
      return (
        <Stack gap="md">
          <Inline>
            <Button
              size="sm"
              variant={wrap ? 'soft' : 'text'}
              aria-pressed={wrap}
              onClick={() => setWrap(true)}
            >
              {tr('Wrap code')}
            </Button>
            <Button
              size="sm"
              variant={!wrap ? 'soft' : 'text'}
              aria-pressed={!wrap}
              onClick={() => setWrap(false)}
            >
              {tr('Preserve lines')}
            </Button>
          </Inline>
          <Box variant="subtle">
            <CodeBlock wrap={wrap}>{sample}</CodeBlock>
          </Box>
          <Text variant="caption">{tr('Code is displayed as text and is never executed.')}</Text>
        </Stack>
      )
    case 'metric-value':
      return (
        <Grid minItemWidth={180}>
          {[
            ['12,840', 'Total members', 'primary'],
            ['98.4%', 'Completion rate', 'success'],
            ['Rp 24.8M', 'Monthly revenue', 'text'],
          ].map(([number, label, tone]) => (
            <Card key={label}>
              <CardBody>
                <Stack gap="sm">
                  <Text variant="caption">{tr(label)}</Text>
                  <MetricValue tone={tone as 'primary' | 'success' | 'text'}>{number}</MetricValue>
                  <Badge variant="success">+12.8%</Badge>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      )
    default:
      return null
  }
}
