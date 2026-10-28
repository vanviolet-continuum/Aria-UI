import { StatCard } from '@templates/ui/stat.card'
import { Users, Clock } from '@templates/icons'
import { useState } from 'react'
import { useI18n } from '@templates/i18n'
import { Button } from '@templates/ui/button'
import { HoverCard } from '@templates/ui/hover.card'
import { Wizard } from '@templates/ui/wizard'
import { AreaChart } from '@templates/ui/chart'
import { FullCalendar } from '@templates/ui/full.calendar'
import { Text } from '@templates/ui/text'
import { Heading } from '@templates/ui/heading'
import { Avatar } from '@templates/ui/avatar'
import { DemoCard } from '../../../components/demo.card'
import { dayKey } from '../../../data/operations/model'
import { toast } from '@templates/ui/toast'

export function AdvancedExample({ component }: { component: string }) {
  const { t } = useI18n(),
    [step, setStep] = useState(0)
  const [events, setEvents] = useState([
    {
      id: 'demo-event',
      title: t('Design review'),
      start: dayKey() + 'T10:00:00',
      end: dayKey() + 'T11:00:00',
      extendedProps: { location: t('Studio room') },
    },
  ])
  if (component === 'stat.card')
    return (
      <DemoCard
        title="StatCard"
        description="A consistent count card with a meaningful SVG visual."
        code={`import { StatCard } from '@templates/ui/stat.card'\n\n<StatCard label={t('Active users')} value={24} icon={<Users size={22}/>} color="success" />`}
      >
        <div className="grid gap-aria-md md:grid-cols-2">
          <StatCard
            label={t('Active users')}
            value={24}
            icon={<Users size={22} />}
            color="success"
          />
          <StatCard
            label={t('Pending invitations')}
            value={5}
            icon={<Clock size={22} />}
            color="warning"
          />
        </div>
      </DemoCard>
    )
  if (component === 'hover.card')
    return (
      <DemoCard
        title="HoverCard"
        description="A quick preview, available on hover and keyboard focus."
        code={`import { HoverCard } from '@templates/ui/hover.card'\n\n<HoverCard content={<ProfileSummary />}><Button>Preview profile</Button></HoverCard>`}
      >
        <HoverCard
          content={
            <div className="space-y-aria-sm">
              <Avatar name="Nadia Putri" />
              <Heading as="h3" variant="card">
                Nadia Putri
              </Heading>
              <Text variant="description">{t('Workspace administrator')}</Text>
            </div>
          }
        >
          <Button>{t('Preview profile')}</Button>
        </HoverCard>
      </DemoCard>
    )
  if (component === 'wizard')
    return (
      <DemoCard
        title="Wizard"
        description="A composable step layout. Your application owns validation and saving."
        code={`import { Wizard } from '@templates/ui/wizard'\n\n<Wizard steps={steps} activeStep={step} onStepChange={setStep}\n  introduction={<Heading>Course setup</Heading>}\n  footer={<Button onClick={next}>Continue</Button>}>\n  {renderStep(step)}\n</Wizard>`}
      >
        <Wizard
          steps={[
            { id: 'brief', title: t('Course brief') },
            { id: 'curriculum', title: t('Curriculum') },
            { id: 'review', title: t('Review & launch') },
          ]}
          activeStep={step}
          onStepChange={setStep}
          introduction={
            <Heading as="h3" variant="card">
              {t('Course setup')}
            </Heading>
          }
          footer={
            <>
              <Button disabled={!step} onClick={() => setStep(step - 1)}>
                {t('Back')}
              </Button>
              <Button variant="contained" onClick={() => setStep((step + 1) % 3)}>
                {t(step === 2 ? 'Start again' : 'Continue')}
              </Button>
            </>
          }
        >
          <div className="space-y-aria-sm">
            <Heading as="h3" variant="card">
              {[t('Course brief'), t('Curriculum'), t('Review & launch')][step]}
            </Heading>
            <Text variant="description">
              {t(
                'Use the course builder in Learning for a complete example with validation and real saved data.',
              )}
            </Text>
          </div>
        </Wizard>
      </DemoCard>
    )
  if (component === 'chart')
    return (
      <DemoCard
        title="AreaChart"
        description="Data, axes, and tooltip follow the active theme."
        code={`import { AreaChart } from '@templates/ui/chart'\n\n<AreaChart data={weekly} categoryKey="day" valueKey="value" label="Orders" />`}
      >
        <AreaChart
          data={[
            { day: t('Mon'), value: 12 },
            { day: t('Tue'), value: 24 },
            { day: t('Wed'), value: 18 },
            { day: t('Thu'), value: 32 },
            { day: t('Fri'), value: 28 },
            { day: t('Sat'), value: 42 },
            { day: t('Sun'), value: 38 },
          ]}
          categoryKey="day"
          valueKey="value"
          label={t('Orders')}
        />
      </DemoCard>
    )
  if (component === 'full.calendar')
    return (
      <DemoCard
        title="FullCalendar"
        description="A scheduler with hover previews and reversible drag or resize updates."
        code={`import { FullCalendar } from '@templates/ui/full.calendar'\n\n<FullCalendar events={events} height="auto"\n  onEventMove={move => saveEvent(move)}\n  onError={error => reportError(error)}\n  renderEventPreview={event => <EventSummary event={event} />}\n/>`}
      >
        <FullCalendar
          events={events}
          height="auto"
          initialDate={dayKey()}
          onEventClick={() =>
            toast.info(t('Event preview'), {
              description: t('Open the Calendar menu for the complete event editor.'),
            })
          }
          onEventMove={(move) =>
            setEvents((previous) =>
              previous.map((event) =>
                event.id === move.id ? { ...event, start: move.start, end: move.end } : event,
              ),
            )
          }
        />
      </DemoCard>
    )
  return null
}
