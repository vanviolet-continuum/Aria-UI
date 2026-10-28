import { useNavigate } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Progress } from '@templates/ui/progress'
import { Text } from '@templates/ui/text'
import { Play, Pause } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, shortDate } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  enrollmentValuesSchema,
  learningProgress,
  type Enrollment,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function EnrollmentsPage() {
  const { t, locale } = useI18n(),
    { data, save, remove, persistent } = useScenarios(),
    navigate = useNavigate()
  const course = (item: Enrollment) => data.courses.find((value) => value.id === item.courseId)
  const student = (item: Enrollment) => data.students.find((value) => value.id === item.studentId)
  const progress = (item: Enrollment) => {
    const value = course(item)
    return value ? learningProgress(value, item) : 0
  }
  return (
    <RecordPage<Enrollment, ScenarioValues['enrollments']>
      eyebrow="Learning"
      title="Enrollments"
      singular="Enrollment"
      description="Connect learners to a course and follow their progress lesson by lesson."
      newLabel="Enroll a student"
      records={data.enrollments}
      persistent={persistent}
      getTitle={(item) => student(item)?.name ?? t('Student')}
      getSubtitle={(item) => course(item)?.name ?? t('Course')}
      searchText={(item) => (student(item)?.name ?? '') + ' ' + (course(item)?.name ?? '')}
      schema={enrollmentValuesSchema}
      initialValues={(item) =>
        item
          ? enrollmentValuesSchema.parse(item)
          : { studentId: '', courseId: '', status: 'active', completedLessons: [], notes: '' }
      }
      fields={[
        {
          name: 'studentId',
          label: 'Student',
          type: 'select',
          required: true,
          full: true,
          options: data.students.map((item) => ({
            value: item.id,
            label: item.name,
            description: item.email,
          })),
        },
        {
          name: 'courseId',
          label: 'Course',
          type: 'select',
          required: true,
          full: true,
          options: data.courses.map((item) => ({
            value: item.id,
            label: item.name,
            description: t(item.status),
          })),
        },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          full: true,
          options: ['active', 'paused'].map((value) => ({ value, label: t(value) })),
        },
        {
          name: 'notes',
          label: 'Notes',
          type: 'textarea',
          full: true,
          hint: 'Only published courses accept new enrollments. Each student can enroll once per course.',
        },
      ]}
      columns={[
        {
          id: 'progress',
          header: t('Progress'),
          width: 210,
          cell: (item) => (
            <Progress
              value={progress(item)}
              showValue
              aria-label={t('Course progress')}
              size="sm"
            />
          ),
        },
        {
          id: 'createdAt',
          header: t('Enrolled'),
          sortable: true,
          cell: (item) => shortDate(item.createdAt, locale),
        },
        {
          id: 'status',
          header: t('Status'),
          cell: (item) => (
            <RecordStatus value={progress(item) === 100 ? 'completed' : item.status} />
          ),
        },
      ]}
      sorters={{ createdAt: (item) => item.createdAt }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: ['active', 'paused'].map((value) => ({ value, label: t(value) })),
        },
        {
          id: 'category',
          label: t('Course'),
          type: 'choice',
          accessor: (item) => item.courseId,
          options: data.courses.map((item) => ({ value: item.id, label: item.name })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Enrollments', value: data.enrollments.length },
            {
              label: 'In progress',
              value: data.enrollments.filter(
                (item) => item.status === 'active' && progress(item) < 100,
              ).length,
            },
            {
              label: 'Completed courses',
              value: data.enrollments.filter((item) => progress(item) === 100).length,
            },
            {
              label: 'Lessons completed',
              value: data.enrollments.reduce((sum, item) => sum + item.completedLessons.length, 0),
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('enrollments', values, id)
      }}
      onDelete={(item) => remove('enrollments', item.id)}
      extraActions={(item) => [
        {
          id: 'classroom',
          label: t('Open classroom'),
          icon: <Play size={16} />,
          onSelect: () =>
            navigate('/preview/learning/classroom?enrollment=' + encodeURIComponent(item.id)),
        },
        {
          id: 'pause',
          label: t(item.status === 'active' ? 'Pause enrollment' : 'Resume enrollment'),
          icon: item.status === 'active' ? <Pause size={16} /> : <Play size={16} />,
          onSelect: () => {
            save(
              'enrollments',
              {
                ...enrollmentValuesSchema.parse(item),
                status: item.status === 'active' ? 'paused' : 'active',
              },
              item.id,
            )
            toast.success(t('Enrollment updated'), {
              description: t('The learner can continue when the enrollment is active.'),
            })
          },
        },
      ]}
      renderDetail={(item) => (
        <DetailView
          variant="compact"
          title={<span>{student(item)?.name ?? t('Student')}</span>}
          description={<span>{course(item)?.name ?? t('Course')}</span>}
          badge={<RecordStatus value={item.status} />}
        >
          <DetailSection title={t('Course progress')}>
            <Progress value={progress(item)} showValue label={course(item)?.name} />
            <div className="mt-aria-md space-y-aria-sm">
              {course(item)?.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between gap-aria-sm rounded-aria-md border border-outline p-aria-sm"
                >
                  <Text>
                    {index + 1}. {lesson.title}
                  </Text>
                  <RecordStatus
                    value={item.completedLessons.includes(lesson.id) ? 'completed' : 'pending'}
                  />
                </div>
              ))}
            </div>
          </DetailSection>
          <DetailSection title={t('Enrollment details')}>
            <DetailList
              items={[
                { id: 'student', label: t('Student'), value: student(item)?.email || '—' },
                {
                  id: 'instructor',
                  label: t('Instructor'),
                  value: course(item)?.instructor || '—',
                },
                { id: 'date', label: t('Enrolled'), value: shortDate(item.createdAt, locale) },
                { id: 'notes', label: t('Notes'), value: item.notes || '—' },
              ]}
            />
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
