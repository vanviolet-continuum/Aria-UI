# Blueprint komposisi modul

Baca [kontrak modul](../../../../templates/ui/module.defaults.md) untuk default visual/interaksi dan [peta source](reference.map.md) untuk contoh hidup. Blueprint ini memilih struktur berdasarkan tugas; jumlah panel, langkah, kolom, dan file mengikuti kebutuhan data.

## Daftar dengan tambah/ubah/detail

Urutan default:

```text
PageHeader: judul + deskripsi + artwork SVG kontekstual
Grid statistik: StatCard dengan icon/illustration yang sesuai, bila metriknya berguna
Card
  CardHeader: judul koleksi + ringkasan; aksi Tambah di actions
  TableToolbar: search + filter control + aksi kolom
                chip filter aktif pada baris penuh di bawahnya
  DataTable: loading / error-retry / empty / rows, satu area hasil
  Pagination bawaan
Detail drawer / form drawer / dialog konfirmasi sesuai aksi yang diminta
```

DataTable dapat membuat toolbar dan pagination sendiri. Pada pola biasa cukup isi `search`, `filters`, `filterValue`, `onFilterChange`, dan props kolom. Jangan memasang TableToolbar atau pagination kedua untuk kontrol yang sama.

Ambil komposisi dari [Users](../../../../preview/src/pages/workspace/users/root.tsx); gunakan [RecordPage](../../../../preview/src/components/record.page.tsx) sebagai contoh wrapper demo untuk case sederhana. Keduanya bukan dependency fitur starter/kit.

- Field daftar ditentukan oleh domain; jangan selalu menyalin name/email/role dari Users.
- Ringkasan statistik harus punya makna dari dataset yang diketahui. Jangan menghitung total global dari satu halaman response.
- Kolom identitas cukup lega untuk judul dan metadata; kolom aksi memakai default kit. Total/min-width kolom mengikuti kebutuhan agar tidak menciptakan scroll horizontal yang tidak berguna.
- Panel tambah/ubah berbagi isi form. Detail halaman dan drawer berbagi isi detail; ukuran panel mengikuti konten.
- Satu menu aksi per baris. Aksi bulk punya lokasi/state terpisah dan hanya muncul untuk selection yang sah.

## Dashboard atau overview

Mulai dari informasi yang membantu keputusan: metrik, tren bila ada data waktunya, daftar pekerjaan/aktivitas, dan aksi lanjutan yang nyata. Susun memakai PageHeader, Grid, StatCard, Card/SectionHeader, serta AreaChart bila cocok. Jangan menambahkan chart dekoratif yang datanya tidak ada atau angka random yang berubah pada render.

Sediakan judul, satuan/periode, dan ringkasan tekstual untuk chart. Bandingkan rentang yang setara; tampilkan loading/error/empty pada pemilik dataset. Artwork header dan ikon statistik melengkapi informasi, tidak menjadi sumber keterbacaan satu-satunya.

Acuan: [workspace dashboard](../../../../preview/src/pages/workspace/dashboard/root.tsx), [commerce overview](../../../../preview/src/pages/commerce/overview/root.tsx).

## Wizard

Gunakan [Wizard](../../../../templates/ui/wizard/readme.md) untuk kerangka dan slot; aplikasi memiliki draft, langkah aktif, validasi, dan penyimpanan. Contoh [course builder](../../../../preview/src/pages/learning/course.builder/root.tsx) memisahkan brief, curriculum, access, review karena isinya berbeda.

Maju memvalidasi langkah aktif; kembali mempertahankan nilai. Review mengambil data dari draft yang sama. API save dilakukan pada titik commit yang jelas, bukan tiap pergantian langkah, kecuali kebutuhan produk berbeda. Pending menahan submit ganda; kegagalan mempertahankan draft; sukses mereset baseline sebelum navigasi. Jangan menaruh data sensitif form di search params.

## Kalender dan board

[FullCalendar](../../../../templates/ui/full.calendar/readme.md) menyediakan toolbar, hover/focus preview, render slot, serta drag/resize. Tanggal/view/weekends terapan mengikuti URL; data event mengikuti Query atau store demo. Scope request memuat rentang aktif bila backend mengambil per rentang.

Preview hover bersifat baca saja; aksi berada pada editor/detail. Drag gagal harus revert. Berikan alternatif editor atau menu untuk tindakan yang bergantung gesture. Jangan menumpuk scroll kalender dengan scroll body panel lain.

[Tasks](../../../../preview/src/pages/workspace/tasks/root.tsx) menunjukkan board dan table pada satu domain. Kedua tampilan membaca entitas yang sama; pemindahan status tidak membuat salinan array bisnis yang saling berbeda.

## Kepemilikan state

| State                                                                 | Pemilik                                                  |
| --------------------------------------------------------------------- | -------------------------------------------------------- |
| Search, filter, sort, page, pageSize; view/date bila terkait navigasi | Codec fitur + useUrlState                                |
| Response API, loading, error, total server                            | TanStack Query                                           |
| Nilai draft, touched, field error, status submit                      | Form + schema fitur                                      |
| Panel terbuka, fokus, animasi exit, menu sementara                    | State UI + useDrawerPresence/primitive terkait           |
| Visibility/pinning/selection tabel                                    | API state tabel; simpan bila kebutuhan produk memintanya |
| Data demo lintas menu                                                 | Provider demo pada preview/src/data, bukan kit           |

Jangan otomatis memasukkan setiap state UI ke URL atau persistence. Ikuti [alur API](api.workflow.md) saat pemilik data adalah backend.

## Custom yang tetap konsisten

Mulai dari variant, ukuran, slot, native props, dan className. Bila susunan unik, gunakan part Card/Toolbar/Detail tanpa mengganti perilaku filter, fokus, feedback, dan token. Domain wrapper tinggal di fitur; API kit baru harus berguna di luar satu domain.

Tailwind boleh dipakai untuk grid/layout lokal melalui bridge tema. Untuk teks, field, menu, serta blok umum, gunakan komponen Aria agar perubahan tema tetap menyebar.
