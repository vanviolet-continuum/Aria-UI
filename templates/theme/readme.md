# Theme system

Theme Studio tersedia sebagai komponen melalui `@templates/theme/studio`. Starter saat ini hanya Beranda dan belum memasang route editor. Engine tema berada seluruhnya dalam folder portable `templates/theme/`; aplikasi demo di `preview/` akan dibuat kemudian.

## Menerapkan hasil download

1. Atur preset, mode, warna, font, radius, spacing, ukuran kontrol, density, header, sidebar, border, bayangan, dan animasi.
2. Pilih **Export theme → TypeScript configuration** untuk mengunduh `theme.config.ts`.
3. Ganti file tujuan yang ditampilkan Theme studio:
   - Starter: `src/config/theme.config.ts`.
   - Aplikasi lain: sesuaikan `exportTarget` dengan konfigurasi aplikasi tersebut.
4. Build/deploy kembali aplikasi.

Hasil download menyertakan import type yang sesuai dengan file tujuan. Provider menerima `initialConfig` dan `exportTarget`; engine tidak mengimpor file config aplikasi. Untuk proyek dengan struktur lain:

```tsx
<TemplateProvider
  initialConfig={themeConfig}
  storageKey="my-app-theme"
  exportTarget={{ filePath: 'src/config/theme.config.ts', typeImport: '@templates/theme' }}
>
  <App />
</TemplateProvider>
```

`filePath` adalah petunjuk lokasi penggantian, sedangkan `typeImport` adalah specifier import tipe ThemeConfig yang berlaku pada proyek konsumen. Theme Studio dapat diimpor dari `@templates/theme/studio`.

## Penyimpanan

Starter memakai key `admin-template-appearance-v1`. Aplikasi demo kelak memakai key tersendiri. Preferensi menyimpan fingerprint config proyek. Ketika config file berubah, preferensi dari config sebelumnya diabaikan. Konfigurasi lama yang belum mempunyai pengaturan baru dinormalisasi dengan default yang sesuai; preferensi browser yang cocok tetap dipertahankan. **Reset to default** kembali ke initialConfig provider. Port yang berbeda juga memiliki localStorage yang terpisah.

Badge preview mencerminkan keberhasilan penyimpanan. Jika storage browser tidak tersedia, tema tetap diterapkan untuk sesi saat ini dan dapat diekspor untuk disimpan.

## Impor dan ekspor

**Import theme** menerima JSON atau file `theme.config.ts` hasil ekspor Theme Studio, maksimal 128 KB. File dibaca sebagai data, divalidasi, lalu diterapkan dan disimpan sebagai preferensi browser. Kode TypeScript dari file tidak dijalankan. File invalid tidak mengganti tema yang sedang aktif.

**Export theme** menyediakan konfigurasi TypeScript untuk default proyek dan JSON untuk impor kembali atau dibagikan. Impor melalui UI tidak menulis source proyek; untuk mengganti default proyek, tetap gunakan hasil ekspor TypeScript pada path yang ditampilkan lalu build aplikasi.

API `parseThemeFile(text)` memvalidasi file dan mengembalikan `ResolvedThemeConfig`. `normalizeThemeConfig(config)` melengkapi properti baru pada konfigurasi lama. Context `useTheme()` menyediakan `replaceConfig`, `updateConfig`, `resetConfig`, dan `storageStatus`.

Gunakan `initializeTheme(config, storageKey)` sebelum render untuk menerapkan tema awal. Provider mendukung mode light/dark/system dan perubahan preferensi sistem.

## File tema

- `types.ts`: kontrak ThemeConfig dan palette.
- `defaults.ts`: default tema yang disertakan kit.
- `palettes.ts`, `presets.ts`: nilai warna dan font.
- `palette.css`: fallback CSS default untuk penggunaan portable.
- `tokens.css`, `derived.css`: token dan nilai turunannya.
- `theme.provider.tsx`: preferensi runtime.
- `apply.theme.ts`: resolver, contrast foreground, dan penerapan CSS variables.
- `config.ts`, `download.theme.ts`: validasi, storage, dan ekspor.
- `control.metrics.ts`: ukuran kontrol dan baris opsi yang dipakai bersama oleh CSS dan virtualisasi combobox.
- `effects.css`: preferensi animasi, termasuk komponen di dalam portal.
- `studio/`: editor tema reusable dan stylesheet-nya.

Preset: Aria UI, Forest, Ocean, Rose, dan Graphite. Semua preset mewarisi warna teks netral yang sama. Default light mengikuti konfigurasi yang dipilih: teks sekunder `#575757`, teks redup `#595959`, success `#2e7d32`, warning `#d97706`, error `#d32f2f`, dan info `#4655e8`. Dark mode mempertahankan warna teks terang dari konfigurasi dark.

Font default **Hanken Grotesk Variable**, dipaketkan lokal melalui Fontsource. Font lain tetap tersedia dalam pengaturan. Memilih Aria UI mengembalikan ukuran/font/spacing default sambil mempertahankan mode terang atau gelap. Preset lain mengubah palet/radius dan mempertahankan ukuran serta font yang dipilih.

Token tabel tersendiri berada di `derived.css`: `--table-row-hover`, `--table-row-selected`, `--table-pin-shadow`, dan `--table-pin-border`. Gradasi shadow ditampilkan per sisi sesuai posisi scroll. Hover memakai campuran primary 2,5% dengan surface.

Nilai warna literal hanya berada dalam layer tema. Komponen memakai token semantik: `--surface`, `--text`, `--border`, `--primary`, `--primary-soft`, `--on-primary`, dan seterusnya. Chart demo dan Sonner memakai token yang sama. Fallback palette CSS dan default palette TypeScript dijaga oleh pengujian.

## Layout dan ukuran

Tailwind v4 dapat memakai token runtime yang sama melalui `@templates/integrations/tailwind/theme.css`, atau entry lengkap `styles.css` pada folder tersebut. Bridge menyediakan warna, spacing, radius, shadow, dan 20 role tipografi. Lihat [integrasi](../integrations/readme.md) untuk opt-in, urutan layer/reset, serta batas override inline. Starter tetap memakai CSS biasa.

ThemeConfig.typography menerima override per peran teks. Theme Studio menyediakan editor untuk 20 peran, termasuk ukuran, tone, weight, line height, letter spacing, dan transform. Provider melakukan merge per field; konfigurasi lama dilengkapi default. Semua pengaturan ikut penyimpanan serta ekspor/impor. Panduan dan contoh ada di [Typography](../ui/typography.md). Nilai headerHeight yang tersimpan adalah preferensi; tinggi header efektif dapat bertambah agar judul serta tombol tetap mendapat ruang.

Tipografi dan blok konten memakai `block.tokens.css` untuk ukuran teks/heading, weight heading, line height, dan jarak bawah PageHeader. Ukuran visual terpisah dari level h1–h6. Pengaturan fontScale dan spacing tema langsung memengaruhi blok, termasuk Card, Toolbar, dan SettingsRow. Lihat [panduan komposisi](../ui/composition.md).

Fondasi `Box`, `Stack`, `Inline`, `Grid`, `GridItem`, `Container`, `Divider`, dan `Spacer` dijelaskan di [panduan layout](../ui/layout.md). `layout.tokens.css` menyediakan token spacing/radius/shadow bersama. `layoutGap` (default 16px, rentang 0–48px) dan `layoutPadding` (default 24px, rentang 0–64px) mengatur jarak layout dan padding surface. Nilai dasar tersebut dikalikan `spaceScale`; props ukuran eksplisit memakai token spacing yang dipilih. Pengaturan tersedia di Theme Studio, preview, penyimpanan, serta impor/ekspor. Properti bersifat opsional pada konfigurasi lama dan selalu terisi pada `ResolvedThemeConfig`.

Font, spacing, dan radius menggunakan token skala. Button, Input, IconButton, combobox, picker, pencarian, textarea, checkbox, switch, dan OTP mengikuti ukuran atau token yang sesuai. Ukuran eksplisit seperti tombol `sm` dan pagination ringkas tetap dipertahankan. Tinggi opsi combobox dihitung bersama offset virtualisasinya; opsi dengan deskripsi tetap lebih tinggi dari opsi biasa.

Pengaturan tambahan berikut opsional pada `ThemeConfig` lama dan selalu tersedia pada `ResolvedThemeConfig`:

| Properti           | Default    | Nilai                                                               |
| ------------------ | ---------- | ------------------------------------------------------------------- |
| `headerHeight`     | `70`       | 56–96 px; minimum menyesuaikan ruang kontrol                        |
| `sidebarCollapsed` | `false`    | State sidebar desktop, tersimpan antar kunjungan                    |
| `borderWidth`      | `1`        | 0–2 px; checkbox mempertahankan outline minimum agar tetap terlihat |
| `shadowStrength`   | `1`        | 0–2, setara 0–200%                                                  |
| `motion`           | `'system'` | `system`, `reduced`, `none`                                         |
| `motionScale`      | `1`        | 0,5–1,5 kali durasi animasi                                         |

Header dan brand memakai tinggi yang sama. Tombol collapse tetap berada di tengah header, dan sidebar mobile selalu menampilkan label lengkap. Border serta bayangan permukaan memakai token bersama; focus ring tetap terlihat saat bayangan dimatikan. Animasi mengikuti preferensi reduced motion perangkat, serta dapat diperkecil atau dimatikan secara eksplisit dari Theme Studio.

Warna mode terang dan gelap tetap terpisah. **Reset these colors** hanya mengembalikan palet mode yang sedang diedit.

AdminLayout menjaga body di viewport dan memakai `#main-content` sebagai scroll container. Saat drawer/modal terbuka, scroll background dikunci tanpa mengubah posisi atau lebar. Komponen UI dapat digunakan tanpa AdminLayout melalui `templates/ui/styles.css`.
