# Preview sebagai aplikasi demo dan acuan

[Aria Workspace](../../../../preview/readme.md) adalah aplikasi multi-case dengan data lokal, galeri aset, dan dokumentasi komponen. Starter tetap terpisah; preview bukan paket dependency fitur starter.

## Struktur aktual

Semua menu berada di `preview/src/pages/<case>/<menu>/root.tsx`: workspace, commerce, learning, catalog adalah kelompok setara. Home berada di pages/home/root.tsx. Jangan membuat folder menu lain sejajar pages seperti features/workspace baru.

| Pemilik                          | Lokasi                                  |
| -------------------------------- | --------------------------------------- |
| Route lazy                       | preview/src/routes.tsx                  |
| Navigasi                         | preview/src/config/navigation.config.ts |
| Shell, Cmdk, breadcrumb          | preview/src/layouts/admin/root.tsx      |
| Data/provider per case           | preview/src/data/                       |
| Copy/config                      | preview/src/locales/ dan config/        |
| Komposisi lintas halaman demo    | preview/src/components/                 |
| Registry komponen/ikon/ilustrasi | preview/src/catalog/                    |
| Entry style Tailwind + bridge    | preview/src/styles.css                  |

Helper record.page, record.editor, record.fields, record.display dan scenario.shared milik demo. Gunakan untuk menu demo yang cocok; jangan mengimpornya ke templates atau src. Untuk kit reusable ambil kebutuhan strukturalnya, hilangkan domain/store demo, lalu sediakan API prop/slot.

## Pilih case yang sesuai

| Case      | Acuan dan konsekuensi data                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace | Users, proyek, tugas, klien, tagihan, dokumen, aktivitas, pengaturan memakai data terkait; perubahan harus tercermin pada menu yang membaca entitas sama |
| Commerce  | Produk, pesanan, inventaris, pelanggan; pesanan menyimpan snapshot dan reservasi stok yang harus dijaga saat edit/cancel                                 |
| Learning  | Kursus, siswa, enrollment, classroom, course builder; progres dimiliki enrollment, bukan satu nilai global kursus                                        |
| Catalog   | Komponen, ikon, ilustrasi, tema; registry lengkap hanya dimuat demo                                                                                      |

Jangan mengganti relasi store dengan array placeholder independen per halaman. Metrik/empty/action mengikuti data yang sama dan hasil filter yang relevan. Nyatakan bahwa data disimpan lokal, tanpa mengklaim pengiriman email atau server.

## Pola interaktif

Kalender: [page](../../../../preview/src/pages/workspace/calendar/root.tsx) + [FullCalendar API](../../../../templates/ui/full.calendar/readme.md). Date/view/weekends di URL. Preview hover/focus baca saja; editor alternatif gesture; move/resize gagal revert; satu scroll owner. Jangan menyalin opsi FullCalendar versi lain tanpa membaca wrapper/types aktual.

Wizard: [course builder](../../../../preview/src/pages/learning/course.builder/root.tsx) dengan brief/curriculum/access/review terpisah. Validasi live per tahap, kembali mempertahankan draft, reorder punya alternatif tombol, review dari draft yang sama, dan commit lokal kursus/enrollment atomik. Edit mempertahankan ID/progres pelajaran yang masih ada. Wizard kit hanya presentasi dan slot.

Board: [tasks](../../../../preview/src/pages/workspace/tasks/root.tsx). Board/table berbagi sumber entitas; aksi kartu memakai menu yang sama maknanya dengan aksi tabel.

## Gaya dan dokumentasi

Preview memakai Tailwind v4 melalui satu entry bridge. Gunakan utility token semantik untuk layout lokal dan komponen Aria untuk teks/field/menu/blok bersama; jangan mengimpor stylesheet kit kedua di luar layer. Lihat [Tailwind](tailwind.md).

Default modul mengikuti [kontrak](../../../../templates/ui/module.defaults.md), bukan varian kebijakan per case. Source [peta acuan](reference.map.md) membantu memilih modul terdekat.

Registry dihasilkan melalui `npm run demo:catalog` bila ekspor publik berubah dan pembaruan metadata dibutuhkan. Ini bukan SDK backend; aturan generated API read-only tetap terpisah. Jalankan command hanya dalam lingkup permintaan.

Demo lokal bukan rekomendasi cache produksi. Untuk backend gunakan [alur API](api.workflow.md), dengan Query dan adapter generated aktual.
