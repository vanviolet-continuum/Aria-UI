import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useWorkspace } from '../workspace/workspace.provider'
import {
  createScenarios,
  scenarioSchema,
  scenarioStorageKey,
  schemas,
  type ScenarioCollection,
  type ScenarioData,
  type ScenarioRecords,
  type ScenarioValues,
  type Order,
  type Enrollment,
  type Product,
  type Student,
  type Customer,
} from './model'

interface ScenarioContextValue {
  data: ScenarioData
  persistent: boolean
  save: <K extends ScenarioCollection>(
    collection: K,
    values: ScenarioValues[K],
    id?: string,
  ) => ScenarioRecords[K]
  remove: (collection: ScenarioCollection, id: string) => void
  adjustStock: (id: string, amount: number) => void
  completeLesson: (enrollmentId: string, lessonId: string) => void
  launchCourse: (
    values: ScenarioValues['courses'],
    studentIds: string[],
    id?: string,
  ) => ScenarioRecords['courses']
}
const Context = createContext<ScenarioContextValue | null>(null)
function read() {
  try {
    const stored = localStorage.getItem(scenarioStorageKey)
    if (stored) {
      const parsed = scenarioSchema.safeParse(JSON.parse(stored))
      if (parsed.success) return parsed.data
    }
  } catch {
    /* Local demo remains usable without persistence. */
  }
  return createScenarios()
}
export function ScenariosProvider({ children }: { children: ReactNode }) {
  const workspace = useWorkspace()
  const [data, setData] = useState(read)
  const [persistent, setPersistent] = useState(true)
  const current = useRef(data)
  const revision = useRef(workspace.resetRevision)
  function commit(next: ScenarioData) {
    current.current = next
    setData(next)
    try {
      localStorage.setItem(scenarioStorageKey, JSON.stringify(next))
      setPersistent(true)
    } catch {
      setPersistent(false)
    }
  }
  useEffect(() => {
    if (revision.current !== workspace.resetRevision) {
      revision.current = workspace.resetRevision
      commit(createScenarios())
    }
  }, [workspace.resetRevision])
  function save<K extends ScenarioCollection>(
    collection: K,
    input: ScenarioValues[K],
    id?: string,
  ): ScenarioRecords[K] {
    const values = schemas[collection].parse(input) as ScenarioValues[K]
    const before = current.current
    const previous = before[collection].find((record) => record.id === id)
    if (id && !previous) throw new Error('This record no longer exists.')
    const at = new Date().toISOString()
    let record = {
      ...previous,
      ...values,
      id: id ?? crypto.randomUUID(),
      createdAt: previous?.createdAt ?? at,
      updatedAt: at,
    } as ScenarioRecords[K]
    let next = { ...before }
    if (collection === 'products') {
      const product = record as Product
      if (
        before.products.some(
          (item) => item.id !== id && item.sku.toLowerCase() === product.sku.toLowerCase(),
        )
      )
        throw new Error('This SKU is already in use.')
    }
    if (collection === 'customers' || collection === 'students') {
      const person = record as Customer | Student
      if (
        before[collection].some(
          (item) =>
            item.id !== id && (item as any)?.email?.toLowerCase() === person.email.toLowerCase(),
        )
      )
        throw new Error('This email address is already in use.')
    }
    if (collection === 'orders') {
      const value = values as ScenarioValues['orders'],
        old = previous as Order | undefined
      const product = before.products.find((item) => item.id === value.productId)
      const customer = before.customers.find((item) => item.id === value.customerId)
      if (!product || !customer) throw new Error('Choose an available product and customer.')
      if (product.status !== 'active' && old?.productId !== product.id)
        throw new Error('Only active products can be ordered.')
      if (customer.status !== 'active' && old?.customerId !== customer.id)
        throw new Error('Choose an active customer.')
      const available = before.products.map((item) => ({
        ...item,
        stock:
          item.stock +
          (old && old.status !== 'cancelled' && old.productId === item.id ? old.quantity : 0),
      }))
      const stock = available.find((item) => item.id === product.id)!.stock
      if (value.status !== 'cancelled' && value.quantity > stock)
        throw new Error(
          'Not enough stock for this order. Adjust the quantity or replenish inventory.',
        )
      next.products = available.map((item) =>
        item.id === product.id && value.status !== 'cancelled'
          ? { ...item, stock: item.stock - value.quantity, updatedAt: at }
          : item,
      )
      record = {
        ...record,
        number:
          old?.number ??
          'ORD-' +
            String(
              Math.max(
                1048,
                ...before.orders.map((item) => Number(item.number.split('-').at(-1)) || 0),
              ) + 1,
            ),
        unitPrice: old?.productId === product.id ? old.unitPrice : product.price,
        productName: product.name,
        customerName: customer.name,
      } as ScenarioRecords[K]
    }
    if (collection === 'enrollments') {
      const value = values as ScenarioValues['enrollments'],
        old = previous as Enrollment | undefined
      const course = before.courses.find((item) => item.id === value.courseId)
      const student = before.students.find((item) => item.id === value.studentId)
      if (!course || !student) throw new Error('Choose an available course and student.')
      if (course.status !== 'published' && old?.courseId !== course.id)
        throw new Error('Publish this course before enrolling a student.')
      if (student.status !== 'active' && old?.studentId !== student.id)
        throw new Error('Choose an active student.')
      if (
        before.enrollments.some(
          (item) =>
            item.id !== id &&
            item.studentId === value.studentId &&
            item.courseId === value.courseId,
        )
      )
        throw new Error('This student is already enrolled in this course.')
      const completedLessons =
        old && old.courseId !== course.id
          ? []
          : value.completedLessons.filter((lesson) =>
              course.lessons.some((item) => item.id === lesson),
            )
      record = { ...record, completedLessons } as ScenarioRecords[K]
    }
    next = {
      ...next,
      [collection]: previous
        ? next[collection].map((item) => (item.id === id ? record : item))
        : [record, ...next[collection]],
    }
    commit(next)
    const title =
      'name' in record
        ? record.name
        : collection === 'orders'
          ? (record as Order).number
          : (before.courses.find((item) => item.id === (record as Enrollment).courseId)?.name ??
            'Enrollment')
    workspace.recordActivity(previous ? 'updated' : 'created', title, collection)
    return record
  }
  function remove(collection: ScenarioCollection, id: string) {
    const before = current.current,
      record = before[collection].find((item) => item.id === id)
    if (!record) return
    if (
      (collection === 'products' && before.orders.some((item) => item.productId === id)) ||
      (collection === 'customers' && before.orders.some((item) => item.customerId === id)) ||
      (collection === 'courses' && before.enrollments.some((item) => item.courseId === id)) ||
      (collection === 'students' && before.enrollments.some((item) => item.studentId === id))
    )
      throw new Error('Remove linked records first.')
    let next = { ...before, [collection]: before[collection].filter((item) => item.id !== id) }
    if (collection === 'orders') {
      const order = record as Order
      if (!['pending', 'cancelled'].includes(order.status))
        throw new Error('Only pending or cancelled orders can be deleted.')
      if (order.status !== 'cancelled')
        next = {
          ...next,
          products: next.products.map((item) =>
            item.id === order.productId ? { ...item, stock: item.stock + order.quantity } : item,
          ),
        }
    }
    commit(next)
    workspace.recordActivity(
      'deleted',
      'name' in record
        ? record.name
        : collection === 'orders'
          ? (record as Order).number
          : 'Enrollment',
      collection,
    )
  }
  return (
    <Context.Provider
      value={{
        data,
        persistent,
        save,
        remove,
        adjustStock: (id, amount) => {
          const product = current.current.products.find((item) => item.id === id)
          if (!product) throw new Error('This record no longer exists.')
          if (!Number.isInteger(amount) || amount === 0 || product.stock + amount < 0)
            throw new Error('Enter a valid stock adjustment.')
          save('products', { ...product, stock: product.stock + amount }, id)
        },
        completeLesson: (id, lessonId) => {
          const enrollment = current.current.enrollments.find((item) => item.id === id)
          const course = current.current.courses.find((item) => item.id === enrollment?.courseId)
          if (!enrollment || !course?.lessons.some((item) => item.id === lessonId))
            throw new Error('This lesson is no longer available.')
          if (enrollment.status !== 'active')
            throw new Error('Resume this enrollment before continuing.')
          if (!enrollment.completedLessons.includes(lessonId))
            save(
              'enrollments',
              { ...enrollment, completedLessons: [...enrollment.completedLessons, lessonId] },
              id,
            )
        },
        launchCourse: (input, studentIds, id) => {
          const values = schemas.courses.parse(input),
            before = current.current
          const students = [...new Set(studentIds)]
          const previous = before.courses.find((course) => course.id === id)
          if (id && !previous) throw new Error('This record no longer exists.')
          if (students.length && values.status !== 'published')
            throw new Error('Publish this course before enrolling a student.')
          if (
            students.some(
              (id) =>
                !before.students.some(
                  (student) => student.id === id && student.status === 'active',
                ),
            )
          )
            throw new Error('Choose an active student.')
          const at = new Date().toISOString(),
            course = {
              ...values,
              id: previous?.id ?? crypto.randomUUID(),
              createdAt: previous?.createdAt ?? at,
              updatedAt: at,
            }
          const enrollments = students
            .filter(
              (studentId) =>
                !before.enrollments.some(
                  (item) => item.studentId === studentId && item.courseId === course.id,
                ),
            )
            .map((studentId) => ({
              id: crypto.randomUUID(),
              createdAt: at,
              updatedAt: at,
              studentId,
              courseId: course.id,
              completedLessons: [],
              status: 'active' as const,
              notes: '',
            }))
          commit({
            ...before,
            courses: previous
              ? before.courses.map((item) => (item.id === course.id ? course : item))
              : [course, ...before.courses],
            enrollments: [
              ...enrollments,
              ...before.enrollments.map((item) =>
                item.courseId === course.id
                  ? {
                      ...item,
                      completedLessons: item.completedLessons.filter((id) =>
                        course.lessons.some((lesson) => lesson.id === id),
                      ),
                    }
                  : item,
              ),
            ],
          })
          workspace.recordActivity(previous ? 'updated' : 'created', course.name, 'courses')
          return course
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}
export function useScenarios() {
  const context = useContext(Context)
  if (!context) throw new Error('ScenariosProvider is required.')
  return context
}
