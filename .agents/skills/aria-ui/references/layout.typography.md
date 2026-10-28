# Layout, tipografi, dan scroll

Acuan API: [layout](../../../../templates/ui/layout.md), [tipografi](../../../../templates/ui/typography.md), [komposisi](../../../../templates/ui/composition.md). Susunan default modul dimiliki [kontrak modul](../../../../templates/ui/module.defaults.md).

## Susun dengan blok yang sesuai

| Kebutuhan                            | Gunakan                                   |
| ------------------------------------ | ----------------------------------------- |
| Elemen semantik/surface              | Box                                       |
| Susunan vertikal atau arah responsif | Stack                                     |
| Baris aksi/pilihan yang boleh wrap   | Inline                                    |
| Kolom responsif                      | Grid + GridItem                           |
| Pembuka halaman/bagian               | PageHeader / SectionHeader / HeadingGroup |
| Kelompok konten                      | Card dan part-nya                         |
| Ringkasan count                      | StatCard + icon/illustration semantik     |

Outlet default full width. Container tidak diberi max-width tambahan kecuali kebutuhan halaman memerlukannya. Periksa padding shell sebelum menambah padding halaman agar jarak tidak berlipat. PageHeader.artwork diisi SVG kontekstual; aksi tambah utama daftar berada di CardHeader.actions.

Gunakan token LayoutSpace untuk gap/padding. Hindari margin anak dan gap untuk jarak yang sama. Tetapkan min-width:0 pada anak flex/grid yang dapat memanjang dan min-height:0 pada area flex yang memang harus scroll.

Saat layout berubah horizontal ke vertikal, jangan membiarkan flex-basis tinggi tetap yang menghimpit konten. Ikuti tinggi isi untuk kartu vertikal; gunakan flex 1 1 0% hanya pada sumbu/ukuran yang memang dibagi. Jangan menambah height tetap untuk menyamarkan teks yang bertumpuk.

## Peran teks dan ukuran

Heading memiliki variant display/page/section/card/dialog; level h1–h6 mengikuti struktur dokumen, terpisah dari ukuran visual. Text memilih body/description/caption/label/helper/peran kontrol. Eyebrow untuk pengantar; MetricValue untuk angka. Form memakai FieldLabel/FieldHint/FieldError; kode/tautan memakai CodeText/CodeBlock/TextLink.

Pilih peran dan tone semantik sebelum override ukuran/warna. Gunakan tone inherit saat konteks selected/disabled/destructive/hover menentukan warna. Ikon mewarisi currentColor. Jangan membungkus ReactNode komposit dalam Text hanya untuk mewarnainya, atau menghasilkan elemen blok di dalam p.

Ukuran bersama diatur melalui tema typography. Custom satu pemakaian dapat memakai className/style/slot yang didukung; jangan menulis nilai font/warna literal yang sama di banyak halaman.

## Header dan navigasi

AdminLayout menyediakan Cmdk Ctrl/Cmd+K dari navigasi. Aplikasi memasok command tambahan, route state, dan hierarki breadcrumb. Breadcrumb berada di main/outlet sebelum halaman; header menunjukkan konteks workspace. Jangan menyalin shell ke setiap halaman.

## Satu pemilik scroll per panel

| Area                  | Pemilik scroll                                               |
| --------------------- | ------------------------------------------------------------ |
| Halaman admin         | Main/outlet shell                                            |
| Menu sidebar          | Area navigasi sidebar, bukan brand/footer                    |
| Drawer/Dialog panjang | Body overlay, footer di luar scroll                          |
| Popover daftar/filter | Isi yang ditetapkan komponen; bukan outer dan list bersamaan |
| Tabel lebar           | TableScrollArea bawaan untuk arah horizontal                 |

Jangan menghapus scroll yang memang diperlukan; lepaskan overflow/height tambahan yang menyebabkan dua scrollbar pada panel yang sama. Pertahankan perilaku sidebar collapsed dan scroll tabs yang sengaja tersembunyi.

Scrollbar bersama berada di [scrollbar.css](../../../../templates/styles/scrollbar.css), diimpor oleh base.css. Default thumb memakai --border-strong dan track transparan. Override bertema tersedia melalui --scrollbar-thumb, --scrollbar-track, --scrollbar-size; jangan memberi warna scrollbar lokal yang berbeda tanpa kebutuhan pengguna.

Preview menggunakan [bridge Tailwind](tailwind.md) untuk layout lokal, tetap memakai blok/teks Aria dan token tema.
