# Mengonfigurasi tema

API dan perilaku lengkap: [panduan tema](../../../../templates/theme/readme.md), [ThemeConfig](../../../../templates/theme/types.ts), [typography types](../../../../templates/theme/typography.types.ts).

Default aplikasi berada di `src/config/theme.config.ts`. Pustaka memiliki default portabel sendiri di `templates/theme/defaults.ts`; komponen kit tidak mengimpor config aplikasi.

```tsx
import { defaultTheme, type ThemeConfig } from '@templates/theme'

const theme: ThemeConfig = {
  ...defaultTheme,
  typography: {
    page: { fontSize: 30, fontWeight: 600, tone: 'text' },
    description: { tone: 'secondary' },
  },
}
export default theme
```

## Pilih lingkup perubahan

- Warna, ukuran teks, spacing, radius, density, dan ukuran kontrol global: ubah konfigurasi tema atau token yang sesuai.
- Tampilan satu pemakaian: gunakan variant, ukuran, slot, atau class komponen tersebut.
- Mesin/preset/token kit: ubah `templates/theme/` ketika permintaan memang menyentuh kemampuan tema bersama.

Gunakan token `--surface`, `--text`, `--text-secondary`, `--muted`, `--border`, `--primary`, `--primary-soft`, dan `--on-primary`; warna literal milik layer tema. Pertahankan makna warna pada light/dark. Komponen layout, tipografi, kontrol, dan ilustrasi telah membaca token tema.

`initializeTheme(themeConfig)` berjalan sebelum render. `TemplateProvider initialConfig={themeConfig}` memakai config yang sama. `useTheme()` menyediakan `updateConfig`, `replaceConfig`, `resetConfig`, dan preferensi mode. Jangan mengubah default tema melalui efek pada setiap render.

Theme Studio masih tersedia sebagai komponen melalui `@templates/theme/studio`, tetapi belum dipasang sebagai menu/route starter. Tambahkan integrasinya hanya ketika diminta. Export target starter adalah `src/config/theme.config.ts` dengan `typeImport: '@templates/theme'`. Import file melalui UI mengubah preferensi runtime; download TypeScript digunakan untuk mengganti default source.

Aplikasi demo kelak memakai config dan storage key sendiri agar preferensi demo tidak menjadi konfigurasi bisnis pengguna.
