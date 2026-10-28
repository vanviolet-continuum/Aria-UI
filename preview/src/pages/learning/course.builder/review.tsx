import { useI18n } from '@templates/i18n'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { DetailList } from '@templates/ui/detail'
import { Accordion } from '@templates/ui/accordion'
import { CourseArt } from '../../../components/scenario.shared'
import { money } from '../../../components/record.display'
import { categoryLabels } from '../../../data/scenarios/model'
import type { Draft } from './types'
export function ReviewStep({ values, students }: { values: Draft; students: string[] }) {
  const { t, locale } = useI18n()
  const total = values.lessons.reduce((sum, item) => sum + item.minutes, 0)
  return (
    <div className="space-y-aria-lg">
      <CourseArt course={values} />
      <Heading as="h3" variant="card">
        {values.name}
      </Heading>
      <Text variant="description" className="whitespace-pre-wrap">
        {values.description}
      </Text>
      <DetailList
        items={[
          { id: 'instructor', label: t('Instructor'), value: values.instructor },
          { id: 'category', label: t('Category'), value: t(categoryLabels[values.category]) },
          { id: 'level', label: t('Level'), value: t(values.level) },
          { id: 'price', label: t('Price'), value: money(values.price, locale) },
          { id: 'duration', label: t('Duration'), value: t('{{count}} minutes', { count: total }) },
          { id: 'visibility', label: t('Visibility'), value: t(values.status) },
          { id: 'learners', label: t('First learners'), value: students.length },
        ]}
      />
      <Accordion
        type="multiple"
        items={values.lessons.map((lesson, index) => ({
          value: lesson.id,
          title: index + 1 + '. ' + lesson.title,
          description: t('{{count}} minutes', { count: lesson.minutes }),
          content: <Text className="whitespace-pre-wrap">{lesson.content}</Text>,
        }))}
      />
    </div>
  )
}
