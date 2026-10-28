import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { PageHeader } from '@templates/ui/page.header'
import { Card, CardBody } from '@templates/ui/card'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import {
  ArrowUpRight,
  MonitorPlay as Monitor,
  FileText,
  Layers,
  ShoppingBag,
  Palette as PenTool,
  Code,
  Store as ChartNoAxesCombined,
} from '@templates/icons'
import type { Product, Course } from '../data/scenarios/model'
import { categoryLabels } from '../data/scenarios/model'
import { ModuleArtwork } from './module.artwork'

export function CasePage({
  title,
  description,
  eyebrow,
  actions,
  artwork,
  children,
}: {
  title: string
  description: string
  eyebrow: string
  actions?: ReactNode
  artwork?: ReactNode
  children: ReactNode
}) {
  const { t } = useI18n()
  return (
    <section className="w-full min-w-0 space-y-aria-lg p-aria-md lg:p-aria-xl">
      <PageHeader
        titleAs="h1"
        title={t(title)}
        description={t(description)}
        eyebrow={t(eyebrow)}
        actions={actions}
        artwork={artwork ?? <ModuleArtwork subject={title} />}
      />
      {children}
      <Text variant="caption">
        {t('Demo data is stored in this browser. No external service is contacted.')}
      </Text>
    </section>
  )
}
export function CaseHero({
  eyebrow,
  title,
  description,
  art,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  art: ReactNode
  children?: ReactNode
}) {
  const { t } = useI18n()
  return (
    <div className="relative isolate flex items-center justify-between gap-aria-xl overflow-clip rounded-aria-xl border border-primary/15 bg-linear-to-br from-primary-soft via-surface to-surface-subtle p-aria-lg lg:p-aria-xl">
      <div className="max-w-2xl space-y-aria-md">
        <Badge variant="primary">{t(eyebrow)}</Badge>
        <Heading as="h2" variant="section">
          {t(title)}
        </Heading>
        <Text variant="description">{t(description)}</Text>
        <div className="flex flex-wrap gap-aria-sm">{children}</div>
      </div>
      <div className="hidden w-1/3 shrink-0 items-center justify-center rounded-full bg-surface/60 p-aria-lg md:flex [&>svg]:max-h-48 [&>svg]:w-full">
        {art}
      </div>
    </div>
  )
}
export function CaseLink({
  to,
  title,
  description,
  icon,
}: {
  to: string
  title: string
  description: string
  icon: ReactNode
}) {
  const { t } = useI18n()
  return (
    <Link
      to={to}
      className="group block h-full rounded-aria-lg no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Card className="h-full transition-colors group-hover:border-primary">
        <CardBody className="space-y-aria-md">
          <div className="flex items-center justify-between">
            <span className="grid size-10 place-items-center rounded-aria-md bg-primary-soft text-primary">
              {icon}
            </span>
            <ArrowUpRight size={18} className="text-muted group-hover:text-primary" />
          </div>
          <Heading as="h3" variant="card">
            {t(title)}
          </Heading>
          <Text variant="description">{t(description)}</Text>
        </CardBody>
      </Card>
    </Link>
  )
}
export function ProductArt({
  product,
  compact = false,
}: {
  product: Pick<Product, 'sku' | 'category'>
  compact?: boolean
}) {
  const Icon =
    product.category === 'desk'
      ? Monitor
      : product.category === 'stationery'
        ? FileText
        : ShoppingBag
  return (
    <div
      aria-hidden="true"
      className={
        'relative isolate grid overflow-clip rounded-aria-lg border border-outline bg-linear-to-br from-primary-soft via-surface-subtle to-surface ' +
        (compact ? 'h-32' : 'h-44')
      }
    >
      <div className="absolute -right-8 -bottom-12 size-44 rounded-full border border-primary/10 bg-primary-soft/60" />
      <div className="absolute -top-8 -left-8 size-28 rounded-full border border-outline" />
      <div className="relative m-auto grid size-24 -rotate-6 place-items-center rounded-aria-xl border border-primary/15 bg-surface/90 text-primary shadow-aria-md">
        <Icon size={48} strokeWidth={1.35} />
      </div>
      <span className="absolute right-aria-sm bottom-aria-sm type-aria-caption text-muted">
        {product.sku}
      </span>
    </div>
  )
}
export function CourseArt({ course }: { course: Pick<Course, 'category' | 'level'> }) {
  const { t } = useI18n()
  const Icon =
    course.category === 'design'
      ? PenTool
      : course.category === 'development'
        ? Code
        : ChartNoAxesCombined
  return (
    <div className="relative isolate flex h-40 items-center justify-between overflow-clip rounded-aria-lg border border-outline bg-linear-to-br from-primary-soft to-surface-subtle p-aria-lg">
      <div className="z-10 space-y-aria-sm">
        <Badge variant="neutral">{t(course.level)}</Badge>
        <Text variant="eyebrow">{t(categoryLabels[course.category])}</Text>
      </div>
      <div className="grid size-20 rotate-12 place-items-center rounded-aria-xl border border-primary/20 bg-surface text-primary shadow-aria-sm">
        <Icon size={38} strokeWidth={1.4} />
      </div>
      <Layers size={150} aria-hidden className="absolute -right-12 -bottom-20 text-primary/10" />
    </div>
  )
}
