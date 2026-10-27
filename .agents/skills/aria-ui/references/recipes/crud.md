# Pola fitur CRUD

Baca [struktur file](../file.structure.md), kemudian pilih [tabel](table.filters.md), [form](forms.validation.md), dan [detail](detail.drawer.md) sesuai alur yang diminta.

## Membagi tanggung jawab

Untuk fitur seperti Users atau Products, simpan seluruh komposisi bisnis di `src/pages/<fitur>/`:

- `root.tsx`: koordinasi parent route dan state yang memang dibagi.
- `list.tsx`: query/pencarian/filter, selection, kolom, serta aksi daftar.
- `form.tsx`: field dan validasi bersama untuk tambah/ubah.
- `add.tsx`: nilai awal, operasi create, dan arah setelah berhasil.
- `update.tsx`: load record, nilai awal, operasi update, serta state tidak ditemukan.
- `detail.tsx`: konten record yang dipakai halaman dan drawer.
- `drawer.tsx`: open/close, judul panel, dan penempatan konten detail/form.

Tambahkan tipe/service ketika dipakai. Untuk fitur kecil, gabungkan koordinasi sederhana dalam satu file; tidak perlu membuat lapisan service/store kosong. Gunakan ID record stabil pada route dan tabel, bukan index array.

## Data dan perubahan

Ikuti kontrak API/service yang sudah dimiliki aplikasi. Pisahkan nilai form, DTO request, dan label tampilan bila bentuknya berbeda. Untuk demo yang diminta tanpa backend, tempatkan mock di area aplikasi demo dan jelaskan perilaku persistensinya; jangan menyisipkan mock bisnis ke kit.

Gunakan useAppMutation untuk write API dengan feedback overlay/toast dan invalidation yang tepat. Tunggu mutateAsync berhasil sebelum menutup drawer atau navigasi. Bila gagal, pertahankan draft dan tampilkan field error API apa adanya melalui useApiFormErrors; MutationCache sudah menjadi pemilik toast. Jangan menumpuk runTask yang mengembalikan TaskResult pada query/mutation.

Pada load/edit sediakan state loading, gagal, dan record tidak ditemukan sesuai kebutuhan alur. Tambah/ubah berbagi isi form; halaman dan drawer berbagi isi detail. Pertahankan pencarian/filter yang relevan saat kembali ke daftar.

## Integrasi aplikasi

Pasang route di `src/routes.tsx`, menu di `src/config/navigation.config.ts`, dan copy pada kedua locale aplikasi. Gunakan PageHeader, Toolbar, Card, Field, dan komponen tabel/detail sebelum membuat markup styling khusus yang berulang. Aplikasi starter saat ini hanya Beranda; buat fitur CRUD ketika pengguna memintanya.
