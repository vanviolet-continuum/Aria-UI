import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useZodValidation, createZodSearchCodec } from '@templates/integrations/zod'
import { useUnsavedRouteGuard, useUrlState } from '@templates/integrations/react.router'
import { Wizard } from '@templates/ui/wizard'
import { Button } from '@templates/ui/button'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { Alert } from '@templates/ui/alert'
import { EmptyState } from '@templates/ui/empty.state'
import { SuccessIllustration } from '@templates/ui/illustrations/states/success.illustration'
import { ArrowRight, ArrowLeft, Check, Layers } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { CasePage } from '../../../components/scenario.shared'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import { courseValuesSchema, type Course } from '../../../data/scenarios/model'
import type { Draft } from './types'
import { BriefStep } from './brief'
import { CurriculumStep } from './curriculum'
import { AccessStep } from './access'
import { ReviewStep } from './review'
const initial: Draft = {
  name: '',
  description: '',
  category: 'design',
  level: 'beginner',
  instructor: '',
  price: 0,
  status: 'draft',
  lessons: [{ id: 'lesson-intro', title: '', minutes: 15, content: '' }],
}
const briefSchema = courseValuesSchema
  .pick({ name: true, description: true, category: true, level: true, instructor: true })
  .extend({
    description: z.string().trim().min(20, 'Describe the course in at least 20 characters.'),
  })
const curriculumSchema = courseValuesSchema.pick({ lessons: true })
const accessSchema = courseValuesSchema.pick({ price: true, status: true })
const routeCodec = createZodSearchCodec(z.object({ course: z.string().catch('') }), { course: '' })
export default function CourseBuilderPage() {
  const { t } = useI18n(),
    { data } = useScenarios(),
    url = useUrlState(routeCodec)
  const course = data.courses.find((item) => item.id === url.state.course)
  if (url.state.course && !course)
    return (
      <EmptyState
        title={t('Record not found')}
        description={t('This record may have been removed.')}
      />
    )
  return <CourseWizard key={course?.id ?? 'new'} existing={course} />
}
function CourseWizard({ existing }: { existing?: Course }) {
  const { t } = useI18n(),
    { launchCourse } = useScenarios()
  const navigate = useNavigate()
  const [baseline] = useState<Draft>(() =>
    existing ? courseValuesSchema.parse(existing) : initial,
  )
  const [values, setValues] = useState<Draft>(baseline),
    [step, setStep] = useState(0),
    [students, setStudents] = useState<string[]>([]),
    [error, setError] = useState(''),
    [result, setResult] = useState<Course | null>(null)
  const schema =
    step === 0
      ? briefSchema
      : step === 1
        ? curriculumSchema
        : step === 2
          ? accessSchema
          : courseValuesSchema
  const validation = useZodValidation(schema, values)
  const dirty = JSON.stringify(values) !== JSON.stringify(baseline) || students.length > 0
  const guard = useUnsavedRouteGuard(dirty && !result)
  const panel = useRef<HTMLDivElement>(null)
  const update = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    validation.touch(key)
    setValues((previous) => ({ ...previous, [key]: value }))
    setError('')
  }
  const message = (name: string) =>
    validation.errors[name] ? t(validation.errors[name]) : undefined
  const steps = [
    {
      id: 'brief',
      title: t('Course brief'),
      description: t('Give your course a clear direction.'),
    },
    {
      id: 'curriculum',
      title: t('Curriculum'),
      description: t('Arrange lessons into a learning path.'),
    },
    {
      id: 'access',
      title: t('Access & pricing'),
      description: t('Choose how the course launches.'),
    },
    { id: 'review', title: t('Review & launch'), description: t('A final look before sharing.') },
  ]
  const go = (next: number) => {
    setStep(next)
    validation.reset()
    setError('')
    requestAnimationFrame(() => panel.current?.focus())
  }
  const proceed = () => {
    if (!validation.validate().success) {
      requestAnimationFrame(() =>
        panel.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      )
      return
    }
    go(Math.min(3, step + 1))
  }
  return (
    <CasePage
      title="Course builder"
      eyebrow="Learning · Wizard"
      description="Go from a promising idea to a complete learning experience, one thoughtful step at a time."
    >
      {result ? (
        <EmptyState
          title={t('Your course is ready.')}
          description={t(
            existing
              ? 'Your course and curriculum changes have been saved.'
              : result.status === 'published'
                ? 'The course is published and selected learners are enrolled.'
                : result.status === 'archived'
                  ? 'Your course has been saved in the archive.'
                  : 'The course is saved as a draft. Publish it from the course catalog when you are ready.',
          )}
          icon={<SuccessIllustration size={150} />}
          action={
            <div className="flex flex-wrap justify-center gap-aria-md">
              <Link
                className="rounded-aria-md bg-primary px-aria-lg py-aria-sm text-on-primary hover:opacity-90"
                to={
                  '/preview/learning/courses?panel=detail&record=' + encodeURIComponent(result.id)
                }
              >
                {t('View your course')}
              </Link>
              <Button
                onClick={() => {
                  if (existing) {
                    navigate('/preview/learning/course.builder')
                    return
                  }
                  setValues(initial)
                  setStudents([])
                  setResult(null)
                  go(0)
                }}
              >
                {t('Create another course')}
              </Button>
            </div>
          }
        />
      ) : (
        <Wizard
          steps={steps}
          activeStep={step}
          onStepChange={go}
          introduction={
            <div className="space-y-aria-md">
              <span className="grid size-11 place-items-center rounded-aria-lg bg-primary text-on-primary">
                <Layers size={23} />
              </span>
              <Heading as="h2" variant="card">
                {t('Make something worth learning.')}
              </Heading>
              <Text variant="description">
                {t('Start with the outcome. Build the path. Invite your first learners.')}
              </Text>
            </div>
          }
          aside={
            <div className="mt-auto rounded-aria-lg border border-outline bg-surface p-aria-md">
              <Text variant="caption">
                {t(
                  'Your draft stays here as you move between steps. Leaving the page asks before discarding changes.',
                )}
              </Text>
            </div>
          }
          footer={
            <>
              <Button disabled={step === 0} onClick={() => go(step - 1)}>
                <ArrowLeft size={16} />
                {t('Back')}
              </Button>
              <Text variant="caption">
                {t('Step {{current}} of {{total}}', { current: step + 1, total: steps.length })}
              </Text>
              {step < 3 ? (
                <Button variant="contained" onClick={proceed}>
                  {t('Continue')}
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => {
                    const parsed = courseValuesSchema.safeParse(values)
                    if (!parsed.success) {
                      setError(t('Review the course details before continuing.'))
                      return
                    }
                    try {
                      const course = launchCourse(
                        parsed.data,
                        parsed.data.status === 'published' ? students : [],
                        existing?.id,
                      )
                      setResult(course)
                      toast.success(t(existing ? 'Course updated' : 'Course created'), {
                        description: t(
                          existing
                            ? 'Your course and curriculum changes have been saved.'
                            : course.status === 'published'
                              ? 'Your course is published and ready for learners.'
                              : course.status === 'archived'
                                ? 'Your course has been saved in the archive.'
                                : 'Your course draft has been saved.',
                        ),
                      })
                    } catch (error) {
                      setError(error instanceof Error ? t(error.message) : t('Please try again.'))
                    }
                  }}
                >
                  <Check size={17} />
                  {t(
                    existing
                      ? 'Save course changes'
                      : values.status === 'published'
                        ? 'Publish course'
                        : values.status === 'draft'
                          ? 'Save course draft'
                          : 'Save course',
                  )}
                </Button>
              )}
            </>
          }
        >
          <div ref={panel} tabIndex={-1} className="min-w-0 space-y-aria-lg outline-none">
            <div className="space-y-aria-sm">
              <Badge variant="primary">
                {t('Step {{current}} of {{total}}', { current: step + 1, total: steps.length })}
              </Badge>
              <Heading as="h2" variant="section">
                {steps[step].title}
              </Heading>
              <Text variant="description">{steps[step].description}</Text>
            </div>
            {step === 0 && <BriefStep values={values} update={update} message={message} />}
            {step === 1 && <CurriculumStep values={values} update={update} message={message} />}
            {step === 2 && (
              <AccessStep
                values={values}
                update={update}
                message={message}
                students={students}
                setStudents={setStudents}
              />
            )}
            {step === 3 && <ReviewStep values={values} students={students} />}
            {error && <Alert severity="error" description={error} />}
          </div>
        </Wizard>
      )}
      {guard.confirmation}
    </CasePage>
  )
}
