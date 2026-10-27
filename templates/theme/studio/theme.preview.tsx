import { MetricValue } from '../../ui/metric.value/metric.value'

import { Heading } from '../../ui/heading/heading'

import { Text } from '../../ui/text/text'
import { useI18n } from '../../i18n/use.i18n'
import { ArrowUpRight, Check, Mail, Plus, Sparkles } from 'lucide-react'
import { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  CheckboxField,
  Combobox,
  DatePicker,
  Field,
  Grid,
  Stack,
  Input,
  EmptyIllustration,
  toast,
} from '../../ui'
import { useTheme } from '../theme.provider'

export function ThemePreview() {
  const { t: tr } = useI18n()

  const { config, storageStatus } = useTheme()
  const [priority, setPriority] = useState('normal')
  const [date, setDate] = useState<string>()
  return (
    <aside className="theme-preview">
      <div className="theme-preview-heading">
        <Text as="span" variant="label">
          <Sparkles size={14} />
          {' ' + tr('LIVE PREVIEW')}
        </Text>
        <Badge variant={storageStatus === 'saved' ? 'success' : 'warning'} dot>
          {tr(storageStatus === 'saved' ? 'All changes saved' : 'Session only')}
        </Badge>
      </div>
      <div className="theme-preview-body">
        <Text as="span" variant="label" tone="inherit" className="theme-preview-icon">
          <Mail size={21} strokeWidth={1.6} />
        </Text>
        <Heading as="h3" variant="card">
          {tr('A little more you.')}
        </Heading>
        <Text as="p" variant="body">
          {tr('A few familiar pieces, wearing your new theme.')}
        </Text>
        <Field
          label={tr('Project name')}
          hint={tr('Your default font, radius, size, and spacing.')}
        >
          <Input placeholder={tr('Something worth making')} />
        </Field>
        <div className="theme-preview-controls">
          <Field label={tr('Priority')}>
            <Combobox
              searchable={false}
              value={priority}
              onChange={setPriority}
              options={[
                { value: 'normal', label: 'Normal priority' },
                { value: 'high', label: 'High priority' },
              ]}
            />
          </Field>
          <Field label={tr('Target date')}>
            <DatePicker value={date} onChange={setDate} />
          </Field>
        </div>
        {storageStatus === 'unavailable' && (
          <Text as="p" variant="description" className="theme-storage-note">
            {tr('Browser storage is unavailable. Export your theme to keep these settings.')}
          </Text>
        )}
        <div className="theme-preview-buttons">
          <Button
            variant="contained"
            onClick={() =>
              toast.success(tr('Looking good'), {
                description: 'Your toast follows the same theme tokens.',
              })
            }
          >
            <Plus size={14} />
            {tr('Create project')}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              toast.info(tr('A little preview'), {
                description: 'Changes are saved automatically in this browser.',
              })
            }
          >
            {tr('Preview toast')}
          </Button>
        </div>
        <div className="theme-preview-tags">
          <Badge variant="primary">{tr('In progress')}</Badge>
          <Badge variant="success">{tr('Complete')}</Badge>
          <Badge variant="warning">{tr('Review')}</Badge>
          <Badge variant="danger">{tr('Attention')}</Badge>
        </div>
        <CheckboxField
          className="theme-preview-check"
          label={tr('Make room for the details')}
          defaultChecked
        />
        <div className="theme-preview-illustration">
          <EmptyIllustration />
          <Text as="span" variant="label">
            {tr('One palette. Every little detail.')}
          </Text>
        </div>
        <Box variant="outlined" className="theme-preview-layout">
          <Stack>
            <Text as="strong" variant="label">
              {tr('Layout foundations')}
            </Text>
            <Text as="p" variant="body">
              {tr('Shared spacing and padding respond to your theme.')}
            </Text>
            <Grid minItemWidth={100}>
              <Box variant="subtle" padding="sm" radius="sm">
                <Text as="span" variant="label">
                  {tr('Overview')}
                </Text>
              </Box>
              <Box variant="subtle" padding="sm" radius="sm">
                <Text as="span" variant="label">
                  {tr('Details')}
                </Text>
              </Box>
            </Grid>
          </Stack>
        </Box>
        <div className="theme-preview-metrics">
          <div>
            <Text as="span" variant="label">
              {tr('BORDER')}
            </Text>
            <MetricValue as="strong" variant="metric">
              {config.borderWidth}px
            </MetricValue>
          </div>
          <div>
            <Text as="span" variant="label">
              {tr('SHADOW')}
            </Text>
            <MetricValue as="strong" variant="metric">
              {Math.round(config.shadowStrength * 100)}%
            </MetricValue>
          </div>
          <div>
            <Text as="span" variant="label">
              {tr('DEFAULT SIZE')}
            </Text>
            <MetricValue as="strong" variant="metric">
              {config.controlSize.toUpperCase()} <ArrowUpRight size={13} />
            </MetricValue>
          </div>
          <div>
            <Text as="span" variant="label">
              {tr('CORNERS')}
            </Text>
            <MetricValue as="strong" variant="metric">
              {config.radius}
              {tr('px') + ' '}
              <Check size={13} />
            </MetricValue>
          </div>
        </div>
      </div>
    </aside>
  )
}
