# Reusable UI Kit

Komponen dalam folder ini tidak bergantung pada router, context klinik, atau API aplikasi. Semuanya memakai props, callback, dan tipe TypeScript. Preview interaktif beserta contoh kode tersedia di halaman **`/components`**.

## Dipakai di proyek lain

1. Salin `src/template/` utuh agar komponen, style, hook, provider, dan tema ikut terbawa. Tidak ada import ke folder app atau examples.
2. Pasang dependensi runtime:

   ```bash
   npm install react react-dom lucide-react clsx cmdk sonner react-number-format react-pdf@^10.5.0 i18next react-i18next @fontsource-variable/hanken-grotesk @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-dropdown-menu @fullcalendar/react@^7 temporal-polyfill
   ```

3. Import stylesheet sekali pada entry aplikasi:

   ```tsx
   import './template/styles.css'
   ```

4. Import komponen melalui barrel export:

   ```tsx
   import { Button, Input, Field, Drawer, DataTable } from './template/ui'
   ```

Alias `@/` sudah dikonfigurasi di template ini. Di proyek lain, sesuaikan alias atau gunakan import relatif. Entry stylesheet sudah menyertakan base style yang dipakai komponen. Nilai warna/font dan konfigurasi berada di `src/template/theme/`; `tokens.css` mengimpor palette dan token turunannya. Lihat [panduan tema](../theme/README.md).

Unit test berada di `tests/template/`, terpisah dari folder portable. Proyek yang menyalin kit tidak perlu memasang Vitest.

## Komponen

| Area       | Komponen                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------- |
| Actions    | `Button`, `IconButton`, `ActionMenu`, `Popover`                                             |
| Form       | `Field`, `FormSection`, `Input`, `Textarea`, `Combobox`, `Checkbox`, `Switch`, `InputOTP`   |
| Formatting | `NumericInput`, `CurrencyInput`, `PhoneInput`, `PatternInput`, `PercentageInput`            |
| Display    | `Badge`, `Chip`, `StatusBadge`, `Tabs`, `SearchInput`                                       |
| Calendar   | `Calendar`, `DatePicker`, `DateRangePicker`, `DateTimePicker`, `TimePicker`, `FullCalendar` |
| Data       | `DataTable<T>`, `TablePagination`, `useDataTable`, `useServerTable`, `ColumnDef<T>`         |
| Workflow   | `FileUpload`/`Dropzone`, `TreeView`, `Stepper`                                              |
| Navigation | `Command`, `CommandMenu`, `Cmdk`                                                            |
| Overlay    | `Drawer`, `DrawerFooter`, `ConfirmDialog`, `LoadingOverlay`                                 |
| Feedback   | `Toaster`, `toast`, `EmptyState`, `SearchEmptyState`, `NotFoundState`, SVG illustrations    |

## Form controls

Komponen baru `PdfViewer`, `ParallelStepper`, `PasswordInput`, `TableFilter`, `TableColumnMenu`, dan `useTableColumns` dijelaskan di [BLOCKS.md](BLOCKS.md), dengan contoh interaktif pada tab **Advanced blocks**.

```tsx
const [email, setEmail] = useState('')

<Field label="Email" required hint="Gunakan email kerja Anda." error={error}>
  <Input
    type="email"
    required
    value={email}
    onChange={event => setEmail(event.target.value)}
    leadingIcon={<Mail size={16} />}
  />
</Field>
```

`Field` menghubungkan label, hint, dan error dengan ID otomatis. `Input` dan `Textarea` meneruskan native props dan ref. `Input` menerima `inputSize="sm | md | lg"`, `invalid`, `leadingIcon`, serta `trailing`. Seluruh pilihan memakai Combobox, termasuk bulan/tahun, waktu, dan page size.

```tsx
<Combobox
  value={assignee}
  onChange={setAssignee}
  options={[
    { value: 'olivia', label: 'Olivia Rhye', description: 'Designer' },
    { value: 'phoenix', label: 'Phoenix Baker', disabled: true },
  ]}
  placeholder="Pilih anggota tim"
/>
```

Combobox mendukung pencarian, keyboard, disabled options, empty result, dan field `name` untuk hidden form value. Validasi nilai wajib komponen composite dilakukan melalui state/form handler Anda.

## Drawer

```tsx
<Drawer
  open={open}
  onOpenChange={setOpen}
  title="Create project"
  description="Lengkapi detail proyek."
  size="md"
  footer={
    <>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button type="submit" form="project-form" variant="primary">
        Save
      </Button>
    </>
  }
>
  <form id="project-form" onSubmit={handleSubmit}>
    <ProjectFields />
  </form>
</Drawer>
```

Drawer memakai Radix untuk focus trap, Escape, pemulihan fokus, dan aksesibilitas. Panel masuk dari kanan, memiliki margin 12px (8px di mobile), border rounded, area body yang bisa di-scroll, serta footer tetap. Ukuran tersedia: `sm`, `md`, `lg`. Animasi menghormati `prefers-reduced-motion`.

Klik backdrop pertama memberi toast info dan mempertahankan drawer. Klik lagi dalam 2 detik menutupnya. Tombol X, Cancel, dan Escape menutup langsung. `outsideClose="immediate"` atau `outsideClose="disabled"` tersedia untuk kebutuhan proyek lain; default adalah `double-click`. Klik combobox/popover di dalam drawer tidak dihitung sebagai klik backdrop. Pasang `<Toaster />` sekali pada root untuk feedback tersebut.

## Calendar & time

```tsx
const [date, setDate] = useState<string>()
const [range, setRange] = useState<DateRange>({})
const [dateTime, setDateTime] = useState<string>()

<DatePicker value={date} onChange={setDate} minDate="2026-01-01" />
<DateRangePicker value={range} onChange={setRange} />
<TimePicker value={time} onChange={setTime} minuteStep={15} />
<DateTimePicker value={dateTime} onChange={setDateTime} />
```

Nilai memakai **local calendar date**, tanpa konversi UTC otomatis:

- Date: `YYYY-MM-DD | undefined`.
- Range: `{ from?: string; to?: string }`; nilai setengah range tersedia saat pengguna baru memilih tanggal awal.
- Time: `HH:mm`, format 24 jam.
- Date-time: `YYYY-MM-DDTHH:mm | undefined`.

Calendar memakai minggu Senin–Minggu. Navigasi tersedia melalui arrow keys, Home/End, PageUp/PageDown, pilihan bulan/tahun, dan tombol sebelumnya/berikutnya. Range picker menampilkan dua bulan di desktop dan satu di mobile.

## Typed table

```tsx
interface User { id: string; name: string; active: boolean }

const columns: ColumnDef<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  {
    id: 'status',
    header: 'Status',
    cell: user => <Badge variant={user.active ? 'success' : 'neutral'}>
      {user.active ? 'Active' : 'Inactive'}
    </Badge>,
  },
]

<DataTable
  data={users}
  columns={columns}
  getRowId={user => user.id}
  selection={{ selectedIds, onChange: setSelectedIds }}
  initialPageSize={10}
  loading={isFetching}
  resetKey={search}
/>
```

`accessor` dapat berupa key atau function yang menghasilkan string/number. Default sorting/pagination dilakukan di client. Filtering dikelola di luar komponen. Untuk API, berikan prop `server` dan gunakan `useServerTable` atau state request sendiri; detail ada di [ADVANCED.md](ADVANCED.md). `pagination={false}` menampilkan seluruh data. `loading` menampilkan SVG animasi di tengah body. `error` dan `onRetry` menyediakan state gagal. Gunakan `emptyState` untuk membedakan koleksi kosong dari pencarian tanpa hasil.

## Command menu

```tsx
<CommandMenu
  open={open}
  onOpenChange={setOpen}
  items={[
    {
      id: 'dashboard',
      label: 'Dashboard',
      group: 'Pages',
      icon: <LayoutDashboard size={16} />,
      onSelect: () => navigate('/dashboard'),
    },
  ]}
/>
```

`Command` memakai library **cmdk** untuk pencarian dan navigasi keyboard. `CommandMenu` membungkusnya dalam Drawer. Shortcut global dikelola oleh aplikasi melalui `useKeyboardShortcut` di `src/template/hooks/`; komponen UI tidak memasang global shortcut sendiri.

## Feedback

```tsx
// Sekali pada root aplikasi.
<Toaster />

toast.success('Tersimpan')
toast.promise(saveProject(), {
  loading: 'Menyimpan…', success: 'Tersimpan', error: 'Gagal menyimpan',
})

<LoadingOverlay loading={isLoading} label="Memuat data…">
  <YourContent />
</LoadingOverlay>

<EmptyState
  title="Belum ada proyek"
  description="Mulai dengan membuat proyek pertama."
  action={<Button onClick={createProject}>Buat proyek</Button>}
/>
```

Loading overlay dapat dibatasi pada container atau menggunakan `fullscreen`. Untuk konten awal gunakan `Skeleton`. Overlay dan tombol loading menyampaikan status melalui atribut aksesibilitas.

Lihat [ADVANCED.md](ADVANCED.md) untuk async combobox/table, formatted inputs, upload, OTP, tree, stepper, FullCalendar, confirmation, mutation overlay, dan tema.
