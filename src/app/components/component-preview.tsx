import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Copy,
  Eye,
  FileText,
  Folder,
  Layers3,
  Mail,
  MoreHorizontal,
  Plus,
  Settings2,
  Trash2,
} from 'lucide-react'
import {
  ActionMenu,
  Badge,
  Button,
  Calendar,
  Checkbox,
  Chip,
  Combobox,
  Command,
  ConfirmDialog,
  ConfirmDrawer,
  CurrencyInput,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DetailList,
  DetailSection,
  DetailView,
  Drawer,
  EmptyState,
  Field,
  FileUpload,
  FullCalendar,
  IconButton,
  Input,
  InputOTP,
  LoadingOverlay,
  Menu,
  NotFoundState,
  NumericInput,
  ParallelStepper,
  PasswordInput,
  PdfViewer,
  PercentageInput,
  PhoneInput,
  Popover,
  SearchEmptyState,
  SearchInput,
  Skeleton,
  Stepper,
  Switch,
  TableFilter,
  Tabs,
  Textarea,
  TimePicker,
  TreeView,
  toast,
  type DateRange,
  type TableFilterValue,
} from '../../template'
import { StatusBadge } from '../../template/ui/status-badge'
import { useI18n } from '../../template/i18n'
import { MemberTable } from '../pages/table-example-page'
import { illustrationCatalog } from '../illustrations/illustration-catalog'

export function ComponentPreview({ id }: { id: string }) {
  const { t: tr } = useI18n()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [choice, setChoice] = useState('design')
  const [checked, setChecked] = useState(true)
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [date, setDate] = useState<string>()
  const [range, setRange] = useState<DateRange>({})
  const [step, setStep] = useState(0)
  const [filters, setFilters] = useState<TableFilterValue>({})
  const [progress, setProgress] = useState([0, 0])
  const [integrated, setIntegrated] = useState(false)
  const notify = () => {
    toast.success(tr('Changes saved'))
  }
  const field = (
    <Field label={tr('Email address')} hint={tr('Use your work email.')}>
      <Input
        type="email"
        placeholder="hello@example.com"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        leadingIcon={<Mail size={15} />}
      />
    </Field>
  )
  const steps = [
    { id: 'details', title: tr('Details') },
    { id: 'team', title: tr('Team') },
    { id: 'review', title: tr('Review') },
  ]
  const menuItems = [
    {
      id: 'view',
      label: tr('View details'),
      description: tr('Take a closer look at this record'),
      icon: <Eye size={16} />,
      onSelect: () => navigate('/details'),
    },
    {
      id: 'copy',
      label: tr('Duplicate'),
      description: tr('Create a fresh copy'),
      icon: <Copy size={16} />,
      onSelect: notify,
    },
    {
      id: 'archive',
      label: tr('Archive'),
      description: tr('Move this sample out of the way'),
      icon: <Folder size={16} />,
      separator: true,
      onSelect: notify,
    },
  ]
  const actions = (
    <div className="catalog-preview-row">
      <Button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
        {tr('Back')}
      </Button>
      <Button
        variant="contained"
        onClick={() => setStep(Math.min(2, step + 1))}
        disabled={step === 2}
      >
        {tr('Continue')}
        <ArrowRight size={14} />
      </Button>
    </div>
  )
  const details = (
    <DetailView
      title="Aria Studio"
      eyebrow="WORKSPACE / ARIA-024"
      avatar={<Layers3 size={24} />}
      badge={
        <Badge variant="success" dot>
          {tr('Active')}
        </Badge>
      }
    >
      <DetailSection title={tr('Overview')}>
        <DetailList
          items={[
            { id: 'owner', label: tr('Owner'), value: 'Nadia Putri' },
            { id: 'email', label: tr('Email address'), value: 'nadia@example.com' },
            { id: 'team', label: tr('Team members'), value: 8 },
            { id: 'plan', label: tr('Plan'), value: 'Professional' },
          ]}
        />
      </DetailSection>
    </DetailView>
  )

  switch (id) {
    case 'action-menu':
      return (
        <div className="catalog-preview-row">
          <span>{tr('Workspace actions')}</span>
          <ActionMenu items={menuItems} />
        </div>
      )
    case 'badge':
      return (
        <div className="catalog-preview-stack">
          {(['soft', 'outline', 'solid'] as const).map((appearance) => (
            <div className="catalog-preview-row" key={appearance}>
              {(['neutral', 'primary', 'success', 'warning', 'danger', 'violet'] as const).map(
                (variant) => (
                  <Badge key={variant} variant={variant} appearance={appearance} dot>
                    {variant}
                  </Badge>
                ),
              )}
            </div>
          ))}
        </div>
      )
    case 'button':
      return (
        <div className="catalog-preview-stack">
          {(['contained', 'outlined', 'soft', 'text'] as const).map((variant) => (
            <div className="catalog-preview-row" key={variant}>
              {(['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const).map(
                (color) => (
                  <Button key={color} variant={variant} color={color} onClick={notify}>
                    {color}
                  </Button>
                ),
              )}
            </div>
          ))}
          <div className="catalog-preview-row">
            <Button disabled>{tr('Disabled')}</Button>
            <Button loading>{tr('Saving')}</Button>
            <Button variant="contained" onClick={notify}>
              <Plus size={15} />
              {tr('Create')}
            </Button>
          </div>
        </div>
      )
    case 'calendar':
      return (
        <div className="catalog-preview-grid">
          <Calendar value={date} onChange={setDate} />
          <div className="catalog-preview-stack">
            <DatePicker value={date} onChange={setDate} />
            <DateRangePicker value={range} onChange={setRange} />
            <DateTimePicker value={value || undefined} onChange={setValue} />
            <TimePicker value={choice.includes(':') ? choice : undefined} onChange={setChoice} />
          </div>
        </div>
      )
    case 'checkbox':
      return (
        <div className="catalog-preview-stack">
          <label className="catalog-preview-row">
            <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />
            {tr('Keep me updated')}
          </label>
          <label className="catalog-preview-row">
            <Checkbox defaultChecked />
            {tr('Include project activity')}
          </label>
          <label className="catalog-preview-row">
            <Checkbox disabled />
            {tr('Disabled')}
          </label>
        </div>
      )
    case 'chip':
      return (
        <div className="catalog-preview-row">
          {checked && (
            <Chip variant="primary" onRemove={() => setChecked(false)}>
              {tr('Design')}
            </Chip>
          )}
          <Chip variant="success">{tr('Active')}</Chip>
          <Chip icon={<Layers3 size={12} />}>Aria UI</Chip>
          {!checked && (
            <Button size="sm" onClick={() => setChecked(true)}>
              {tr('Reset')}
            </Button>
          )}
        </div>
      )
    case 'combobox':
      return (
        <div className="catalog-control">
          <Combobox
            value={choice}
            onChange={setChoice}
            options={[
              { value: 'design', label: tr('Design'), description: tr('Shape the experience') },
              {
                value: 'engineering',
                label: tr('Engineering'),
                description: tr('Bring the idea to life'),
              },
              { value: 'operations', label: tr('Operations') },
              { value: 'archived', label: tr('Archived'), disabled: true },
            ]}
          />
          <p>
            {tr('Selected')}: {choice}
          </p>
        </div>
      )
    case 'command':
      return (
        <Command
          items={[
            {
              id: 'table',
              label: tr('Table Example'),
              group: tr('Pages'),
              icon: <FileText size={16} />,
              onSelect: () => navigate('/table-example'),
            },
            {
              id: 'wizard',
              label: tr('Example Wizard'),
              group: tr('Pages'),
              icon: <Layers3 size={16} />,
              onSelect: () => navigate('/wizard'),
            },
            {
              id: 'theme',
              label: tr('Theme settings'),
              group: tr('Settings'),
              icon: <Settings2 size={16} />,
              onSelect: () => navigate('/settings/appearance'),
            },
          ]}
        />
      )
    case 'confirm-dialog':
      return (
        <>
          <Button color="error" onClick={() => setOpen(true)}>
            <Trash2 size={15} />
            {tr('Open confirmation')}
          </Button>
          <ConfirmDialog
            open={open}
            onOpenChange={setOpen}
            description={tr('This is a sample record in the component preview.')}
            onConfirm={notify}
          />
        </>
      )
    case 'confirm-drawer':
      return (
        <>
          <Button color="error" onClick={() => setOpen(true)}>
            {tr('Open confirmation drawer')}
          </Button>
          <ConfirmDrawer
            open={open}
            onOpenChange={setOpen}
            description={tr('This is a sample record in the component preview.')}
            onConfirm={() => {
              notify()
              setOpen(false)
            }}
          />
        </>
      )
    case 'data-table':
      return <MemberTable />
    case 'detail':
      return (
        <>
          {details}
          <div className="catalog-preview-row">
            <Button onClick={() => navigate('/details')}>
              {tr('View full page')}
              <ArrowRight size={14} />
            </Button>
          </div>
        </>
      )
    case 'drawer':
      return (
        <>
          <Button variant="contained" onClick={() => setOpen(true)}>
            {tr('Open drawer')}
            <ArrowRight size={14} />
          </Button>
          <Drawer
            open={open}
            onOpenChange={setOpen}
            title={tr('Workspace details')}
            size="lg"
            footer={<Button onClick={() => setOpen(false)}>{tr('Close')}</Button>}
          >
            {details}
          </Drawer>
        </>
      )
    case 'empty-state':
      return (
        <EmptyState
          action={
            <Button variant="contained" onClick={() => navigate('/wizard')}>
              <Plus size={14} />
              {tr('Create project')}
            </Button>
          }
        />
      )
    case 'field':
      return (
        <div className="catalog-preview-grid">
          {field}
          <Field label={tr('Project name')} error={tr('A project name is required.')}>
            <Input invalid placeholder={tr('Project name')} />
          </Field>
        </div>
      )
    case 'file-upload':
      return <FileUpload files={files} onChange={setFiles} maxFiles={3} accept="image/*,.pdf" />
    case 'full-calendar':
      return (
        <FullCalendar
          height={520}
          initialDate="2026-10-27"
          events={[
            {
              id: 'review',
              title: tr('Design review'),
              start: '2026-10-27T10:00:00',
              end: '2026-10-27T11:00:00',
            },
            { id: 'launch', title: tr('Project launch'), start: '2026-10-30' },
          ]}
          onEventClick={(eventId) =>
            toast.info(tr(eventId === 'review' ? 'Design review' : 'Project launch'))
          }
          onSelect={({ start }) => toast.info(start)}
        />
      )
    case 'icon-button':
      return (
        <div className="catalog-preview-row">
          <IconButton label={tr('Copy')} variant="contained" onClick={notify}>
            <Copy size={16} />
          </IconButton>
          <IconButton
            label={tr('Settings')}
            variant="outlined"
            onClick={() => navigate('/settings/appearance')}
          >
            <Settings2 size={16} />
          </IconButton>
          <IconButton label={tr('More actions')} variant="soft" shape="circle" onClick={notify}>
            <MoreHorizontal size={16} />
          </IconButton>
          <IconButton label={tr('Disabled')} disabled>
            <Trash2 size={16} />
          </IconButton>
        </div>
      )
    case 'illustrations':
      return (
        <div className="catalog-preview-stack">
          <div className="catalog-illustrations">
            {illustrationCatalog.map((item) => {
              const Artwork = item.component
              return (
                <div className="catalog-illustration-tile" key={item.id}>
                  <Artwork size={140} title={tr(item.name)} />
                  <code>{item.componentName}</code>
                </div>
              )
            })}
          </div>
          <Button onClick={() => navigate('/illustrations')}>
            {tr('View SVG illustration gallery')}
            <ArrowRight size={14} />
          </Button>
        </div>
      )
    case 'input':
      return (
        <div className="catalog-preview-grid">
          <Input
            placeholder={tr('Your name')}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Input placeholder="hello@example.com" leadingIcon={<Mail size={15} />} />
          <Input disabled placeholder={tr('Disabled input')} />
          <Input invalid aria-label={tr('Invalid input')} defaultValue={tr('Check this value')} />
        </div>
      )
    case 'input-otp':
      return (
        <div className="catalog-preview-stack">
          <InputOTP
            value={value}
            onChange={setValue}
            onComplete={() => toast.success(tr('Code entered'))}
          />
          <p>{tr('Enter a 6-digit code to see the completed state.')}</p>
        </div>
      )
    case 'loading-overlay':
      return (
        <div className="catalog-preview-stack">
          <Button onClick={() => setChecked(!checked)}>
            {tr(checked ? 'Hide loading' : 'Show loading')}
          </Button>
          <LoadingOverlay loading={checked}>
            <div className="catalog-loading-placeholder">
              <Skeleton height={24} width="65%" />
              <Skeleton height={14} width="90%" />
              <Skeleton height={14} width="80%" />
            </div>
          </LoadingOverlay>
        </div>
      )
    case 'menu':
      return (
        <div className="catalog-preview-row">
          {(['compact', 'default', 'rich'] as const).map((variant) => (
            <Menu
              key={variant}
              variant={variant}
              label={tr('Workspace actions')}
              description={variant === 'rich' ? tr('Choose what comes next.') : undefined}
              trigger={
                <Button>
                  {variant}
                  <MoreHorizontal size={15} />
                </Button>
              }
              items={menuItems}
            />
          ))}
          <Menu
            label={tr('View preferences')}
            selection="single"
            value={choice}
            onValueChange={setChoice}
            trigger={<Button variant="contained">{tr('Selection menu')}</Button>}
            items={[
              { id: 'design', label: tr('Design'), shortcut: 'DS' },
              { id: 'engineering', label: tr('Engineering'), shortcut: 'EN' },
            ]}
          />
          <Menu
            label={tr('Preferences')}
            trigger={<Button>{tr('Checkbox menu')}</Button>}
            items={[
              {
                id: 'notifications',
                label: tr('Notifications'),
                checked,
                keepOpen: true,
                onCheckedChange: setChecked,
              },
            ]}
          />
        </div>
      )
    case 'not-found-state':
      return (
        <NotFoundState
          action={<Button onClick={() => navigate('/')}>{tr('Back to home')}</Button>}
        />
      )
    case 'number-input':
      return (
        <div className="catalog-preview-grid">
          <Field label="IDR">
            <CurrencyInput value={value} onChange={setValue} placeholder="Rp 0" />
          </Field>
          <Field label={tr('Quantity')}>
            <NumericInput decimalScale={0} placeholder="25" />
          </Field>
          <Field label={tr('Phone number')}>
            <PhoneInput placeholder="+62 ___-____-_____" />
          </Field>
          <Field label={tr('Percentage')}>
            <PercentageInput placeholder="75 %" />
          </Field>
        </div>
      )
    case 'parallel-stepper':
      return (
        <ParallelStepper
          tracks={['Design', 'Engineering'].map((title, index) => ({
            id: String(index),
            title: tr(title),
            steps,
            completed: progress[index],
            icon: <Layers3 size={16} />,
          }))}
          onProgressChange={(trackId, completed) => {
            setProgress((current) =>
              current.map((count, index) => (index === Number(trackId) ? completed : count)),
            )
            setIntegrated(false)
          }}
          integration={{
            title: tr('Project launch'),
            complete: integrated,
            onIntegrate: () => {
              setIntegrated(true)
              notify()
            },
          }}
        />
      )
    case 'password-input':
      return (
        <div className="catalog-control">
          <PasswordInput
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={tr('Create a password')}
          />
        </div>
      )
    case 'pdf-viewer':
      return (
        <div className="catalog-preview-stack">
          <FileUpload
            files={files}
            onChange={setFiles}
            maxFiles={1}
            accept=".pdf,application/pdf"
          />
          <PdfViewer file={files[0] ?? null} />
        </div>
      )
    case 'popover':
      return (
        <div className="catalog-preview-row">
          <Popover trigger={<Button>{tr('Information popover')}</Button>}>
            <div className="popover-heading">
              <strong>{tr('A little more context')}</strong>
              <Badge size="sm">Aria UI</Badge>
            </div>
            <p>
              {tr('Shared spacing, borders, and shadows keep every floating panel consistent.')}
            </p>
          </Popover>
          <Popover
            variant="form"
            size="lg"
            trigger={<Button variant="contained">{tr('Form popover')}</Button>}
          >
            <div className="catalog-preview-stack">
              {field}
              <Button variant="contained" onClick={notify}>
                {tr('Save changes')}
              </Button>
            </div>
          </Popover>
        </div>
      )
    case 'search-empty-state':
      return (
        <SearchEmptyState
          onReset={() => {
            setValue('')
            toast.info(tr('Filters cleared'))
          }}
        />
      )
    case 'search-input':
      return (
        <div className="catalog-control">
          <SearchInput value={value} onChange={setValue} />
          {['Nadia Putri', 'Ahmad Fauzi', 'Dewi Rahma']
            .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
            .map((name) => (
              <div className="catalog-search-result" key={name}>
                {name}
              </div>
            ))}
        </div>
      )
    case 'skeleton':
      return (
        <div className="catalog-preview-stack">
          <div className="catalog-preview-row">
            <Skeleton circle width={44} height={44} />
            <Skeleton width="40%" height={18} />
          </div>
          <Skeleton width="100%" height={15} />
          <Skeleton width="80%" height={15} />
          <Skeleton width="100%" height={100} />
        </div>
      )
    case 'status-badge':
      return (
        <div className="catalog-preview-row">
          {['in-stock', 'low-stock', 'out-of-stock', 'pending', 'partial', 'complete'].map(
            (status) => (
              <StatusBadge key={status} status={status} />
            ),
          )}
        </div>
      )
    case 'stepper':
      return (
        <div className="catalog-preview-stack">
          <Stepper steps={steps} activeStep={step} onStepChange={setStep} />
          {actions}
          <Stepper orientation="vertical" steps={steps} activeStep={step} onStepChange={setStep} />
        </div>
      )
    case 'switch':
      return (
        <div className="catalog-control">
          <label className="example-toggle-row">
            <span>
              {tr('Notifications')}
              <small>{tr('Keep me updated')}</small>
            </span>
            <Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} />
          </label>
          <label className="example-toggle-row">
            <span>{tr('Disabled')}</span>
            <Switch disabled />
          </label>
        </div>
      )
    case 'table-filter':
      return (
        <div className="catalog-preview-stack">
          <TableFilter
            filters={[
              {
                id: 'team',
                type: 'choice',
                label: tr('Team'),
                options: ['Design', 'Engineering', 'Operations'].map((name) => ({
                  value: name,
                  label: tr(name),
                })),
              },
              { id: 'joined', type: 'date', label: tr('Joined') },
            ]}
            value={filters}
            onChange={setFilters}
          />
          <p>
            {tr('Active filters')}: {Object.keys(filters).length}
          </p>
          <pre className="catalog-inline-code">{JSON.stringify(filters, null, 2)}</pre>
        </div>
      )
    case 'tabs':
      return (
        <div className="catalog-preview-stack">
          <Tabs
            value={choice === 'activity' ? 'activity' : 'overview'}
            onChange={setChoice}
            items={[
              { value: 'overview', label: tr('Overview') },
              { value: 'activity', label: tr('Activity'), count: 3 },
            ]}
          />
          <div className="catalog-tab-content">
            {tr(
              choice === 'activity'
                ? 'Your recent workspace activity appears here.'
                : 'A calm space for the overview.',
            )}
          </div>
          <Tabs
            variant="pill"
            value={choice === 'activity' ? 'activity' : 'overview'}
            onChange={setChoice}
            items={[
              { value: 'overview', label: tr('Overview') },
              { value: 'activity', label: tr('Activity') },
            ]}
          />
        </div>
      )
    case 'textarea':
      return (
        <Field label={tr('Description')} hint={`${value.length} / 500`}>
          <Textarea
            rows={6}
            maxLength={500}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={tr('Tell us more…')}
          />
        </Field>
      )
    case 'toast':
      return (
        <div className="catalog-preview-row">
          <Button color="success" onClick={() => toast.success(tr('Changes saved'))}>
            {tr('Success')}
          </Button>
          <Button
            color="error"
            onClick={() => toast.error(tr('Something went wrong. Please try again.'))}
          >
            {tr('Error')}
          </Button>
          <Button
            color="info"
            onClick={() => toast.info(tr('You are viewing a component preview.'))}
          >
            {tr('Information')}
          </Button>
        </div>
      )
    case 'tree-view':
      return (
        <TreeView
          nodes={[
            {
              id: 'src',
              label: 'src',
              children: [
                { id: 'app', label: 'app', children: [{ id: 'routes', label: 'routes.tsx' }] },
                {
                  id: 'ui',
                  label: 'template/ui',
                  children: [
                    {
                      id: 'button',
                      label: 'button',
                      children: [{ id: 'button-file', label: 'button.tsx' }],
                    },
                    {
                      id: 'menu',
                      label: 'menu',
                      children: [{ id: 'menu-file', label: 'menu.tsx' }],
                    },
                  ],
                },
              ],
            },
          ]}
          defaultExpandedIds={['src', 'ui']}
          selectedId={value}
          onSelect={(node) => setValue(node.id)}
        />
      )
    default:
      return (
        <EmptyState
          title={tr('Preview coming soon')}
          description={tr('This folder is available in the UI kit.')}
        />
      )
  }
}
