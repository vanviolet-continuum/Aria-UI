import { TextLink } from '../../template/ui/text.link/text.link'

import { Text } from '../../template/ui/text/text'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  Copy,
  Download,
  FileText,
  Flag,
  Layers3,
  ListChecks,
  Mail,
  PanelRightOpen,
  Sparkles,
  Users,
} from 'lucide-react'
import {
  Badge,
  Button,
  DetailList,
  DetailSection,
  DetailStats,
  DetailTimeline,
  DetailView,
  Drawer,
  IconButton,
  toast,
} from '../../template'
import { useI18n } from '../../template/i18n'
import './details.page.css'

const projectId = 'PRJ-2026-024'

function ProjectDetailContent() {
  const { t: tr, locale } = useI18n()
  const date = (value: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`))

  return (
    <DetailView
      eyebrow={`${tr('Project')} / ${projectId}`}
      title={tr('Aria Studio website')}
      description={tr(
        'A thoughtful digital home for a creative studio. Built to make a lasting first impression.',
      )}
      avatar={<Layers3 size={29} strokeWidth={1.5} />}
      badge={
        <Badge variant="primary" dot>
          {tr('In progress')}
        </Badge>
      }
      actions={
        <IconButton
          label={tr('Copy project ID')}
          variant="outlined"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(projectId)
              toast.success(tr('Project ID copied'))
            } catch {
              toast.error(tr('Clipboard unavailable. Select and copy the ID manually.'))
            }
          }}
        >
          <Copy size={15} />
        </IconButton>
      }
      meta={
        <>
          <Text as="span" variant="label">
            <BriefcaseBusiness size={14} />
            Aria Studio
          </Text>
          <Text as="span" variant="label">
            <CalendarDays size={14} />
            {tr('Created')} {date('2026-10-12')}
          </Text>
          <Text as="span" variant="label">
            <Clock3 size={14} />
            {tr('Updated')} {date('2026-10-26')}
          </Text>
        </>
      }
      summary={
        <DetailStats
          items={[
            {
              id: 'budget',
              label: tr('Project budget'),
              value: new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
              }).format(24000000),
              hint: tr('Fixed project budget'),
              icon: <CircleDollarSign size={16} />,
            },
            {
              id: 'tasks',
              label: tr('Tasks completed'),
              value: '18 / 24',
              hint: tr('6 tasks to the finish line'),
              icon: <ListChecks size={16} />,
            },
            {
              id: 'deadline',
              label: tr('Target launch'),
              value: date('2026-11-12'),
              hint: tr('Design, build, and handover'),
              icon: <Flag size={16} />,
            },
          ]}
        />
      }
      aside={
        <>
          <DetailSection title={tr('Project team')} icon={<Users size={16} />}>
            <div className="project-owner">
              <Text as="span" variant="label" tone="inherit" className="project-person-avatar">
                NP
              </Text>
              <div>
                <Text as="strong" variant="label">
                  Nadia Putri
                </Text>
                <Text as="small" variant="caption">
                  {tr('Project owner')}
                </Text>
              </div>
              <Badge size="sm" variant="neutral">
                {tr('Lead')}
              </Badge>
            </div>
            <DetailList
              columns={1}
              items={[
                {
                  id: 'email',
                  label: tr('Email address'),
                  icon: <Mail size={12} />,
                  value: (
                    <TextLink as="a" variant="link" href="mailto:nadia@example.com">
                      nadia@example.com <ArrowUpRight size={12} />
                    </TextLink>
                  ),
                },
                {
                  id: 'team',
                  label: tr('Collaborators'),
                  value: (
                    <div className="project-collaborators">
                      <Text as="span" variant="label">
                        NP
                      </Text>
                      <Text as="span" variant="label">
                        AF
                      </Text>
                      <Text as="span" variant="label">
                        DR
                      </Text>
                      <Text as="small" variant="caption">
                        {tr('Design & development')}
                      </Text>
                    </div>
                  ),
                },
              ]}
            />
          </DetailSection>
          <DetailSection title={tr('Recent activity')} icon={<Clock3 size={16} />}>
            <DetailTimeline
              items={[
                {
                  id: 'review',
                  title: tr('Homepage design approved'),
                  description: tr('Nadia signed off on the final direction.'),
                  dateTime: '2026-10-26',
                  time: date('2026-10-26'),
                  icon: <Check size={12} />,
                  tone: 'success',
                },
                {
                  id: 'build',
                  title: tr('Development started'),
                  description: tr('The team is bringing the designs to life.'),
                  dateTime: '2026-10-20',
                  time: date('2026-10-20'),
                  icon: <Layers3 size={12} />,
                  tone: 'primary',
                },
                {
                  id: 'created',
                  title: tr('Project created'),
                  description: tr('A new beginning for Aria Studio.'),
                  dateTime: '2026-10-12',
                  time: date('2026-10-12'),
                  icon: <Sparkles size={12} />,
                },
              ]}
            />
          </DetailSection>
        </>
      }
    >
      <DetailSection
        title={tr('Project overview')}
        description={tr('The essentials, all in one place.')}
        icon={<FileText size={16} />}
      >
        <DetailList
          items={[
            { id: 'client', label: tr('Client'), value: 'Aria Studio' },
            {
              id: 'category',
              label: tr('Project type'),
              value: tr('Website design & development'),
            },
            { id: 'start', label: tr('Start date'), value: date('2026-10-12') },
            { id: 'due', label: tr('Due date'), value: date('2026-11-12') },
            {
              id: 'priority',
              label: tr('Priority'),
              value: (
                <Badge variant="warning" size="sm" dot>
                  {tr('High priority')}
                </Badge>
              ),
            },
            { id: 'visibility', label: tr('Visibility'), value: tr('Workspace members') },
            {
              id: 'description',
              label: tr('About this project'),
              fullWidth: true,
              value: tr(
                'Create a responsive portfolio website that brings the studio’s work, people, and process together. The scope includes a homepage, project gallery, studio profile, and contact experience.',
              ),
            },
          ]}
        />
      </DetailSection>
      <DetailSection
        title={tr('Project progress')}
        icon={<ListChecks size={16} />}
        actions={
          <Badge variant="success" size="sm">
            {tr('On track')}
          </Badge>
        }
      >
        <div className="project-progress-heading">
          <Text as="span" variant="label">
            {tr('Overall completion')}
          </Text>
          <Text as="strong" variant="label">
            75%
          </Text>
        </div>
        <progress
          className="project-progress"
          value={18}
          max={24}
          aria-label={tr('Overall completion')}
        >
          75%
        </progress>
        <div className="project-milestones">
          <Text as="span" variant="label">
            <Check size={13} />
            {tr('Discovery')}
          </Text>
          <Text as="span" variant="label">
            <Check size={13} />
            {tr('Design')}
          </Text>
          <Text as="span" variant="label" className="project-milestone-current">
            <span />
            {tr('Development')}
          </Text>
          <Text as="span" variant="label">
            {tr('Handover')}
          </Text>
        </div>
        <div className="project-next-step">
          <Flag size={16} />
          <div>
            <Text as="strong" variant="label">
              {tr('Next milestone')}
            </Text>
            <Text as="p" variant="body">
              {tr('Review the first working version with the team.')}
            </Text>
          </div>
        </div>
      </DetailSection>
    </DetailView>
  )
}

export function DetailsPage() {
  const { t: tr } = useI18n()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const exportDetails = () => {
    const file = new Blob(
      [
        JSON.stringify(
          {
            id: projectId,
            name: 'Aria Studio website',
            client: 'Aria Studio',
            status: 'in-progress',
            budget: { amount: 24000000, currency: 'IDR' },
            tasks: { completed: 18, total: 24 },
            startDate: '2026-10-12',
            dueDate: '2026-11-12',
            owner: 'Nadia Putri',
          },
          null,
          2,
        ),
      ],
      { type: 'application/json' },
    )
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'aria-ui-project-details.json'
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <div className="standard-page project-details-page page-enter">
      <div className="project-page-toolbar">
        <div className="project-page-breadcrumb">
          <IconButton label={tr('Back to home')} variant="outlined" onClick={() => navigate('/')}>
            <ArrowLeft size={16} />
          </IconButton>
          <Text as="span" variant="label">
            {tr('Projects')}
          </Text>
          <Text as="span" variant="label" aria-hidden="true">
            /
          </Text>
          <Text as="strong" variant="label">
            {projectId}
          </Text>
        </div>
        <div className="project-page-actions">
          <Button onClick={exportDetails}>
            <Download size={14} />
            {tr('Export details')}
          </Button>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <PanelRightOpen size={15} />
            {tr('Open in drawer')}
          </Button>
        </div>
      </div>
      <ProjectDetailContent />
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={tr('Project details')}
        description={projectId}
        size="lg"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>{tr('Close')}</Button>
            <Button variant="contained" onClick={exportDetails}>
              <Download size={14} />
              {tr('Export details')}
            </Button>
          </>
        }
      >
        <ProjectDetailContent />
      </Drawer>
    </div>
  )
}
