---
name: aria-ui
description: Buat atau ubah fitur React dengan Aria UI, termasuk CRUD, generated API, TanStack Query/cache, filter URL, form/Zod, auth/session, draft guard, tema dan Tailwind. Gunakan untuk pekerjaan yang mengikuti komponen, struktur, kontrak data dan pola interaksi repository ini; tidak untuk tugas umum di luar Aria UI.
---

# Mengembangkan dengan Aria UI

Bangun fitur dengan API komponen yang benar-benar tersedia, struktur yang konsisten, dan ruang custom melalui props atau komposisi.

## Mulai dari tugas yang diminta

1. Baca `AGENTS.md` yang berlaku dan tentukan target: aplikasi `src/`, pustaka `templates/`, atau demo `preview/`.
2. Pilih referensi di bawah sesuai pekerjaan. Baca hanya referensi yang relevan.
3. Temukan source komponen dan tipe props sebelum menggunakannya. Referensi menjelaskan keputusan dan pola; source serta dokumentasi komponen menjadi acuan API.
4. Terapkan perubahan beserta route, navigasi, terjemahan, dan ekspor yang memang diperlukan oleh fitur itu.
5. Ikuti batas validasi dari pengguna. Laporkan pekerjaan yang selesai dan pemeriksaan yang benar-benar dijalankan.

## Pilih referensi

| Ketika tugas menyentuh                             | Baca                                                        |
| -------------------------------------------------- | ----------------------------------------------------------- |
| Batas aplikasi/pustaka, import, entry, atau bundle | [Arsitektur](references/architecture.md)                    |
| Fitur, file, folder, route, atau navigasi baru     | [Struktur file](references/file.structure.md)               |
| Pemilihan komponen dan cara custom                 | [Pemilihan komponen](references/component.selection.md)     |
| Spacing, susunan responsif, judul, atau teks       | [Layout dan tipografi](references/layout.typography.md)     |
| Warna, ukuran global, mode, atau konfigurasi tema  | [Tema](references/theme.md)                                 |
| Copy UI, bahasa, tanggal, atau angka               | [Internasionalisasi](references/i18n.md)                    |
| Ikon, ilustrasi, atau galeri aset                  | [Ikon dan ilustrasi](references/icons.illustrations.md)     |
| Modul daftar/tambah/ubah/detail                    | [Pola CRUD](references/recipes/crud.md)                     |
| Tabel, filter, pagination, atau pinning            | [Tabel dan filter](references/recipes/table.filters.md)     |
| Input, checkbox, validasi, atau submit             | [Form dan validasi](references/recipes/forms.validation.md) |
| Detail di halaman dan drawer                       | [Detail dan drawer](references/recipes/detail.drawer.md)    |

Untuk contoh permintaan "buat Products dengan tabel, tambah, ubah, dan detail drawer", baca struktur file, CRUD, tabel, form, serta detail/drawer. Buka referensi tema hanya bila fitur memerlukan perubahan tema.

## Pertahankan batas penting

Untuk fitur API, baca referensi generated API dan query/cache, lalu pilih referensi URL, error, mutation, form, atau Tailwind yang memang terkait:

| Pekerjaan integrasi                                       | Referensi                                              |
| --------------------------------------------------------- | ------------------------------------------------------ |
| SDK hasil generator, DTO, signature, dan lokasi read-only | [Generated API](references/generated.api.md)           |
| Query, cache, key, invalidation, dan persistence          | [Query/cache](references/query.cache.md)               |
| Filter/pencarian/sort/pagination di URL                   | [Search params](references/search.params.md)           |
| Pesan backend, transport, serta GET error inline          | [API error](references/api.errors.md)                  |
| Overlay, submit, toast, dan update data setelah aksi      | [Lifecycle mutation](references/mutation.lifecycle.md) |
| Login, logout, permission, atau pergantian workspace      | [Auth/session](references/auth.session.md)             |
| Form dirty dan penutupan panel/navigasi                   | [Unsaved changes](references/unsaved.changes.md)       |
| Styling utility dengan token tema yang sama               | [Tailwind](references/tailwind.md)                     |

- `src/` dan `preview/` mengonsumsi `templates/`. Pustaka tidak mengimpor aplikasi, router aplikasi, atau data bisnis.
- Generated SDK dibaca dan dipakai sesuai source aktual, tidak diedit, diformat, atau di-rename. Temukan output generator melalui konfigurasi proyek; lokasi tidak selalu src/generated.ts.
- Fitur API baru menggunakan TanStack Query. Query key memuat semua parameter dan scope data yang memengaruhi hasil. Filter yang diterapkan, sort, pencarian, dan pagination mengikuti URL.
- Gunakan server.run(formApi, operation) untuk submit API agar status submit tidak menjadi sukses ketika API gagal; error field masuk meta TanStack. Guard draft tersedia pada route, Drawer, dan Dialog.
- GET error ditampilkan dengan ErrorState/ilustrasi pada area hasil tabel/combobox, tanpa toast. Pesan backend tetap mentah dan error API tetap reject. Mutation memakai satu pemilik feedback serta invalidation yang sesuai.
- Saat ini starter hanya Beranda dan `preview/` kosong. Tambahkan demo atau fitur baru ketika diminta; jangan membangun ulang galeri sebagai bagian sampingan.
- Gunakan komponen layout, tipografi, field, menu, dan blok konten yang tersedia. Tambahkan primitive reusable ketika ada kebutuhan yang belum ditangani oleh API atau komposisi saat ini.
- Gunakan token tema dan variant semantik untuk tampilan bersama. Pertahankan `children`, props native, `className`, dan slot yang relevan saat memperluas komponen.
- Gunakan satu pemilik scroll untuk setiap panel. Seluruh baris/kartu pilihan checkbox harus dapat diklik melalui `CheckboxField` atau pola interaksi komponen menu.
- Gunakan ekspor ESM dan import bernama atau leaf module. Katalog seluruh aset merupakan tanggung jawab aplikasi demo.
- File/folder source memakai dot case. Nama tooling standar seperti `AGENTS.md`, `SKILL.md`, `package.json`, dan folder skill mengikuti konvensi alatnya.

## Saat API atau contoh belum tersedia

Cari modul terkait dengan `rg` dan baca tipe props serta implementasinya. Pertahankan pola lokal yang masih sesuai dengan permintaan. Jika referensi tertinggal dari source, gunakan source aktual dan perbarui bagian referensi yang terdampak oleh perubahan tersebut. Buat keputusan implementasi rutin tanpa meminta izin ulang untuk pekerjaan yang sudah diotorisasi.
