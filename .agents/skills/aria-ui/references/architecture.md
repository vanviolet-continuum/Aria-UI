# Arsitektur dan batas import

## Tiga area

| Area         | Tanggung jawab                                                                          | Tidak dimiliki area ini                     |
| ------------ | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| `src/`       | Starter aplikasi, route, menu, config proyek, locale aplikasi, dan fitur bisnis         | Galeri seluruh komponen/aset                |
| `templates/` | Komponen reusable, layout shell, tema, provider, i18n, ikon, ilustrasi, dan helper umum | API bisnis, route aplikasi, fixture demo    |
| `preview/`   | Lokasi aplikasi demo dan dokumentasi interaktif yang akan dibuat                        | Kode yang dibutuhkan starter untuk berjalan |

`preview/` saat ini sengaja kosong. Folder `examples/` sudah dihapus. Starter hanya memuat menu Beranda; contoh autentikasi, Users, katalog, dan Theme Studio bukan route starter saat ini.

```text
src/     ──→ templates/
preview/ ──→ templates/
```

Kedua aplikasi berdiri sendiri. Di dalam `templates/`, gunakan import relatif. Berikan data, navigasi, callback, dan konfigurasi melalui props atau provider. `AdminLayout` menerima `onNavigate` dan `routeKey`; aplikasi yang menghubungkannya dengan React Router.

## Entry dan alias

- `index.html` memuat `src/main.tsx`.
- `@/…` mengarah ke `src/…`.
- `@templates` mengarah ke `templates/index.ts`; `@templates/…` mengarah ke modul kit.
- Alias harus konsisten di [Vite](../../../../vite.config.ts) dan [TypeScript](../../../../tsconfig.app.json).
- `src/providers.tsx` memasang router dan `TemplateProvider` sekali. Provider kit sudah memasang locale, tema, mutation overlay, dan toaster.
- `src/main.tsx` menerapkan tema awal sebelum render dan mengimpor `@templates/styles.css` sekali.

Saat demo diminta kelak, berikan entry dan konfigurasi aplikasi demo sendiri. Jangan menambahkan import `preview` ke starter atau kit. Perintah demo belum tersedia selama folder tersebut kosong.

## Bundle dan distribusi

Ekspor ESM per komponen/aset dan metadata `sideEffects: ["**/*.css"]` berada di [package kit](../../../../templates/package.json). Pertahankan factory PURE yang sudah ada. Hindari namespace import yang kemudian diiterasi menjadi registry semua ikon/ilustrasi pada runtime aplikasi biasa.

Import stylesheet lengkap memang membawa seluruh CSS kit; tree shaking JavaScript tidak otomatis menghapus selector CSS. Konsumen dapat memilih `base.css` dan stylesheet per komponen bila membutuhkan CSS selektif. Lihat [panduan kit](../../../../templates/readme.md).

`npm run dev` menjalankan starter. `npm run build` adalah perintah typecheck/build, `npm test` menjalankan test yang sudah ada, dan `npm run preview` menyajikan hasil build starter. Jalankan hanya pemeriksaan yang sesuai dengan tugas dan batas pengguna; kata `preview` pada perintah Vite berbeda dari folder demo `preview/`.
