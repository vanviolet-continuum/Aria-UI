# Arsitektur dan batas import

| Area           | Tanggung jawab                                                          | Batas                                                                   |
| -------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `src/`         | Starter, config, route, locale, fitur aplikasi                          | Saat ini Beranda; tidak memuat galeri/demo secara otomatis              |
| `templates/`   | Kit portabel: UI, shell, tema, provider, i18n, aset, integrasi opsional | Tidak mengimpor src, preview, router aplikasi, SDK bisnis, atau fixture |
| `preview/src/` | Demo Aria Workspace multi-case, galeri dan dokumentasi interaktif       | Tidak menjadi dependency starter/kit                                    |

`src → templates` dan `preview/src → templates`. Kedua aplikasi memiliki entry/config sendiri. `examples/` sudah dihapus; jangan mengembalikan route lama.

## Boundary aplikasi dan kit

Di kit gunakan import relatif; navigasi, data, callback, dan konfigurasi masuk melalui props/provider. AdminLayout menerima adapter navigasi; route dan Link aplikasi tetap milik aplikasi. UI core/shell bebas dari dependency TanStack, Zod, React Router, dan Tailwind. Integrasi library tersebut berada pada entry opsional `templates/integrations/`.

Aturan bisnis satu domain tetap di fitur. Kesamaan bentuk dua layar belum tentu membutuhkan abstraksi publik; perluas kit ketika ada kebutuhan struktural reusable yang belum ditangani komposisi. Lihat [pemilihan komponen](component.selection.md).

## Entry dan provider

- `index.html → src/main.tsx`; app route di `src/routes.tsx`.
- `@/` menuju `src/`; `@templates` menuju `templates/index.ts`; `@templates/…` menuju leaf kit. Jaga konfigurasi [Vite](../../../../vite.config.ts) dan [TypeScript](../../../../tsconfig.app.json) konsisten.
- [Starter providers](../../../../src/providers.tsx) memasang AriaQueryProvider di dalam TemplateProvider. TemplateProvider menyediakan tema/i18n/toaster serta mutation overlay; jangan membuat pemilik global kedua di fitur.
- [Query config](../../../../src/config/query.config.ts) membuat QueryClient sekali. [API config](../../../../src/config/api.config.ts) dan [client](../../../../src/api/client.ts) milik aplikasi.
- Stylesheet kit diimpor sekali pada entry aplikasi. Preview memakai entry bridge Tailwind sendiri; jangan mengimpornya lagi di luar layer.
- Preview memakai `preview/src/routes.tsx`, config, provider/store, dan [shell sendiri](../../../../preview/src/layouts/admin/root.tsx). Lihat [preview](preview.app.md).

## Bundle dan distribusi

Pertahankan ekspor ESM per komponen/aset, leaf entry, anotasi PURE, dan `sideEffects: ["**/*.css"]` pada [package kit](../../../../templates/package.json). Aplikasi mengimpor simbol/leaf yang digunakan. Jangan mengiterasi namespace seluruh ikon/ilustrasi menjadi registry runtime aplikasi biasa; registry lengkap hanya milik catalog demo.

Tree shaking JavaScript tidak otomatis menghapus selector stylesheet lengkap. Untuk CSS selektif gunakan base dan stylesheet komponen sesuai [panduan kit](../../../../templates/readme.md). Jangan menjanjikan aset/CSS terbuang hanya karena file dipindah.

## Perintah menurut target

| Target  | Development  | Build              | Menyajikan build     |
| ------- | ------------ | ------------------ | -------------------- |
| Starter | npm run dev  | npm run build      | npm run preview      |
| Demo    | npm run demo | npm run demo:build | npm run demo:preview |

`npm run preview` adalah server hasil build starter, berbeda dari folder demo. Jalankan build/test/QA hanya sesuai lingkup dan batas pengguna.
