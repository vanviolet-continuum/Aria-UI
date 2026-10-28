import { z } from 'zod'
import { dayAfter } from '../operations/model'

const name = z
  .string()
  .trim()
  .min(2, 'Enter at least 2 characters.')
  .max(120, 'Use no more than 120 characters.')
const note = z.string().trim().max(4000, 'Use no more than 4000 characters.')
const nonnegative = z.number().finite().min(0, 'Enter a positive amount.')
const meta = { id: z.string().min(1), createdAt: z.iso.datetime(), updatedAt: z.iso.datetime() }
export const productValuesSchema = z.object({
  name,
  sku: z.string().trim().min(2, 'Enter a SKU.'),
  category: z.enum(['desk', 'accessories', 'stationery']),
  price: nonnegative,
  stock: nonnegative.int(),
  reorderAt: nonnegative.int(),
  status: z.enum(['active', 'draft', 'archived']),
  description: note,
})
export const customerValuesSchema = z.object({
  name,
  email: z.email('Enter a valid email address.'),
  phone: z.string().trim(),
  city: name,
  address: note,
  status: z.enum(['active', 'inactive']),
})
export const orderValuesSchema = z.object({
  customerId: z.string().min(1, 'Choose a customer.'),
  productId: z.string().min(1, 'Choose a product.'),
  quantity: z.number().int().min(1, 'Choose at least one item.'),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  note,
})
export const lessonSchema = z.object({
  id: z.string().min(1),
  title: name,
  minutes: z.number().int().min(1).max(240),
  content: z.string().trim().min(10, 'Add at least 10 characters of lesson content.').max(12000),
})
export const courseValuesSchema = z.object({
  name,
  category: z.enum(['design', 'development', 'business']),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  instructor: name,
  price: nonnegative,
  status: z.enum(['draft', 'published', 'archived']),
  description: note,
  lessons: z.array(lessonSchema).min(1, 'Add at least one lesson.'),
})
export const studentValuesSchema = z.object({
  name,
  email: z.email('Enter a valid email address.'),
  company: z.string().trim(),
  status: z.enum(['active', 'inactive']),
  notes: note,
})
export const enrollmentValuesSchema = z.object({
  studentId: z.string().min(1, 'Choose a student.'),
  courseId: z.string().min(1, 'Choose a course.'),
  completedLessons: z.array(z.string()),
  status: z.enum(['active', 'paused']),
  notes: note,
})
export const productSchema = productValuesSchema.extend(meta)
export const customerSchema = customerValuesSchema.extend(meta)
export const orderSchema = orderValuesSchema.extend({
  ...meta,
  number: z.string(),
  unitPrice: nonnegative,
  productName: z.string(),
  customerName: z.string(),
})
export const courseSchema = courseValuesSchema.extend(meta)
export const studentSchema = studentValuesSchema.extend(meta)
export const enrollmentSchema = enrollmentValuesSchema.extend(meta)
export const scenarioSchema = z.object({
  version: z.literal(1),
  products: z.array(productSchema),
  customers: z.array(customerSchema),
  orders: z.array(orderSchema),
  courses: z.array(courseSchema),
  students: z.array(studentSchema),
  enrollments: z.array(enrollmentSchema),
})
export type Product = z.infer<typeof productSchema>
export function stockStatus(product: Product) {
  return product.stock === 0
    ? 'out.of.stock'
    : product.stock <= product.reorderAt
      ? 'low.stock'
      : 'in.stock'
}
export type Customer = z.infer<typeof customerSchema>
export type Order = z.infer<typeof orderSchema>
export type Course = z.infer<typeof courseSchema>
export type Student = z.infer<typeof studentSchema>
export type Enrollment = z.infer<typeof enrollmentSchema>
export type Lesson = z.infer<typeof lessonSchema>
export type ScenarioData = z.infer<typeof scenarioSchema>
export type ScenarioRecords = {
  products: Product
  customers: Customer
  orders: Order
  courses: Course
  students: Student
  enrollments: Enrollment
}
export const schemas = {
  products: productValuesSchema,
  customers: customerValuesSchema,
  orders: orderValuesSchema,
  courses: courseValuesSchema,
  students: studentValuesSchema,
  enrollments: enrollmentValuesSchema,
}
export type ScenarioValues = { [K in keyof typeof schemas]: z.infer<(typeof schemas)[K]> }
export type ScenarioCollection = keyof ScenarioRecords
export const scenarioStorageKey = 'aria-demo-scenarios-v1'
export const categoryLabels: Record<string, string> = {
  desk: 'Desk essentials',
  accessories: 'Accessories',
  stationery: 'Stationery',
  design: 'Design',
  development: 'Development',
  business: 'Business',
}
export const orderStages = ['pending', 'processing', 'shipped', 'delivered'] as const
export function learningProgress(course: Course, enrollment: Enrollment) {
  return Math.round(
    (course.lessons.filter((lesson) => enrollment.completedLessons.includes(lesson.id)).length /
      Math.max(1, course.lessons.length)) *
      100,
  )
}
export function valuesOf<K extends ScenarioCollection>(
  collection: K,
  record: ScenarioRecords[K],
): ScenarioValues[K] {
  return schemas[collection].parse(record) as ScenarioValues[K]
}

export function createScenarios(): ScenarioData {
  const stamp = (id: string, days = -3) => ({
    id,
    createdAt: new Date(dayAfter(days) + 'T09:00:00').toISOString(),
    updatedAt: new Date(dayAfter(days) + 'T09:00:00').toISOString(),
  })
  const products: Product[] = [
    {
      ...stamp('product-desk'),
      name: 'Arc desk organizer',
      sku: 'ARC-001',
      category: 'desk',
      price: 249000,
      stock: 32,
      reorderAt: 8,
      status: 'active',
      description:
        'A modular home for your everyday essentials. Made with responsibly sourced bamboo.',
    },
    {
      ...stamp('product-notebook'),
      name: 'Everyday notebook',
      sku: 'NOTE-002',
      category: 'stationery',
      price: 89000,
      stock: 64,
      reorderAt: 15,
      status: 'active',
      description: 'Lay-flat binding, dot-grid pages, and enough room for your next big idea.',
    },
    {
      ...stamp('product-lamp'),
      name: 'Halo task light',
      sku: 'HALO-003',
      category: 'desk',
      price: 649000,
      stock: 5,
      reorderAt: 10,
      status: 'active',
      description: 'Warm, adjustable lighting for quiet mornings and focused evenings.',
    },
    {
      ...stamp('product-sleeve'),
      name: 'Transit laptop sleeve',
      sku: 'BAG-004',
      category: 'accessories',
      price: 329000,
      stock: 18,
      reorderAt: 6,
      status: 'active',
      description: 'Lightweight protection with a soft recycled lining. Fits a 14-inch laptop.',
    },
    {
      ...stamp('product-pen'),
      name: 'Flow pen set',
      sku: 'FLOW-005',
      category: 'stationery',
      price: 69000,
      stock: 7,
      reorderAt: 12,
      status: 'active',
      description: 'Three smooth-writing pens for notes, sketches, and everything in between.',
    },
    {
      ...stamp('product-stand'),
      name: 'Rise laptop stand',
      sku: 'RISE-006',
      category: 'accessories',
      price: 399000,
      stock: 0,
      reorderAt: 8,
      status: 'draft',
      description: 'Bring your screen to eye level. A compact stand for a calmer workspace.',
    },
  ]
  const customers: Customer[] = [
    {
      ...stamp('customer-nadia'),
      name: 'Nadia Putri',
      email: 'nadia@aria.example',
      city: 'Bandung',
      phone: '+62 812 3456 1001',
      address: 'Jl. Merdeka No. 21',
      status: 'active',
    },
    {
      ...stamp('customer-rizky'),
      name: 'Rizky Pratama',
      email: 'rizky@aria.example',
      city: 'Jakarta',
      phone: '+62 812 3456 1002',
      address: 'Jl. Kemang Raya No. 14',
      status: 'active',
    },
    {
      ...stamp('customer-dewi'),
      name: 'Dewi Rahma',
      email: 'dewi@aria.example',
      city: 'Surabaya',
      phone: '+62 812 3456 1003',
      address: 'Jl. Darmo No. 8',
      status: 'active',
    },
    {
      ...stamp('customer-alya'),
      name: 'Alya Safitri',
      email: 'alya@aria.example',
      city: 'Yogyakarta',
      phone: '+62 812 3456 1004',
      address: 'Jl. Kaliurang No. 5',
      status: 'active',
    },
  ]
  const orders: Order[] = [0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
    const product = products[n % 5],
      customer = customers[n % 4]
    return {
      ...stamp('order-' + n, -7 + n),
      number: 'ORD-' + String(1041 + n),
      productId: product.id,
      customerId: customer.id,
      productName: product.name,
      customerName: customer.name,
      unitPrice: product.price,
      quantity: (n % 3) + 1,
      status: orderStages[n % 4],
      note: n % 2 ? 'Please leave the parcel at reception.' : '',
    }
  })
  const lesson = (id: string, title: string, minutes: number, content: string): Lesson => ({
    id,
    title,
    minutes,
    content,
  })
  const courses: Course[] = [
    {
      ...stamp('course-design'),
      name: 'Design systems, thoughtfully',
      category: 'design',
      level: 'beginner',
      instructor: 'Nadia Putri',
      price: 349000,
      status: 'published',
      description:
        'Turn scattered UI decisions into a clear, flexible design language. Learn tokens, components, and the habits that keep a team aligned.',
      lessons: [
        lesson(
          'design-1',
          'Start with a shared language',
          12,
          'A design system starts with agreement. Identify the patterns your team uses every day, then give each pattern a clear name.\n\nExercise: collect five screens and highlight repeated decisions. Which ones belong in a shared component? Write down the purpose before choosing an implementation.',
        ),
        lesson(
          'design-2',
          'Tokens that travel',
          18,
          'Use semantic tokens to describe intent: surface, content, primary, and outline. Keep raw values in one theme layer.\n\nExercise: map the colors and spacing from one screen to tokens. Switch to a second theme and identify anything that no longer works.',
        ),
        lesson(
          'design-3',
          'Compose, then document',
          16,
          'Build a small set of flexible primitives. Add children and slots so teams can adapt a component without copying it.\n\nExercise: document one component with its default behavior, one useful variation, and one accessibility consideration.',
        ),
      ],
    },
    {
      ...stamp('course-react'),
      name: 'React for real products',
      category: 'development',
      level: 'intermediate',
      instructor: 'Ahmad Fauzi',
      price: 499000,
      status: 'published',
      description:
        'Build useful interfaces with predictable state, resilient data boundaries, and accessible interactions.',
      lessons: [
        lesson(
          'react-1',
          'State belongs somewhere',
          20,
          'Separate persistent domain state from transient interface state. Use the URL for applied filters, sorting, and pagination.\n\nExercise: list the state in a table page. Decide which values should survive refresh and which belong only to an open panel.',
        ),
        lesson(
          'react-2',
          'A useful data boundary',
          24,
          'Loading, empty, error, and success are all part of a feature. Give each state a home in the same result area.\n\nExercise: sketch these four states for a searchable combobox. Ensure a failed request never looks like an empty list.',
        ),
        lesson(
          'react-3',
          'Forms that listen',
          18,
          'Validate as a person edits. Keep error messages specific and preserve backend messages when the server rejects a change.\n\nExercise: build an email field that shows an error after editing and clears the error as soon as the value becomes valid.',
        ),
      ],
    },
    {
      ...stamp('course-business'),
      name: 'From idea to launch',
      category: 'business',
      level: 'beginner',
      instructor: 'Dewi Rahma',
      price: 249000,
      status: 'published',
      description:
        'Choose a small, useful problem. Learn to plan an experiment, measure progress, and decide what comes next.',
      lessons: [
        lesson(
          'business-1',
          'Make the problem concrete',
          15,
          'A useful problem statement names a person, a situation, and an obstacle. Avoid starting with a feature list.\n\nExercise: write one sentence describing who needs help, when they need it, and what gets in the way.',
        ),
        lesson(
          'business-2',
          'Design a small experiment',
          22,
          'Choose the smallest experiment that can teach you something. Set a measurable goal and a date to review the result.\n\nExercise: write a one-week experiment with an owner, a success measure, and a clear decision you will make afterward.',
        ),
      ],
    },
  ]
  const students: Student[] = customers.map((customer, n) => ({
    ...stamp('student-' + n),
    name: customer.name,
    email: customer.email,
    company: ['Luma Studio', 'Orbit Labs', 'Nusa Living', 'Independent'][n],
    status: 'active',
    notes: '',
  }))
  const enrollments: Enrollment[] = students.map((student, n) => ({
    ...stamp('enrollment-' + n),
    studentId: student.id,
    courseId: courses[n % 3].id,
    completedLessons: n === 0 ? ['design-1'] : n === 1 ? ['react-1', 'react-2'] : [],
    status: 'active',
    notes: '',
  }))
  return { version: 1, products, customers, orders, courses, students, enrollments }
}
