# Tabel dan filter

Baca [default modul](module.defaults.md). Acuan API: [DataTable](../../../../../templates/ui/data.table/data.table.tsx), [tipe](../../../../../templates/ui/data.table/types.ts), [default kolom](../../../../../templates/ui/data.table/column.defaults.ts), [TableFilter](../../../../../templates/ui/table.filter/readme.md).

## Komposisi standar

Gunakan props DataTable: filters, filterValue, onFilterChange, search, toolbarActions. Toolbar bawaan menempatkan kontrol pada baris atas dan chip aktif yang dapat dihapus pada baris penuh di bawah search. Jangan mengganti filter dengan deretan Combobox terpisah.

TableToolbar tersedia jika layout memerlukan toolbar terpisah; saat itu sembunyikan/ganti toolbar DataTable secara eksplisit agar tidak ada dua pemilik kontrol. TableFilterControl dan TableFilterChips untuk komposisi custom, dengan value/onChange yang sama.

Kolom berikut ditulis di komponen fitur yang memiliki t dan callback view:

```tsx
const definitions: ColumnDef<Member>[] = [
  {
    id: 'name', header: t('Name'), accessor: 'name', sortable: true,
    width: 240, enableHiding: false, defaultPin: 'left', pinable: false,
  },
  { id: 'email', header: t('Email'), accessor: 'email', sortable: true },
  createActionsColumn<Member>(
    row => [{ id: 'view', label: t('View details'), onSelect: () => view(row.id) }],
    { header: t('Actions') },
  ),
]
const columns = useTableColumns({ columns: definitions })

<DataTable
  data={rows}
  columns={definitions}
  getRowId={row => row.id}
  pinable
  columnVisibility={columns.visibility}
  onColumnVisibilityChange={columns.setVisibility}
  columnPinning={columns.pinning}
  onColumnPinningChange={columns.setPinning}
  filters={filterDefinitions}
  filterValue={urlFilters}
  onFilterChange={updateUrlFilters}
  search={{ value: url.state.q, onChange: q => url.setState({ q }) }}
  server={serverState}
  loading={query.isPending}
  error={query.error}
  onRetry={() => { void query.refetch() }}
/>
```

Impor DataTable, createActionsColumn, useTableColumns, type ColumnDef dari @templates/ui. Member, filterDefinitions, urlFilters, updateUrlFilters, serverState dan query milik fitur; definisikan dari kontrak/domain aktual. Untuk sumber lokal tanpa backend, gunakan mode client dan baca catatan URL di bawah.

## Lebar, pin, dan visibilitas

- Tabel mengisi lebar container. Biarkan kit mengatur colgroup, sticky offset, pagination, dan scroll; jangan menambah width kosong di sebelah aksi.
- createActionsColumn/actions callback membuat satu menu. Defaultnya terkunci di kanan, selalu terlihat, center, width 72. View/Edit/Delete berada pada menu yang sama; bukan tombol View di samping menu.
- pinable tabel adalah default tombol pin, dapat dioverride per kolom. defaultPin menentukan posisi awal. pinable false + defaultPin left/right tetap pinned dan tidak menyediakan tombol pin.
- useTableColumns({ columns: definitions }) atau getDefaultColumnPinning mengawali controlled pinning dengan benar. Kit tetap mempertahankan kolom terkunci bila state controlled menghapusnya.
- enableHiding false terpisah dari pinning. TableColumnMenu menampilkan kunci dan mengatur visibilitas, tanpa aksi pin.
- Sort/pin berada di kanan header. Jika header JSX, isi label teks untuk kontrol kolom.
- Override eksplisit mengikuti kontrak publik; align right saja tidak melakukan pin. kind data dapat menghindari inferensi kolom ber-ID actions.

## State URL dan mode data

Filter terapan, q, sort, page, pageSize dikendalikan codec + useUrlState. Jangan menyimpannya hanya pada useState. Search/filter berubah mereset page; pertahankan parameter lain serta Back/Forward. Lihat [search params](../search.params.md).

TableFilterDef<T> memakai choice atau date. filterTableData menjalankan OR dalam satu field, AND antar-field, serta batas tanggal lokal inklusif. Mode client DataTable menerapkan filter internal. Search client yang diterapkan tetap harus difilter oleh aplikasi; props search adalah kontrol input, bukan fungsi pencarian otomatis. Jika memakai client state terisolasi, resetKey dapat mereset halaman saat dataset pencarian berubah.

Untuk backend gunakan server dengan page, pageSize, totalItems, onPageChange, onPageSizeChange, sort?, onSortChange?. Hubungkan ke URL dan Query. Jangan melakukan sort/filter/pagination client lagi pada satu halaman response atau menumpuk cache useServerTable di atas Query.

GET error berada pada body yang sama dengan empty memakai ilustrasi/retry dan tanpa toast; error diberikan ke prop error, retry ke refetch. Jangan mengubah gagal load menjadi data kosong. TotalItems berasal dari backend, bukan panjang rows halaman.

## Range, selection, scroll

Filter tanggal memakai range lokal dan komponen bawaan yang menampilkan rentang dua bulan secara responsif. Jangan menggantinya dengan Calendar single-date. Popover memiliki satu pemilik scroll; header/footer berada di luar isi yang scroll.

Selection memakai ID stabil. Seluruh sel/area checkbox dapat dipilih; bulk actions hanya bekerja atas selection yang sah. Kebijakan lintas halaman mengikuti produk/backend, bukan menebak bahwa semua data sudah ada di rows.
