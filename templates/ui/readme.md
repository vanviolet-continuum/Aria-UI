# Reusable UI Kit

Komponen dalam folder ini tidak bergantung pada router, context klinik, atau API aplikasi. Semuanya memakai props, callback, dan tipe TypeScript. Dokumentasi interaktif tersedia di aplikasi demo preview/; source komponen tetap menjadi acuan API.

## Dipakai di proyek lain

1. Salin `templates/` utuh agar komponen, style, hook, provider, dan tema ikut terbawa. Tidak ada import ke aplikasi src atau preview.
2. Pasang dependensi runtime:

   ```bash
   npm install react react-dom lucide-react clsx cmdk sonner react-number-format react-pdf@^10.5.0 i18next react-i18next @fontsource-variable/hanken-grotesk @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-dropdown-menu @radix-ui/react-slider @radix-ui/react-radio-group @radix-ui/react-tooltip @radix-ui/react-hover-card @radix-ui/react-accordion @radix-ui/react-avatar @fullcalendar/react@^7 temporal-polyfill recharts
   ```

3. Import stylesheet sekali pada entry aplikasi:

   ```tsx
   import '@templates/styles.css'
   ```

4. Import komponen melalui barrel export:

   ```tsx
   import { Button, Input, Field, Drawer, DataTable } from '@templates/ui'
   ```

Alias `@templates` ke pustaka dan `@/` ke source aplikasi sudah dikonfigurasi pada proyek ini. Di proyek lain, sesuaikan alias atau gunakan import relatif. Entry stylesheet sudah menyertakan base style yang dipakai komponen. Nilai warna/font dan konfigurasi berada di `templates/theme/`; `tokens.css` mengimpor palette dan token turunannya. Lihat [panduan tema](../theme/readme.md).

Unit test berada di `tests/template/`, terpisah dari folder portable. Proyek yang menyalin kit tidak perlu memasang Vitest.

## Default modul

Ikuti [pola modul](./module.defaults.md) untuk tabel/filter ber-chip, satu menu aksi pinned kanan, form live, toast ber-description, Drawer dua klik dengan exit, serta header Cmdk/breadcrumb outlet. Acuan source hidup tersedia pada modul Users demo.

## Komponen

Untuk data API baru, gunakan [integrasi TanStack Query, URL state, form/Zod, dan error API](../integrations/readme.md). DataTable dan Combobox menerima error asli pada props `error`; keduanya memakai ErrorState dengan ilustrasi dan retry di area hasil/empty, tanpa toast GET. Error backend tidak diterjemahkan. Field menyediakan `errorSource="api"` untuk pesan field server.

Seluruh teks UI memakai komponen atau adapter token tipografi bersama. `Heading`, `Text`, `Eyebrow`, `FieldLabel`, `FieldHint`, `FieldError`, `TextLink`, `CodeText`, `CodeBlock`, dan `MetricValue` memakai peran tema yang dapat dikonfigurasi. API dan konfigurasi lengkap tersedia di [Typography](./typography.md).

| Area       | Komponen                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Layout     | `Box`, `Stack`, `Inline`, `Grid`, `GridItem`, `Container`, `Divider`, `Spacer`                               |
| Typography | `Heading`, `Text`, `Eyebrow`                                                                                 |
| Text roles | `FieldLabel`, `FieldHint`, `FieldError`, `TextLink`, `CodeText`, `CodeBlock`, `MetricValue`                  |
| Blocks     | `HeadingGroup`, `PageHeader`, `SectionHeader`, `Card`, `Toolbar`, `SettingsRow`                              |
| Actions    | `Button`, `IconButton`, `ActionMenu`, `Popover`                                                              |
| Form       | `Field`, `FormSection`, `Input`, `Textarea`, `Combobox`, `Checkbox`, `CheckboxField`, `Switch`, `InputOTP`   |
| Formatting | `NumericInput`, `CurrencyInput`, `PhoneInput`, `PatternInput`, `PercentageInput`                             |
| Display    | `Badge`, `Chip`, `StatusBadge`, `Tabs`, `SearchInput`                                                        |
| Detail     | `DetailView`, `DetailSection`, `DetailList`, `DetailStats`, `DetailTimeline`                                 |
| Calendar   | `Calendar`, `RangeCalendar`, `DatePicker`, `DateRangePicker`, `DateTimePicker`, `TimePicker`, `FullCalendar` |
| Data       | `DataTable<T>`, `TablePagination`, `useDataTable`, `useServerTable`, `ColumnDef<T>`                          |
| Workflow   | `FileUpload`/`Dropzone`, `TreeView`, `Stepper`                                                               |
| Navigation | `Command`, `CommandMenu`, `Cmdk`                                                                             |
| Overlay    | `Drawer`, `DrawerFooter`, `ConfirmDialog`, `LoadingOverlay`                                                  |
| Feedback   | `Toaster`, `toast`, `EmptyState`, `SearchEmptyState`, `NotFoundState`, SVG illustrations                     |

Komponen tambahan: Slider, RangeSlider, RadioGroup/RadioGroupItem, MultiSelect, Dialog beserta part-nya, Tooltip/TooltipProvider, Accordion beserta part-nya, Alert, Progress, Avatar/AvatarGroup, dan Breadcrumb beserta part-nya. API, contoh controlled/uncontrolled, aksesibilitas, tema, dan custom tersedia di [komponen umum](./primitives.md).

## Fondasi layout

Blok presentasional di atas fondasi layout mendukung props praktis maupun komposisi part terpisah. `Heading`, `Text`, dan `Eyebrow` menyatukan tipografi. `HeadingGroup`, `PageHeader`, dan `SectionHeader` menyediakan slot untuk judul, deskripsi, ikon, badge, navigasi, metadata, dan actions. `Card` menyediakan Header/Body/Footer; `Toolbar` menyediakan Group/Actions; `SettingsRow` menghubungkan label dan kontrol. Lihat [Reusable content blocks](./composition.md) untuk API, slotProps, contoh custom, dan import selektif. Katalog interaktif akan ditambahkan pada preview ketika diminta.

Gunakan `Stack` untuk susunan vertikal, `Inline` untuk baris yang dapat wrap, `Grid` untuk kolom responsive atau auto-fit, dan `Box` untuk surface. Default gap serta padding panel mengikuti `layoutGap`/`layoutPadding` pada tema; token spacing eksplisit tetap mengikuti `spaceScale`. `Container` default full width. Seluruh komponen tetap tanpa scroll container internal.

API, skala ukuran, breakpoint, import selektif, dan contoh komposisi dijelaskan di [Layout foundations](./layout.md). Folder preview berisi aplikasi demo Aria Workspace.

## Menu dan popover

`Menu` menyatukan menu aksi, pilihan tunggal, dan checkbox. Menu memakai Radix Dropdown Menu untuk navigasi keyboard, typeahead, Escape, dan pemulihan fokus. `ActionMenu` dan pilihan bahasa memakai komponen ini.

```tsx
import { Menu, Button } from '@templates/ui'
;<Menu
  variant="rich"
  size="md"
  label="Workspace actions"
  description="Choose what comes next."
  trigger={<Button>Open menu</Button>}
  items={[
    { id: 'view', label: 'View details', description: 'Take a closer look', onSelect: view },
    { id: 'copy', label: 'Duplicate', shortcut: '⌘D', onSelect: duplicate },
    { id: 'archive', label: 'Archive', separator: true, onSelect: archive },
  ]}
/>
```

Varian: `compact`, `default`, dan `rich`. Ukuran: `sm`, `md`, `lg`. Posisi diatur dengan `side` dan `align`. Untuk pilihan tunggal, gunakan `selection="single"`, `value`, dan `onValueChange`. Untuk pilihan checkbox, isi `checked` dan `onCheckedChange` pada item; `keepOpen` mempertahankan menu saat pilihan diubah. Item juga mendukung `icon`, `trailing`, `disabled`, dan `destructive`.

`Popover` dipakai untuk konten bebas, seperti informasi atau formulir. Gunakan `variant="default | menu | form"` dan `size="sm | md | lg | auto"`. `PopoverContent` dapat dipakai di dalam root/portal Radix untuk komponen composite; combobox dan date/time picker menggunakannya. Semua panel berbagi border, radius, bayangan, batas viewport, dan layer yang sama. Panel biasa memakai `scrollArea="panel"`; composite dengan daftar internal memakai `scrollArea="content"` agar hanya daftar tersebut yang di-scroll. Combobox dan filter tabel memakai pola ini, dengan pencarian dan footer tetap terlihat.

## Detail halaman dan drawer

`DetailView` menyediakan header identitas, badge, action, metadata, ringkasan, konten utama, dan sidebar informasi. Container query menyesuaikan susunan dengan lebar komponen, sehingga konten yang sama dapat dipakai pada halaman maupun drawer. Seluruh warna mengikuti token tema.

```tsx
import { Badge, DetailView, DetailSection, DetailList, DetailStats, Drawer } from '@templates/ui'

function RecordDetails() {
  return (
    <DetailView
      title={record.name}
      eyebrow={record.id}
      avatar="AS"
      badge={<Badge variant="success">Active</Badge>}
      summary={<DetailStats items={[{ id: 'members', label: 'Members', value: 8 }]} />}
    >
      <DetailSection title="Overview">
        <DetailList
          columns={2}
          items={[
            { id: 'owner', label: 'Owner', value: record.owner },
            { id: 'email', label: 'Email', value: record.email },
            { id: 'notes', label: 'Notes', value: record.notes, fullWidth: true },
          ]}
        />
      </DetailSection>
    </DetailView>
  )
}

// Di halaman
<RecordDetails />

// Di drawer
<Drawer open={open} onOpenChange={setOpen} title="Record details" size="lg">
  <RecordDetails />
</Drawer>
```

`DetailList` memakai elemen semantik `dl`/`dt`/`dd`, mendukung `columns={1 | 2 | 3}`, `icon`, `hint`, `fullWidth`, dan `emptyValue` (default `—`). Nilai `0` tetap ditampilkan. `DetailSection` menerima `title`, `description`, `icon`, dan `actions`. `DetailTimeline` menerima item dengan `id`, `title`, `description`, `time`, `dateTime`, `icon`, dan `tone` (`neutral`, `primary`, atau `success`). Semua item memakai ID stabil dan nilai dapat berupa ReactNode.

Contoh tersedia di **`/details`** pada starter dan demo, serta kategori **Data display / Advanced blocks** pada katalog demo. Drawer detail produk juga memakai komposisi yang sama.

## Form controls

Komponen baru `PdfViewer`, `ParallelStepper`, `PasswordInput`, `TableFilter`, `TableColumnMenu`, dan `useTableColumns` dijelaskan di [BLOCKS.md](./blocks.md), dengan contoh interaktif pada tab **Advanced blocks**.

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

Combobox mendukung pencarian, keyboard, disabled options, empty result, dan field `name` untuk hidden form value. Search aktif secara default untuk pilihan fitur. Gunakan searchable false hanya untuk kontrol mekanis seperti jumlah baris tabel, kalender/waktu, atau kebutuhan berbeda yang diminta, serta `size="sm"` untuk trigger ringkas. Tanpa pencarian, navigasi panah, Home/End, Enter, dan pencarian lewat karakter tetap tersedia. Pada tema default, opsi tanpa deskripsi memakai tinggi 36px dan opsi dengan deskripsi 56px; keduanya menyesuaikan ukuran kontrol, font, dan spacing dari tema. Lebar panel mengikuti trigger dengan minimum yang cukup untuk isinya. Virtualisasi memakai offset sesuai tinggi tiap opsi. Validasi nilai wajib komponen composite dilakukan melalui state/form handler Anda.

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

Calendar memakai minggu Senin–Minggu. Navigasi tersedia melalui arrow keys, Home/End, PageUp/PageDown, pilihan bulan/tahun, dan tombol sebelumnya/berikutnya. `RangeCalendar` dipakai oleh range picker dan filter tabel: dua bulan berurutan, ringkasan tanggal awal/akhir, serta highlight rentang yang sama. Kedua bulan tetap tersedia di mobile dengan susunan vertikal. Gunakan `<RangeCalendar value={range} onChange={setRange} />` untuk kalender inline; `summary={false}` menyembunyikan ringkasannya. Props `month`, `onMonthChange`, `minDate`, dan `maxDate` juga tersedia. Area kalender filter menjadi satu-satunya area scroll; header dan footer tetap terlihat.

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

`accessor` dapat berupa key atau function yang menghasilkan string/number. Default sorting/pagination dilakukan di client. Filtering dikelola di luar komponen. Untuk API, berikan prop `server` dan gunakan `useServerTable` atau state request sendiri; detail ada di [ADVANCED.md](./advanced.md). `pagination={false}` menampilkan seluruh data. `loading` menampilkan SVG animasi di tengah body. `error` dan `onRetry` menyediakan state gagal. Gunakan `emptyState` untuk membedakan koleksi kosong dari pencarian tanpa hasil.

Aksi sort dan pin berada di ujung kanan masing-masing header. `DataTable.pinable` mengaktifkan tombol pin secara umum; `ColumnDef.pinable` mengatur per kolom. `ColumnDef.defaultPin: 'left' | 'right'` memberi posisi awal. Jika efektif `pinable` adalah `false`, posisi default tersebut terkunci, tetap diterapkan meskipun state pin berubah, dan tombol pin tidak ditampilkan.

```tsx
const columns: ColumnDef<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', defaultPin: 'left', pinable: false },
  { id: 'status', header: 'Status', accessor: user => Number(user.active), pinable: true },
]
const columnState = useTableColumns({ columns })

<DataTable data={users} columns={columns} getRowId={user => user.id}
  columnPinning={columnState.pinning} onColumnPinningChange={columnState.setPinning} />
```

Tanpa `columnPinning`, tabel menyimpan state sendiri dan membaca `defaultPin` saat mount. Dalam mode controlled, inisialisasi dengan `useTableColumns({ columns })` atau `getDefaultColumnPinning(columns)`. State controlled menggantikan default untuk kolom yang boleh dipindah; default kolom yang terkunci selalu berlaku. Menu Columns hanya mengatur visibilitas; `enableHiding: false` pada definisi kolom ditampilkan sebagai baris terkunci.

## Checkbox rows and cards

Gunakan `CheckboxField` ketika checkbox berada di dalam baris atau kartu pilihan. Native label mencakup seluruh container termasuk padding, sehingga klik di area mana pun mengganti pilihan sekali dan cursor menjadi pointer. Status disabled tetap dihormati. `variant` tersedia sebagai `plain`, `row`, dan `card`; `label`, `description`, `trailing`, `labelHidden`, props native input, serta `indeterminate` tersedia. `className` mengatur container dan `inputClassName` mengatur checkbox. Letakkan tombol/link terpisah dari label.

```tsx
<CheckboxField
  variant="card"
  label="Project activity"
  description="Include updates from your team."
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>
```

`TableColumnMenu`, sel pemilihan tabel, dan preview tema menggunakan pola ini. Filter dan checkbox menu memakai aksi pada seluruh item. `SettingsRow` juga meneruskan klik area baris ke satu kontrol checkbox/switch yang aktif di slot control, tanpa menggandakan toggle saat kontrol atau labelnya diklik.

## Chips

`Chip` memakai warna semantik dari Badge dengan border halus, radius tema, ikon opsional, dan tombol hapus terpisah. Props: `variant` (`neutral`, `primary`, `success`, `warning`, `danger`, `violet`), `appearance` (`soft`, `outline`, `solid`), `size` (`sm`, `md`), `icon`, `onRemove`, `removeLabel`, `disabled`, dan props native span. Label panjang terpotong mengikuti lebar container. Tombol hapus mendukung fokus keyboard dan tidak meneruskan klik ke parent.

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

`Command` memakai library **cmdk** untuk pencarian dan navigasi keyboard. `CommandMenu` membungkusnya dalam Drawer. Shortcut global dikelola oleh aplikasi melalui `useKeyboardShortcut` di `templates/hooks/`; komponen UI tidak memasang global shortcut sendiri.

## Feedback

Koleksi **605 ilustrasi SVG** tersedia sebagai komponen dalam kit. Galeri interaktif akan dibuat di aplikasi demo `preview/`. Lihat [panduan ilustrasi](./illustrations/readme.md) untuk daftar komponen dan props ukuran, judul aksesibel, serta tone warna.

```tsx
// Sekali pada root aplikasi.
<Toaster />

toast.success('Tersimpan', { description: 'Perubahan proyek telah disimpan.' })

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

Lihat [ADVANCED.md](./advanced.md) untuk async combobox/table, formatted inputs, upload, OTP, tree, stepper, FullCalendar, confirmation, mutation overlay, dan tema.

DataTable menerima filters, filterValue, onFilterChange, search, toolbarActions dan onColumnVisibilityChange. Toolbar default memakai TableFilter dengan chip aktif yang dapat dihapus. createActionsColumn menghasilkan satu menu, terkunci kanan dengan width 72; kolom kind actions atau id actions juga memperoleh default posisi tersebut. defaultPin false/kind data/props eksplisit tersedia untuk kebutuhan yang diminta berbeda. Lihat [kontrak modul](module.defaults.md).

Drawer menerima onAfterClose dan restoreFocus. Gunakan useDrawerPresence untuk mempertahankan payload dan mount selama exit. DetailView variant compact memakai ukuran identitas lebih ringkas untuk panel.

Komposisi lanjutan: [Wizard](wizard/readme.md), [HoverCard](hover.card/readme.md), [AreaChart](chart/readme.md), dan [FullCalendar](full.calendar/readme.md). Semua menerima props/slot untuk custom dan tidak mengimpor data bisnis preview.

[StatCard](stat.card/readme.md) menyediakan kartu count dengan ikon atau ilustrasi. PageHeader.artwork tersedia untuk SVG pada sisi kanan header. FieldLabel menggunakan chip Wajib/Opsional, dengan showRequirement false untuk override konteks.
