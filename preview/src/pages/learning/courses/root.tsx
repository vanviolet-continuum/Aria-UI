import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Card, CardBody } from '@templates/ui/card'
import { ActionMenu } from '@templates/ui/action.menu'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { Avatar } from '@templates/ui/avatar'
import { Accordion } from '@templates/ui/accordion'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { EmptyState } from '@templates/ui/empty.state'
import { RecordPage } from '../../../components/record.page'
import { RecordMetrics, RecordStatus, money } from '../../../components/record.display'
import { CourseArt } from '../../../components/scenario.shared'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import {
  courseValuesSchema,
  categoryLabels,
  type Course,
  type ScenarioValues,
} from '../../../data/scenarios/model'

export default function CoursesPage() {
  const { t, locale } = useI18n(),
    { data, save, remove, persistent } = useScenarios(),
    navigate = useNavigate()
  return (
    <RecordPage<Course, ScenarioValues['courses']>
      eyebrow="Learning"
      title="Courses"
      singular="Course"
      description="Practical knowledge, carefully structured into lessons that matter."
      newLabel="Create a course"
      onCreate={() => navigate('/preview/learning/course.builder')}
      records={data.courses}
      persistent={persistent}
      getTitle={(item) => item.name}
      getSubtitle={(item) => item.instructor}
      searchText={(item) => [item.name, item.instructor, item.description].join(' ')}
      schema={courseValuesSchema}
      initialValues={(item) =>
        item
          ? courseValuesSchema.parse(item)
          : {
              name: '',
              category: 'design',
              level: 'beginner',
              instructor: '',
              price: 0,
              status: 'draft',
              description: '',
              lessons: [],
            }
      }
      fields={[
        { name: 'name', label: 'Course title', required: true, full: true },
        { name: 'instructor', label: 'Instructor', required: true },
        {
          name: 'category',
          label: 'Category',
          type: 'select',
          options: ['design', 'development', 'business'].map((value) => ({
            value,
            label: t(categoryLabels[value]),
          })),
        },
        {
          name: 'level',
          label: 'Level',
          type: 'select',
          options: ['beginner', 'intermediate', 'advanced'].map((value) => ({
            value,
            label: t(value),
          })),
        },
        { name: 'price', label: 'Price', type: 'money' },
        {
          name: 'status',
          label: 'Status',
          type: 'select',
          full: true,
          options: ['draft', 'published', 'archived'].map((value) => ({ value, label: t(value) })),
        },
        { name: 'description', label: 'Course introduction', type: 'textarea', full: true },
      ]}
      columns={[
        { id: 'category', header: t('Category'), cell: (item) => t(categoryLabels[item.category]) },
        { id: 'lessons', header: t('Lessons'), cell: (item) => item.lessons.length },
        {
          id: 'students',
          header: t('Students'),
          cell: (item) =>
            data.enrollments.filter((enrollment) => enrollment.courseId === item.id).length,
        },
        {
          id: 'price',
          header: t('Price'),
          sortable: true,
          cell: (item) => money(item.price, locale),
        },
        { id: 'status', header: t('Status'), cell: (item) => <RecordStatus value={item.status} /> },
      ]}
      sorters={{ price: (item) => item.price }}
      filters={[
        {
          id: 'category',
          label: t('Category'),
          type: 'choice',
          accessor: (item) => item.category,
          options: ['design', 'development', 'business'].map((value) => ({
            value,
            label: t(categoryLabels[value]),
          })),
        },
        {
          id: 'status',
          label: t('Status'),
          type: 'choice',
          accessor: (item) => item.status,
          options: ['draft', 'published', 'archived'].map((value) => ({ value, label: t(value) })),
        },
      ]}
      defaultView="grid"
      customView={{
        value: 'grid',
        label: 'Catalog',
        render: (rows, actions) =>
          rows.length ? (
            <div className="grid gap-aria-md md:grid-cols-2 2xl:grid-cols-3">
              {rows.map((course) => (
                <Card key={course.id} className="overflow-clip">
                  <CardBody className="space-y-aria-md">
                    <CourseArt course={course} />
                    <div className="flex items-start justify-between gap-aria-sm">
                      <Text
                        as="button"
                        type="button"
                        variant="label"
                        className="cursor-pointer text-start hover:text-primary"
                        onClick={() => actions.view(course)}
                      >
                        {course.name}
                      </Text>
                      <ActionMenu
                        items={actions.menu(course)}
                        label={t('Actions') + ': ' + course.name}
                      />
                    </div>
                    <Text variant="description" className="line-clamp-2">
                      {course.description}
                    </Text>
                    <div className="flex flex-wrap gap-aria-sm">
                      <Badge variant="neutral">
                        {t('{{count}} lessons', { count: course.lessons.length })}
                      </Badge>
                      <Badge variant="neutral">
                        {t('{{count}} minutes', {
                          count: course.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0),
                        })}
                      </Badge>
                      <RecordStatus value={course.status} />
                    </div>
                    <div className="flex items-center justify-between gap-aria-sm border-t border-outline pt-aria-md">
                      <div className="flex items-center gap-aria-sm">
                        <Avatar name={course.instructor} size="sm" />
                        <Text variant="caption">{course.instructor}</Text>
                      </div>
                      <Text variant="label">{money(course.price, locale)}</Text>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title={t('No matching records')}
              description={t('Try another keyword or adjust your filters.')}
            />
          ),
      }}
      metrics={
        <RecordMetrics
          items={[
            { label: 'Courses', value: data.courses.length },
            {
              label: 'Published courses',
              value: data.courses.filter((item) => item.status === 'published').length,
            },
            {
              label: 'Lessons',
              value: data.courses.reduce((sum, item) => sum + item.lessons.length, 0),
            },
            { label: 'Enrollments', value: data.enrollments.length },
          ]}
        />
      }
      onSave={(values, id) => {
        save('courses', values, id)
      }}
      onDelete={(item) => remove('courses', item.id)}
      canDelete={(item) => !data.enrollments.some((enrollment) => enrollment.courseId === item.id)}
      extraActions={(course) => [
        {
          id: 'curriculum',
          label: t('Edit curriculum'),
          onSelect: () =>
            navigate('/preview/learning/course.builder?course=' + encodeURIComponent(course.id)),
        },
      ]}
      renderDetail={(course) => (
        <DetailView
          variant="compact"
          title={<span>{course.name}</span>}
          description={<span>{course.instructor}</span>}
          badge={<RecordStatus value={course.status} />}
        >
          <CourseArt course={course} />
          <DetailSection title={t('Course overview')}>
            <Text className="mb-aria-md whitespace-pre-wrap">{course.description}</Text>
            <DetailList
              items={[
                { id: 'category', label: t('Category'), value: t(categoryLabels[course.category]) },
                { id: 'level', label: t('Level'), value: t(course.level) },
                {
                  id: 'duration',
                  label: t('Duration'),
                  value: t('{{count}} minutes', {
                    count: course.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0),
                  }),
                },
                { id: 'price', label: t('Price'), value: money(course.price, locale) },
              ]}
            />
          </DetailSection>
          <DetailSection title={t('Curriculum')}>
            <Accordion
              type="multiple"
              items={course.lessons.map((lesson, index) => ({
                value: lesson.id,
                title: index + 1 + '. ' + lesson.title,
                description: t('{{count}} minutes', { count: lesson.minutes }),
                content: <Text className="whitespace-pre-wrap">{lesson.content}</Text>,
              }))}
            />
          </DetailSection>
          <Link
            to={'/preview/learning/enrollments?category=' + encodeURIComponent(course.id)}
            className="text-primary hover:underline"
          >
            {t('View enrollments for this course')}
          </Link>
        </DetailView>
      )}
    />
  )
}
