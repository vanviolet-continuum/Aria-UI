import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import { Text } from '@templates/ui/text'
import { Progress } from '@templates/ui/progress'
import { NotebookIllustration } from '@templates/ui/illustrations/education/notebook.illustration'
import { FileText, Users, ListChecks, Layers, ArrowRight } from '@templates/icons'
import { CasePage, CaseHero, CaseLink } from '../../../components/scenario.shared'
import { RecordMetrics } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import { learningProgress } from '../../../data/scenarios/model'

export default function LearningOverview() {
  const { t } = useI18n(),
    { data } = useScenarios()
  const progress = data.enrollments.map((enrollment) => {
    const course = data.courses.find((course) => course.id === enrollment.courseId)
    return course ? learningProgress(course, enrollment) : 0
  })
  return (
    <CasePage
      title="Learning overview"
      eyebrow="Learning"
      description="A learning space for curious teams, from the first lesson to the next milestone."
    >
      <CaseHero
        eyebrow="Aria Academy"
        title="A little progress opens new possibilities."
        description="Build useful courses, invite learners, and turn shared knowledge into everyday practice."
        art={<NotebookIllustration size={250} />}
      >
        <Link
          to="/preview/learning/classroom"
          className="inline-flex items-center rounded-aria-md border border-outline bg-surface px-aria-lg py-aria-sm text-aria-button text-primary hover:bg-primary-soft"
        >
          {t('Continue learning')}
        </Link>
      </CaseHero>
      <RecordMetrics
        items={[
          {
            label: 'Published courses',
            value: data.courses.filter((item) => item.status === 'published').length,
          },
          {
            label: 'Active learners',
            value: data.students.filter((item) => item.status === 'active').length,
          },
          {
            label: 'Lessons completed',
            value: data.enrollments.reduce((sum, item) => sum + item.completedLessons.length, 0),
          },
          {
            label: 'Average progress',
            value:
              (progress.length
                ? Math.round(progress.reduce((sum, value) => sum + value, 0) / progress.length)
                : 0) + '%',
          },
        ]}
      />
      <div className="grid items-start gap-aria-lg xl:grid-cols-2">
        <Card>
          <CardHeader
            title={t('Continue the journey')}
            titleAs="h2"
            description={t('Pick up where your learners left off.')}
            actions={
              <Link className="text-primary hover:underline" to="/preview/learning/classroom">
                {t('Open classroom')}
              </Link>
            }
          />
          <CardBody className="space-y-aria-md">
            {data.enrollments.slice(0, 4).map((enrollment) => {
              const course = data.courses.find((item) => item.id === enrollment.courseId),
                student = data.students.find((item) => item.id === enrollment.studentId)
              return course && student ? (
                <Link
                  key={enrollment.id}
                  className="block space-y-aria-sm rounded-aria-lg border border-outline p-aria-md transition-colors hover:border-primary"
                  to={'/preview/learning/classroom?enrollment=' + encodeURIComponent(enrollment.id)}
                >
                  <div className="flex items-center justify-between gap-aria-sm">
                    <Text variant="label">{course.name}</Text>
                    <ArrowRight size={16} className="shrink-0 text-muted" />
                  </div>
                  <Text variant="caption">{student.name}</Text>
                  <Progress
                    value={learningProgress(course, enrollment)}
                    showValue
                    size="sm"
                    aria-label={t('Course progress')}
                  />
                </Link>
              ) : null
            })}
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title={t('Course participation')}
            titleAs="h2"
            description={t('A clear picture of who is learning what.')}
            actions={
              <Link
                to="/preview/learning/course.builder"
                className="inline-flex items-center gap-aria-sm rounded-aria-md bg-primary px-aria-md py-aria-sm text-aria-button text-on-primary hover:opacity-90"
              >
                {t('Build a course')}
                <ArrowRight size={16} />
              </Link>
            }
          />
          <CardBody className="space-y-aria-lg">
            {data.courses.map((course) => (
              <div key={course.id} className="space-y-aria-sm">
                <div className="flex items-start justify-between gap-aria-sm">
                  <Text variant="label">{course.name}</Text>
                  <Text variant="caption">
                    {t('{{count}} learners', {
                      count: data.enrollments.filter((item) => item.courseId === course.id).length,
                    })}
                  </Text>
                </div>
                <Progress
                  value={data.enrollments.filter((item) => item.courseId === course.id).length}
                  max={Math.max(1, data.enrollments.length)}
                  showValue={false}
                  size="sm"
                  aria-label={course.name}
                />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-aria-md sm:grid-cols-2 xl:grid-cols-4">
        <CaseLink
          to="/preview/learning/courses"
          title="Course catalog"
          description="Explore content, instructors, and structured curricula."
          icon={<FileText size={22} />}
        />
        <CaseLink
          to="/preview/learning/students"
          title="Students"
          description="A clear directory of the people learning with you."
          icon={<Users size={22} />}
        />
        <CaseLink
          to="/preview/learning/enrollments"
          title="Enrollments"
          description="Connect courses to learners and follow their progress."
          icon={<ListChecks size={22} />}
        />
        <CaseLink
          to="/preview/learning/course.builder"
          title="Course builder"
          description="A guided wizard that creates a real course."
          icon={<Layers size={22} />}
        />
      </div>
    </CasePage>
  )
}
