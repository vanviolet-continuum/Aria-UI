# Aria UI

Starter React + TypeScript + Vite dengan pustaka UI reusable, tema dinamis, dan panduan untuk AI. Aplikasi starter saat ini hanya berisi menu **Beranda**.

## Menjalankan starter

```bash
npm install
npm run dev
```

Vite menggunakan port awal 5173 dan memilih port berikutnya bila sudah digunakan. Entry aplikasi adalah `src/main.tsx`. Bahasa default Indonesia; pemilih bahasa dan mode tema tersedia pada header.

Perintah yang tersedia:

- `npm run build`: typecheck dan build starter ke `dist/`.
- `npm run preview`: menyajikan hasil build starter.
- `npm test`: menjalankan test yang sudah ada.
- `npm run format`: merapikan format source.

Jalankan pemeriksaan sesuai kebutuhan dan batas tugas. Perintah Vite `preview` berbeda dari folder aplikasi demo `preview/`.

## Menjalankan demo

```bash
npm run demo
```

Demo terbuka di `http://127.0.0.1:5174/preview/` (port berikutnya digunakan jika sibuk). Entry, router, locale ID/EN, tema, dan storage demo berada di `preview/` dan terpisah dari starter.

**Aria Workspace** menyediakan tiga case aplikasi yang saling mengikuti kontrak Aria UI:

- Team Operations: proyek, board tugas, kalender interaktif, klien, tagihan, dokumen, anggota, aktivitas, dan pengaturan.
- Commerce: katalog produk, pesanan/fulfillment, pelanggan, dan stok yang mengikuti reservasi/pembatalan pesanan.
- Learning: kursus, peserta, enrollment, classroom dengan progres, serta wizard pembuat kursus dan kurikulum.
- Katalog Aria UI: pemilih komponen sesuai folder publik, panduan dari source Markdown, contoh interaktif, galeri ikon/ilustrasi, dan Studio Tema.

Seluruh halaman berada di preview/src/pages, dikelompokkan berdasarkan case. Route, menu, shell, data/provider, dan komponen bersama dipisahkan. Preview memakai Tailwind v4 melalui bridge token Aria. Lihat [struktur dan alur demo](preview/readme.md).

Konfigurasi khusus demo berada di `preview/tsconfig.json`, `preview/tsconfig.node.json`, dan `preview/vite.config.ts`. Nama `tsconfig.json` di folder demo membuat editor otomatis mengenali alias `@templates` untuk source demo. Vite demo tidak mengimpor config starter.

`npm run demo:build` melakukan typecheck demo dan menghasilkan `preview/dist/`. `npm run demo:preview` menyajikan build tersebut di `http://127.0.0.1:4174/preview/`. Untuk hosting statis, pertahankan folder `preview/` dan `assets/` di dalam output serta arahkan fallback `/preview/*` ke `/preview/index.html`.

Dataset workspace, operasional, dan case Commerce/Learning disimpan di localStorage, dengan validasi Zod dan fallback sesi. Reset pada Settings memulihkan semua dataset demo; tema dan bahasa terpisah. Seluruh aksi memakai data lokal tanpa backend atau layanan eksternal.

Setelah menambah ekspor aset atau folder UI publik, jalankan `npm run demo:catalog` untuk memperbarui registry komponen dan jumlah aset demo. Registry lengkap hanya diimpor oleh route galeri yang dimuat secara lazy.

## Struktur

```text
src/
  config/                    # Config aplikasi, menu, tema, dan i18n
  layouts/admin/root.tsx      # Integrasi shell admin dengan router aplikasi
  locales/                   # Copy aplikasi ID/EN
  pages/home/root.tsx         # Beranda
  app.tsx
  main.tsx
  providers.tsx
  routes.tsx
templates/
  assets/
  branding/
  hooks/
  i18n/
  icons/
  layouts/
  lib/
  providers/
  styles/
  theme/
  ui/
  index.ts
  package.json
  styles.css
preview/                     # Aplikasi demo, playground komponen, galeri, dan Studio Tema
.agents/skills/aria-ui/       # Skill dan referensi pengembangan
tests/                       # Test yang sudah ada; terpisah dari kit
AGENTS.md                    # Instruksi proyek untuk AI
```

`src/` dan aplikasi demo di `preview/` mengonsumsi `templates/`. Pustaka tidak mengimpor aplikasi atau data bisnis. Folder `examples/` dan route showcase lama sudah dihapus.

`preview/` memiliki entry dan konfigurasi Vite/TypeScript sendiri. Komponen dan aset reusable tetap berada di `templates/`.

## Import dan komponen

Alias `@/` menunjuk ke `src/`, sedangkan `@templates` menunjuk ke pustaka di root. Alias diatur pada Vite dan TypeScript.

```tsx
import { Button } from '@templates/ui/button'
import { PageHeader } from '@templates/ui/page.header'
import { Home } from '@templates/icons/navigation/home.icon'
import { EmptyIllustration } from '@templates/ui/illustrations/states/empty.illustration'
```

`src/main.tsx` mengimpor `@templates/styles.css` sekali. Gunakan layout dan tipografi reusable serta token tema untuk menjaga konsistensi. File dan folder source memakai dot case; nama file tooling standar tetap mengikuti alatnya.

API custom menggunakan native props, `children`, `className`, dan slot yang tersedia. Panduan: [kit](templates/readme.md), [UI](templates/ui/readme.md), [layout](templates/ui/layout.md), [tipografi](templates/ui/typography.md), [komposisi](templates/ui/composition.md), dan [blok lanjutan](templates/ui/blocks.md).

## Tema dan bahasa

Config tema aplikasi berada di `src/config/theme.config.ts`; resource aplikasi di `src/locales/` dan konfigurasi i18n di `src/config/i18n.config.ts`. Mesin tema dan copy UI umum tetap dimiliki `templates/`. Theme Studio tersedia sebagai komponen kit, tetapi tidak dipasang sebagai route starter.

Lihat [tema](templates/theme/readme.md) dan [i18n](templates/i18n/readme.md).

## Bantuan AI

Integrasi API tersedia melalui [panduan runtime](templates/integrations/readme.md): TanStack Query/cache, URL search state, normalisasi error API, mutation overlay/toast, TanStack Form/Zod, dan bridge tema Tailwind v4. QueryClient starter sudah dipasang; tidak ada endpoint atau SDK palsu. Metadata lokasi generated berada di `src/config/api.config.ts`, dan output generated tidak boleh diedit atau diformat.

Error GET tabel/combobox tampil inline di area hasil dengan ilustrasi dan retry. Mutation memakai satu pengelola feedback. Pesan backend dipertahankan apa adanya. Tailwind tetap opsional; starter menggunakan stylesheet kit biasa.

Baca [AGENTS.md](AGENTS.md) dan gunakan [skill aria-ui](.agents/skills/aria-ui/SKILL.md), misalnya:

```text
Gunakan $aria-ui untuk membuat fitur Products dengan tabel, form tambah/ubah,
dan detail drawer.
```

Skill mengarahkan AI ke referensi yang diperlukan untuk struktur, pemilihan komponen, layout, tema, i18n, aset, dan pola fitur. Referensi menunjuk ke source/API yang sebenarnya; seluruh referensi tidak perlu dimuat sekaligus.

## Tree shaking

Kit menggunakan ekspor ESM, leaf module, anotasi PURE pada factory, dan metadata `sideEffects: ["**/*.css"]`. Hindari registry semua komponen/aset pada entry starter. Kode yang tidak digunakan dapat dibuang bundler; stylesheet lengkap tetap membawa seluruh CSS kit. Untuk CSS selektif, gunakan `templates/base.css` beserta stylesheet komponen yang dibutuhkan.
