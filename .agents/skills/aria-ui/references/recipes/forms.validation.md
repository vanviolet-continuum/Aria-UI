# Form dan validasi

Baca [Field](../../../../../templates/ui/field/field.tsx), [CheckboxField](../../../../../templates/ui/checkbox/checkbox.field.tsx), dan [Combobox props](../../../../../templates/ui/combobox/types.ts) untuk kontrak aktual.

Gunakan satu komponen form untuk tambah/ubah dengan nilai awal, callback submit, dan status pending yang diberikan wrapper aplikasi. Pisahkan isi field dari shell halaman/drawer agar dapat dipakai pada keduanya.

Integrasi tersedia melalui `@templates/integrations/tanstack.form`: useAppForm, bound TextField/TextareaField/ComboboxField/CheckboxField/SliderField/RangeSliderField/RadioGroupField/MultiSelectField, SubmitButton, useApiFormErrors, dan submitAriaForm. Schema Zod tetap berada di fitur. Gunakan validators onBlur/onSubmit dan parseFormValues untuk output transform/coercion sebelum DTO mapping. Contoh lengkap tersedia di [panduan runtime](../../../../../templates/integrations/readme.md).

Gunakan serverError dan onServerErrorClear pada bound field untuk error API. Pesan source api diteruskan mentah ke Field errorSource api, sedangkan pesan Zod source local dapat diterjemahkan. Gunakan await server.run(formApi, operation) dalam onSubmit agar Zod/API errors masuk field meta dan rejection mempertahankan isSubmitSuccessful=false. Jangan catch lalu resolve ketika gagal. server.apply manual menerima formApi sebagai argumen ketiga dan tetap perlu rethrow FormSubmissionError. submitAriaForm mengonsumsi marker yang sudah ditampilkan, tanpa toast tambahan; jangan menghapus draft atau menutup form saat gagal. Baca [API error](../api.errors.md) dan [lifecycle mutation](../mutation.lifecycle.md).

```tsx
import { CheckboxField, Field, Input, Stack } from '@templates/ui'
;<Stack gap="md">
  <Field label={t('Email')} required error={errors.email}>
    <Input
      type="email"
      value={value.email}
      onChange={(event) => onChange({ ...value, email: event.target.value })}
    />
  </Field>
  <CheckboxField
    variant="card"
    label={t('Receive updates')}
    checked={value.receiveUpdates}
    onChange={(event) => onChange({ ...value, receiveUpdates: event.target.checked })}
  />
</Stack>
```

`Field` menghubungkan label, hint/error, ID, dan aria-describedby. Berikan error pada field; jangan memakai warna saja untuk menandakan kesalahan. Prop `required` pada Field menampilkan penanda; validasi dan atribut required pada input tetap ditentukan sesuai alur form.

Button default bertipe `button`; berikan `type="submit"` pada aksi simpan. Jika tombol berada di footer Drawer di luar form, hubungkan lewat `form="id-form"` native. Cegah submit berulang ketika pending dan pertahankan nilai input jika request gagal.

Seluruh area kartu/baris pilihan harus dapat diklik. Pakai `CheckboxField variant="row" | "card"` dengan label/deskripsi dan native onChange; jangan menambahkan handler toggle parent yang menyebabkan toggle dua kali. Letakkan aksi link/tombol terpisah dari native label. Kontrol disabled tetap tidak dapat diubah.

Combobox menyimpan nilai opsi, bukan label terjemahannya. Untuk pilihan pendek/sedikit atau pagination, `searchable={false}` dapat digunakan. Biarkan komponen mengatur tinggi opsi berdeskripsi dan tanpa deskripsi; jangan memaksa satu tinggi untuk keduanya.

Gunakan date/time picker bawaan untuk nilai tanggal lokal. Untuk wizard, validasi langkah sebelum maju, pertahankan nilai ketika kembali, dan gunakan Stepper untuk tampilan progres; validasi dan operasi submit tetap milik aplikasi.

Untuk draft dirty yang belum disimpan, baca [unsaved changes](../unsaved.changes.md); gunakan satu guard bagi penutupan drawer dan route. Reset baseline hanya setelah API sukses.
