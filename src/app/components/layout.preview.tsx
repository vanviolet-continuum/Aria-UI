import { Text } from '../../template/ui/text/text'
import { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Inline,
  Spacer,
  Stack,
  type ContainerSize,
  type LayoutSpace,
  type LayoutVariant,
} from '../../template/ui'
import { useI18n } from '../../template/i18n'
import './layout.preview.css'

function PreviewTile({
  number,
  title,
  description,
  variant = 'outlined',
}: {
  number: string
  title: string
  description?: string
  variant?: LayoutVariant
}) {
  return (
    <Box variant={variant} className="layout-preview-tile">
      <Stack gap="sm">
        <Box
          as="span"
          background="primary"
          color="primary"
          radius="md"
          className="layout-preview-number"
        >
          <Text as="span" variant="label">
            {number}
          </Text>
        </Box>
        <Text as="strong" variant="label">
          {title}
        </Text>
        {description && (
          <Text as="p" variant="body">
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  )
}

export function LayoutPreview({ id }: { id: string }) {
  const { t: tr } = useI18n()
  const [gap, setGap] = useState<LayoutSpace | 'theme'>('theme')
  const [direction, setDirection] = useState<'responsive' | 'row' | 'column'>('responsive')
  const [gridMode, setGridMode] = useState<'responsive' | 'auto'>('responsive')
  const [containerSize, setContainerSize] = useState<ContainerSize>('full')
  const spacing = gap === 'theme' ? undefined : gap
  const gapControl = (
    <Inline
      gap="xs"
      className="layout-preview-controls"
      role="group"
      aria-label={tr('Layout spacing')}
    >
      <Text as="span" variant="label">
        {tr('Gap')}
      </Text>
      {(['theme', 'sm', 'md', 'lg'] as const).map((value) => (
        <Button
          key={value}
          size="sm"
          variant={gap === value ? 'soft' : 'text'}
          aria-pressed={gap === value}
          onClick={() => setGap(value)}
        >
          {value === 'theme' ? tr('Theme default') : value.toUpperCase()}
        </Button>
      ))}
    </Inline>
  )
  const note = (
    <Text as="p" variant="description" className="layout-preview-note">
      {tr('Spacing, surfaces, and corners follow your theme settings.')}
    </Text>
  )

  switch (id) {
    case 'box':
      return (
        <Stack gap="lg">
          <Grid minItemWidth={170}>
            {(['surface', 'subtle', 'outlined', 'elevated'] as const).map((variant, index) => (
              <PreviewTile
                key={variant}
                number={`0${index + 1}`}
                title={tr(
                  variant === 'surface'
                    ? 'Surface'
                    : variant === 'subtle'
                      ? 'Subtle'
                      : variant === 'outlined'
                        ? 'Outlined'
                        : 'Elevated',
                )}
                variant={variant}
                description={tr('One surface. Shared theme tokens.')}
              />
            ))}
          </Grid>
          <Box as="section" variant="subtle" padding={{ base: 'md', md: 'lg' }} radius="lg">
            <Inline justify="between">
              <Stack gap="xs">
                <Text as="strong" variant="label">
                  {tr('A reusable surface')}
                </Text>
                <Text as="p" variant="description" className="layout-preview-note">
                  {tr('Use semantic elements and responsive padding without a custom stylesheet.')}
                </Text>
              </Stack>
              <Badge variant="primary">{tr('Theme aware')}</Badge>
            </Inline>
          </Box>
          {note}
        </Stack>
      )
    case 'stack':
      return (
        <Stack gap="lg">
          <Inline justify="between">
            {gapControl}
            <Inline gap="xs" role="group" aria-label={tr('Stack direction')}>
              {(['responsive', 'row', 'column'] as const).map((value) => (
                <Button
                  key={value}
                  size="sm"
                  variant={direction === value ? 'soft' : 'text'}
                  aria-pressed={direction === value}
                  onClick={() => setDirection(value)}
                >
                  {tr(
                    value === 'responsive'
                      ? 'Responsive'
                      : value === 'row'
                        ? 'Horizontal'
                        : 'Vertical',
                  )}
                </Button>
              ))}
            </Inline>
          </Inline>
          <Stack
            direction={direction === 'responsive' ? { base: 'column', md: 'row' } : direction}
            gap={spacing}
          >
            <PreviewTile
              number="01"
              title={tr('Plan')}
              description={tr('Give every item room to breathe.')}
            />
            <PreviewTile
              number="02"
              title={tr('Create')}
              description={tr('Keep the same rhythm across a page.')}
            />
            <PreviewTile
              number="03"
              title={tr('Share')}
              description={tr('Adapt direction as space changes.')}
            />
          </Stack>
          {note}
        </Stack>
      )
    case 'inline':
      return (
        <Stack gap="lg">
          {gapControl}
          <Inline gap={spacing} variant="outlined" justify="between">
            <Inline gap="sm">
              <Box
                as="span"
                background="primary"
                color="primary"
                radius="md"
                className="layout-preview-number"
              >
                <Text as="span" variant="label">
                  A
                </Text>
              </Box>
              <Stack gap={0}>
                <Text as="strong" variant="label">
                  Aria workspace
                </Text>
                <Text as="p" variant="description" className="layout-preview-note">
                  {tr('Aligned, with room to wrap.')}
                </Text>
              </Stack>
            </Inline>
            <Inline gap="xs">
              <Button size="sm">{tr('Preview')}</Button>
              <Button size="sm" variant="contained">
                {tr('Create project')}
              </Button>
            </Inline>
          </Inline>
          <Inline gap={spacing}>
            {['Design', 'Engineering', 'Operations', 'Product', 'Finance', 'Marketing'].map(
              (label) => (
                <Badge key={label} variant="primary">
                  {tr(label)}
                </Badge>
              ),
            )}
          </Inline>
          {note}
        </Stack>
      )
    case 'grid':
      return (
        <Stack gap="lg">
          <Inline justify="between">
            {gapControl}
            <Inline gap="xs" role="group" aria-label={tr('Grid layout')}>
              {(['responsive', 'auto'] as const).map((value) => (
                <Button
                  key={value}
                  size="sm"
                  variant={gridMode === value ? 'soft' : 'text'}
                  aria-pressed={gridMode === value}
                  onClick={() => setGridMode(value)}
                >
                  {tr(value === 'auto' ? 'Auto fit' : 'Responsive')}
                </Button>
              ))}
            </Inline>
          </Inline>
          <Grid
            columns={{ base: 1, sm: 2, lg: 3 }}
            minItemWidth={gridMode === 'auto' ? 190 : undefined}
            gap={spacing}
          >
            {['Overview', 'Projects', 'Documents', 'Activity', 'Reports', 'Settings'].map(
              (label, index) => (
                <PreviewTile
                  key={label}
                  number={`0${index + 1}`}
                  title={tr(label)}
                  description={tr('Equal columns, consistent spacing.')}
                />
              ),
            )}
          </Grid>
          {note}
        </Stack>
      )
    case 'grid-item':
      return (
        <Stack gap="lg">
          {gapControl}
          <Grid columns={{ base: 1, md: 12 }} gap={spacing}>
            <GridItem colSpan={{ base: 1, md: 8 }} variant="outlined">
              <Stack gap="sm">
                <Badge variant="primary">8 / 12</Badge>
                <Text as="strong" variant="label">
                  {tr('Main content')}
                </Text>
                <Text as="p" variant="description" className="layout-preview-note">
                  {tr('A wider area for the important details.')}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 4 }} variant="subtle">
              <Stack gap="sm">
                <Badge>4 / 12</Badge>
                <Text as="strong" variant="label">
                  {tr('Supporting details')}
                </Text>
                <Text as="p" variant="description" className="layout-preview-note">
                  {tr('A compact space for extra context.')}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan="full" variant="outlined">
              <Inline justify="between">
                <Text as="strong" variant="label">
                  {tr('Full width footer')}
                </Text>
                <Badge variant="success">{tr('All columns')}</Badge>
              </Inline>
            </GridItem>
          </Grid>
          {note}
        </Stack>
      )
    case 'container':
      return (
        <Stack gap="lg">
          <Inline gap="xs" role="group" aria-label={tr('Container width')}>
            {(['full', 'sm', 'md', 'lg', 'xl'] as const).map((value) => (
              <Button
                key={value}
                size="sm"
                variant={containerSize === value ? 'soft' : 'text'}
                aria-pressed={containerSize === value}
                onClick={() => setContainerSize(value)}
              >
                {value === 'full' ? tr('Full width') : value.toUpperCase()}
              </Button>
            ))}
          </Inline>
          <Box variant="outlined" padding="sm" className="layout-preview-container-stage">
            <Container size={containerSize} variant="subtle">
              <Stack gap="sm">
                <Badge variant="primary">
                  {containerSize === 'full' ? tr('Full width') : containerSize.toUpperCase()}
                </Badge>
                <Text as="strong" variant="label">
                  {tr('A width that suits your content')}
                </Text>
                <Text as="p" variant="description" className="layout-preview-note">
                  {tr('Full width by default. Choose a reading width when you need one.')}
                </Text>
              </Stack>
            </Container>
          </Box>
          {note}
        </Stack>
      )
    case 'divider':
      return (
        <Stack gap="lg">
          <Box variant="outlined">
            <Stack gap={0}>
              <Text as="strong" variant="label">
                {tr('Project overview')}
              </Text>
              <Divider spacing="md" />
              <Text as="p" variant="description" className="layout-preview-note">
                {tr('Separate related sections with a shared border token.')}
              </Text>
            </Stack>
          </Box>
          <Inline gap="md" align="stretch" variant="subtle" padding="md">
            <Text as="span" variant="label">
              {tr('Overview')}
            </Text>
            <Divider orientation="vertical" />
            <Text as="span" variant="label">
              {tr('Activity')}
            </Text>
            <Divider orientation="vertical" />
            <Text as="span" variant="label">
              {tr('Settings')}
            </Text>
          </Inline>
          {note}
        </Stack>
      )
    case 'spacer':
      return (
        <Stack gap="lg">
          {gapControl}
          <Inline variant="outlined" wrap={false}>
            <Text as="strong" variant="label">
              {tr('Workspace actions')}
            </Text>
            <Spacer axis="horizontal" grow />
            <Button size="sm" variant="contained">
              {tr('Continue')}
            </Button>
          </Inline>
          <Box variant="subtle">
            <Stack gap={0}>
              <Box variant="outlined" padding="sm">
                <Text as="span" variant="label">
                  {tr('Before the space')}
                </Text>
              </Box>
              <Spacer size={spacing} />
              <Box variant="outlined" padding="sm">
                <Text as="span" variant="label">
                  {tr('After the space')}
                </Text>
              </Box>
            </Stack>
          </Box>
          {note}
        </Stack>
      )
    default:
      return null
  }
}
