# Default modul Aria UI

Pola ini berlaku ketika pengguna meminta modul tanpa menentukan tampilan/interaksi lain. Props, slot, native props, dan komposisi tetap tersedia untuk kebutuhan custom. Ubah default melalui pemilik komponen; jangan membuat pola alternatif diam-diam pada setiap fitur.

## Acuan source yang hidup

Preview memakai data lokal. Pelajari komposisinya tanpa mengimpor helper/store/fixture preview ke starter atau kit. Kontrak endpoint dan cache backend mengikuti adapter integrasi aplikasi.

| Bagian                                            | Acuan                                                                                                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Daftar, filter URL, selection, pinning, menu aksi | [Users](../../preview/src/pages/workspace/users/root.tsx)                                                                                   |
| Codec array dan rentang tanggal                   | [Search schema](../../preview/src/pages/workspace/users/search.schema.ts)                                                                   |
| Form tambah/ubah live dan guard                   | [UserEditor](../../preview/src/pages/workspace/users/form.tsx)                                                                              |
| Konten detail ringkas                             | [UserDetail](../../preview/src/pages/workspace/users/detail.tsx)                                                                            |
| Cmdk dan breadcrumb outlet                        | [Demo shell](../../preview/src/layouts/admin/root.tsx), [AdminLayout](../layouts/admin.layout/admin.layout.tsx)                             |
| Statistik dengan visual                           | [StatCard](stat.card/readme.md)                                                                                                             |
| Wizard dan kalender                               | [Course builder](../../preview/src/pages/learning/course.builder/root.tsx), [Calendar](../../preview/src/pages/workspace/calendar/root.tsx) |
| Contoh tabel terisolasi                           | [DataDemo](../../preview/src/components/catalog/data.demo.tsx)                                                                              |

## Komposisi halaman

- Outlet menggunakan lebar penuh. Susun halaman memakai komponen layout dan tipografi bertema.
- PageHeader berisi judul/deskripsi dan artwork SVG kontekstual di sisi kanan.
- Aksi tambah utama ditempatkan pada CardHeader.actions milik card daftar/tabel. Submit form, tambah item editor, dan aksi kontekstual board tetap berada pada komponen pemiliknya.
- Count/statistik menggunakan StatCard dengan icon/illustration sesuai arti data. Kit tidak menebak domain dari judul. Metrik global tidak dihitung dari satu halaman hasil backend.
- Gunakan variant/slot/children untuk custom; jangan menduplikasi blok bersama hanya untuk mengganti jarak atau warna.

## Tabel, filter, dan kolom aksi

DataTable menerima filters/filterValue/onFilterChange serta search. Toolbar standar menyusun search, kontrol filter, dan aksi kolom pada baris kontrol. Chip filter aktif yang dapat dihapus berada pada baris penuh di bawahnya, mulai dari kiri toolbar dan wrap sesuai lebar. Clear all memperbarui state filter yang sama.

Jangan mengganti TableFilter dengan deretan Combobox terpisah. TableToolbar dapat dipakai terpisah bila diperlukan, dengan toolbar DataTable dinonaktifkan/diganti agar tidak ganda. Deklarasikan filter domain; kit tidak menebaknya dari nama kolom. Rentang tanggal menggunakan komponen range bawaan, bukan single Calendar.

Contoh berikut berada dalam komponen fitur; User, t, callback, rows, dan state adalah milik aplikasi:

```tsx
const columns: ColumnDef<User>[] = [
  {
    id: 'name', header: t('Name'), accessor: 'name', width: 260,
    enableHiding: false, defaultPin: 'left', pinable: false,
  },
  createActionsColumn<User>(user => [
    { id: 'view', label: t('View details'), onSelect: () => view(user.id) },
    { id: 'edit', label: t('Edit'), onSelect: () => edit(user.id) },
    {
      id: 'delete', label: t('Delete'), destructive: true, separator: true,
      onSelect: () => remove(user.id),
    },
  ], { header: t('Actions') }),
]

<DataTable
  data={rows}
  columns={columns}
  getRowId={row => row.id}
  filters={filterDefinitions}
  filterValue={urlFilters}
  onFilterChange={updateUrlFilters}
  search={{ value: url.state.q, onChange: q => url.setState({ q }) }}
  server={serverState}
/>
```

createActionsColumn/actions callback menghasilkan satu menu berisi View/Edit/Delete. Default kolom aksi: width 72, align center, defaultPin right, pinable false, enableHiding false. Kolom data menyerap lebar tersisa; aksi tidak melebar menjadi ruang kosong. Row selection/bulk actions merupakan interaksi terpisah.

DataTable juga mengenali kind actions dan id actions. Override eksplisit tersedia: defaultPin false mematikan pin awal; kind data menghindari inferensi ID actions untuk data biasa. Cell custom dapat dipakai untuk kebutuhan yang diminta. align right hanya meratakan isi, tidak melakukan pin.

defaultPin left/right tetap diterapkan saat pinable false; kolom tersebut terkunci tanpa tombol pin. enableHiding false terpisah dari pinning. Kontrol sort/pin berada di kanan header; customize columns hanya visibilitas dan menampilkan kunci untuk kolom yang tidak dapat disembunyikan.

Tabel mengisi lebar container walaupun kolom sedikit. Pagination bawaan menjadi satu pemilik kontrol. Dalam mode server, jangan filter/sort/paginate ulang satu halaman response. Kriteria terapan berasal dari URL; Query key memuat seluruh parameter dan scope. Untuk contoh client terisolasi, internal state kit tetap tersedia.

## Combobox dan form

Combobox fitur searchable secara default, termasuk role/status/team/department meskipun opsi sedikit. Pengecualian mekanis: page size, bulan/tahun, jam/menit, kontrol internal tema, atau pola berbeda yang diminta pengguna. Tinggi opsi dengan/tanpa deskripsi mengikuti komponen.

useAppForm memakai liveValidationLogic sebagai default. Pola Zod yang dianjurkan adalah validators liveFormValidators(schema), satu channel onChange yang juga dijalankan saat submit. Error tidak ditunggu sampai submit/blur dan langsung hilang ketika nilai valid. Custom validator tetap mengikuti event yang didaftarkan; validationLogic eksplisit dapat mengganti default.

Native controlled form memakai useZodValidation(schema, values): touch(field) saat nilai berubah, validate() saat submit. Field yang belum disentuh tidak langsung merah. Jangan hanya menghapus pesan onChange tanpa revalidasi. Validasi async memerlukan debounce/abort sesuai fitur; jangan menjalankan mutation bisnis setiap ketikan.

FieldLabel menampilkan chip Required/Wajib atau Optional/Opsional menggantikan asterisk. required mengikuti kontrak schema, bukan nilai awal. Chip wajib berwarna danger terpisah dari status invalid. Field menghubungkan label, aria-required, hint/error, dan ID; showRequirement false tersedia untuk kontrol teknis/nested yang sudah dijelaskan induknya.

Seluruh area pilihan checkbox, termasuk label/padding kartu atau baris, dapat diklik dan memakai cursor pointer. Gunakan CheckboxField atau interaksi item menu; jangan memasang toggle ganda di parent dan input. Disabled tetap tidak dapat diubah.

Submit API memakai useApiFormErrors().run(formApi, operation), sehingga error masuk meta dan isSubmitSuccessful tetap false saat gagal. Pesan API mentah; draft dipertahankan. Reset baseline dan close hanya setelah sukses; satu guard menangani draft dirty.

## Drawer dan detail

Default outsideClose adalah double-click: klik pertama backdrop menampilkan toast ber-description, klik kedua dalam dua detik menutup. X/Escape/Cancel tetap melewati guard dirty bila diperlukan.

Konten detail dipakai ulang pada halaman dan drawer. Panel memakai DetailView variant compact dan ukuran avatar sesuai slot. Body Drawer menjadi satu pemilik scroll; footer berada di luar body scroll.

```tsx
const panel = useDrawerPresence(selectedUser)

// Bagian render koordinator; UserDetail merender DetailView compact untuk panel.
{
  panel.value && (
    <Drawer
      title={t('User details')}
      open={panel.open}
      onOpenChange={(open) => {
        if (!open) setSelectedUser(null)
      }}
      onAfterClose={panel.onAfterClose}
    >
      <UserDetail user={panel.value} compact />
    </Drawer>
  )
}
```

Pertahankan instance/payload sampai onAfterClose. selected && Drawer tanpa presence, atau open selalu true lalu unmount, memutus animasi exit. Hook juga tidak boleh diletakkan dalam wrapper yang langsung di-unmount saat selection kosong. Hormati motion none/reduced. Untuk perpindahan overlay, restoreFocus false pada panel sebelumnya tersedia bila diperlukan.

## Shell, feedback, dan scroll

AdminLayout memasang Cmdk dari navigation dengan Ctrl/Cmd+K. command dapat menambah record/aksi. Header menampilkan konteks workspace. Breadcrumb berada di main/outlet sebelum halaman; adapter aplikasi memasok hierarki route, bukan breadcrumb teks slash di header.

Semua toast diimpor dari @templates/ui/toast dan mempunyai description kontekstual. Wrapper menyediakan fallback untuk pemanggilan lama. Mutation feedback memakai successDescription; showApiErrorToast memakai judul lokal dan backend message mentah pada description. Jangan menambahkan toast kedua bila mutation sudah mengelolanya.

```tsx
toast.success(t('Changes saved'), {
  description: t('The profile and workspace access have been updated.'),
})
```

GET error pada tabel/combobox tampil di area hasil yang sama dengan empty, menggunakan ilustrasi dan retry tanpa toast. Mutation gagal tetap reject dan mempertahankan draft; error backend tidak diterjemahkan/diparafrasa.

Satu area scroll per panel; gunakan pemilik scroll bawaan shell/Drawer/popover/tabel. Warna scrollbar bersama ada di [scrollbar.css](../styles/scrollbar.css): thumb --border-strong, track transparan, override --scrollbar-thumb/track/size. Pertahankan scroll tabs/sidebar collapsed yang sengaja tersembunyi; jangan menambah warna scrollbar lokal yang berbeda.
