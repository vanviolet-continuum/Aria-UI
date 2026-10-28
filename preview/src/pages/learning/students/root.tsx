import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Avatar } from '@templates/ui/avatar'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Progress } from '@templates/ui/progress'
import { Text } from '@templates/ui/text'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  studentValuesSchema,
  learningProgress,
  type Student,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function StudentsPage() {
  const { t } = useI18n(),
    { data, save, remove, persistent } = useScenarios()
  const enrollments = (id: string) => data.enrollments.filter((item) => item.studentId === id)
  return (
    <RecordPage<Student, ScenarioValues['students']>
      eyebrow="Learning"
      title="Students"
      singular="Student"
      description="Give every learner a clear place to start and a path to keep growing."
      newLabel="New student"
      records={data.students}
      persistent={persistent}
      getTitle={(item) => item.name}
      getSubtitle={(item) => item.email}
      searchText={(item) => [item.name, item.email, item.company].join(' ')}
      schema={studentValuesSchema}
      initialValues={(item) =>
        item
          ? studentValuesSchema.parse(item)
          : { name: '', email: '', company: '', status: 'active', notes: '' }
      }
      fields={[
        { name: 'name', label: 'Student name', required: true, full: true },
        { name: 'email', label: 'Email address', type: 'email', required: true },
        { name: 'company', label: 'Organization' },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          full: true,
          options: ['active', 'inactive'].map((value) => ({ value, label: t(value) })),
        },
        { name: 'notes', label: 'Notes', type: 'textarea', full: true },
      ]}
      columns={[
        {
          id: 'company',
          header: t('Organization'),
          sortable: true,
          cell: (item) => item.company || '—',
        },
        {
          id: 'enrollments',
          header: t('Enrollments'),
          cell: (item) => enrollments(item.id).length,
        },
        { id: 'status', header: t('Status'), cell: (item) => <RecordStatus value={item.status} /> },
      ]}
      sorters={{ company: (item) => item.company }}
      filters={[
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: ['active', 'inactive'].map((value) => ({ value, label: t(value) })),
        },
      ]}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Students', value: data.students.length },
            {
              label: 'Active learners',
              value: data.students.filter((item) => item.status === 'active').length,
            },
            { label: 'Enrollments', value: data.enrollments.length },
            {
              label: 'Organizations',
              value: new Set(data.students.map((item) => item.company).filter(Boolean)).size,
            },
          ]}
        />
      }
      onSave={(values, id) => {
        save('students', values, id)
      }}
      onDelete={(item) => remove('students', item.id)}
      canDelete={(item) => !enrollments(item.id).length}
      renderDetail={(student) => (
        <DetailView
          variant="compact"
          title={<span>{student.name}</span>}
          description={<span>{student.email}</span>}
          avatar={<Avatar name={student.name} size="lg" />}
          badge={<RecordStatus value={student.status} />}
        >
          <DetailSection title={t('Student details')}>
            <DetailList
              items={[
                { id: 'email', label: t('Email address'), value: student.email },
                { id: 'company', label: t('Organization'), value: student.company || '—' },
                { id: 'notes', label: t('Notes'), value: student.notes || '—' },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Learning journey')}>
            <div className="space-y-aria-md">
              {enrollments(student.id).map((enrollment) => {
                const course = data.courses.find((item) => item.id === enrollment.courseId)
                return course ? (
                  <Link
                    key={enrollment.id}
                    to={
                      '/preview/learning/classroom?enrollment=' + encodeURIComponent(enrollment.id)
                    }
                    className="block space-y-aria-sm rounded-aria-lg border border-outline p-aria-md hover:border-primary"
                  >
                    <Text variant="label">{course.name}</Text>
                    <Progress
                      value={learningProgress(course, enrollment)}
                      showValue
                      label={t('Course progress')}
                    />
                  </Link>
                ) : null
              })}
              {!enrollments(student.id).length && (
                <Text variant="description">{t('No enrollments yet.')}</Text>
              )}
            </div>
          </DetailSection>
        </DetailView>
      )}
    />
  )
}
