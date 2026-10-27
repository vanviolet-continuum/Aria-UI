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
preview/                     # Sengaja kosong; aplikasi demo akan dibuat kemudian
.agents/skills/aria-ui/       # Skill dan referensi pengembangan
tests/                       # Test yang sudah ada; terpisah dari kit
AGENTS.md                    # Instruksi proyek untuk AI
```

`src/` dan aplikasi demo yang akan dibuat di `preview/` mengonsumsi `templates/`. Pustaka tidak mengimpor aplikasi atau data bisnis. Folder `examples/` dan route showcase lama sudah dihapus.

`preview/` belum memiliki entry, konfigurasi aplikasi, atau perintah dev/build. Kelak area ini memuat demo aplikasi, galeri ilustrasi/ikon, serta dokumentasi interaktif komponen. Komponen dan aset reusable tetap tersedia di `templates/`.

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
