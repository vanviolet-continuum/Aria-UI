# Komponen lanjutan

Implementasi general tersedia di `templates/ui/`. Contoh API ada dalam panduan ini. Aplikasi demo dan dokumentasi interaktif berada di preview/, terpisah dari starter.

Pola fitur secara default mengikuti [kontrak modul](module.defaults.md): filter ber-chip, satu menu aksi pinned kanan, form live dan Drawer ber-exit. Contoh local state di bawah merupakan contoh komponen terisolasi; modul aplikasi tetap mengendalikan parameter lewat URL.

## PDF viewer

Pasang `npm install react-pdf@^10.5.0`. Komponen memakai PDF.js melalui React-PDF, dengan worker lokal yang dipaketkan Vite. Untuk pnpm, hoist `pdfjs-dist` sesuai dokumentasi React-PDF agar bundler dapat menemukan worker. PDF renderer dan style text/annotation layer dimuat melalui dynamic import.

```tsx
import { FileUpload, PdfViewer } from '@templates/ui'
const [files, setFiles] = useState<File[]>([])

<FileUpload files={files} onChange={setFiles} accept="application/pdf,.pdf" multiple={false} />
<PdfViewer file={files[0] ?? null} />
```

`file` menerima `File`, URL string, atau `null`. File lokal diproses di browser dan tidak diunggah otomatis. `fileName` mengatur nama download. `showMetadata` dan `showThumbnails` mengatur tampilan awal. Maksimal lima thumbnail dan satu halaman utama dirender sekaligus; object URL dilepas ketika file diganti atau komponen dilepas.

Viewer mendukung navigasi, zoom 50–200%, fit width, thumbnail, metadata, password, error, download, dan print melalui viewer browser. `onPrint(url)` dapat mengganti mekanisme print. URL backend membutuhkan CORS dan URL download/print yang bisa diakses browser. Untuk autentikasi berbasis header, ambil file dengan service aplikasi lalu berikan `File`. PDF yang memerlukan aset font/CMap tambahan dapat diberi `options={{ cMapUrl, standardFontDataUrl }}` menggunakan lokasi aset PDF.js yang Anda host. Opsi lain mengikuti `DocumentProps['options']` React-PDF.

## ParallelStepper

```tsx
<ParallelStepper
  tracks={tracks}
  onProgressChange={(id, completed) =>
    setTracks((previous) =>
      previous.map((track) => (track.id === id ? { ...track, completed } : track)),
    )
  }
  onStepSelect={(trackId, stepId) => openStep(trackId, stepId)}
  integration={{ title: 'Integrate', complete, onIntegrate: submit }}
/>
```

Setiap track memiliki `id`, `title`, `steps`, `completed` (jumlah step selesai), serta opsi `description`, `icon`, `error`. Panjang track boleh berbeda. Integrasi hanya aktif setelah semua track selesai dan tidak ada `error`. Aplikasi mengontrol state, validasi, request, dan reset status integrasi bila track diubah. Gunakan `disabled` saat request berlangsung dan `useMutationTask().runTask(label, operation)` untuk overlay saat submit.

## PasswordInput

Mendukung props native input/ref, controlled/uncontrolled value, reveal toggle, `showStrength`, `showRequirements`, serta `requirements: { id, label, test }[]`. `evaluatePassword(value, requirements)` menyediakan hasil pemeriksaan untuk form. Indikator ini adalah evaluasi aturan panjang/karakter, bukan estimasi ketahanan password terhadap serangan. Terapkan kebijakan password kembali pada backend.

## Visibility dan pinning tabel

```tsx
const columns = useTableColumns({
  visibility: { email: false },
  pinning: { left: ['name'], right: ['actions'] },
})

<TableColumnMenu columns={definitions}
  visibility={columns.visibility} onVisibilityChange={columns.setVisibility}
  onReset={() => columns.setVisibility({})} />
<DataTable data={rows} columns={definitions} getRowId={row => row.id}
  columnVisibility={columns.visibility} columnPinning={columns.pinning}
  pinable onColumnPinningChange={columns.setPinning} />
```

`ColumnDef` menerima `enableHiding: false` untuk kolom wajib serta `label` untuk header JSX. Kolom wajib ditampilkan dengan ikon kunci pada Customize Columns; menu ini hanya mengatur visibilitas. Kolom terakhir yang masih terlihat juga tidak dapat disembunyikan. API controlled memungkinkan state dipersist ke localStorage atau backend oleh aplikasi.

Gunakan `pinable` pada `DataTable` untuk menampilkan ikon pin bersama sort di ujung kanan header. Menu header menyediakan **Pin to left**, **Pin to right**, dan **Unpin column**. `ColumnDef.pinable` mengesampingkan default tabel. `defaultPin: 'left' | 'right'` menentukan posisi awal; jika efektif `pinable` false, posisi tersebut terkunci tanpa tombol pin. Tanpa state controlled, pinning dikelola internal. Untuk controlled state, inisialisasi dengan `useTableColumns({ columns: definitions })` atau `getDefaultColumnPinning(definitions)` dan berikan `onColumnPinningChange`; default kolom yang terkunci tetap diterapkan.

Tentukan `width` numerik sebagai lebar dasar kolom. Width yang tidak diberikan atau relatif memakai fallback 180px saat pinning aktif. Tabel selalu mengisi 100% lebar container, dan satu kolom menyerap ruang ekstra. Offset sticky dan bayangannya mengikuti lebar hasil render, sehingga tetap benar ketika kolom disembunyikan atau container berubah ukuran. Checkbox selection tetap 44px dan dipin di kiri. Kolom tersembunyi tidak mengambil ruang. Beberapa kolom dapat dipin pada kedua sisi; urutan mengikuti definisi kolom. Pin tetap berlaku pada container sempit; tabel menyediakan scroll horizontal untuk konten yang melebihi ruangnya.

## Filter tabel dengan cmdk

```tsx
const definitions: TableFilterDef<User>[] = [
  { id: 'status', label: 'Status', type: 'choice', options: [
    { value: 'active', label: 'Active' }, { value: 'away', label: 'Away' },
  ] },
  { id: 'joined', label: 'Joined', type: 'date' },
]
const [filters, setFilters] = useState<TableFilterValue>({})
const rows = useMemo(() => filterTableData(data, definitions, filters), [data, filters])

<TableFilter filters={definitions} value={filters} onChange={setFilters} />
```

Choice mendukung banyak nilai (OR dalam field); antar field digabung dengan AND. Range tanggal memakai format lokal `YYYY-MM-DD`, dengan batas inklusif dan dukungan satu sisi. `accessor` dapat berupa key atau fungsi untuk field yang berbeda dari ID. Filter aktif muncul sebagai chip yang dapat dihapus dan ada Clear all. Cmdk menyediakan pencarian serta navigasi keyboard. Untuk server table, kirim `filters` ke loader API dan ubah `resetKey` saat filter berubah; helper lokal tidak diperlukan.
