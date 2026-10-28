# Form dan validasi

Acuan: [Field](../../../../../templates/ui/field/field.tsx), [bound fields](../../../../../templates/integrations/tanstack.form/index.ts), [integrasi runtime](../../../../../templates/integrations/readme.md). Nilai/schema/DTO milik fitur; field reusable bebas dari domain bisnis.

## Pilih pemilik form

- Form baru dengan integrasi API: useAppForm + liveFormValidators(schema), useApiFormErrors, dan useAppMutation.
- Native controlled form yang sudah sesuai kebutuhan: useZodValidation(schema, values); tidak perlu dimigrasikan sekadar mengikuti contoh.
- Tambah/ubah memakai field yang sama; wrapper menentukan nilai awal, operasi, dan arah setelah sukses.

useAppForm memasang liveValidationLogic. liveFormValidators memakai satu channel onChange yang juga divalidasi saat submit, sehingga error blur/submit lama tidak tertinggal. Error muncul dari interaksi dan hilang ketika valid; jangan hanya clear pesan setiap onChange. Callback validator custom/async mengikuti event dan kebijakan debounce/abort fitur.

## Contoh TanStack Form + Zod

Contoh ini memperagakan kontrak form, bukan endpoint. onSave dihubungkan aplikasi ke mutateAsync dari useAppMutation; komponen ini tidak menambahkan toast/overlay sendiri.

```tsx
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { Alert } from '@templates/ui'
import { useAppForm, useApiFormErrors, submitAriaForm } from '@templates/integrations/tanstack.form'
import { liveFormValidators, parseFormValues } from '@templates/integrations/zod'

const schema = z.object({ email: z.string().trim().email() })
type Payload = z.output<typeof schema>

function EmailForm({ onSave }: { onSave: (payload: Payload) => Promise<unknown> }) {
  const { t } = useI18n()
  const server = useApiFormErrors()
  const form = useAppForm({
    defaultValues: { email: '' },
    validators: liveFormValidators(schema),
    onSubmit: async ({ value, formApi }) => {
      await server.run(formApi, async () => {
        const payload = await parseFormValues(schema, value)
        await onSave(payload)
        formApi.reset(value)
      })
    },
  })

  return (
    <form.AppForm>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          void submitAriaForm(form, event.currentTarget)
        }}
      >
        {server.errors._form && (
          <Alert severity="error" description={server.errors._form.message} />
        )}
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              label={t('Email')}
              type="email"
              required
              serverError={server.errors.email}
              onServerErrorClear={() => server.clear('email')}
            />
          )}
        </form.AppField>
        <form.SubmitButton>{t('Save')}</form.SubmitButton>
      </form>
    </form.AppForm>
  )
}
```

Gunakan parseFormValues sebelum DTO mapping untuk output transform/coercion; jangan mengirim value mentah jika schema mengubahnya. Key copy UI/schema lokal ditambahkan pada locale ID/EN fitur. Untuk edit, nilai awal berasal dari record aktual dan baseline tidak direset setiap render/refetch saat draft dirty.

Bound field: field.TextField, TextareaField, ComboboxField, CheckboxField, SliderField, RangeSliderField, RadioGroupField, MultiSelectField. Ekspor checkbox standalone adapter bernama CheckboxFormField; CheckboxField dari UI adalah kontrol native yang berbeda.

## Backend error dan status submit

server.run(formApi, operation) memasukkan error backend ke field meta dan menjaga isSubmitSuccessful false saat gagal. Jangan catch lalu resolve, menutup panel pada finally, atau mereset draft pada onError. submitAriaForm mengonsumsi marker error yang sudah ditampilkan tanpa toast tambahan.

Bound field menerima serverError/onServerErrorClear dan meneruskan sumber api ke Field. Backend message tetap mentah; error lokal Zod dapat diterjemahkan. Mapping nama DTO/nested path ke field UI dilakukan fitur. Jika memakai server.apply manual, berikan formApi sesuai signature dan tetap rethrow FormSubmissionError; jangan mengganti kontrak submit sendiri.

Mutation memiliki satu pemilik feedback. Callback UI setelah write sukses mengikuti [lifecycle mutation](../mutation.lifecycle.md); kegagalan callback bukan API gagal. Reset baseline lalu close/navigate setelah sukses. Draft dirty memakai [guard](../unsaved.changes.md).

## Native controlled form

useZodValidation mengembalikan errors, issues, isValid, touch, reset, validate. Panggil touch(field) saat nilai diubah dan validate() saat submit. Gunakan hasil parse yang sukses; jangan meneruskan nilai ketika validasi gagal. errors hanya menampilkan field tersentuh atau setelah submit, lalu diperbarui pada tiap perubahan.

Contoh native hidup: [Users form](../../../../../preview/src/pages/workspace/users/form.tsx). Bentuk native ini bukan alasan melepas useApiFormErrors dari form API TanStack yang menggunakannya.

## Field dan pilihan

Field menghubungkan label, ID, hint/error, aria-describedby, serta requirement. required mengikuti schema, tidak bergantung pada nilai awal. FieldLabel memakai chip Required/Wajib atau Optional/Opsional; jangan menambah asterisk. Chip wajib berwarna danger terpisah dari invalid input. showRequirement false untuk kontrol teknis/nested yang sudah dijelaskan induk.

Tombol kit default button; aksi simpan native diberi type submit. Jika footer Drawer di luar form, gunakan form="id-form". SubmitButton adapter sudah mengikuti pending/canSubmit.

Combobox fitur tetap searchable, menyimpan nilai opsi stabil, dan menampilkan label terjemahan. Tinggi opsi dengan/tanpa deskripsi dikelola komponen. CheckboxField row/card membuat seluruh label/padding dapat dipilih; jangan membuat toggle ganda pada parent dan checkbox atau menaruh tombol interaktif di dalam label.

Wizard memvalidasi langkah sebelum maju dan mempertahankan nilai ketika kembali. Wizard kit hanya presentasi; draft/schema/mutation tetap milik fitur.
