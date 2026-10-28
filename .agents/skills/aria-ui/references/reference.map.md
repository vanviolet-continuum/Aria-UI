# Peta acuan yang hidup

Gunakan untuk menemukan implementasi terdekat, bukan untuk membaca seluruh repo. Path relatif di dokumen ini ditujukan ke lokasi final skill di `.agents/skills/aria-ui/`.

## Pemilik keputusan

| Pertanyaan                           | Sumber utama                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Batas proyek dan preferensi pengguna | `AGENTS.md` yang berlaku serta permintaan pengguna                                                       |
| Default komposisi/interaksi modul    | [Kontrak modul](../../../../templates/ui/module.defaults.md)                                             |
| Prop/tipe/ekspor yang benar          | Source komponen dan [UI index](../../../../templates/ui/index.ts)                                        |
| Cara menyusun halaman nyata          | Source preview pada tabel berikut                                                                        |
| Kontrak request/response backend     | Output generator aktual, spesifikasi, config aplikasi                                                    |
| Tema bersama                         | [Theme types](../../../../templates/theme/types.ts), [defaults](../../../../templates/theme/defaults.ts) |
| Styling utility demo                 | [Bridge preview](../../../../preview/src/styles.css), [integrasi Tailwind](tailwind.md)                  |

Gambar dari pengguna berlaku sebagai acuan tugas yang diberikan. Screenshot masalah bukan baseline visual yang sudah disetujui. Jangan mengaku telah membandingkan hasil visual bila browser/QA tidak dijalankan.

## Temukan pola berdasarkan kebutuhan

| Kebutuhan              | Contoh source                                                                                                                                                                | Yang dapat dipelajari                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Daftar CRUD lengkap    | [Users](../../../../preview/src/pages/workspace/users/root.tsx)                                                                                                              | Kolom, menu aksi, filter ber-chip, selection, dialog, open panel |
| Kriteria daftar di URL | [Users search schema](../../../../preview/src/pages/workspace/users/search.schema.ts)                                                                                        | Codec array, tanggal, default, pagination                        |
| Form tambah/ubah       | [Users form](../../../../preview/src/pages/workspace/users/form.tsx)                                                                                                         | Field, validasi live native, error, guard draft                  |
| Detail reusable        | [Users detail](../../../../preview/src/pages/workspace/users/detail.tsx)                                                                                                     | Konten compact dalam drawer, pasangan label/nilai                |
| Header aplikasi        | [Shell demo](../../../../preview/src/layouts/admin/root.tsx)                                                                                                                 | Cmdk, breadcrumb outlet, adapter navigasi                        |
| Statistik/dashboard    | [Workspace](../../../../preview/src/pages/workspace/dashboard/root.tsx), [commerce](../../../../preview/src/pages/commerce/overview/root.tsx)                                | Hierarki ringkasan, statistik, aktivitas domain                  |
| Kalender interaktif    | [Calendar page](../../../../preview/src/pages/workspace/calendar/root.tsx), [API](../../../../templates/ui/full.calendar/readme.md)                                          | URL date/view, hover preview, editor, drag/resize/revert         |
| Board tugas            | [Tasks](../../../../preview/src/pages/workspace/tasks/root.tsx)                                                                                                              | Board/table, prioritas, menu kartu, alternatif perpindahan       |
| Wizard nyata           | [Course builder](../../../../preview/src/pages/learning/course.builder/root.tsx), [Wizard API](../../../../templates/ui/wizard/readme.md)                                    | Langkah terpisah, validasi, draft, review, commit                |
| Tabel kecil terisolasi | [Data demo](../../../../preview/src/components/catalog/data.demo.tsx)                                                                                                        | Komposisi minimal; bukan pola cache backend                      |
| Katalog komponen       | [Collections](../../../../preview/src/pages/catalog/components/collections.tsx), [advanced examples](../../../../preview/src/pages/catalog/components/advanced.examples.tsx) | Demo prop terfokus dan komposisi komponen                        |
| Adapter form/API       | [Panduan integrasi](../../../../templates/integrations/readme.md), [integrations](../../../../templates/integrations)                                                        | Kontrak TanStack/Zod/URL dan feedback API yang sesungguhnya      |

Demo memakai store lokal. Contoh Users bukan contoh TanStack Query backend dan bukan bukti integrasi endpoint tertentu. Untuk backend, pindahkan pola tampilannya, lalu gunakan [alur API](api.workflow.md) untuk mengganti pemilik data.

## Cari API dengan murah

Mulai dari nama komponen di `templates/ui/index.ts`, buka leaf `index.ts`, lalu tipe dan implementasi komponennya. Buka CSS hanya untuk masalah layout/visual. Untuk hook/integrasi, mulai dari entry adapter yang relevan, bukan seluruh kit.

Contoh pencarian dari root repository:

```powershell
rg -n "TableToolbar|TableFilterChips|StatCard" templates/ui/index.ts
rg -n "interface DrawerProps|useDrawerPresence" templates/ui/drawer
rg -n "feedback|invalidates" templates/integrations/tanstack.query
```

Jangan menyalin asumsi dari versi library eksternal ketika wrapper kit sudah menentukan kontrak.

## Merawat acuan

- Perubahan default bersama: ubah komponen pemilik serta kontrak modul; recipe cukup menautkan keputusan itu.
- Perubahan prop publik: ubah tipe/ekspor dan dokumentasi komponen; contoh yang terdampak ikut disesuaikan.
- Pemindahan source contoh: perbarui link di peta ini dan recipe terkait. Jangan mempertahankan path lama sebagai saran.
- Registry demo diperbarui hanya bila perubahan ekspor memerlukannya; generated SDK backend mengikuti aturan read-only yang berbeda.
