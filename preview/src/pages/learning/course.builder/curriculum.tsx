import { useI18n } from '@templates/i18n'
import type { CourseFormProps } from './types'
import { useState } from 'react'
import { Field } from '@templates/ui/field'
import { Input } from '@templates/ui/input'
import { Textarea } from '@templates/ui/textarea'
import { NumericInput } from '@templates/ui/number.input'
import { Button } from '@templates/ui/button'
import { IconButton } from '@templates/ui/icon.button'
import { Text } from '@templates/ui/text'
import { Alert } from '@templates/ui/alert'
import { ArrowUp, ArrowDown, Trash, Plus, MoreVertical as GripVertical } from '@templates/icons'
export function CurriculumStep({ values, update, message }: CourseFormProps) {
  const { t } = useI18n()
  const [dragged, setDragged] = useState<number | null>(null),
    [dragOver, setDragOver] = useState<number | null>(null)
  const reorder = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0 || to >= values.lessons.length) return
    const lessons = [...values.lessons],
      [item] = lessons.splice(from, 1)
    lessons.splice(to, 0, item)
    update('lessons', lessons)
    setDragged(null)
    setDragOver(null)
  }
  const total = values.lessons.reduce((sum, item) => sum + item.minutes, 0)
  return (
    <div className="space-y-aria-md">
      <Alert
        severity="info"
        description={t(
          'Drag lessons to reorder them, or use the arrow buttons. Each lesson includes reading content and an estimated duration.',
        )}
      />
      {values.lessons.map((lesson, index) => (
        <div
          key={lesson.id}
          onDragOver={(event) => {
            event.preventDefault()
            setDragOver(index)
          }}
          onDrop={(event) => {
            event.preventDefault()
            if (dragged !== null) reorder(dragged, index)
          }}
          className={
            'space-y-aria-md rounded-aria-lg border bg-surface p-aria-md ' +
            (dragOver === index ? 'border-primary ring-2 ring-primary/10' : 'border-outline')
          }
        >
          <div className="flex flex-wrap items-center justify-between gap-aria-sm">
            <div className="flex items-center gap-aria-sm">
              <button
                type="button"
                draggable
                aria-label={t('Drag lesson {{number}}', { number: index + 1 })}
                className="cursor-grab p-aria-xs text-muted active:cursor-grabbing"
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', String(index))
                  setDragged(index)
                }}
                onDragEnd={() => {
                  setDragged(null)
                  setDragOver(null)
                }}
              >
                <GripVertical size={17} />
              </button>
              <Text variant="label">{t('Lesson {{number}}', { number: index + 1 })}</Text>
            </div>
            <div className="flex gap-aria-xs">
              <IconButton
                label={t('Move lesson up')}
                size="sm"
                disabled={index === 0}
                onClick={() => reorder(index, index - 1)}
              >
                <ArrowUp size={15} />
              </IconButton>
              <IconButton
                label={t('Move lesson down')}
                size="sm"
                disabled={index === values.lessons.length - 1}
                onClick={() => reorder(index, index + 1)}
              >
                <ArrowDown size={15} />
              </IconButton>
              <IconButton
                label={t('Remove lesson')}
                size="sm"
                disabled={values.lessons.length === 1}
                onClick={() =>
                  update(
                    'lessons',
                    values.lessons.filter((item) => item.id !== lesson.id),
                  )
                }
              >
                <Trash size={15} />
              </IconButton>
            </div>
          </div>
          <div className="grid gap-aria-md sm:grid-cols-[minmax(0,1fr)_140px]">
            <Field
              label={t('Lesson title')}
              required
              error={message('lessons.' + index + '.title')}
            >
              <Input
                value={lesson.title}
                onChange={(event) =>
                  update(
                    'lessons',
                    values.lessons.map((item) =>
                      item.id === lesson.id ? { ...item, title: event.target.value } : item,
                    ),
                  )
                }
              />
            </Field>
            <Field label={t('Minutes')} required error={message('lessons.' + index + '.minutes')}>
              <NumericInput
                value={lesson.minutes}
                decimalScale={0}
                onChange={(next) =>
                  update(
                    'lessons',
                    values.lessons.map((item) =>
                      item.id === lesson.id ? { ...item, minutes: Number(next) } : item,
                    ),
                  )
                }
              />
            </Field>
          </div>
          <Field
            label={t('Lesson content')}
            required
            error={message('lessons.' + index + '.content')}
          >
            <Textarea
              rows={4}
              value={lesson.content}
              onChange={(event) =>
                update(
                  'lessons',
                  values.lessons.map((item) =>
                    item.id === lesson.id ? { ...item, content: event.target.value } : item,
                  ),
                )
              }
            />
          </Field>
        </div>
      ))}
      <Button
        variant="outlined"
        disabled={values.lessons.length >= 12}
        onClick={() =>
          update('lessons', [
            ...values.lessons,
            { id: crypto.randomUUID(), title: '', minutes: 15, content: '' },
          ])
        }
      >
        <Plus size={16} />
        {t('Add a lesson')}
      </Button>
      <Text variant="caption">
        {t('{{count}} lessons', { count: values.lessons.length })} ·{' '}
        {t('{{count}} minutes', { count: total })}
      </Text>
    </div>
  )
}
