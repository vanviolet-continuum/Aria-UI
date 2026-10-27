# Tabel dan filter

Acuan aktual: [DataTable](../../../../../templates/ui/data.table/data.table.tsx), [tipe kolom](../../../../../templates/ui/data.table/types.ts), [hook kolom](../../../../../templates/ui/data.table/use.table.columns.ts), [filter](../../../../../templates/ui/table.filter/types.ts), dan [blok UI](../../../../../templates/ui/blocks.md).

```tsx
import { DataTable, useTableColumns, type ColumnDef } from '@templates/ui'

type Member = { id: string; name: string; email: string }
const definitions: ColumnDef<Member>[] = [
  {
    id: 'name', header: 'Name', accessor: 'name', sortable: true,
    width: 240, enableHiding: false, defaultPin: 'left', pinable: false,
  },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true },
]

const columns = useTableColumns({ columns: definitions })

<DataTable data={rows} columns={definitions} getRowId={row => row.id}
  pinable columnVisibility={columns.visibility}
  columnPinning={columns.pinning} onColumnPinningChange={columns.setPinning} />
```

Definisi kolom lokal aplikasi dapat memakai `t` untuk header. Saat header berupa JSX, isi `label` untuk nama aksesibel pada kontrol kolom.

## Perilaku yang perlu dipertahankan

- Tabel mengisi lebar container walaupun kolom sedikit. Biarkan DataTable mengelola colgroup, lebar fleksibel, sticky offset, dan scroll.
- `pinable` pada tabel menjadi default tombol pin; override per kolom tersedia.
- `defaultPin: 'left' | 'right'` adalah posisi awal. Bila efektif `pinable` false, posisi tersebut tetap terkunci dan tidak ada tombol pin.
- Untuk controlled state, awali dengan `useTableColumns({ columns: definitions })` atau `getDefaultColumnPinning(definitions)`. Default kolom terkunci tetap diterapkan walaupun state controlled menghapusnya.
- `enableHiding: false` adalah aturan visibilitas yang terpisah dari pinning. TableColumnMenu menampilkan kolom tersebut sebagai terkunci dan hanya mengatur visibilitas.
- Aksi sort/pin berada di kanan header. Gunakan selection API dengan ID stabil; area sel checkbox sudah mencakup seluruh sel.
- Pagination memakai TablePagination yang disediakan DataTable; jangan menambahkan pagination kedua untuk state yang sama.

## Filter lokal atau server

`TableFilterDef<T>` mendefinisikan pilihan atau tanggal. `filterTableData(rows, definitions, values)` melakukan OR dalam field, AND antar-field, serta batas tanggal inklusif. State filter/search/sort/page/pageSize yang diterapkan berasal dari URL melalui useUrlState dan codec fitur; jangan menyimpannya hanya di state lokal. Gunakan `resetKey` untuk mode client bila diperlukan.

Range tanggal memakai `RangeCalendar` dua bulan dan tanggal lokal. Popover filter memiliki satu pemilik scroll, dengan header/footer di luar area scroll tersebut. Gunakan Chip bawaan untuk filter aktif.

Untuk API baru, gunakan TanStack Query dan kontrak server pada DataTable. Query key memuat scope dan seluruh parameter URL; jangan menumpuk cache useServerTable di atas Query. Jangan melakukan sort/pagination client lagi pada satu halaman hasil server. GET error tampil melalui ErrorState dengan ilustrasi pada area body yang sama dengan empty, tanpa toast. Sambungkan onRetry ke query.refetch. Lihat [query/cache](../query.cache.md), [search params](../search.params.md), dan [contoh runtime](../../../../../templates/integrations/readme.md).
