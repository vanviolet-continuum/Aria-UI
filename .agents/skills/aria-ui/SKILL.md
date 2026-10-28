---
name: aria-ui
description: 'Bangun atau ubah fitur React memakai Aria UI di repository ini: modul CRUD, layout, form, tabel, drawer, tema, dan integrasi API. Gunakan untuk pekerjaan pada src, preview, atau templates yang mengikuti kontrak komponen dan pola Aria; tidak untuk frontend lain yang tidak memakai kit ini.'
---

# Mengembangkan dengan Aria UI

Hasilkan fitur yang mengikuti pola Aria dan kebutuhan pengguna. Default komponen menjaga konsistensi; props, slot, dan komposisi tetap memberi ruang custom.

## Mulai dari tugas

1. Baca `AGENTS.md` yang berlaku. Tentukan pemilik perubahan: starter `src/`, demo `preview/src/`, atau kit portabel `templates/`. Pertahankan batas pekerjaan dan pilihan pengguna.
2. Pilih acuan melalui [peta referensi source](references/reference.map.md). Untuk modul/CRUD, baca [kontrak default modul](references/recipes/module.defaults.md) sebelum menyusun halaman. Untuk perbaikan kecil, buka hanya referensi pemilik masalah.
3. Temukan ekspor, tipe props, dan implementasi aktual dengan `rg`. Contoh hidup menunjukkan komposisi; jangan menebak prop, endpoint, atau DTO dari namanya.
4. Implementasikan pada pemiliknya. Perbarui route, menu, locale, dan dokumentasi kontrak yang benar-benar terdampak. Default bersama diperbaiki di kit; kebutuhan satu fitur tetap di fitur.
5. Gunakan [panduan penyelesaian](references/delivery.review.md) sesuai lingkup. Hormati permintaan tanpa test/build/QA dan laporkan hanya pemeriksaan yang dijalankan.

Jika ada referensi visual dari pengguna, terapkan pada tugas itu. Jika tidak ada, mulai dari default dan source yang hidup; jangan mengganti pola modul secara sepihak.

## Pilih panduan pekerjaan

| Pekerjaan                                  | Baca                                                                                                       |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Batas aplikasi/kit, import, entry, bundle  | [Arsitektur](references/architecture.md)                                                                   |
| File, folder, route, menu, locale baru     | [Struktur file](references/file.structure.md), [i18n](references/i18n.md)                                  |
| Modul baru atau komposisi beberapa blok    | [Blueprint modul](references/module.blueprints.md), [CRUD](references/recipes/crud.md)                     |
| Memilih komponen atau memperluas API       | [Pemilihan komponen](references/component.selection.md)                                                    |
| Susunan responsif, judul, teks, scroll     | [Layout dan tipografi](references/layout.typography.md)                                                    |
| Tabel, filter/chip, pagination, pinning    | [Tabel dan filter](references/recipes/table.filters.md)                                                    |
| Input, Zod, validasi live, submit          | [Form dan validasi](references/recipes/forms.validation.md)                                                |
| Detail halaman/panel, exit, draft          | [Detail dan drawer](references/recipes/detail.drawer.md), [unsaved changes](references/unsaved.changes.md) |
| Demo, wizard, kalender, board, case bisnis | [Preview](references/preview.app.md), [peta source](references/reference.map.md)                           |
| Tema, ukuran global, utility styling       | [Tema](references/theme.md), [Tailwind](references/tailwind.md)                                            |
| Ikon, ilustrasi, registry galeri           | [Aset](references/icons.illustrations.md)                                                                  |

Untuk integrasi backend, mulai dari [alur API utuh](references/api.workflow.md) dan [generated API](references/generated.api.md), lalu buka hanya bagian terkait:

| Kebutuhan API                               | Acuan                                                  |
| ------------------------------------------- | ------------------------------------------------------ |
| Query key, cache, invalidation, persistence | [Query/cache](references/query.cache.md)               |
| Search, filter, sort, pagination di URL     | [Search params](references/search.params.md)           |
| Pesan backend, transport, GET error inline  | [API error](references/api.errors.md)                  |
| Mutation, overlay, toast, callback          | [Lifecycle mutation](references/mutation.lifecycle.md) |
| Login/logout, permission, workspace         | [Auth/session](references/auth.session.md)             |

## Batas yang memengaruhi keputusan

- Ikuti kebutuhan eksplisit pengguna. Detail default visual/interaksi dimiliki satu [kontrak modul](references/recipes/module.defaults.md); jangan membuat kebijakan alternatif di fitur.
- Source dan tipe ekspor adalah acuan API. Jika dokumentasi tertinggal, gunakan implementasi aktual dan perbarui bagian yang terdampak oleh tugas.
- Kit tidak mengimpor aplikasi, router aplikasi, SDK generated, atau data bisnis. Helper/store/registry preview bukan dependency starter maupun kit. Starter tetap Beranda sampai ada permintaan fitur baru.
- SDK generated read-only. Temukan lokasi dan signature aktual sebelum membuat adapter; perubahan kontrak dilakukan melalui generator/spesifikasi.
- URL memiliki kriteria daftar; Query memiliki response backend. Key memuat semua parameter request dan scope. Jangan menambah cache daftar kedua atau memproses ulang satu halaman server sebagai dataset lengkap.
- Error API tetap reject. GET error muncul inline dengan ilustrasi/retry; mutation memiliki satu pengelola feedback/cache. Pesan backend dipertahankan mentah; submit API memakai `useApiFormErrors().run`.
- Gunakan komponen dan token yang ada sebelum membuat replika. Pertahankan semantik HTML, keyboard/fokus, satu pemilik scroll per panel, dot case, dan locale ID/EN.
- Perluasan kit menjaga ekspor ESM/leaf, anotasi PURE, props native, `children`, `className`, dan slot yang relevan. Registry semua aset tetap milik demo.

## Bila pola belum cocok

Susun komponen terdekat dengan data domain terlebih dahulu. Buat primitive baru ketika komposisi/kontrak sekarang memang belum menampung kebutuhan reusable; jangan menambah library atau lapisan service kosong sekadar mengikuti blueprint.

Jika backend belum tersedia, kerjakan UI yang dapat dibuat dan nyatakan kontrak yang masih diperlukan. Jangan mengarang endpoint, generated DTO, persistensi, atau keberhasilan request.
