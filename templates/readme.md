# Aria UI — pustaka reusable

Folder `templates/` berdiri sendiri: seluruh import internal relatif dan tidak mengimpor `src/`, `preview/`, router aplikasi, atau data bisnis. Starter dan aplikasi demo merupakan konsumennya.

## Pemakaian

```tsx
import { TemplateProvider } from '@templates/providers'
import { AdminLayout } from '@templates/layouts/admin.layout'
import { Button } from '@templates/ui/button'
import '@templates/styles.css'

export function App() {
  return (
    <TemplateProvider>
      <AdminLayout
        title="Home"
        brand={{ name: 'Your app', href: '/' }}
        navigation={[{ items: [{ label: 'Home', href: '/', active: true }] }]}
      >
        <Button variant="contained">Create</Button>
      </AdminLayout>
    </TemplateProvider>
  )
}
```

`@templates` adalah alias pada proyek ini. Saat menyalin folder ke proyek lain, sesuaikan alias konsumen atau gunakan path relatif. Daftar dependency ada di package.json proyek; kit menggunakan React, primitive Radix, i18next, dan library pendukung komponen terkait. React Router hanya dipakai integrasi aplikasi, bukan shell kit.

`TemplateProvider` memasang locale provider, theme provider, mutation overlay, dan toaster. Pasang sekali pada root aplikasi. Provider terpisah tersedia untuk komposisi custom.

## Struktur

- `ui/`: komponen general beserta style, tipe, dan hook internal per komponen.
- `layouts/`: shell admin, sidebar, dan header berbasis props.
- `theme/`: default, palette, preset, resolver, storage, ekspor/impor, serta Theme Studio.
- `i18n/`: locale provider dan copy UI umum ID/EN.
- `providers/`, `hooks/`, `lib/`: dukungan runtime dan helper umum.
- `icons/`, `ui/illustrations/`: SVG per aset dan kategori.
- `assets/`, `branding/`, `styles/`: aset, logo, dan style bersama.
- `index.ts`, `styles.css`: entry code dan stylesheet lengkap.

Source starter berada di `src/` dan saat ini hanya Beranda. Aplikasi demo di `preview/` menyediakan playground komponen, galeri ikon/ilustrasi, dan Theme Studio melalui `npm run demo`. Demo memiliki entry, konfigurasi, locale, dan storage sendiri. Dokumentasi API Markdown di dalam kit tetap tersedia.

## Integrasi aplikasi

AdminLayout menerima brand, workspace, navigation, title, headerActions, sidebarFooter, children, routeKey, onNavigate, command dan breadcrumb. Cmdk berasal dari navigasi secara default dengan Ctrl/Cmd+K; breadcrumb berada di outlet, bukan header. Aplikasi memasang adapter router sendiri; kit tidak membaca URL aplikasi. Konten utama memiliki scroll sendiri, sedangkan sidebar/header stabil.

Config aplikasi diberikan melalui props. Contoh starter:

```tsx
<TemplateProvider
  initialConfig={themeConfig}
  i18n={appI18n}
  exportTarget={{ filePath: 'src/config/theme.config.ts', typeImport: '@templates/theme' }}
>
  <AppContent />
</TemplateProvider>
```

Gunakan `initializeTheme(themeConfig)` sebelum render. Theme Studio dapat diimpor dari `@templates/theme/studio` ketika aplikasi membutuhkan editor; starter saat ini tidak mempunyai route editor.

## Komponen dan custom

Komponen interaksi umum dijelaskan pada [Slider, Dialog, MultiSelect, dan komponen lain](ui/primitives.md). Default komposisi modul dijelaskan di [pola modul](ui/module.defaults.md), dengan source contoh yang hidup pada preview/src/pages/workspace/users. Gunakan [layout foundations](ui/layout.md), [tipografi](ui/typography.md), dan [blok komposisi](ui/composition.md). Props native, elemen semantik, children, slot, dan className menyediakan ruang custom. Warna dan ukuran bersama berasal dari tema.

Panduan lain: [UI API](ui/readme.md), [advanced](ui/advanced.md), [tabel/PDF/workflow](ui/blocks.md), [tema](theme/readme.md), [i18n](i18n/readme.md), [ikon](icons/readme.md), dan [ilustrasi](ui/illustrations/readme.md).

## Nama dan bundle

Integrasi opsional berada di `integrations/`: TanStack Query/cache/persistence dan mutation feedback, TanStack Form, Zod, React Router URL state, adapter auth/session, unsaved changes guard, serta bridge Tailwind v4. Lihat [panduan integrasi](integrations/readme.md). UI core tetap dapat dikonsumsi terpisah dari adapter. Generated SDK, endpoint, autentikasi, dan schema bisnis tetap milik aplikasi.

File/folder source memakai dot case: `confirm.dialog/confirm.dialog.tsx`, `use.local.storage.ts`, dan `access.denied.illustration.tsx`. Nama komponen/props mengikuti React dan TypeScript.

Paket menyediakan ekspor ESM, entry per komponen/aset, anotasi PURE pada factory, dan `sideEffects: ["**/*.css"]`. Pertahankan registry galeri di aplikasi demo, bukan entry kit. Import stylesheet lengkap membawa semua CSS; untuk CSS selektif, pilih `base.css` lalu stylesheet yang dibutuhkan.

Scrollbar seluruh kit mengikuti tampilan sidebar melalui styles/scrollbar.css (diimpor base). Warna default memakai --border-strong dengan track transparan. Override CSS --scrollbar-thumb, --scrollbar-track, atau --scrollbar-size tersedia untuk kebutuhan tema; jangan memberi warna scrollbar lokal berbeda pada tabel/panel. Scrollbar yang sengaja disembunyikan, seperti sidebar collapsed dan tab horizontal, tetap mengikuti perilakunya.
