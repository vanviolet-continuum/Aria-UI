import { useState } from 'react'
import { ArrowRight, Download, Layers3, Plus, Sparkles } from 'lucide-react'
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Combobox,
  Divider,
  Drawer,
  Eyebrow,
  Grid,
  Heading,
  HeadingGroup,
  Inline,
  Input,
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
  PageHeaderTitleRow,
  SearchInput,
  SectionHeader,
  SettingsRow,
  SettingsRowContent,
  SettingsRowControl,
  Stack,
  Switch,
  Text,
  Toolbar,
  ToolbarActions,
  ToolbarGroup,
  toast,
  type HeadingGroupSize,
  type LayoutVariant,
} from '../../template/ui'
import { useI18n } from '../../template/i18n'
import './blocks.preview.css'

export function BlocksPreview({ id }: { id: string }) {
  const { t: tr } = useI18n()
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState<HeadingGroupSize>('md')
  const [variant, setVariant] = useState<LayoutVariant>('outlined')
  const [notifications, setNotifications] = useState(true)
  const [digest, setDigest] = useState(false)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [name, setName] = useState('Aria Studio')
  const notify = () => toast.success(tr('Changes saved'))
  const sizeControl = (
    <Inline gap="xs" role="group" aria-label={tr('Block size')}>
      <Text as="span" size="sm" tone="muted">
        {tr('Size')}
      </Text>
      {(['sm', 'md', 'lg'] as const).map((value) => (
        <Button
          key={value}
          size="sm"
          variant={size === value ? 'soft' : 'text'}
          aria-pressed={size === value}
          onClick={() => setSize(value)}
        >
          {value.toUpperCase()}
        </Button>
      ))}
    </Inline>
  )
  const sampleActions = (
    <Button size="sm" variant="contained" onClick={notify}>
      <Plus size={14} />
      {tr('Create project')}
    </Button>
  )

  switch (id) {
    case 'heading-group':
      return (
        <Stack gap="lg">
          {sizeControl}
          <HeadingGroup
            size={size}
            eyebrow={tr('Project overview')}
            title={tr('Bring your ideas together.')}
            description={tr('A shared heading pattern for pages, cards, and drawers.')}
            trailing={<Badge variant="success">{tr('Active')}</Badge>}
            actions={sampleActions}
          />
          <Divider spacing="sm" />
          <HeadingGroup
            size={size}
            layout="stacked"
            align="center"
            eyebrow={
              <>
                <Sparkles size={13} />
                {tr('One flexible composition')}
              </>
            }
            title={tr('Make room for your next idea.')}
            description={tr(
              'Change the alignment, add your own content, and keep the same visual rhythm.',
            )}
            actions={
              <Button onClick={notify}>
                {tr('Get started')}
                <ArrowRight size={14} />
              </Button>
            }
          />
        </Stack>
      )
    case 'page-header':
      return (
        <Stack gap="lg">
          {sizeControl}
          <PageHeader
            size={size}
            eyebrow={tr('TABLE EXAMPLE')}
            title={tr('People, in one place.')}
            description={tr(
              'A complete table with search, filters, selection, pinned columns, and row actions.',
            )}
            actions={
              <Button onClick={() => setOpen(true)}>
                {tr('Open in drawer')}
                <ArrowRight size={14} />
              </Button>
            }
            style={{ marginBottom: 0 }}
          />
          <Box variant="subtle">
            <PageHeader size={size} style={{ marginBottom: 0 }}>
              <PageHeaderContent>
                <Eyebrow>ARIA STUDIO</Eyebrow>
                <PageHeaderTitleRow>
                  <PageHeaderTitle>{tr('Your workspace')}</PageHeaderTitle>
                  <Badge variant="success" dot>
                    {tr('Active')}
                  </Badge>
                </PageHeaderTitleRow>
                <PageHeaderDescription>
                  {tr('A custom composition with a badge, metadata, and your own actions.')}
                </PageHeaderDescription>
                <Inline gap="sm">
                  <Text as="span" size="sm" tone="muted">
                    {tr('8 team members')}
                  </Text>
                  <Badge>{tr('Professional')}</Badge>
                </Inline>
              </PageHeaderContent>
              <PageHeaderActions>{sampleActions}</PageHeaderActions>
            </PageHeader>
          </Box>
          <Drawer open={open} onOpenChange={setOpen} title={tr('Reusable blocks')}>
            <Stack gap="lg">
              <PageHeader
                size="sm"
                eyebrow={tr('Project overview')}
                title="Aria Studio"
                description={tr('The same heading block fits a narrower space.')}
                style={{ marginBottom: 0 }}
              />
              <Card
                title={tr('Details')}
                description={tr('Everything follows the same theme.')}
                body={<Text>{tr('Your content goes here.')}</Text>}
              />
            </Stack>
          </Drawer>
        </Stack>
      )
    case 'section-header':
      return (
        <Stack gap="lg">
          {sizeControl}
          <Card>
            <CardBody>
              <Stack gap="lg">
                <SectionHeader
                  size={size}
                  leading={<Layers3 size={20} />}
                  title={tr('Project details')}
                  description={tr('Keep the essentials clear and easy to find.')}
                  actions={
                    <Button size="sm" onClick={notify}>
                      {tr('Edit')}
                    </Button>
                  }
                />
                <Divider />
                <Text tone="secondary">
                  {tr('Use this heading inside cards, form sections, and drawer content.')}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <SectionHeader
            size={size}
            title={
              <Inline gap="sm">
                <Text as="span" variant="label">
                  {tr('Team members')}
                </Text>
                <Badge>8</Badge>
              </Inline>
            }
            description={tr('Titles and descriptions can include your own components.')}
          />
        </Stack>
      )
    case 'card':
      return (
        <Stack gap="lg">
          <Inline justify="between">
            {sizeControl}
            <Inline gap="xs" role="group" aria-label={tr('Card appearance')}>
              {(['outlined', 'subtle', 'elevated'] as const).map((value) => (
                <Button
                  key={value}
                  size="sm"
                  variant={variant === value ? 'soft' : 'text'}
                  aria-pressed={variant === value}
                  onClick={() => setVariant(value)}
                >
                  {tr(
                    value === 'outlined' ? 'Outlined' : value === 'subtle' ? 'Subtle' : 'Elevated',
                  )}
                </Button>
              ))}
            </Inline>
          </Inline>
          <Grid minItemWidth={240}>
            <Card
              size={size}
              variant={variant}
              title={tr('A simple card')}
              description={tr('Pass content and actions through props.')}
              actions={<Badge variant="primary">{tr('Ready')}</Badge>}
              footer={
                <Button size="sm" onClick={notify}>
                  {tr('View details')}
                  <ArrowRight size={14} />
                </Button>
              }
            >
              <Text tone="secondary">
                {tr('The header, body, and footer share the same padding and surface tokens.')}
              </Text>
            </Card>
            <Card size={size} variant={variant}>
              <CardHeader divider>
                <PageHeaderContent>
                  <Eyebrow>{tr('Custom composition')}</Eyebrow>
                  <Heading as="h3" size="xs">
                    {tr('Your own arrangement')}
                  </Heading>
                </PageHeaderContent>
              </CardHeader>
              <CardBody>
                <Stack gap="md">
                  <Text tone="secondary">
                    {tr(
                      'Compose the parts directly when your content needs a different structure.',
                    )}
                  </Text>
                  <Badge variant="success" dot>
                    {tr('Connected')}
                  </Badge>
                </Stack>
              </CardBody>
              <CardFooter divider>
                <Text as="span" size="sm" tone="muted">
                  {tr('Updated just now')}
                </Text>
                <Button size="sm" onClick={notify}>
                  {tr('Manage')}
                </Button>
              </CardFooter>
            </Card>
          </Grid>
        </Stack>
      )
    case 'toolbar':
      return (
        <Stack gap="lg">
          <Toolbar label={tr('Project actions')} variant="outlined">
            <ToolbarGroup grow>
              <SearchInput
                className="blocks-preview-search"
                value={search}
                onChange={setSearch}
                placeholder={tr('Search projects…')}
              />
              <Combobox
                className="blocks-preview-status"
                searchable={false}
                value={status}
                onChange={setStatus}
                options={[
                  { value: 'all', label: tr('All statuses') },
                  { value: 'active', label: tr('Active') },
                  { value: 'paused', label: tr('Paused') },
                ]}
              />
            </ToolbarGroup>
            <ToolbarActions>
              <Button onClick={notify}>
                <Download size={14} />
                {tr('Export')}
              </Button>
              {sampleActions}
            </ToolbarActions>
          </Toolbar>
          <Card
            variant="subtle"
            body={
              <Text tone="secondary">
                {tr('Search, filters, and actions wrap while keeping their groups together.')}
              </Text>
            }
          />
        </Stack>
      )
    case 'settings-row':
      return (
        <Stack gap="lg">
          {sizeControl}
          <Card>
            <CardBody>
              <Stack gap={0}>
                <SettingsRow
                  size={size}
                  paddingX={0}
                  divider
                  label={tr('Project notifications')}
                  description={tr('Keep the team informed about project activity.')}
                  control={
                    <Switch
                      checked={notifications}
                      onChange={(event) => setNotifications(event.target.checked)}
                    />
                  }
                />
                <SettingsRow
                  size={size}
                  paddingX={0}
                  label={tr('Weekly digest')}
                  description={tr('Receive a short summary of your workspace.')}
                  control={
                    <Switch
                      checked={digest}
                      onChange={(event) => setDigest(event.target.checked)}
                    />
                  }
                />
              </Stack>
            </CardBody>
          </Card>
          <SettingsRow
            size={size}
            variant="outlined"
            direction={{ base: 'column', md: 'row' }}
            label={tr('Workspace name')}
            description={tr('Use any control that fits your application.')}
            control={(connection) => (
              <Input
                {...connection}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            )}
          />
          <SettingsRow size={size} variant="subtle">
            <SettingsRowContent>
              <Heading as="h3" size="xs">
                {tr('Custom content')}
              </Heading>
              <Text size="sm" tone="secondary">
                {tr('Compose the label area and actions yourself when needed.')}
              </Text>
            </SettingsRowContent>
            <SettingsRowControl>
              <Button size="sm" onClick={notify}>
                {tr('Configure')}
              </Button>
            </SettingsRowControl>
          </SettingsRow>
        </Stack>
      )
    default:
      return null
  }
}
