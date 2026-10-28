# TableFilter

Filter pilihan/rentang tanggal dengan pencarian, checkbox baris penuh, serta chip aktif yang dapat dihapus. Nilai terapan tetap dikontrol aplikasi melalui value/onChange dan URL.

TableToolbar memasang tombol filter di baris kontrol bersama pencarian dan aksi kolom. Chip aktif berada pada baris penuh di bawahnya; jika banyak, chip membungkus dari sisi kiri toolbar tanpa membuat input pencarian menyempit.

```tsx
import { TableToolbar } from '@templates/ui/data.table'

;<TableToolbar
  search={search}
  filters={filterDefinitions}
  filterValue={filterValue}
  onFilterChange={setFilters}
/>
```

TableFilter tetap tersedia sebagai komposisi inline. Untuk layout custom, gunakan TableFilterControl dan TableFilterChips dengan props filters, value, onChange, dan disabled yang sama. Urutan DOM toolbar adalah search, tombol filter, aksi, kemudian chip; navigasi keyboard mengikuti tampilan. Jangan menambahkan wrapper scroll pada baris chip.

Popover rentang tanggal memakai RangeCalendar dua bulan dengan satu area scroll. GET error pada tabel tetap ditangani DataTable, bukan diubah menjadi filter kosong atau toast.
