# React Admin Template

Starter admin React + TypeScript + Vite dengan UI kit portable dan tema yang dapat dikonfigurasi. Contoh klinik dan playground dipisahkan dari source starter.

## Menjalankan

```bash
npm install
npm run dev             # Starter bersih — http://127.0.0.1:5173
npm run dev:examples    # Demo lengkap — http://127.0.0.1:5174
```

Starter berisi Home, admin layout, dan Theme studio. Demo terpisah menyediakan Stocks, Dashboard, direktori CRUD, kalender, wizard, serta katalog seluruh komponen.

Fitur PDF upload/viewer, parallel stepper, password strength, filter command, visibility, dan pinned columns tersedia di **[Advanced blocks](http://127.0.0.1:5174/components?category=blocks)**. Panduan API ada di [BLOCKS.md](src/template/ui/BLOCKS.md).

```bash
npm run build           # Typecheck dan build starter ke dist/
npm run build:examples  # Typecheck dan build demo ke dist-examples/
npm run preview
npm run preview:examples
npm test                # Unit test dan penjagaan batas dependency
npm run format
```

## Struktur

```text
src/
├── app/                 # Entry, router, providers, halaman awal, config proyek
│   └── config/
│       ├── navigation.ts
│       └── theme.config.ts
└── template/            # Salin folder ini utuh ke proyek lain
    ├── ui/              # Komponen general, style, hook internal, dan tipe
    ├── layouts/         # AdminLayout, Sidebar, AdminHeader — berbasis props
    ├── theme/           # Palette, preset, provider, token, dan Theme studio
    ├── providers/       # TemplateProvider dan mutation overlay
    ├── hooks/           # Hook general
    ├── lib/             # Helper general
    ├── styles/          # Base, animasi, focus, dan style bersama
    ├── assets/
    ├── index.ts         # Public exports
    └── styles.css       # Entry stylesheet template
examples/
├── app/                 # Entry, router, provider, dan theme config demo sendiri
├── clinic/              # Fitur bisnis klinik dan workspace state
├── playground/          # Contoh pemakaian komponen
├── workflows/           # Contoh wizard dan kalender CRUD
├── mocks/               # API simulasi, service, dan fixture data
├── assets/
└── vite.config.ts       # Build/dev khusus demo
tests/
├── template/            # Unit test kit, di luar folder yang disalin
└── architecture.test.ts # Template tidak boleh mengimpor app atau examples
```

## Mengambil UI kit

Salin **`src/template/`** utuh, pasang dependensi yang dijelaskan di [panduan template](src/template/README.md), lalu import:

```tsx
import { Button, Input, Drawer, AdminLayout, TemplateProvider } from '@/template'
import '@/template/styles.css'
```

Komponen general berada di folder masing-masing, misalnya `ui/button/button.tsx` dan `ui/button/button.css`. Import internal template memakai path relatif; kit tidak memerlukan alias khusus. Alias `@/` pada contoh pemakaian adalah alias aplikasi konsumen.

## Menghapus contoh aplikasi

Hapus **`examples/`** untuk mengambil starter bersih. `npm run dev`, `npm run build`, dan `npm test` tetap bekerja karena source starter serta konfigurasi Vite utama tidak mengimpor demo. Script `*:examples` dapat dihapus dari package.json jika tidak diperlukan. Dependensi `recharts` hanya dipakai contoh grafik dan dapat dihapus juga.

Seluruh data klinik, API simulasi, fixture, dan asset demo berada di folder contoh. Tidak ada data demo yang dimuat oleh starter.

## Tema

Buka `/settings/appearance`. Hasil download menggantikan **`src/app/config/theme.config.ts`**. Demo memakai file sendiri di `examples/app/theme.config.ts`. Provider menerima konfigurasi melalui props; komponen template tidak mengimpor config aplikasi.

Keduanya memakai `defaultTheme` Zendenta yang sama: sidebar 232px, header 70px desktop, font/spacing 1×, dan kontrol medium. Pilih preset Zendenta untuk mengembalikan ukuran asal jika browser masih menyimpan pengaturan sebelumnya. Mode terang/gelap tetap dipertahankan.

Font default menggunakan **Hanken Grotesk** dari Fontsource yang dipaketkan lokal. Warna teks light menggunakan `textSecondary: #575757` dan `muted: #595959` pada seluruh preset. Hover tabel memakai token lembut tersendiri. Bayangan kolom pinned muncul hanya saat ada konten yang masih bisa digeser pada sisi tersebut.

Bahasa default **Indonesia**, dengan pilihan **English** di header. Resource general berada di `src/template/i18n/locales/`, resource starter di `src/app/locales/`, dan resource demo di `examples/app/locales/`. Lihat [panduan i18n](src/template/i18n/README.md) untuk menambahkan copy aplikasi.

Lihat [panduan tema](src/template/theme/README.md), [API UI kit](src/template/ui/README.md), dan [async/advanced components](src/template/ui/ADVANCED.md).

Data contoh klinik disimpan di localStorage pada origin demo. Endpoint `/api/demo/members` hanya tersedia pada server demo; static build demo menggunakan fixture yang dibundel sebagai fallback. Hosting static memerlukan fallback route ke index.html.
