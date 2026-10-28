import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useSelector } from '@tanstack/react-form'
import { useI18n } from '@templates/i18n'
import { useUnsavedRouteGuard } from '@templates/integrations/react.router'
import { useAppForm, useApiFormErrors, submitAriaForm } from '@templates/integrations/tanstack.form'
import { liveFormValidators, parseFormValues } from '@templates/integrations/zod'
import { Drawer } from '@templates/ui/drawer'
import { Button } from '@templates/ui/button'
import { Stack } from '@templates/ui/stack'
import { Grid } from '@templates/ui/grid'
import { FormSection } from '@templates/ui/field'
import { Alert } from '@templates/ui/alert'
import { Text } from '@templates/ui/text'
import { toast } from '@templates/ui/toast'
import { Save } from '@templates/icons/files/save.icon'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import {
  userValuesSchema,
  emptyUser,
  roles,
  roleLabels,
  statuses,
  statusLabels,
  departments,
  departmentLabels,
  type User,
} from '../../../data/workspace/model'

export function UserEditor({
  user,
  open,
  onClose,
  onAfterClose,
}: {
  user?: User
  open: boolean
  onClose: () => void
  onAfterClose: () => void
}) {
  const { t } = useI18n()
  const { data, saveUser } = useWorkspace()
  const id = useId()
  const [saved, setSaved] = useState(false)
  const close = useRef(onClose)
  close.current = onClose
  const initial = useMemo(
    () => (user ? userValuesSchema.parse(user) : { ...emptyUser }),
    [user?.id],
  )
  const schema = useMemo(
    () =>
      userValuesSchema.superRefine((value, context) => {
        if (
          data.users.some(
            (item) => item.id !== user?.id && item.email.toLowerCase() === value.email,
          )
        )
          context.addIssue({
            code: 'custom',
            path: ['email'],
            message: 'This email is already used by another user.',
          })
      }),
    [data.users, user?.id],
  )
  const server = useApiFormErrors()
  const form = useAppForm({
    defaultValues: initial,
    validators: liveFormValidators(schema),
    onSubmit: async ({ value, formApi }) => {
      await server.run(formApi, async () => {
        const payload = await parseFormValues(schema, value)
        saveUser(payload, user?.id)
        formApi.reset(payload)
        setSaved(true)
        toast.success(t(user ? 'User updated successfully.' : 'User added successfully.'), {
          description: t(
            user
              ? 'The profile and workspace access have been updated.'
              : '{{name}} is now part of your workspace.',
            { name: payload.name },
          ),
        })
      })
    },
  })
  const dirty = useSelector(form.store, (state) => !state.isDefaultValue)
  const submitting = useSelector(form.store, (state) => state.isSubmitting)
  // Closing changes the URL. One route blocker covers X, Escape, Cancel, and navigation.
  const guard = useUnsavedRouteGuard(open && dirty && !saved)
  useEffect(() => {
    if (saved) close.current()
  }, [saved])
  return (
    <form.AppForm>
      <Drawer
        open={open}
        onAfterClose={onAfterClose}
        onOpenChange={(next) => {
          if (!next && !submitting) onClose()
        }}
        title={t(user ? 'Edit user' : 'Add user')}
        description={t(
          user
            ? 'Keep profile and access information up to date.'
            : 'Bring someone new into your workspace.',
        )}
        size="lg"
        footer={
          <>
            <Text as="span" variant="caption" className="me-auto self-center">
              {t(dirty ? 'Unsaved changes' : 'Changes are up to date')}
            </Text>
            <Button disabled={submitting} onClick={onClose}>
              {t('Cancel')}
            </Button>
            <form.SubmitButton form={id} variant="contained" disabled={saved}>
              <Save size={15} />
              {t(user ? 'Save changes' : 'Add user')}
            </form.SubmitButton>
          </>
        }
      >
        <Stack
          as="form"
          id={id}
          className="[&_.form-section]:p-0 [&_.form-section-title]:mb-aria-md"
          gap="lg"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            void submitAriaForm(form, event.currentTarget)
          }}
        >
          {server.errors._form && (
            <Alert
              severity="error"
              description={
                server.errors._form.source === 'api'
                  ? server.errors._form.message
                  : t(server.errors._form.message)
              }
            />
          )}
          <FormSection
            title={t('Profile information')}
            description={t('The essentials that help your team connect.')}
          >
            <Stack gap="md">
              <form.AppField name="name">
                {(field) => (
                  <field.TextField
                    label={t('Full name')}
                    required
                    placeholder={t('e.g. Nadia Putri')}
                    autoComplete="name"
                    maxLength={80}
                    serverError={server.errors.name}
                    onServerErrorClear={() => server.clear('name')}
                  />
                )}
              </form.AppField>
              <form.AppField name="email">
                {(field) => (
                  <field.TextField
                    label={t('Email address')}
                    required
                    type="email"
                    placeholder="name@company.example"
                    autoComplete="email"
                    serverError={server.errors.email}
                    onServerErrorClear={() => server.clear('email')}
                  />
                )}
              </form.AppField>
              <Grid columns={{ base: 1, sm: 2 }} gap="md">
                <form.AppField name="position">
                  {(field) => (
                    <field.TextField
                      label={t('Job title')}
                      placeholder={t('e.g. Product designer')}
                      maxLength={80}
                    />
                  )}
                </form.AppField>
                <form.AppField name="department">
                  {(field) => (
                    <field.ComboboxField
                      label={t('Department')}
                      required
                      options={departments.map((value) => ({
                        value,
                        label: t(departmentLabels[value]),
                      }))}
                    />
                  )}
                </form.AppField>
                <form.AppField name="location">
                  {(field) => (
                    <field.TextField label={t('Location')} placeholder="Jakarta" maxLength={80} />
                  )}
                </form.AppField>
                <form.AppField name="phone">
                  {(field) => (
                    <field.TextField
                      label={t('Phone number')}
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      autoComplete="tel"
                      maxLength={30}
                    />
                  )}
                </form.AppField>
              </Grid>
            </Stack>
          </FormSection>
          <FormSection
            title={t('Workspace access')}
            description={t('Choose the role and account status for this user.')}
          >
            <Grid columns={{ base: 1, sm: 2 }} gap="md">
              <form.AppField name="role">
                {(field) => (
                  <field.ComboboxField
                    label={t('Role')}
                    required
                    hint={t(
                      'Administrators manage the workspace. Members contribute. Viewers have read access.',
                    )}
                    options={roles.map((value) => ({ value, label: t(roleLabels[value]) }))}
                  />
                )}
              </form.AppField>
              <form.AppField name="status">
                {(field) => (
                  <field.ComboboxField
                    label={t('Status')}
                    required
                    options={statuses.map((value) => ({ value, label: t(statusLabels[value]) }))}
                  />
                )}
              </form.AppField>
            </Grid>
          </FormSection>
          <form.AppField name="notes">
            {(field) => (
              <field.TextareaField
                label={t('Notes')}
                hint={t('Only visible inside this workspace.')}
                placeholder={t('Add a little context about this person…')}
                maxLength={500}
                rows={3}
              />
            )}
          </form.AppField>
          <Alert
            severity="info"
            description={t('This is a local demo. Adding an invited user does not send an email.')}
          />
        </Stack>
      </Drawer>
      {guard.confirmation}
    </form.AppForm>
  )
}
