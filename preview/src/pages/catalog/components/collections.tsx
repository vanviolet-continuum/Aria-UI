import { useState } from 'react'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { Plus, ArrowRight, Check, MoreHorizontal, Bell, Copy } from '@templates/icons'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Grid } from '@templates/ui/grid'
import { Button } from '@templates/ui/button'
import { IconButton } from '@templates/ui/icon.button'
import { Text } from '@templates/ui/text'
import { Heading } from '@templates/ui/heading'
import { Badge } from '@templates/ui/badge'
import { Tabs } from '@templates/ui/tabs'
import { Menu } from '@templates/ui/menu'
import { Tooltip } from '@templates/ui/tooltip'
import { Accordion } from '@templates/ui/accordion'
import { RadioGroup } from '@templates/ui/radio.group'
import { MultiSelect } from '@templates/ui/multi.select'
import { Slider, RangeSlider } from '@templates/ui/slider'
import { Switch } from '@templates/ui/switch'
import { SettingsRow } from '@templates/ui/settings.row'
import { Alert } from '@templates/ui/alert'
import { Progress } from '@templates/ui/progress'
import { Dialog } from '@templates/ui/dialog'
import { Drawer } from '@templates/ui/drawer'
import { EmptyState } from '@templates/ui/empty.state'
import { Avatar, AvatarGroup } from '@templates/ui/avatar'
import { toast } from '@templates/ui/toast'
import { SuccessIllustration } from '@templates/ui/illustrations/states/success.illustration'
import { DemoCard } from '../../../components/demo.card'
import { WorkspaceForm } from '../../../components/catalog/workspace.form'
import { DataDemo } from '../../../components/catalog/data.demo'

const codec = createZodSearchCodec(
  z.object({ tab: z.enum(['actions', 'forms', 'data', 'feedback']).catch('actions') }),
  { tab: 'actions' },
)
const example = (module: string, component: string, jsx: string) =>
  `import { ${component} } from '@templates/ui/${module}'\n\n${jsx}`

export default function Collections() {
  const { t } = useI18n()
  const { state, setState } = useUrlState(codec)
  const [plan, setPlan] = useState('team')
  const [teams, setTeams] = useState<string[]>(['design'])
  const [volume, setVolume] = useState(64)
  const [range, setRange] = useState<[number, number]>([20, 80])
  const [notifications, setNotifications] = useState(true)
  const [dialog, setDialog] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [progress, setProgress] = useState(60)
  return (
    <Box as="section" className="w-full min-w-0">
      <Stack gap="lg">
        <Tabs
          label={t('Component collections')}
          value={state.tab}
          onChange={(tab) => setState({ tab: tab as typeof state.tab }, { replace: false })}
          items={[
            { value: 'actions', label: t('Actions & navigation') },
            { value: 'forms', label: t('Forms & controls') },
            { value: 'data', label: t('Data & display') },
            { value: 'feedback', label: t('Feedback & overlays') },
          ]}
        />
        <Stack gap="md" role="tabpanel" aria-label={t('Component examples')} key={state.tab}>
          {state.tab === 'actions' && (
            <Grid columns={{ base: 1, lg: 2 }} gap="md" align="start">
              <DemoCard
                title="Buttons"
                description="An action, with just the right emphasis."
                code={example(
                  'button',
                  'Button',
                  '<Button variant="contained">Create project</Button>\n<Button variant="outlined">Cancel</Button>\n<Button variant="soft">Learn more</Button>',
                )}
              >
                <Stack gap="lg">
                  <Inline gap="sm">
                    {(['contained', 'outlined', 'soft', 'text'] as const).map((variant) => (
                      <Button
                        key={variant}
                        variant={variant}
                        onClick={() => toast.success(t('You clicked {{variant}}.', { variant }))}
                      >
                        {variant}
                      </Button>
                    ))}
                  </Inline>
                  <Inline gap="sm">
                    {(['primary', 'success', 'warning', 'error', 'info'] as const).map((color) => (
                      <Button
                        key={color}
                        variant="soft"
                        color={color}
                        onClick={() =>
                          toast.info(t('A little feedback goes a long way.'), {
                            description: t('Here is an update about your workspace.'),
                          })
                        }
                      >
                        {color}
                      </Button>
                    ))}
                  </Inline>
                  <Inline gap="sm">
                    <Button
                      size="sm"
                      variant="contained"
                      onClick={() => toast.success(t('Project created in this demo.'))}
                    >
                      <Plus size={14} />
                      {t('Small')}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => toast.success(t('Project created in this demo.'))}
                    >
                      {t('Default')}
                      <ArrowRight size={14} />
                    </Button>
                    <Button
                      size="lg"
                      variant="outlined"
                      onClick={() => toast.success(t('Project created in this demo.'))}
                    >
                      {t('Large')}
                    </Button>
                  </Inline>
                  <Inline gap="sm">
                    <Button loading loadingText={t('Loading…')} />
                    <Button disabled>{t('Disabled')}</Button>
                  </Inline>
                </Stack>
              </DemoCard>
              <DemoCard
                title="Menus & tooltips"
                description="A little context. A few more possibilities."
                code={example(
                  'menu',
                  'Menu',
                  '<Menu\n  trigger={<Button>More actions</Button>}\n  items={[{ id: "copy", label: "Copy", onSelect: copy }]}\n/>',
                )}
              >
                <Stack gap="lg">
                  <Inline>
                    <Menu
                      label={t('Project actions')}
                      trigger={
                        <Button>
                          <MoreHorizontal size={16} />
                          {t('More actions')}
                        </Button>
                      }
                      items={[
                        {
                          id: 'copy',
                          label: t('Copy project name'),
                          icon: <Copy size={15} />,
                          onSelect: async () => {
                            try {
                              await navigator.clipboard.writeText('Studio North')
                              toast.success(t('Copied to clipboard'))
                            } catch {
                              toast.error(t('Copy failed. Select and copy the code manually.'))
                            }
                          },
                        },
                        {
                          id: 'details',
                          label: t('View details'),
                          icon: <ArrowRight size={15} />,
                          onSelect: () => setDrawer(true),
                        },
                      ]}
                    />
                    <Tooltip content={t('You’re all caught up.')}>
                      <IconButton label={t('Notifications')} variant="outlined">
                        <Bell size={17} />
                      </IconButton>
                    </Tooltip>
                  </Inline>
                  <Text variant="description">
                    {t('Open the menu or hover over the bell. Keyboard navigation works too.')}
                  </Text>
                </Stack>
              </DemoCard>
              <DemoCard
                title="Accordion"
                description="Room for the details, when you need them."
                code={example(
                  'accordion',
                  'Accordion',
                  '<Accordion type="single" collapsible items={[\n  { value: "one", title: "Can I customize it?", content: "Of course." },\n]} />',
                )}
              >
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="customize"
                  items={[
                    {
                      value: 'customize',
                      title: t('Can I customize the components?'),
                      content: t(
                        'Yes. Use native props, children, className, and slots to make each component fit your application.',
                      ),
                    },
                    {
                      value: 'theme',
                      title: t('Does it support dark mode?'),
                      content: t(
                        'Every component uses semantic theme tokens. Switch modes in the header to see them adapt.',
                      ),
                    },
                    {
                      value: 'language',
                      title: t('What languages are available?'),
                      content: t(
                        'Bahasa Indonesia and English. Use the language switcher in the header to try both.',
                      ),
                    },
                  ]}
                />
              </DemoCard>
              <DemoCard
                title="Typography"
                description="A clear hierarchy, without the guesswork."
                code={example(
                  'heading',
                  'Heading',
                  '<Heading as="h1" variant="page">Your next idea</Heading>\n<Text variant="description">A little room to explore.</Text>',
                )}
              >
                <Stack gap="md">
                  <Heading as="h2" variant="page">
                    {t('Your next idea.')}
                  </Heading>
                  <Heading as="h3" variant="card">
                    {t('A little room to explore.')}
                  </Heading>
                  <Text>{t('Good typography makes room for the things that matter.')}</Text>
                  <Text variant="description">
                    {t('Supporting text adds context and keeps everything easy to follow.')}
                  </Text>
                  <Text variant="caption">{t('Small details. Thoughtfully considered.')}</Text>
                </Stack>
              </DemoCard>
            </Grid>
          )}
          {state.tab === 'forms' && (
            <>
              <DemoCard
                title="A complete form"
                description="Labels, hints, validation, and a place for every detail."
                code={example(
                  'field',
                  'Field',
                  '<Field label="Workspace name" required error={errors.name}>\n  <Input value={name} onChange={event => setName(event.target.value)} />\n</Field>',
                )}
              >
                <WorkspaceForm />
              </DemoCard>
              <Grid columns={{ base: 1, lg: 2 }} gap="md" align="start">
                <DemoCard
                  title="Choices"
                  description="Make the whole choice easy to click."
                  code={example(
                    'radio.group',
                    'RadioGroup',
                    '<RadioGroup variant="card" value={plan} onValueChange={setPlan}\n  options={[{ value: "solo", label: "Solo" }, { value: "team", label: "Team" }]} />',
                  )}
                >
                  <Stack gap="lg">
                    <RadioGroup
                      aria-label={t('Plan')}
                      variant="card"
                      value={plan}
                      onValueChange={setPlan}
                      options={[
                        {
                          value: 'solo',
                          label: t('Solo'),
                          description: t('A little space of your own'),
                        },
                        {
                          value: 'team',
                          label: t('Team'),
                          description: t('Better when you build together'),
                        },
                      ]}
                    />
                    <MultiSelect
                      aria-label={t('Teams')}
                      placeholder={t('Choose teams')}
                      options={[
                        { value: 'design', label: 'Design' },
                        { value: 'engineering', label: 'Engineering' },
                        { value: 'product', label: 'Product' },
                      ]}
                      value={teams}
                      onValueChange={setTeams}
                    />
                    <SettingsRow
                      label={t('Notifications')}
                      control={
                        <Switch
                          checked={notifications}
                          onChange={(event) => setNotifications(event.target.checked)}
                        />
                      }
                    />
                  </Stack>
                </DemoCard>
                <DemoCard
                  title="Sliders"
                  description="Find the right balance, one step at a time."
                  code={example(
                    'slider',
                    'Slider, RangeSlider',
                    '<Slider label="Volume" value={volume} onValueChange={setVolume} showValue />\n<RangeSlider label="Range" value={range} onValueChange={setRange} showValue />',
                  )}
                >
                  <Stack gap="xl">
                    <Slider
                      label={t('Volume')}
                      value={volume}
                      onValueChange={setVolume}
                      showValue
                      formatValue={(value) => `${value}%`}
                    />
                    <RangeSlider
                      label={t('Working range')}
                      value={range}
                      onValueChange={setRange}
                      showValue
                      thumbLabels={[t('Minimum'), t('Maximum')]}
                    />
                    <Text variant="caption">
                      {t('Tip: use the arrow keys for precise adjustments.')}
                    </Text>
                  </Stack>
                </DemoCard>
              </Grid>
            </>
          )}
          {state.tab === 'data' && (
            <>
              <DemoCard
                title="Your team, at a glance"
                description="Search, filter, sort, select, and inspect. All with sample data."
                code={example(
                  'data.table',
                  'DataTable',
                  '<DataTable data={members} columns={columns}\n  getRowId={member => member.id}\n  selection={{ selectedIds, onChange: setSelectedIds }}\n/>',
                )}
              >
                <DataDemo />
              </DemoCard>
              <Grid columns={{ base: 1, lg: 2 }} gap="md" align="start">
                <DemoCard
                  title="Badges & avatars"
                  description="Status and identity, in a little space."
                  code={example(
                    'badge',
                    'Badge',
                    '<Badge variant="success" dot>Active</Badge>\n<Avatar name="Nadia Putri" status="online" />',
                  )}
                >
                  <Stack gap="lg">
                    <Inline>
                      {(
                        ['neutral', 'primary', 'success', 'warning', 'danger', 'violet'] as const
                      ).map((variant) => (
                        <Badge variant={variant} key={variant} dot>
                          {variant}
                        </Badge>
                      ))}
                    </Inline>
                    <Inline>
                      <Avatar
                        name="Nadia Putri"
                        size="lg"
                        status="online"
                        statusLabel={t('Online')}
                      />
                      <Avatar name="Rafi Pratama" size="md" status="away" statusLabel={t('Away')} />
                      <AvatarGroup max={3}>
                        {[
                          'Maya Sari',
                          'Dimas Wijaya',
                          'Alya Rahma',
                          'Bima Saputra',
                          'Intan Permata',
                        ].map((name) => (
                          <Avatar key={name} name={name} />
                        ))}
                      </AvatarGroup>
                    </Inline>
                  </Stack>
                </DemoCard>
                <DemoCard
                  title="Empty states"
                  description="Even a fresh start deserves a thoughtful message."
                  code={example(
                    'empty.state',
                    'EmptyState',
                    '<EmptyState title="Your next idea starts here"\n  description="Create your first project."\n  action={<Button>Create project</Button>} />',
                  )}
                >
                  <EmptyState
                    title={t('Your next idea starts here.')}
                    description={t('Create your first project and give it room to grow.')}
                    action={
                      <Button
                        variant="contained"
                        onClick={() => toast.success(t('Project created in this demo.'))}
                      >
                        <Plus size={14} />
                        {t('Create project')}
                      </Button>
                    }
                  />
                </DemoCard>
              </Grid>
            </>
          )}
          {state.tab === 'feedback' && (
            <Grid columns={{ base: 1, lg: 2 }} gap="md" align="start">
              <DemoCard
                title="Alerts"
                description="The right message, right where it matters."
                code={example(
                  'alert',
                  'Alert',
                  '<Alert severity="success" title="All set!" description="Your changes are saved." />',
                )}
              >
                <Stack gap="md">
                  <Alert
                    severity="info"
                    title={t('A little heads-up.')}
                    description={t('This is a live preview. Go ahead and explore.')}
                  />
                  <Alert
                    severity="success"
                    title={t('Everything is looking good.')}
                    description={t('Your changes have been saved.')}
                  />
                  <Alert
                    severity="warning"
                    title={t('One more thing.')}
                    description={t('Review the details before you continue.')}
                  />
                  <Alert
                    severity="error"
                    title={t('Let’s try that again.')}
                    description={t('Something went wrong. You can give it another go.')}
                  />
                </Stack>
              </DemoCard>
              <DemoCard
                title="Toasts"
                description="A moment of feedback, without breaking the flow."
                code={example(
                  'toast',
                  'toast',
                  'toast.success("Changes saved", { description: "Your changes are up to date." })\ntoast.error("Unable to save", { description: error.message })',
                )}
              >
                <Stack gap="lg">
                  <Inline>
                    <Button
                      variant="soft"
                      color="success"
                      onClick={() =>
                        toast.success(t('Changes saved. Looking good!'), {
                          description: t('Your changes have been saved.'),
                        })
                      }
                    >
                      <Check size={15} />
                      {t('Success')}
                    </Button>
                    <Button
                      variant="soft"
                      color="info"
                      onClick={() =>
                        toast.info(t('A little feedback goes a long way.'), {
                          description: t('Here is an update about your workspace.'),
                        })
                      }
                    >
                      {t('Information')}
                    </Button>
                    <Button
                      variant="soft"
                      color="warning"
                      onClick={() =>
                        toast.warning(t('Review the details before you continue.'), {
                          description: t('Make sure everything is correct before proceeding.'),
                        })
                      }
                    >
                      {t('Warning')}
                    </Button>
                    <Button
                      variant="soft"
                      color="error"
                      onClick={() =>
                        toast.error(t('Something went wrong. You can give it another go.'), {
                          description: t('Your changes have been kept. Please try again.'),
                        })
                      }
                    >
                      {t('Error')}
                    </Button>
                  </Inline>
                  <Text variant="description">
                    {t('Click a button to see how each message feels.')}
                  </Text>
                </Stack>
              </DemoCard>
              <DemoCard
                title="Dialog & drawer"
                description="A focused moment, with space for the details."
                code={example(
                  'dialog',
                  'Dialog',
                  '<Dialog open={open} onOpenChange={setOpen} title="A little confirmation">\n  <Text>You’re ready to go.</Text>\n</Dialog>',
                )}
              >
                <Inline>
                  <Button variant="contained" onClick={() => setDialog(true)}>
                    {t('Open dialog')}
                  </Button>
                  <Button onClick={() => setDrawer(true)}>
                    {t('Open drawer')}
                    <ArrowRight size={14} />
                  </Button>
                </Inline>
              </DemoCard>
              <DemoCard
                title="Progress"
                description="Every step forward deserves a little clarity."
                code={example(
                  'progress',
                  'Progress',
                  '<Progress label="Project progress" value={60} showValue />',
                )}
              >
                <Stack gap="lg">
                  <Progress value={progress} label={t('Project progress')} showValue />
                  <Slider
                    label={t('Adjust progress')}
                    value={progress}
                    onValueChange={setProgress}
                    showValue
                  />
                  <Progress value={null} label={t('Working on it…')} size="sm" />
                </Stack>
              </DemoCard>
            </Grid>
          )}
        </Stack>
      </Stack>
      <Dialog
        open={dialog}
        onOpenChange={setDialog}
        title={t('A little confirmation.')}
        description={t('A focused space for a small decision.')}
        size="sm"
        footer={
          <>
            <Button onClick={() => setDialog(false)}>{t('Cancel')}</Button>
            <Button
              variant="contained"
              onClick={() => {
                setDialog(false)
                toast.success(t('All set. You’re ready to go!'))
              }}
            >
              {t('Sounds good')}
              <Check size={14} />
            </Button>
          </>
        }
      >
        <Stack align="center" gap="md">
          <SuccessIllustration size={180} />
          <Text variant="description">
            {t(
              'Dialogs keep the important things in focus. Press Escape or click outside to close.',
            )}
          </Text>
        </Stack>
      </Dialog>
      <Drawer
        open={drawer}
        onOpenChange={setDrawer}
        title={t('A little more detail.')}
        description={t('Everything you need, in one place.')}
        footer={
          <Button variant="contained" onClick={() => setDrawer(false)}>
            {t('Got it')}
            <Check size={14} />
          </Button>
        }
      >
        <Stack gap="lg">
          <Heading as="h3" variant="card">
            Studio North
          </Heading>
          <Text variant="description">
            {t('Drawers give details room to breathe while keeping your place in the page.')}
          </Text>
          <Alert
            severity="info"
            description={t('Try resizing the window. This panel adapts with you.')}
          />
          <Progress label={t('Project progress')} value={72} showValue />
        </Stack>
      </Drawer>
    </Box>
  )
}
