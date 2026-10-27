---
name: aria-ui
description: Buat atau ubah halaman, fitur CRUD, layout, tema, dan komponen React menggunakan Aria UI dalam repository ini. Gunakan saat pekerjaan perlu mengikuti komponen, token, struktur fitur, dan pola interaksi Aria UI; tidak untuk tugas umum yang tidak menyentuh aplikasi atau pustaka UI ini.
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

- `src/` dan `preview/` mengonsumsi `templates/`. Pustaka tidak mengimpor aplikasi, router aplikasi, atau data bisnis.
- Saat ini starter hanya Beranda dan `preview/` kosong. Tambahkan demo atau fitur baru ketika diminta; jangan membangun ulang galeri sebagai bagian sampingan.
- Gunakan komponen layout, tipografi, field, menu, dan blok konten yang tersedia. Tambahkan primitive reusable ketika ada kebutuhan yang belum ditangani oleh API atau komposisi saat ini.
- Gunakan token tema dan variant semantik untuk tampilan bersama. Pertahankan `children`, props native, `className`, dan slot yang relevan saat memperluas komponen.
- Gunakan satu pemilik scroll untuk setiap panel. Seluruh baris/kartu pilihan checkbox harus dapat diklik melalui `CheckboxField` atau pola interaksi komponen menu.
- Gunakan ekspor ESM dan import bernama atau leaf module. Katalog seluruh aset merupakan tanggung jawab aplikasi demo.
- File/folder source memakai dot case. Nama tooling standar seperti `AGENTS.md`, `SKILL.md`, `package.json`, dan folder skill mengikuti konvensi alatnya.

## Saat API atau contoh belum tersedia

Cari modul terkait dengan `rg` dan baca tipe props serta implementasinya. Pertahankan pola lokal yang masih sesuai dengan permintaan. Jika referensi tertinggal dari source, gunakan source aktual dan perbarui bagian referensi yang terdampak oleh perubahan tersebut. Buat keputusan implementasi rutin tanpa meminta izin ulang untuk pekerjaan yang sudah diotorisasi.
