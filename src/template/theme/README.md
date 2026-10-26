# Theme system

Theme studio tersedia di `/settings/appearance` pada starter dan demo. Engine tema berada seluruhnya dalam folder portable `src/template/theme/`.

## Menerapkan hasil download

1. Atur preset, mode, warna, font, radius, spacing, ukuran kontrol, density, dan lebar sidebar.
2. Klik **Download theme.config.ts**.
3. Ganti file tujuan yang ditampilkan Theme studio:
   - Starter: `src/app/config/theme.config.ts`.
   - Demo: `examples/app/theme.config.ts`.
4. Build/deploy kembali aplikasi.

Hasil download menyertakan import type yang sesuai dengan file tujuan. Provider menerima `initialConfig` dan `exportTarget`; engine tidak mengimpor file config aplikasi. Untuk proyek dengan struktur lain:

```tsx
<TemplateProvider
  initialConfig={themeConfig}
  storageKey="my-app-theme"
  exportTarget={{ filePath: 'src/config/theme.ts', typeImport: '../template/theme/types' }}
>
  <App />
</TemplateProvider>
```

`filePath` adalah petunjuk lokasi penggantian, sedangkan `typeImport` adalah path relatif dari file hasil download ke tipe ThemeConfig. Theme studio sendiri dapat diimpor dari `template/theme/studio`.

## Penyimpanan

Starter memakai key `admin-template-appearance-v1`; demo memakai `zendenta-appearance-v1`. Setiap preview menyimpan fingerprint config proyek. Ketika config file berubah, preview dari config sebelumnya diabaikan. **Reset to default** kembali ke initialConfig provider. Port yang berbeda juga memiliki localStorage yang terpisah.

Gunakan `initializeTheme(config, storageKey)` sebelum render untuk menerapkan tema awal. Provider mendukung mode light/dark/system dan perubahan preferensi sistem.

## File tema

- `types.ts`: kontrak ThemeConfig dan palette.
- `defaults.ts`: default tema yang disertakan kit.
- `palettes.ts`, `presets.ts`: nilai warna dan font.
- `palette.css`: fallback CSS default untuk penggunaan portable.
- `tokens.css`, `derived.css`: token dan nilai turunannya.
- `theme-provider.tsx`: preferensi runtime.
- `apply-theme.ts`: resolver, contrast foreground, dan penerapan CSS variables.
- `config.ts`, `download-theme.ts`: validasi, storage, dan ekspor.
- `studio/`: editor tema reusable dan stylesheet-nya.

Preset: Zendenta, Forest, Ocean, Rose, dan Graphite. Semua preset mewarisi warna teks netral yang sama. Default light mengikuti konfigurasi yang dipilih: teks sekunder `#575757`, teks redup `#595959`, success `#2e7d32`, warning `#d97706`, error `#d32f2f`, dan info `#4655e8`. Dark mode mempertahankan warna teks terang dari konfigurasi dark.

Font default **Hanken Grotesk Variable**, dipaketkan lokal melalui Fontsource. Font lain tetap tersedia dalam pengaturan. Memilih Zendenta mengembalikan ukuran/font/spacing default sambil mempertahankan mode terang atau gelap. Preset lain mengubah palet/radius dan mempertahankan ukuran serta font yang dipilih.

Token tabel tersendiri berada di `derived.css`: `--table-row-hover`, `--table-row-selected`, `--table-pin-shadow`, dan `--table-pin-border`. Gradasi shadow ditampilkan per sisi sesuai posisi scroll. Hover memakai campuran primary 2,5% dengan surface.

Nilai warna literal hanya berada dalam layer tema. Komponen memakai token semantik: `--surface`, `--text`, `--border`, `--primary`, `--primary-soft`, `--on-primary`, dan seterusnya. Chart demo dan Sonner memakai token yang sama. Fallback palette CSS dan default palette TypeScript dijaga oleh pengujian.

## Layout dan ukuran

Font, spacing, dan radius menggunakan token skala. Button/Input/IconButton tanpa prop ukuran eksplisit mengikuti default control size. Combobox dan picker mengikuti ukuran tema. Lingkaran dan ikon tetap proporsional.

AdminLayout menjaga body di viewport dan memakai `#main-content` sebagai scroll container. Saat drawer/modal terbuka, scroll background dikunci tanpa mengubah posisi atau lebar. Komponen UI dapat digunakan tanpa AdminLayout melalui `template/ui/styles.css`.
