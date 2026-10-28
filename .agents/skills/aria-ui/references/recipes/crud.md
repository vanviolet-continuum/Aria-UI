# Pola fitur CRUD

Mulai dari [default modul](module.defaults.md) dan [blueprint komposisi](../module.blueprints.md). Detail API dibaca dari source, bukan ditebak dari contoh.

## Pilih target dan pecah sesuai alur

Starter: `src/pages/<fitur>/`. Demo: `preview/src/pages/<case>/<menu>/`. Kit menyediakan blok reusable; tidak memiliki entitas/API bisnis fitur.

Satu root.tsx cukup untuk koordinator sederhana. Pisahkan list/form/detail atau wrapper add/update/drawer hanya bila tanggung jawabnya sudah perlu dibagi. Tambah/ubah berbagi field; halaman/drawer berbagi isi detail. Jangan membuat semua file placeholder. Lihat [struktur file](../file.structure.md).

Gunakan ID stabil untuk row, route, selection, dan query detail. Jangan memakai index array sebagai identitas record.

## Data dan perubahan

Ikuti kontrak aplikasi. Pisahkan nilai form, DTO request, dan label tampilan bila bentuknya berbeda. Untuk backend gunakan [alur API](../api.workflow.md): URL criteria → scoped Query → adapter SDK → UI states, lalu live form → useAppMutation → invalidation → reset/close.

Load list/detail/edit membedakan loading, gagal dengan retry, kosong, dan tidak ditemukan. Error GET tidak menjadi toast. Request gagal mempertahankan draft; field error API tampil mentah. Jangan menganggap request berhasil karena catch mengembalikan nilai normal.

Detail drawer mempertahankan payload saat exit; guard dirty memiliki satu pemilik. Aksi destructive memakai dialog konfirmasi yang bermakna bila data dapat hilang. Pertahankan konteks pencarian/filter saat kembali ke daftar.

Untuk demo tanpa backend, data ada pada provider aplikasi demo dan persistensinya dijelaskan. Jangan menambahkan mock bisnis ke templates atau menganggap store lokal sebagai pola cache produksi.

## Hubungkan aplikasi

Route, navigasi, breadcrumb, dan locale mengikuti target. Pada preview, route di `preview/src/routes.tsx`, shell di `preview/src/layouts/admin/root.tsx`, menu di `preview/src/config/navigation.config.ts`. Seluruh halaman berada di pages/<case>/<menu>; tidak ada preview/features.

Acuan [Users](../../../../../preview/src/pages/workspace/users/root.tsx) menunjukkan komposisi daftar/form/detail. Pelajari polanya tanpa mengimpor helper/store demo ke starter/kit. [Recipe tabel](table.filters.md), [form](forms.validation.md), dan [detail](detail.drawer.md) menjelaskan bagian masing-masing.
