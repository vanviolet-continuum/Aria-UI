# Struktur fitur dan penamaan

Baca [arsitektur](architecture.md) ketika target perubahan belum jelas. Bentuk starter aktual ada di [src](../../../../src).

```text
src/
  config/
    app.config.ts
    navigation.config.ts
    theme.config.ts
    i18n.config.ts
  layouts/admin/root.tsx
  locales/id.json
  locales/en.json
  pages/home/root.tsx
  app.tsx
  main.tsx
  providers.tsx
  routes.tsx
```

## Saat menambah fitur

Kelompokkan halaman berdasarkan fitur, misalnya `pages/users/`. Buat file sesuai kebutuhan yang benar-benar digunakan:

| File                    | Fungsi                                                 |
| ----------------------- | ------------------------------------------------------ |
| `root.tsx`              | Parent route, outlet, atau koordinasi fitur bersama    |
| `list.tsx`              | Daftar, pencarian, filter, dan pemilihan baris         |
| `form.tsx`              | Isi form yang dipakai tambah dan ubah                  |
| `add.tsx`, `update.tsx` | Pengambilan data, submit, dan navigasi mode terkait    |
| `detail.tsx`            | Konten detail yang dapat dipakai halaman maupun drawer |
| `drawer.tsx`            | Adapter drawer khusus fitur                            |
| `types.ts`, `api.ts`    | Kontrak data dan akses data bila dibutuhkan            |

Fitur sederhana boleh cukup satu `root.tsx`. Jangan membuat seluruh susunan di atas sebagai placeholder. Komponen yang hanya dipakai fitur tinggal di folder fitur; komponen umum yang layak digunakan aplikasi lain masuk `templates/ui/<nama>/`.

Tambahkan route di `src/routes.tsx`. Tambahkan hanya menu yang dapat dibuka ke `src/config/navigation.config.ts`. Label menu berupa key terjemahan; layout aplikasi memasang icon, status aktif, dan hasil terjemahannya. Tempatkan integrasi shell di `src/layouts/admin/root.tsx`; shell reusable tetap di `templates/layouts/admin.layout/`.

## Nama dan public API

- File/folder beberapa kata menggunakan titik: `confirm.dialog/`, `access.denied.illustration.tsx`, `use.table.columns.ts`.
- Nama file satu kata seperti `root.tsx`, `list.tsx`, `types.ts`, dan `index.ts` tetap sederhana.
- Komponen memakai PascalCase dan hook memakai `use…`.
- File tooling standar mengikuti nama yang diwajibkan alat. Folder skill `aria-ui` memakai konvensi nama skill.
- Pada komponen kit baru, sediakan entry lokal `index.ts`, ekspor bernama yang diperlukan di `templates/ui/index.ts`, dan stylesheet terpisah bila diperlukan. Impor style tersebut dari stylesheet kit yang sesuai.
- Perbarui dokumentasi komponen pada perubahan kontrak publik; jangan menyalin ulang seluruh dokumentasi ke skill.
