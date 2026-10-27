// The sidebar follows the actual portable UI folders, including newly added folders.
const folders = import.meta.glob('../../template/ui/*/index.ts')

const descriptions: Record<string, [string, string, string]> = {
  'field-label': [
    'FieldLabel, Input',
    'Accessible form labels with a shared text style.',
    '<FieldLabel htmlFor="workspace" required>Workspace name</FieldLabel>\n<Input id="workspace" />',
  ],
  'field-hint': [
    'FieldHint, Input',
    'Helpful guidance connected to your form controls.',
    '<Input aria-describedby="workspace-hint" />\n<FieldHint id="workspace-hint">Choose a name your team will recognize.</FieldHint>',
  ],
  'field-error': [
    'FieldError, Input',
    'Clear validation messages using the error text role.',
    '<Input invalid aria-describedby="workspace-error" />\n<FieldError id="workspace-error">Enter a workspace name.</FieldError>',
  ],
  'text-link': [
    'TextLink',
    'Semantic links with shared colors and focus styles.',
    '<TextLink href="/settings/appearance">Customize your theme</TextLink>',
  ],
  'code-text': [
    'Text, CodeText',
    'Inline code with the shared monospace text role.',
    '<Text>Use <CodeText>variant="body"</CodeText> for your content.</Text>',
  ],
  'code-block': [
    'CodeBlock',
    'Readable code blocks with optional line wrapping.',
    '<CodeBlock>{`<Text variant="body">Your content</Text>`}</CodeBlock>',
  ],
  'metric-value': [
    'MetricValue',
    'Consistent numbers for statistics and summaries.',
    '<MetricValue tone="primary">12,840</MetricValue>',
  ],
  text: [
    'Text',
    'Readable text with shared sizes, tones, and line limits.',
    '<Text variant="description" lineClamp={2}>Your description goes here.</Text>',
  ],
  heading: [
    'Heading',
    'Consistent typography with independent visual size and heading level.',
    '<Heading as="h2" variant="page">Your workspace</Heading>',
  ],
  eyebrow: [
    'Eyebrow',
    'A small introduction for headings and content blocks.',
    '<Eyebrow tone="primary">ARIA UI / WORKSPACE</Eyebrow>',
  ],
  'heading-group': [
    'HeadingGroup',
    'A flexible heading pattern for pages, cards, and drawers.',
    '<HeadingGroup eyebrow="WORKSPACE" title="Bring your ideas together."\n  description="A shared pattern for every part of your application." />',
  ],
  'page-header': [
    'PageHeader, Button',
    'Page introductions with optional navigation, metadata, and custom actions.',
    '<PageHeader eyebrow="TEAM" title="People, in one place."\n  description="Manage your workspace members."\n  actions={<Button>Add member</Button>} />',
  ],
  'section-header': [
    'SectionHeader, Badge',
    'A shared heading for panels, forms, and drawer sections.',
    '<SectionHeader title="Project details" description="Keep the essentials clear."\n  actions={<Badge variant="success">Active</Badge>} />',
  ],
  card: [
    'Card, Text, Button',
    'Composable surfaces with consistent headers, bodies, and footers.',
    '<Card title="Project overview" description="Everything in one place."\n  footer={<Button>View details</Button>}>\n  <Text>Your content goes here.</Text>\n</Card>',
  ],
  toolbar: [
    'Toolbar, ToolbarGroup, ToolbarActions, Button',
    'Flexible groups for search, filters, and contextual actions.',
    '<Toolbar label="Project actions">\n  <ToolbarGroup grow>Project directory</ToolbarGroup>\n  <ToolbarActions><Button>Export</Button><Button>Create project</Button></ToolbarActions>\n</Toolbar>',
  ],
  'settings-row': [
    'SettingsRow, Switch',
    'Clear labels and descriptions with your own accessible controls.',
    '<SettingsRow label="Project notifications"\n  description="Keep the team informed."\n  control={<Switch defaultChecked />} />',
  ],
  box: [
    'Box, Stack, Text',
    'Theme-aware surfaces, spacing, and semantic elements.',
    '<Box as="section" variant="outlined" padding={{ base: "md", md: "lg" }}>\n  <Stack><Text as="strong" variant="label">Project overview</Text><Text as="p" variant="body">Your content goes here.</Text></Stack>\n</Box>',
  ],
  stack: [
    'Stack, Box',
    'Consistent spacing and responsive direction for any composition.',
    '<Stack direction={{ base: "column", md: "row" }} gap="lg" align="stretch">\n  <Box variant="outlined">Overview</Box>\n  <Box variant="subtle">Details</Box>\n</Stack>',
  ],
  inline: [
    'Inline, Badge, Button',
    'Aligned rows that wrap naturally as space changes.',
    '<Inline justify="between" gap="sm">\n  <Badge variant="success">Active</Badge>\n  <Button>View details</Button>\n</Inline>',
  ],
  grid: [
    'Grid, Box',
    'Responsive columns and auto-fit layouts with shared spacing.',
    '<Grid columns={{ base: 1, sm: 2, lg: 3 }} gap="lg">\n  <Box variant="outlined">Overview</Box>\n  <Box variant="outlined">Projects</Box>\n  <Box variant="outlined">Reports</Box>\n</Grid>',
  ],
  'grid-item': [
    'Grid, GridItem',
    'Flexible column spans for main content and supporting details.',
    '<Grid columns={{ base: 1, md: 12 }}>\n  <GridItem colSpan={{ base: 1, md: 8 }} variant="outlined">Main content</GridItem>\n  <GridItem colSpan={{ base: 1, md: 4 }} variant="subtle">Supporting details</GridItem>\n  <GridItem colSpan="full">Footer</GridItem>\n</Grid>',
  ],
  container: [
    'Container, Stack, Heading, Text',
    'Full width by default, with optional centered reading widths.',
    '<Container as="section" size="full" padding={{ base: "md", lg: "lg" }}>\n  <Stack><Heading as="h2" variant="section">Workspace</Heading><Text as="p" variant="body">Your page content.</Text></Stack>\n</Container>',
  ],
  divider: [
    'Stack, Divider, Text',
    'A shared separator for sections and horizontal toolbars.',
    '<Stack gap={0}>\n  <Text as="strong" variant="label">Overview</Text>\n  <Divider spacing="md" />\n  <Text as="p" variant="body">Project details.</Text>\n</Stack>',
  ],
  spacer: [
    'Inline, Spacer, Button, Text',
    'Intentional breathing room and flexible toolbar space.',
    '<Inline wrap={false}>\n  <Text as="strong" variant="label">Workspace</Text>\n  <Spacer axis="horizontal" grow />\n  <Button>Continue</Button>\n</Inline>',
  ],
  'action-menu': [
    'ActionMenu',
    'Contextual actions, kept neatly within reach.',
    '<ActionMenu items={[{ id: "view", label: "View details", onSelect: view }]} />',
  ],
  badge: [
    'Badge',
    'Small labels with a clear purpose.',
    '<Badge variant="success" dot>Active</Badge>',
  ],
  button: [
    'Button',
    'A considered set of actions, sizes, and colors.',
    '<Button variant="contained" onClick={save}>Save changes</Button>',
  ],
  calendar: [
    'Calendar, RangeCalendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker',
    'Choose a day, a range, or a moment.',
    'const [date, setDate] = useState<string>()\n\n<DatePicker value={date} onChange={setDate} />',
  ],
  checkbox: [
    'Checkbox, CheckboxField',
    'Make one choice, or a few.',
    '<CheckboxField variant="card" label="Keep me updated"\n  description="Include project activity" checked={checked}\n  onChange={e => setChecked(e.target.checked)} />',
  ],
  chip: [
    'Chip',
    'Selections that stay easy to see and remove.',
    '<Chip variant="primary" onRemove={remove}>Design</Chip>\n<Chip variant="success" appearance="outline">Active</Chip>\n<Chip variant="primary" appearance="solid" size="sm">New</Chip>',
  ],
  combobox: [
    'Combobox',
    'Searchable choices, with room for helpful descriptions.',
    '<Combobox value={value} onChange={setValue}\n  options={[{ value: "design", label: "Design" }]} />',
  ],
  command: [
    'Command',
    'Find a page or an action with a few keystrokes.',
    '<Command items={[{ id: "home", label: "Home", onSelect: goHome }]} />',
  ],
  'confirm-dialog': [
    'ConfirmDialog',
    'Give important actions a moment of clarity.',
    '<ConfirmDialog open={open} onOpenChange={setOpen}\n  description="Remove this sample record?" onConfirm={remove} />',
  ],
  'confirm-drawer': [
    'ConfirmDrawer',
    'A focused confirmation with room for context.',
    '<ConfirmDrawer open={open} onOpenChange={setOpen}\n  description="Remove this sample record?" onConfirm={remove} />',
  ],
  'data-table': [
    'DataTable, type ColumnDef',
    'Sort, select, filter, and explore your records.',
    'type Member = { id: string; name: string; email: string }\nconst columns: ColumnDef<Member>[] = [\n  { id: "name", header: "Name", accessor: "name", sortable: true, defaultPin: "left", pinable: false },\n  { id: "email", header: "Email", accessor: "email", sortable: true },\n]\n\n<DataTable data={rows} columns={columns} pinable\n  getRowId={row => row.id} initialPageSize={8} />',
  ],
  detail: [
    'DetailView, DetailSection, DetailList',
    'A clear hierarchy for the full story.',
    '<DetailView title={record.name}>\n  <DetailSection title="Overview">\n    <DetailList items={[{ id: "email", label: "Email", value: record.email }]} />\n  </DetailSection>\n</DetailView>',
  ],
  drawer: [
    'Drawer, Button',
    'A comfortable space beside the current page.',
    '<Drawer open={open} onOpenChange={setOpen} title="Details"\n  footer={<Button onClick={() => setOpen(false)}>Close</Button>}>\n  <RecordDetails />\n</Drawer>',
  ],
  'empty-state': [
    'EmptyState, Button',
    'A helpful next step when there is nothing to show.',
    '<EmptyState title="A fresh start"\n  action={<Button onClick={create}>Create project</Button>} />',
  ],
  field: [
    'Field, Input',
    'Labels, hints, and validation that belong together.',
    '<Field label="Email" required hint="Your work email.">\n  <Input type="email" required />\n</Field>',
  ],
  'file-upload': [
    'FileUpload',
    'Drop files in, with clear limits and feedback.',
    '<FileUpload files={files} onChange={setFiles}\n  accept="image/*,.pdf" maxFiles={3} />',
  ],
  'full-calendar': [
    'FullCalendar',
    'A bigger picture of the days ahead.',
    '<FullCalendar events={events} height={520}\n  onEventClick={id => openEvent(id)} />',
  ],
  'icon-button': [
    'IconButton',
    'Compact actions with accessible labels.',
    '<IconButton label="Copy" variant="outlined" onClick={copy}>\n  <Copy size={16} />\n</IconButton>',
  ],
  illustrations: [
    'EmptyIllustration, SearchIllustration, UploadIllustration',
    'Small illustrations that follow your theme.',
    '<EmptyIllustration size={140} />',
  ],
  input: [
    'Input',
    'A dependable starting point for every form.',
    '<Input placeholder="Your name" value={name}\n  onChange={e => setName(e.target.value)} />',
  ],
  'input-otp': [
    'InputOTP',
    'A focused input for short verification codes.',
    '<InputOTP value={code} onChange={setCode} length={6} />',
  ],
  'loading-overlay': [
    'LoadingOverlay',
    'Keep the context visible while work happens.',
    '<LoadingOverlay loading={loading} label="Getting things ready…">\n  <YourContent />\n</LoadingOverlay>',
  ],
  menu: [
    'Menu, Button',
    'One menu system for actions, choices, and richer content.',
    '<Menu variant="rich" label="Workspace"\n  trigger={<Button>Open menu</Button>}\n  items={[{ id: "details", label: "View details",\n    description: "Take a closer look", onSelect: view }]} />',
  ],
  'not-found-state': [
    'NotFoundState, Button',
    'A friendly way back when a page is missing.',
    '<NotFoundState action={<Button onClick={goHome}>Home</Button>} />',
  ],
  'number-input': [
    'CurrencyInput, NumericInput, PhoneInput, PercentageInput',
    'Numbers with the right shape and formatting.',
    '<CurrencyInput currency="IDR" value={amount} onChange={setAmount} />',
  ],
  'parallel-stepper': [
    'ParallelStepper',
    'Independent workstreams, brought together at the finish.',
    '<ParallelStepper tracks={tracks} onProgressChange={updateTrack}\n  integration={{ title: "Launch", complete, onIntegrate: launch }} />',
  ],
  'password-input': [
    'PasswordInput',
    'Helpful strength feedback as you type.',
    '<PasswordInput value={password}\n  onChange={e => setPassword(e.target.value)} showStrength showRequirements />',
  ],
  'pdf-viewer': [
    'PdfViewer, FileUpload',
    'Read a document without leaving the workspace.',
    '<FileUpload files={files} onChange={setFiles} accept=".pdf" maxFiles={1} />\n<PdfViewer file={files[0] ?? null} />',
  ],
  popover: [
    'Popover, Button',
    'A shared surface for quick information and small forms.',
    '<Popover variant="form" size="md" trigger={<Button>Open panel</Button>}>\n  <YourContent />\n</Popover>',
  ],
  'search-empty-state': [
    'SearchEmptyState',
    'A useful reset when the search comes up empty.',
    '<SearchEmptyState onReset={clearFilters} />',
  ],
  'search-input': [
    'SearchInput',
    'Search with a clear label and a quick reset.',
    '<SearchInput value={search} onChange={setSearch} placeholder="Search…" />',
  ],
  skeleton: [
    'Skeleton',
    'A quiet placeholder while content is on its way.',
    '<Skeleton width="100%" height={18} />',
  ],
  'status-badge': [
    'StatusBadge',
    'Consistent labels for stock and order states.',
    '<StatusBadge status="in-stock" />',
  ],
  stepper: [
    'Stepper',
    'A little structure for each step forward.',
    '<Stepper steps={steps} activeStep={step} onStepChange={setStep} />',
  ],
  switch: [
    'Switch',
    'A clear on or off for your preferences.',
    '<Switch checked={enabled} onChange={e => setEnabled(e.target.checked)} />',
  ],
  'table-filter': [
    'TableFilter',
    'Searchable filters that work together.',
    '<TableFilter filters={definitions} value={filters} onChange={setFilters} />',
  ],
  tabs: [
    'Tabs',
    'Related views, kept within the same context.',
    '<Tabs value={tab} onChange={setTab}\n  items={[{ value: "overview", label: "Overview" }, { value: "activity", label: "Activity" }]} />',
  ],
  textarea: [
    'Textarea',
    'A little more room for the story.',
    '<Textarea rows={5} placeholder="Tell us more…" />',
  ],
  toast: [
    'toast, Button',
    'Timely feedback for the actions that matter.',
    '<Button onClick={() => toast.success("Changes saved")}>Save</Button>',
  ],
  'tree-view': [
    'TreeView',
    'Explore folders without losing your place.',
    '<TreeView nodes={nodes} selectedId={selected}\n  onSelect={node => setSelected(node.id)} />',
  ],
}

export const componentCatalog = Object.keys(folders)
  .map((path) => {
    const folder = path.split('/').at(-2)!
    const id = folder.replaceAll('.', '-')
    const [imports, description, usage] = descriptions[id] ?? [
      id,
      'A reusable part of your workspace.',
      '',
    ]
    const from = id === 'status-badge' ? '@/template/ui/status.badge' : '@/template/ui'
    return {
      id,
      name: id
        .split('-')
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join(' '),
      description,
      code: `import { ${imports} } from '${from}'\n\n${usage}`,
    }
  })
  .sort((a, b) => a.id.localeCompare(b.id))
