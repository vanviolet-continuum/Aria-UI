// The sidebar follows the actual portable UI folders, including newly added folders.
const folders = import.meta.glob('../../template/ui/*/index.ts')

const descriptions: Record<string, [string, string, string]> = {
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
    'Calendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker',
    'Choose a day, a range, or a moment.',
    'const [date, setDate] = useState<string>()\n\n<DatePicker value={date} onChange={setDate} />',
  ],
  checkbox: [
    'Checkbox',
    'Make one choice, or a few.',
    '<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />',
  ],
  chip: [
    'Chip',
    'Selections that stay easy to see and remove.',
    '<Chip variant="primary" onRemove={remove}>Design</Chip>',
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
    'DataTable',
    'Sort, select, filter, and explore your records.',
    '<DataTable data={rows} columns={columns}\n  getRowId={row => row.id} initialPageSize={8} />',
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
    const id = path.split('/').at(-2)!
    const [imports, description, usage] = descriptions[id] ?? [
      id,
      'A reusable part of your workspace.',
      '',
    ]
    const from = id === 'status-badge' ? '@/template/ui/status-badge' : '@/template/ui'
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
