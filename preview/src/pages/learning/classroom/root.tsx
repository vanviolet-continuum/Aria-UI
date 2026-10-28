import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import { Combobox } from '@templates/ui/combobox'
import { Field } from '@templates/ui/field'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Heading } from '@templates/ui/heading'
import { Progress } from '@templates/ui/progress'
import { Badge } from '@templates/ui/badge'
import { EmptyState } from '@templates/ui/empty.state'
import { Alert } from '@templates/ui/alert'
import { Avatar } from '@templates/ui/avatar'
import { CircleCheck, ArrowRight, Check, FileText } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { CasePage, CourseArt } from '../../../components/scenario.shared'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import { learningProgress } from '../../../data/scenarios/model'

const codec = createZodSearchCodec(
  z.object({ enrollment: z.string().catch(''), lesson: z.string().catch('') }),
  { enrollment: '', lesson: '' },
)
export default function ClassroomPage() {
  const { t } = useI18n(),
    { data, completeLesson } = useScenarios(),
    url = useUrlState(codec)
  const enrollment = url.state.enrollment
    ? data.enrollments.find((item) => item.id === url.state.enrollment)
    : data.enrollments[0]
  const course = data.courses.find((item) => item.id === enrollment?.courseId),
    student = data.students.find((item) => item.id === enrollment?.studentId)
  const lesson =
    course?.lessons.find((item) => item.id === url.state.lesson) ??
    course?.lessons.find((item) => !enrollment?.completedLessons.includes(item.id)) ??
    course?.lessons[0]
  const index = course?.lessons.findIndex((item) => item.id === lesson?.id) ?? 0
  const done = !!enrollment?.completedLessons.includes(lesson?.id ?? '')
  const progress = enrollment && course ? learningProgress(course, enrollment) : 0
  return (
    <CasePage
      title="Classroom"
      eyebrow="Learning"
      description="A focused space to learn, practice, and keep moving forward."
    >
      <div className="max-w-xl">
        <Field label={t('Learning as')}>
          <Combobox
            value={enrollment?.id ?? ''}
            options={data.enrollments.map((item) => ({
              value: item.id,
              label:
                data.students.find((student) => student.id === item.studentId)?.name ??
                t('Student'),
              description: data.courses.find((course) => course.id === item.courseId)?.name,
            }))}
            onChange={(enrollment) => url.setState({ enrollment, lesson: '' }, { replace: false })}
          />
        </Field>
      </div>
      {!enrollment || !course || !lesson ? (
        <EmptyState
          title={t('Choose your next learning journey')}
          description={t('Enroll a student in a published course to start learning.')}
          action={
            <Link to="/preview/learning/enrollments" className="text-primary hover:underline">
              {t('Manage enrollments')}
            </Link>
          }
        />
      ) : (
        <>
          {enrollment.status === 'paused' && (
            <Alert
              severity="warning"
              title={t('Enrollment paused')}
              description={t(
                'Resume this enrollment from the enrollments menu to mark lessons complete.',
              )}
            />
          )}
          {progress === 100 && (
            <Alert
              severity="success"
              title={t('A little progress, every day. You did it.')}
              description={t(
                'Every lesson in this course is complete. Your progress is saved in this browser.',
              )}
            />
          )}
          <div className="grid items-start gap-aria-lg xl:grid-cols-[minmax(240px,.7fr)_minmax(0,2fr)]">
            <Card>
              <CardBody className="space-y-aria-lg">
                <CourseArt course={course} />
                <div className="space-y-aria-sm">
                  <Heading as="h2" variant="card">
                    {course.name}
                  </Heading>
                  <Text variant="description">{course.instructor}</Text>
                  <Progress value={progress} showValue label={t('Course progress')} />
                </div>
                <nav aria-label={t('Course lessons')} className="space-y-aria-sm">
                  {course.lessons.map((item, n) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-current={lesson.id === item.id ? 'step' : undefined}
                      onClick={() =>
                        url.setState(
                          { enrollment: enrollment.id, lesson: item.id },
                          { replace: false },
                        )
                      }
                      className={
                        'flex w-full cursor-pointer items-start gap-aria-sm rounded-aria-md border p-aria-sm text-start transition-colors focus-visible:outline-2 focus-visible:outline-primary ' +
                        (item.id === lesson.id
                          ? 'border-primary/25 bg-primary-soft'
                          : 'border-outline hover:bg-surface-hover')
                      }
                    >
                      <span
                        className={
                          'grid size-7 shrink-0 place-items-center rounded-full ' +
                          (enrollment.completedLessons.includes(item.id)
                            ? 'bg-success-soft text-success'
                            : 'bg-surface-subtle text-muted')
                        }
                      >
                        {enrollment.completedLessons.includes(item.id) ? (
                          <Check size={14} />
                        ) : (
                          n + 1
                        )}
                      </span>
                      <div className="min-w-0 space-y-aria-xs">
                        <Text as="span" variant="label" className="block">
                          {item.title}
                        </Text>
                        <Text as="span" variant="caption">
                          {t('{{count}} minutes', { count: item.minutes })}
                        </Text>
                      </div>
                    </button>
                  ))}
                </nav>
              </CardBody>
            </Card>
            <Card>
              <CardHeader
                title={lesson.title}
                titleAs="h2"
                description={t('Lesson {{current}} of {{total}}', {
                  current: index + 1,
                  total: course.lessons.length,
                })}
                actions={
                  <Badge variant={done ? 'success' : 'primary'}>
                    {t(done ? 'Completed' : 'In progress')}
                  </Badge>
                }
              />
              <CardBody className="space-y-aria-lg">
                <div className="flex flex-wrap items-center justify-between gap-aria-md rounded-aria-lg border border-outline bg-surface-subtle p-aria-md">
                  <div className="flex items-center gap-aria-sm">
                    <Avatar name={course.instructor} size="sm" />
                    <div>
                      <Text variant="label">{course.instructor}</Text>
                      <Text variant="caption">{t('Instructor')}</Text>
                    </div>
                  </div>
                  <Text variant="caption">
                    {t('{{count}} minutes', { count: lesson.minutes })} · {t('Reading lesson')}
                  </Text>
                </div>
                <div className="grid min-h-44 place-items-center rounded-aria-lg border border-primary/15 bg-linear-to-br from-primary-soft to-surface-subtle">
                  <FileText size={76} strokeWidth={1.1} className="text-primary" aria-hidden />
                </div>
                <article className="space-y-aria-md">
                  {lesson.content.split(/\n\s*\n/).map((paragraph, n) => (
                    <Text key={n} className="whitespace-pre-wrap">
                      {paragraph}
                    </Text>
                  ))}
                </article>
                <div className="flex flex-wrap items-center justify-between gap-aria-sm border-t border-outline pt-aria-lg">
                  <Text variant="caption">
                    {t('Learning as {{name}}', { name: student?.name ?? '' })}
                  </Text>
                  <div className="flex flex-wrap gap-aria-sm">
                    {!done && (
                      <Button
                        variant="contained"
                        disabled={enrollment.status !== 'active'}
                        onClick={() => {
                          try {
                            completeLesson(enrollment.id, lesson.id)
                            toast.success(t('Lesson completed'), {
                              description: t('Your learning progress has been saved.'),
                            })
                          } catch (error) {
                            toast.error(t('Unable to save progress'), {
                              description:
                                error instanceof Error ? t(error.message) : t('Please try again.'),
                            })
                          }
                        }}
                      >
                        <CircleCheck size={17} />
                        {t('Mark as complete')}
                      </Button>
                    )}
                    {done && course.lessons[index + 1] && (
                      <Button
                        variant="contained"
                        onClick={() =>
                          url.setState(
                            { enrollment: enrollment.id, lesson: course.lessons[index + 1].id },
                            { replace: false },
                          )
                        }
                      >
                        {t('Next lesson')}
                        <ArrowRight size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </>
      )}
    </CasePage>
  )
}
