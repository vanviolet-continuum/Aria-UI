# Integrasi API, data, form, dan styling

Integrasi ini merupakan entry opsional. UI core tidak mengimpor TanStack, Zod, React Router, atau Tailwind. Starter memasang TanStack Query dan tetap hanya Beranda; preview/ menjalankan demo terpisah.

| Entry                                         | API utama                                                                                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `@templates/lib/api.error`                    | ApiError, normalizeApiError/Async, executeApi, ApiRequestOptions                                                                               |
| `@templates/integrations/tanstack.query`      | createAriaQueryClient, AriaQueryProvider, AriaPersistQueryProvider, useAppMutation, createQueryKeys, createQueryPersistence, clearQuerySession |
| `@templates/integrations/react.router`        | useUrlState, useUnsavedRouteGuard                                                                                                              |
| `@templates/integrations/zod`                 | listSearchSchema, searchStringArray, createZodSearchCodec, parseFormValues, apiFieldMessages, zodFieldMessages                                 |
| `@templates/integrations/tanstack.form`       | useAppForm, withForm, withFieldGroup, useApiFormErrors, submitAriaForm dan bound fields                                                        |
| `@templates/integrations/tailwind/styles.css` | Entry Tailwind v4 + CSS kit dalam layer components + token bridge                                                                              |

Entry opsional `@templates/integrations/auth` menyediakan createAuthIntegration. Lihat [auth/session](auth/readme.md), [unsaved changes](react.router/unsaved.changes.md), dan [komponen umum](../ui/primitives.md).

## Generated API dan error

`src/config/api.config.ts` mencatat base URL, generatedPaths, dan error adapter. `src/api/client.ts` menyediakan `apiRequest(operation, options)` untuk membungkus panggilan SDK. Lokasi default yang dicatat adalah `src/generated.ts` atau `src/generated/`; starter tidak membuat SDK palsu atau endpoint bisnis. Gunakan output generator aktual, tipe, signature, dan JSDoc-nya.

Generated files hanya dibaca, tidak diedit/di-rename/di-format. Ubah generatedPaths dan `.prettierignore` ketika output generator berubah. Regenerasi melalui script/config generator proyek setelah perubahan spesifikasi; jangan menambal hasil output secara manual.

Normalizer membaca response Fetch/SDK/Axios dan mempertahankan status, body, fieldErrors, code, requestId, serta cause. Pesan API ditampilkan apa adanya tanpa terjemahan. `readMessage`, `readFieldErrors`, dan `readCode` pada ApiErrorOptions dapat disesuaikan dengan kontrak backend. Untuk HTTP 200 yang memuat kegagalan bisnis, `assertResult` harus melempar error sesuai envelope proyek.

`apiRequest` dan `executeApi` selalu reject saat gagal. Jangan mengubah kegagalan query/mutation menjadi `{ success: false }` yang resolve. GET menampilkan error melalui ErrorState pada area hasil, tanpa toast. Mutation error memakai satu toast dari MutationCache; field error dapat ditampilkan bersamaan melalui adapter form. Cancellation tidak menghasilkan toast. Fallback teknis hanya digunakan ketika backend tidak menyediakan pesan.

## Query, filter, dan pagination

Semua filter yang diterapkan, pencarian, sort, page, dan pageSize berasal dari URL. Codec dibuat di luar render untuk fitur tersebut. Parameter lain tetap dipertahankan; Back/Forward dan reload membaca URL. Update default memakai replace, dengan opsi `{ replace: false }` bila ingin entry history baru. Perubahan filter/sort/pageSize mereset page, sementara update page eksplisit tidak direset. Draft input boleh lokal selama debounce; commit memakai setState.

```tsx
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { createQueryKeys } from '@templates/integrations/tanstack.query'
import { useUrlState } from '@templates/integrations/react.router'
import {
  createZodSearchCodec,
  listSearchSchema,
  searchStringArray,
} from '@templates/integrations/zod'
import { DataTable, SearchInput, type ColumnDef, type TablePage } from '@templates/ui'
import { apiRequest } from '@/api/client'

type Member = { id: string; name: string }
const schema = listSearchSchema.extend({ status: searchStringArray })
const codec = createZodSearchCodec(schema, {
  q: '',
  page: 1,
  pageSize: 20,
  sort: 'name',
  order: 'asc',
  status: [],
})
const columns: ColumnDef<Member>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
]
const keys = createQueryKeys(['users']) // Include account/workspace when the data depends on them.

function Members({
  loadPage,
}: {
  loadPage: (
    params: ReturnType<typeof codec.parse>,
    signal: AbortSignal,
  ) => Promise<TablePage<Member>>
}) {
  const url = useUrlState(codec)
  const query = useQuery({
    queryKey: keys.list(url.state),
    queryFn: ({ signal }) => apiRequest(() => loadPage(url.state, signal)),
    placeholderData: keepPreviousData,
  })
  return (
    <>
      <SearchInput value={url.state.q} onChange={(q) => url.setState({ q })} />
      <DataTable
        data={query.data?.rows ?? []}
        columns={columns}
        getRowId={(row) => row.id}
        loading={query.isLoading}
        error={query.error}
        onRetry={() => {
          void query.refetch()
        }}
        server={{
          page: url.state.page,
          pageSize: url.state.pageSize,
          totalItems: query.data?.total ?? 0,
          sort: { column: url.state.sort, direction: url.state.order },
          onPageChange: (page) => url.setState({ page }),
          onPageSizeChange: (pageSize) => url.setState({ pageSize }),
          onSortChange: (sort) => url.setState({ sort: sort.column, order: sort.direction }),
        }}
      />
    </>
  )
}
```

`loadPage` adalah adapter fitur terhadap operasi SDK sebenarnya, termasuk pemetaan response ke `{ rows, total }`. Batasi field sort dengan schema fitur sesuai kontrak API. Gunakan `.catch(default)` pada field search untuk mengoreksi satu parameter invalid; kegagalan schema keseluruhan kembali ke defaults. Array filter memakai parameter berulang, dengan searchStringArray untuk deduplikasi/sort kanonis. Serializer mendukung field datar berupa string/number/boolean dan array-nya. Key yang tidak ada memakai default; key kosong eksplisit (`status=`) berarti array kosong, sehingga default seperti [active] tetap dapat dibersihkan. Marker kosong dicadangkan untuk array kosong; jangan gunakan string kosong sebagai nilai item array.

Default query: staleTime 30 detik, gcTime 5 menit, retry maksimal dua kali untuk network/5xx dan tidak untuk cancellation/4xx/error JavaScript biasa. Semua dapat dikonfigurasi global/per query. Cache memakai query key lengkap, bukan URL saja. Jangan menjalankan `useServerTable` ber-cache sebagai loader di atas TanStack Query; berikan controlled data/server props ke DataTable.

## Combobox dengan query eksternal

Berikan `options`, `loading={query.isLoading}`, `error={query.error}`, `onRetry={() => query.refetch()}`, dan `onSearchChange` ketika filtering dilakukan server. `onOpenChange` dapat mengatur query enabled. Untuk infinite query, berikan loadingMore, hasMore, dan onLoadMore. Jangan memberikan loadOptions bersamaan karena jalur itu memiliki cache lokal untuk konsumen tanpa TanStack. selectedOption mempertahankan label nilai edit sebelum hasil opsi tersedia.

GET error tampil dengan ilustrasi pada area hasil/empty, termasuk pada retry atau pagination. Error tidak diterjemahkan dan tidak ditampilkan sebagai toast. Header pencarian tetap tersedia dan area hasil hanya mempunyai satu scroll.

## Mutation dan feedback

```tsx
const save = useAppMutation({
  mutationFn: saveRecord, // Call the actual SDK through apiRequest.
  feedback: {
    label: t('Saving changes…'),
    successMessage: t('Changes saved'),
    successDescription: t('The profile and workspace access have been updated.'),
    invalidates: [keys.lists()],
  },
})
```

MutationActivity memakai overlay yang sudah dipasang TemplateProvider. Overlay mengikuti mutation yang sedang berjalan, termasuk invalidation yang ditunggu, dan mendukung beberapa operasi bersamaan. Mutation yang paused tidak memblokir layar. Background GET tidak mengaktifkan overlay. `feedback.overlay: false` untuk aksi yang memakai indikator lokal; `errorToast: false` hanya bila error ditangani penuh oleh tampilan pemiliknya.

MutationCache menjadi pemilik toast dan awaited invalidation. Semua toast memiliki description; showApiErrorToast memakai API text mentah pada description. Toast sukses diterbitkan setelah lifecycle selesai. useAppMutation mengisolasi exception callback UI melalui onCallbackError, sehingga kegagalan onSuccess/onSettled tidak mengubah write yang sudah berhasil menjadi API error. Callback UI dapat memakai context untuk memeriksa epoch sesi bila menjalankan pekerjaan async lanjutan; helper menjamin batas sebelum callback, bukan membatalkan efek yang sudah dimulai oleh kode pemanggil. Jangan menambahkan error toast pada HTTP interceptor, mutation callback, dan halaman sekaligus. Tanpa backend message, fallback dapat diterjemahkan. `runTask` lama tetap tersedia untuk operasi non-TanStack; jangan membungkus mutation/query dengan runTask karena ia mengembalikan TaskResult.

Cache persistence opsional: panggil `createQueryPersistence(queryClient, { key: 'app:account:workspace' })` lalu gunakan AriaPersistQueryProvider dengan props client dan persistence sebagai pengganti provider biasa. Hanya query sukses dengan `meta: { persist: true }` yang disimpan, tanpa mutation. Helper menyesuaikan gcTime global dengan maxAge; override gcTime per-query harus tetap sesuai. `clearQuerySession` membatalkan query, membersihkan memory, dan menghapus snapshot storage saat logout/pergantian scope. Epoch sesi dinaikkan sebelum pembersihan async; hasil mutation sesi lama menjadi cancellation. Callback, invalidation, dan feedback lama dilewati. Gunakan useAppMutation untuk penjagaan callback; raw useMutation hanya mendapat kebijakan feedback cache. Buat konfigurasi persistence baru setelah epoch berubah; persister lama tidak dapat menulis ulang snapshot yang telah dibersihkan. getQuerySession(queryClient) menyediakan scope yang dapat dibagi dengan adapter auth.

## Form dan Zod

useAppForm memakai liveValidationLogic secara default: aturan Standard Schema pada change/blur/submit diperbarui ketika input berubah, sementara custom callback tetap mengikuti event yang didaftarkan. Gunakan liveFormValidators(schema) dari integrasi zod agar satu channel onChange menangani ketikan dan submit tanpa menyisakan pesan blur/submit lama. validationLogic eksplisit tetap dapat mengubah kebijakan ini. Untuk native form, useZodValidation(schema, values) menyediakan errors/touch/validate/reset.

Bound fields: TextField, TextareaField, ComboboxField, CheckboxField, SliderField, RangeSliderField, RadioGroupField, dan MultiSelectField. useAppForm mendaftarkan delapan field ini sebagai convenience. Untuk bundle selektif, gunakan createFormHook yang diekspor dengan fieldContext/formContext, komponen field yang diperlukan, dan SubmitButton. Schema/DTO mapping tetap berada di fitur.

```tsx
const server = useApiFormErrors()
const form = useAppForm({
  defaultValues: { email: '' },
  validators: liveFormValidators(userSchema),
  onSubmit: async ({ value, formApi }) => {
    await server.run(formApi, async () => {
      const payload = await parseFormValues(userSchema, value)
      await save.mutateAsync(payload)
      formApi.reset(value)
      // Close/navigate after success and after resetting the dirty baseline.
    })
  },
})

<form.AppForm>
  <form noValidate onSubmit={event => {
    event.preventDefault()
    void submitAriaForm(form, event.currentTarget)
  }}>
    {server.errors._form && <Alert severity="error"
      description={server.errors._form.message} />}
    <form.AppField name="email">{field => <field.TextField
      label={t('Email')} type="email"
      serverError={server.errors.email}
      onServerErrorClear={() => server.clear('email')}
    />}</form.AppField>
    <form.SubmitButton>{t('Save changes')}</form.SubmitButton>
  </form>
</form.AppForm>
```

userSchema adalah Zod schema fitur dengan pesan lokal; generated TypeScript bukan validator runtime. parseFormValues memakai parsed output, termasuk transform/coercion. server.run membedakan Zod error lokal dan API field error, memasukkannya ke field meta TanStack, lalu tetap reject agar isSubmitSuccessful=false. submitAriaForm mengonsumsi FormSubmissionError yang sudah ditampilkan, melaporkan error tak terduga, dan memfokuskan field invalid yang masih terpasang.

Jangan catch lalu resolve di onSubmit ketika request gagal: TanStack menganggap onSubmit yang resolve telah sukses. Bila memakai server.apply manual, berikan formApi sebagai argumen ketiga dan tetap rethrow; gunakan FormSubmissionError untuk kegagalan yang sudah ditangani. server.clear(field) menghapus pesan field dan meta onServer saat pengguna mengedit. Error non-field berada pada errors.\_form dan tidak mengunci tombol retry.

API errorSource dipertahankan hingga Field, sehingga pesan backend tidak diterjemahkan. MutationCache tetap pemilik satu toast mutation; form tidak menambahkan toast kedua. Jika signIn memakai adapter auth langsung, tampilkan errors.\_form inline karena metode auth memiliki lifecycle sendiri.

Untuk form dirty di halaman maupun drawer, gunakan [unsaved changes guard](react.router/unsaved.changes.md). Route guard memerlukan data router; starter memakai createBrowserRouter/RouterProvider dengan menu Beranda yang sama. Konfirmasi drawer dan route dapat berbagi satu guard.

## Tailwind v4 opsional

Starter tetap memakai CSS kit. Setelah aplikasi konsumen menginstal dan mengonfigurasi Tailwind v4, ganti import stylesheet lengkap dengan `@templates/integrations/tailwind/styles.css` sekali. Entry itu memasukkan Tailwind, CSS Aria pada layer components, dan theme.css. Jangan mengimpor stylesheet lengkap kit sekali lagi di luar layer. Untuk setup Tailwind yang sudah ada, impor hanya theme.css dan letakkan style kit pada layer components sendiri.

Bridge menyediakan warna semantik, spacing `aria-*`, radius, shadow, dan 20 peran tipografi. Utility `type-aria-*` menerapkan ukuran, leading, weight, tracking, transform, dan tone per role; `text-aria-*` tersedia untuk metrik font saja. Contoh: `bg-surface text-content border border-outline p-aria-md rounded-aria-lg text-aria-body`. Perubahan tema runtime mengikuti CSS variables yang sama, termasuk dark mode melalui data-theme.

Ukuran Tailwind bawaan seperti p-4/text-sm tetap mengikuti konfigurasi Tailwind. Gunakan alias aria-\* untuk ukuran dinamis. Props/style inline eksplisit tetap lebih kuat daripada utility CSS; custom Heading/Text melalui props/token atau slot yang disediakan. Tailwind adalah opt-in dan tidak diaktifkan pada starter hanya karena bridge tersedia.
