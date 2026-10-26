# Advanced components & integration

Semua import contoh di bawah berasal dari `@/template/ui`. TypeScript props diekspor dari `index.ts`. Komponen UI memakai callback; endpoint dan state domain berada di luar kit.

## Button & IconButton

```tsx
<Button variant="contained" color="primary">Save</Button>
<Button variant="outlined" color="error">Delete</Button>
<IconButton label="Edit record" variant="soft" color="secondary">
  <Pencil size={16} />
</IconButton>
```

Variant: `contained | outlined | soft | text`. Color: `primary | secondary | success | warning | error | info`. Size Button: `sm | md | lg`; IconButton juga menerima `shape="rounded | circle"`. Alias variant lama masih didukung untuk kompatibilitas template.

## Async combobox

```tsx
const loadOptions: OptionsLoader = async ({ search, cursor, signal }) => {
  const params = new URLSearchParams({ search, cursor: cursor ?? '', limit: '20' })
  const response = await fetch(`/api/members?${params}`, { signal })
  if (!response.ok) throw new Error('Unable to load members')
  const result = await response.json()
  return {
    options: result.items.map((item) => ({ value: item.id, label: item.name })),
    nextCursor: result.nextCursor, // null/undefined setelah halaman terakhir
  }
}

;<Combobox
  value={owner}
  onChange={setOwner}
  loadOptions={loadOptions}
  debounceMs={300}
  cacheKey={workspaceId}
  selectedOption={initialOwner}
  placeholder="Choose owner"
/>
```

`selectedOption` memastikan label edit form tersedia sebelum opsi dimuat. `onOptionChange` menerima seluruh opsi terpilih. Query baru membatalkan request sebelumnya; hasil kedaluwarsa diabaikan. Cache per instance dibatasi 20 query dengan TTL 60 detik. Ganti `cacheKey` ketika scope workspace/filter berubah. Infinite scroll memakai cursor dan IntersectionObserver; lebih dari 80 opsi memakai virtualisasi dengan row 52px.

Jika request dikelola library lain, gunakan `options`, `loading`, `loadingMore`, `hasMore`, `onLoadMore`, dan `onSearchChange`. Dalam mode tersebut filtering di backend dikelola pemilik callback.

## Server table

```tsx
const table = useServerTable<User>({
  loadPage: async ({ search, page, pageSize, sort, signal }) => {
    const params = new URLSearchParams({ search, page: String(page), limit: String(pageSize),
      sort: sort?.column ?? 'name', direction: sort?.direction ?? 'asc' })
    const response = await fetch(`/api/members?${params}`, { signal })
    if (!response.ok) throw new Error('Unable to load members')
    const result = await response.json()
    return { rows: result.items, total: result.total }
  },
  cacheKey: workspaceId,
  initialSort: { column: 'name', direction: 'asc' },
})

<SearchInput value={table.search} onChange={table.setSearch} />
<DataTable data={table.rows} columns={columns} getRowId={row => row.id}
  server={table.server} loading={table.loading} error={table.error}
  onRetry={table.retry} emptyState={<SearchEmptyState />} />
```

`useServerTable` membatalkan request lama, debounce search, reset page saat search/sort/page-size berubah, serta cache 20 request dengan TTL 30 detik. `table.retry()` juga dapat dipakai untuk invalidasi query aktif setelah mutation. Berikan `server` sendiri bila memakai TanStack Query/SWR. Di mode server, DataTable tidak memotong atau mengurutkan hasil API lagi. Memoize columns yang mahal; gunakan ID row stabil.

## Formatted inputs & OTP

```tsx
<CurrencyInput currency="IDR" value={budget} onChange={setBudget} />
<PhoneInput value={phone} onChange={setPhone} format="+62 ###-####-#####" />
<NumericInput value={amount} onChange={setAmount} decimalScale={2} maximum={10000} />
<PercentageInput value={discount} onChange={setDiscount} />
<PatternInput value={code} onChange={setCode} format="#### ####" />
<InputOTP value={otp} onChange={setOtp} length={6} onComplete={verifyCode} />
```

Formatted input `onChange` menghasilkan **string numerik mentah**, misalnya `1250000`, bukan `Rp 1.250.000`. `onValueChange` juga menyediakan objek react-number-format. PhoneInput menghasilkan digit nasional, tanpa prefix tetap `+62`; gunakan `format` untuk negara lain. `minimum`/`maximum` merupakan batas input keras; validasi minimum bisnis lebih nyaman saat submit. OTP memakai satu native input untuk paste, autofill `one-time-code`, dan keyboard; `onComplete` hanya dipanggil saat kode lengkap berubah. Verifikasi tetap dilakukan backend.

## Upload, tree, dan stepper

```tsx
<FileUpload files={files} onChange={setFiles} accept="image/*,.pdf"
  maxFiles={5} maxSize={10 * 1024 * 1024} onReject={handleReject} />
<TreeView nodes={nodes} selectedId={selected} onSelect={node => setSelected(node.id)}
  expandedIds={expanded} onExpandedChange={setExpanded} />
<Stepper steps={steps} activeStep={step} onStepChange={setStep} />
```

FileUpload menyediakan browse/dropzone, validasi, hapus, dan preview image. Komponen tidak melakukan request upload; kirim `File` melalui FormData pada handler aplikasi. Validasi server tetap diperlukan. Tree nodes berbentuk `{ id, label, children?, disabled?, icon? }`; navigasi menggunakan panah, Home/End, Enter/Space. Stepper mendukung horizontal/vertical dan `errorStep`; validasi dan submit dikelola halaman. Contoh lengkap ada di `/wizard`.

## Calendar

`Calendar` adalah date-grid kecil untuk picker. `FullCalendar` adalah event scheduler month/week/day. Wrapper FullCalendar dimuat secara lazy, menggunakan v7 `@fullcalendar/react` beserta subpath daygrid/timegrid/interaction dan classic theme. Tidak membutuhkan paket plugin v6 terpisah. Props: `events`, `onSelect`, `onEventClick`, `onEventMove`, `onError`, `initialView`, `initialDate`, `height`. `onEventMove` yang mengembalikan `false` atau reject otomatis membatalkan drag/resize. Tambahkan `onError` untuk pelaporan API error. Contoh CRUD tersimpan lokal ada di `/calendar`.

## Confirmation & mutation overlay

```tsx
<ConfirmDialog open={open} onOpenChange={setOpen}
  description="This record will be removed."
  onConfirm={async () => { await deleteRecord(id) }} />

<LoadingOverlay fullscreen loading={saving} label="Saving changes…" />
```

Konfirmasi delete muncul di tengah; form/detail tetap Drawer dari kanan. ConfirmDialog menunggu promise, menampilkan overlay lokal, menangani error, dan tetap terbuka jika callback mengembalikan `false`. Cancel mendapat fokus awal. Fullscreen overlay memiliki focus trap dan mencegah penutupan saat proses berjalan.

Template menyediakan `MutationProvider` / `useMutationTask` di `src/template/providers/mutation-provider.tsx`. Bungkus operasi dengan `runTask(label, () => apiCall())`, lalu periksa `result.success` sebelum menutup form/toast success. Provider boleh disalin atau diganti state manager proyek Anda. Semua create/update/delete contoh sudah memakainya.

## Empty states, SVG, dan theme

- `EmptyState`: koleksi belum berisi data, ajakan membuat item pertama.
- `SearchEmptyState`: pencarian/filter tidak menemukan hasil, aksi reset.
- `NotFoundState`: resource/halaman tidak ditemukan, navigasi kembali.
- `EmptyIllustration`, `SearchIllustration`, `NotFoundIllustration`, `UploadIllustration`, `LoadingIllustration`: SVG original berbasis CSS variables. Loader menghormati reduced motion.

Tema template memakai `src/template/theme/theme-provider.tsx` (`light | dark | system`) dan seluruh layer `src/template/theme/`. Inisialisasi sebelum render ada di `main.tsx`. Untuk memindahkan fitur lengkap, salin folder template utuh dan pasang TemplateProvider pada root. Semua CSS warna berasal dari semantic tokens; `src/template/styles/surfaces.css` hanya menghubungkan layout dasar. Sonner memakai toast styles dari UI kit dan palette yang sama.

Theme studio di `/settings/appearance` menyediakan preset, warna kedua mode, font, radius, spacing, default control size, density, serta download `theme.config.ts`. Ganti `src/app/config/theme.config.ts` dengan hasil download untuk menjadikannya default proyek. Lihat [panduan lengkap](../theme/README.md). Button/Input/IconButton yang tidak diberi prop size eksplisit mengikuti ukuran tema.
