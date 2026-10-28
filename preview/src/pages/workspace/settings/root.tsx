import { ModuleArtwork } from '../../../components/module.artwork'
import { useState } from 'react'
import { useZodValidation } from '@templates/integrations/zod'
import { useI18n } from '@templates/i18n'
import { useUnsavedRouteGuard } from '@templates/integrations/react.router'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { PageHeader } from '@templates/ui/page.header'
import { Card } from '@templates/ui/card'
import { Field } from '@templates/ui/field'
import { Input } from '@templates/ui/input'
import { Textarea } from '@templates/ui/textarea'
import { SettingsRow } from '@templates/ui/settings.row'
import { Switch } from '@templates/ui/switch'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { ConfirmDialog } from '@templates/ui/confirm.dialog'
import { toast } from '@templates/ui/toast'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import { settingsSchema } from '../../../data/workspace/model'
import { useOperations } from '../../../data/operations/operations.provider'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'

export default function SettingsPage() {
  const { t } = useI18n()
  const { data, saveSettings, reset, persistent: workspacePersistent } = useWorkspace()
  const { persistent: operationsPersistent } = useOperations()
  const { persistent: scenariosPersistent } = useScenarios()
  const persistent = workspacePersistent && operationsPersistent && scenariosPersistent
  const [values, setValues] = useState(data.settings)
  const validation = useZodValidation(settingsSchema, values)
  const [resetOpen, setResetOpen] = useState(false)
  const dirty = JSON.stringify(values) !== JSON.stringify(data.settings)
  const guard = useUnsavedRouteGuard(dirty)
  return (
    <Box
      as="section"
      className="w-full min-w-0 p-aria-md lg:p-aria-xl [&>.aria-stack>.aria-page-header]:mb-0 [&_.ui-table-pagination]:px-aria-md"
    >
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          title={t('Workspace settings')}
          description={t('A few details that make this workspace yours.')}
          artwork={<ModuleArtwork subject={'Settings'} />}
        />
        <Card
          title={t('General information')}
          description={t('The name and description your team sees.')}
        >
          <Stack
            as="form"
            gap="md"
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              const parsed = validation.validate()
              if (!parsed.success) {
                return
              }
              saveSettings(parsed.data)
              setValues(parsed.data)
              validation.reset()
              toast.success(t('Workspace settings saved.'), {
                description: t('Your workspace information and preferences are up to date.'),
              })
            }}
          >
            <Field
              label={t('Workspace name')}
              required
              error={validation.errors.name && t(validation.errors.name)}
            >
              <Input
                value={values.name}
                onChange={(event) => {
                  setValues((current) => ({ ...current, name: event.target.value }))
                  validation.touch('name')
                }}
                maxLength={80}
              />
            </Field>
            <Field
              label={t('Description')}
              error={validation.errors.description && t(validation.errors.description)}
            >
              <Textarea
                value={values.description}
                onChange={(event) => {
                  validation.touch('description')
                  setValues((current) => ({ ...current, description: event.target.value }))
                }}
                rows={3}
                maxLength={240}
              />
            </Field>
            <SettingsRow
              label={t('Show recent activity on the dashboard')}
              description={t('Keep workspace changes visible to your team.')}
              control={
                <Switch
                  checked={values.notifications}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, notifications: event.target.checked }))
                  }
                />
              }
            />
            <Inline justify="end">
              <Button
                disabled={!dirty}
                onClick={() => {
                  setValues(data.settings)
                  validation.reset()
                }}
              >
                {t('Cancel')}
              </Button>
              <Button type="submit" variant="contained" disabled={!dirty}>
                {t('Save changes')}
              </Button>
            </Inline>
          </Stack>
        </Card>
        <Card
          title={t('Demo data')}
          description={t('This workspace uses sample profiles stored locally in your browser.')}
        >
          <Stack gap="md">
            <Inline justify="between">
              <Stack gap="xs">
                <Text variant="label">{t('Storage')}</Text>
                <Text variant="description">
                  {t(
                    persistent
                      ? 'Changes remain available after reloading this browser.'
                      : 'Browser storage is unavailable. Changes last for this session.',
                  )}
                </Text>
              </Stack>
              <Badge variant={persistent ? 'success' : 'warning'}>
                {t(persistent ? 'Local storage' : 'Session only')}
              </Badge>
            </Inline>
            <SettingsRow
              label={t('Restore sample workspace')}
              description={t(
                'Restore users, projects, tasks, clients, invoices, documents, and events to the sample workspace.',
              )}
              control={
                <Button color="error" variant="outlined" onClick={() => setResetOpen(true)}>
                  {t('Reset demo data')}
                </Button>
              }
            />
          </Stack>
        </Card>
        <ConfirmDialog
          open={resetOpen}
          onOpenChange={setResetOpen}
          title={t('Restore sample data?')}
          description={t(
            'All changes to this demo workspace will be replaced with the original sample data.',
          )}
          confirmLabel={t('Restore sample data')}
          onConfirm={() => {
            setValues(reset().settings)
            validation.reset()
            toast.success(t('Sample workspace restored.'), {
              description: t(
                'The entire demo workspace has been restored, including projects and business data.',
              ),
            })
          }}
        />
      </Stack>
      {guard.confirmation}
    </Box>
  )
}
