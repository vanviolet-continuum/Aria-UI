# Portable admin template

Folder ini mandiri: tidak mengimpor `src/app/`, `examples/`, router aplikasi, state klinik, atau service demo. Salin seluruh folder ke lokasi yang Anda inginkan di proyek React.

## Dependensi

```bash
npm install react react-dom clsx lucide-react cmdk sonner react-number-format react-pdf@^10.5.0 i18next react-i18next @fontsource-variable/hanken-grotesk @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-dropdown-menu @fullcalendar/react@^7 temporal-polyfill
```

`react-router-dom` dipakai starter/demo dan tidak diperlukan oleh komponen template. `recharts` hanya dipakai demo. Unit test kit berada di `tests/template/`, sehingga folder yang disalin tidak membawa dependency Vitest.

## Pemakaian dasar

```tsx
import { TemplateProvider, AdminLayout, Button, Input } from './template'
import './template/styles.css'

export function App() {
  return (
    <TemplateProvider>
      <AdminLayout
        title="Home"
        brand={{ name: 'Your app', href: '/' }}
        navigation={[{ items: [{ label: 'Home', href: '/', active: true }] }]}
      >
        <Input placeholder="Search your workspace" />
        <Button variant="contained">Create</Button>
      </AdminLayout>
    </TemplateProvider>
  )
}
```

`TemplateProvider` memasang theme provider, mutation overlay, dan Sonner. Gunakan `ThemeProvider` / `MutationProvider` / `Toaster` terpisah bila ingin menyusun provider sendiri. Jangan memasang Toaster kedua jika sudah memakai TemplateProvider.

`TemplateProvider` juga memasang i18n ID/EN dengan default Bahasa Indonesia. Tambahkan `LanguageSwitcher` pada header; berikan `i18n` untuk instance aplikasi Anda. Panduan dan contoh ada di [i18n/README.md](i18n/README.md). Font default Hanken Grotesk dimuat lokal melalui Fontsource, dengan weight variabel.

Gunakan `template/ui/styles.css` untuk style UI tanpa admin layout, atau `template/styles.css` untuk paket lengkap. Setiap komponen memiliki entry lokal; misalnya `import { Button } from './template/ui/button'`.

## Layout berbasis props

AdminLayout menerima `brand`, `workspace`, `navigation`, `title`, `children`, `headerActions`, `sidebarFooter`, `compact`, dan `routeKey`. Item navigasi berbentuk `{ label, href, icon?, badge?, active? }`.

Secara default link adalah anchor HTML. Untuk React Router atau router lain, berikan `onNavigate={navigate}` dan `routeKey={pathname}`. Layout tidak membaca URL sendiri. `headerActions` dapat berisi pencarian, menu akun, atau notifikasi milik aplikasi Anda.

Body tetap di viewport; konten utama scroll melalui `#main-content`. Sidebar/header stabil saat drawer dibuka. Drawer memakai backdrop dua klik dan toast info pada klik pertama.

## Struktur lokal

- `ui/`: komponen general dan style per komponen. Komponen kompleks menyimpan hook, tipe, serta helper internal dalam folder yang sama. Unit test berada di folder proyek `tests/template/`.
- `layouts/`: shell admin, sidebar, dan header tanpa dependency router/domain.
- `theme/`: default palette, preset, provider, resolver, serializer, serta editor tema.
- `providers/`, `hooks/`, `lib/`: utilitas general.
- `styles/`: base, animasi, focus, ukuran, dan utilitas style bersama.
- `index.ts`, `styles.css`: public entry code/style.

Semua nilai warna berada di layer tema. Komponen memakai token CSS dan tidak menyimpan warna literal. Pengujian `tests/architecture.test.ts` pada proyek starter memeriksa batas import agar folder ini tetap portable.

## Tema dan mutation

```tsx
<TemplateProvider
  initialConfig={themeConfig}
  storageKey="my-app-appearance"
  exportTarget={{ filePath: 'src/config/theme.ts', typeImport: '../template/theme/types' }}
>
  <AppContent />
</TemplateProvider>
```

Theme config milik aplikasi diberikan melalui props. `exportTarget` mengatur petunjuk lokasi file serta import type pada hasil download. Theme studio dapat dimuat dari `template/theme/studio`; panggil `initializeTheme(themeConfig, storageKey)` sebelum render untuk menerapkan tema awal.

`useMutationTask().runTask(label, asyncOperation)` menampilkan overlay hingga operasi selesai dan mengembalikan `{ success, data? }`. Periksa `success` sebelum menutup form atau menampilkan toast berhasil.

API detail ada di [UI README](ui/README.md), [advanced components](ui/ADVANCED.md), [PDF/workflow/table blocks](ui/BLOCKS.md), dan [theme README](theme/README.md). PDF renderer dimuat hanya saat `PdfViewer` digunakan.
