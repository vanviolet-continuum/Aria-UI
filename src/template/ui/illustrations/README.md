# SVG Illustration

Koleksi berisi **605 ilustrasi SVG**. Satu komponen berada dalam satu file; folder mengikuti kategori, bukan urutan batch pembuatan.

```text
illustrations/
  index.ts
  illustration.types.ts
  shared/
    illustration.frame.tsx
    decoration.frame.tsx
  states/
    empty.illustration.tsx
    index.ts
  security/
    access.denied.illustration.tsx
    index.ts
  education/
  nature/
  objects/
  ...
```

Folder kategori yang tersedia:

| Kategori                                   | Komponen |
| ------------------------------------------ | -------: |
| [Nature](nature/readme.md)                 |       61 |
| [Travel](travel/readme.md)                 |       52 |
| [Food & drink](food/readme.md)             |       61 |
| [Health & wellness](health/readme.md)      |       31 |
| [Technology](technology/readme.md)         |       30 |
| [Finance](finance/readme.md)               |       10 |
| [Business](business/readme.md)             |       10 |
| [Creative & arts](creative/readme.md)      |       50 |
| [Science](science/readme.md)               |       17 |
| [Everyday life](lifestyle/readme.md)       |       45 |
| [People](people/readme.md)                 |        6 |
| [Education](education/readme.md)           |      108 |
| [Objects](objects/readme.md)               |       24 |
| [Decoration](decoration/readme.md)         |       20 |
| [States & feedback](states/readme.md)      |       10 |
| [Workspace](workspace/readme.md)           |       20 |
| [Files](files/readme.md)                   |        8 |
| [Communication](communication/readme.md)   |        6 |
| [Security](security/readme.md)             |       12 |
| [Commerce](commerce/readme.md)             |       19 |
| [Infrastructure](infrastructure/readme.md) |        5 |

## Impor komponen

```tsx
import { EmptyIllustration } from '@/template/ui/illustrations'
// Atau leaf module untuk batas dependensi paling kecil:
import { AccessDeniedIllustration } from '@/template/ui/illustrations/security/access.denied.illustration'
import type { IllustrationProps } from '@/template/ui/illustrations/illustration.types'

<EmptyIllustration size={220} title="Belum ada data" />
<AccessDeniedIllustration size={180} tone="warning" />
```

Semua komponen memakai `size`, `tone`, `title`, `className`, dan `style`. Warna mengikuti token tema; tanpa judul gambar disembunyikan dari screen reader. Ilustrasi umum memakai rasio 260:180, sedangkan Decoration 400:280. Loading mempertahankan prop `label`.

## Tree shaking

Entry point hanya mengekspor modul ESM secara statis. Tidak ada daftar komponen, namespace dinamis, atau impor CSS di dalam barrel ilustrasi. Metadata `sideEffects` pada paket template mempertahankan CSS yang dipilih dan mengizinkan bundler menghapus modul kode yang tidak digunakan.

Katalog dengan referensi semua gambar berada di `src/app/catalogs/illustrations`, khusus aplikasi galeri. Gambar yang didaftarkan dalam katalog tersebut memang digunakan oleh galeri dan tetap dibundel pada rute galeri yang dimuat secara lazy. Jangan mengimpor katalog aplikasi ketika hanya membutuhkan satu komponen.

Dokumentasi koleksi lama tersimpan di `docs/`; jalur kode yang disarankan adalah kategori atau leaf module di atas.
