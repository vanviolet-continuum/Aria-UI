import { StatCard } from '@templates/ui/stat.card'
import { ModuleArtwork } from '../../../components/module.artwork'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useI18n } from '@templates/i18n'
import { useTheme } from '@templates/theme'
import {
  Blocks,
  Image,
  Palette,
  ArrowRight,
  Check,
  Plus,
  Sparkles,
  SlidersHorizontal,
  Code,
} from '@templates/icons'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Grid } from '@templates/ui/grid'
import { Inline } from '@templates/ui/inline'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { Eyebrow } from '@templates/ui/eyebrow'
import { PageHeader } from '@templates/ui/page.header'
import { SectionHeader } from '@templates/ui/section.header'
import { Card } from '@templates/ui/card'
import { Badge } from '@templates/ui/badge'
import { Button } from '@templates/ui/button'
import { Switch } from '@templates/ui/switch'
import { SettingsRow } from '@templates/ui/settings.row'
import { Avatar, AvatarGroup } from '@templates/ui/avatar'
import { Progress } from '@templates/ui/progress'
import { toast } from '@templates/ui/toast'
import { AnalyticsIllustration } from '@templates/ui/illustrations/workspace/analytics.illustration'
import { DesignToolsIllustration } from '@templates/ui/illustrations/creative/design.tools.illustration'
import { RocketIllustration } from '@templates/ui/illustrations/technology/rocket.illustration'
import { themePresets } from '@templates/theme/presets'
import counts from '../../../catalog/counts.json'

export function OverviewPage() {
  const { t, locale } = useI18n()
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(true)
  const { config, updateConfig } = useTheme()
  const compact = config.density === 'compact'
  const [saved, setSaved] = useState(false)
  const stats = [
    {
      label: 'Component playground',
      value: '4',
      description: 'Interactive collections',
      icon: Blocks,
      href: 'components',
      tone: 'primary',
    },
    {
      label: 'SVG icons',
      value: counts.icons.toLocaleString(locale),
      description: 'Every detail covered',
      icon: Sparkles,
      href: 'icons',
      tone: 'info',
    },
    {
      label: 'Illustrations',
      value: counts.illustrations.toLocaleString(locale),
      description: 'A story for every state',
      icon: Image,
      href: 'illustrations',
      tone: 'warning',
    },
    {
      label: 'Theme presets',
      value: String(themePresets.length),
      description: 'Make it feel like you',
      icon: Palette,
      href: 'theme',
      tone: 'success',
    },
  ] as const
  return (
    <Box as="section" className="w-full min-w-0 p-aria-md lg:p-aria-xl">
      <Stack gap="xl">
        <PageHeader
          titleAs="h1"
          title={t('Good ideas start here.')}
          description={t(
            'Welcome to the Aria UI playground. Take a look around, try things out, make it yours.',
          )}
          actions={
            <Badge appearance="outline" variant="neutral">
              React + TypeScript
            </Badge>
          }
          artwork={<ModuleArtwork subject={'Components'} />}
        />
        <Box
          className="relative isolate flex flex-col items-start justify-between gap-aria-lg overflow-clip border border-primary/15 bg-linear-to-br from-primary-soft to-surface-subtle sm:flex-row sm:items-center"
          padding={{ base: 'lg', lg: 'xl' }}
          radius="lg"
        >
          <Stack
            gap="md"
            className="max-w-xl [&>.aria-eyebrow]:flex [&>.aria-eyebrow]:items-center [&>.aria-eyebrow]:gap-aria-xs [&>.aria-eyebrow]:text-primary [&>.aria-text]:max-w-lg"
          >
            <Eyebrow>
              <Sparkles size={13} /> {t('A foundation for what’s next')}
            </Eyebrow>
            <Heading as="h2" variant="display" size={{ base: 'lg', lg: 'xl' }}>
              {t('Less setup.')}
              <br />
              {t('More possibilities.')}
            </Heading>
            <Text variant="description">
              {t(
                'Thoughtful components, expressive assets, and a theme that brings everything together. All ready to explore.',
              )}
            </Text>
            <Inline gap="sm">
              <Button variant="contained" onClick={() => navigate('/preview/catalog/components')}>
                {t('Explore components')}
                <ArrowRight size={16} />
              </Button>
              <Button variant="text" onClick={() => navigate('/preview/catalog/theme')}>
                <SlidersHorizontal size={15} />
                {t('Customize theme')}
              </Button>
            </Inline>
          </Stack>
          <div
            className="relative hidden min-h-60 shrink-0 basis-1/3 place-items-center sm:grid [&>svg]:relative [&>svg]:z-10 [&>svg]:max-w-full"
            aria-hidden="true"
          >
            <span className="absolute size-56 rounded-full border border-primary/15 bg-surface/60" />
            <AnalyticsIllustration size={310} />
            <Badge
              className="absolute right-aria-md bottom-0 z-20 hidden shadow-aria-sm xl:block"
              variant="success"
              dot
            >
              {t('Built to work together')}
            </Badge>
          </div>
        </Box>
        <Grid columns={{ base: 2, lg: 4 }} gap="md">
          {stats.map(({ icon: Icon, ...stat }) => (
            <Link
              key={stat.href}
              to={`/preview/catalog/${stat.href}`}
              className="min-w-0 text-inherit no-underline [&>.aria-card]:h-full [&>.aria-card]:transition-[border-color] hover:[&>.aria-card]:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <StatCard
                key={stat.label}
                label={t(stat.label)}
                value={stat.value}
                description={t(stat.description)}
                icon={<Icon size={22} />}
                color={stat.tone}
              />
            </Link>
          ))}
        </Grid>
        <Stack gap="md">
          <SectionHeader
            titleAs="h2"
            title={t('Go ahead. Give it a click.')}
            description={t('Real components, right here. Everything below is interactive.')}
            actions={
              <Link
                className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                to="/preview/catalog/components"
              >
                {t('Open playground')}
                <ArrowRight size={15} />
              </Link>
            }
          />
          <Grid columns={{ base: 1, lg: 3 }} gap="md" align="stretch">
            <Card
              title={t('A button for every moment')}
              eyebrow={t('Actions')}
              className="h-full [&_.aria-card-body]:pt-aria-lg [&_.settings-row]:p-0"
            >
              <Stack gap="lg">
                <Inline gap="xs">
                  <Button
                    variant="contained"
                    onClick={() => {
                      setSaved(true)
                      toast.success(t('Changes saved. Looking good!'), {
                        description: t('Your changes have been saved.'),
                      })
                    }}
                  >
                    {saved ? <Check size={14} /> : <Plus size={14} />}
                    {t(saved ? 'Saved' : 'Create something')}
                  </Button>
                  <Button variant="outlined" onClick={() => setSaved(false)}>
                    {t('Reset')}
                  </Button>
                </Inline>
                <Inline gap="xs">
                  <Button
                    variant="soft"
                    onClick={() =>
                      toast.info(t('A little feedback goes a long way.'), {
                        description: t('Here is an update about your workspace.'),
                      })
                    }
                  >
                    {t('Soft')}
                  </Button>
                  <Button
                    variant="text"
                    onClick={() =>
                      toast.info(t('A little feedback goes a long way.'), {
                        description: t('Here is an update about your workspace.'),
                      })
                    }
                  >
                    {t('Text')}
                  </Button>
                  <Button variant="contained" disabled>
                    {t('Disabled')}
                  </Button>
                </Inline>
                <Text variant="caption">{t('Try the variants. Feel the difference.')}</Text>
              </Stack>
            </Card>
            <Card
              title={t('A few small preferences')}
              eyebrow={t('Controls')}
              className="h-full [&_.aria-card-body]:pt-aria-lg [&_.settings-row]:p-0"
            >
              <Stack gap="sm">
                <SettingsRow
                  label={t('Notifications')}
                  description={t('Stay in the loop')}
                  control={
                    <Switch
                      checked={notifications}
                      onChange={(event) => setNotifications(event.target.checked)}
                    />
                  }
                />
                <SettingsRow
                  label={t('Compact view')}
                  description={t('A little more breathing room')}
                  control={
                    <Switch
                      checked={compact}
                      onChange={(event) =>
                        updateConfig({ density: event.target.checked ? 'compact' : 'comfortable' })
                      }
                    />
                  }
                />
                <Text variant="caption" role="status">
                  {t(compact ? 'Compact view is on.' : 'Comfortable view is on.')}
                </Text>
              </Stack>
            </Card>
            <Card
              title={t('Better, together')}
              eyebrow={t('Composition')}
              className="h-full [&_.aria-card-body]:pt-aria-lg [&_.settings-row]:p-0"
            >
              <Stack gap="lg">
                <Inline justify="between">
                  <AvatarGroup max={3}>
                    <Avatar name="Nadia Putri" />
                    <Avatar name="Rafi Pratama" />
                    <Avatar name="Maya Sari" />
                    <Avatar name="Dimas Wijaya" />
                  </AvatarGroup>
                  <Badge variant="success" dot>
                    {t('On track')}
                  </Badge>
                </Inline>
                <Progress value={72} label={t('Project progress')} showValue />
                <Text variant="caption">{t('A few good pieces. A whole new experience.')}</Text>
              </Stack>
            </Card>
          </Grid>
        </Stack>
        <Grid columns={{ base: 1, md: 2 }} gap="md">
          <Link
            to="/preview/catalog/illustrations"
            className="min-w-0 text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Box
              variant="outlined"
              className="flex h-full items-center gap-aria-md transition-colors hover:border-primary [&>div]:flex [&>div]:min-w-0 [&>div]:flex-1 [&>div]:flex-col [&>div]:items-start [&>div]:gap-aria-sm [&>svg]:hidden [&>svg]:w-1/3 [&>svg]:shrink-0 xl:[&>svg]:block"
            >
              <div>
                <Badge variant="warning">{t('Made to express')}</Badge>
                <Heading as="h2" variant="card">
                  {t('Give your interface a little character.')}
                </Heading>
                <Text variant="description">
                  {t('Explore illustrations that follow your theme.')}
                </Text>
                <span className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  {t('Browse illustrations')} <ArrowRight size={14} />
                </span>
              </div>
              <DesignToolsIllustration size={160} />
            </Box>
          </Link>
          <Link
            to="/preview/catalog/theme"
            className="min-w-0 text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Box
              variant="outlined"
              className="flex h-full items-center gap-aria-md transition-colors hover:border-primary [&>div]:flex [&>div]:min-w-0 [&>div]:flex-1 [&>div]:flex-col [&>div]:items-start [&>div]:gap-aria-sm [&>svg]:hidden [&>svg]:w-1/3 [&>svg]:shrink-0 xl:[&>svg]:block"
            >
              <div>
                <Badge variant="primary">{t('Make it yours')}</Badge>
                <Heading as="h2" variant="card">
                  {t('Your next look is a few clicks away.')}
                </Heading>
                <Text variant="description">{t('Tune colors, type, spacing, and more.')}</Text>
                <span className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  {t('Open Theme Studio')} <ArrowRight size={14} />
                </span>
              </div>
              <RocketIllustration size={160} />
            </Box>
          </Link>
        </Grid>
        <Inline
          justify="between"
          className="border-t border-outline pt-aria-md [&_.aria-text]:flex [&_.aria-text]:items-center [&_.aria-text]:gap-aria-xs"
        >
          <Text variant="caption">Aria UI · {t('Thoughtfully built. Ready for your ideas.')}</Text>
          <Text variant="caption">
            <Code size={13} /> {t('A playground powered by the kit itself.')}
          </Text>
        </Inline>
      </Stack>
    </Box>
  )
}
