# SVG Illustration

Koleksi berisi **55 ilustrasi SVG** reusable. Galeri di `/illustrations` menyediakan pencarian, kategori, pilihan warna dan ukuran preview, salin kode React, salin SVG, serta unduhan SVG. Katalog `/components?component=illustrations` memakai koleksi yang sama.

```tsx
import { SuccessIllustration, DocumentsIllustration } from '@/template/ui/illustrations'
import '@/template/styles.css'

<SuccessIllustration size={220} title="Changes saved" />
<DocumentsIllustration size={180} tone="violet" />
```

Seluruh ilustrasi juga diekspor dari `@/template/ui` dan `@/template`. Props bersama:

| Prop                 | Fungsi                                                                     |
| -------------------- | -------------------------------------------------------------------------- |
| `size`               | Lebar SVG; menerima angka pixel atau nilai CSS seperti `'100%'`            |
| `title`              | Nama aksesibel; tanpa judul, ilustrasi frame diperlakukan sebagai dekorasi |
| `tone`               | `primary`, `success`, `warning`, `error`, `info`, `violet`, atau `mint`    |
| `className`, `style` | Pengaturan tampilan tambahan                                               |

`LoadingIllustration` tetap mendukung prop `label`, dengan nilai default `Loading`. Gunakan `label=""` jika hanya menjadi dekorasi. Tingginya mengikuti ukuran persegi. Ilustrasi frame memakai rasio 260:180; grup Decoration memakai rasio 400:280 dengan latar transparan.

Warna berasal dari token `--illustration-*` sehingga mengikuti tema terang, gelap, serta palet aplikasi. Beberapa status mempunyai tone semantik bawaan, misalnya sukses, error, dan maintenance; prop `tone` dapat menggantikannya. Animasi loading mengikuti pengaturan animasi tema dan preferensi reduced motion perangkat.

| Kategori          | Komponen                                                                                                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status & feedback | `EmptyIllustration`, `SearchIllustration`, `NotFoundIllustration`, `LoadingIllustration`, `SuccessIllustration`, `ErrorIllustration`, `OfflineIllustration`, `MaintenanceIllustration`                                                   |
| Workspace         | `WelcomeIllustration`, `TeamIllustration`, `AnalyticsIllustration`, `CalendarIllustration`, `SettingsIllustration`, `TimeIllustration`, `TasksIllustration`, `CreativityIllustration`, `LocationIllustration`, `CelebrationIllustration` |
| Files             | `UploadIllustration`, `DocumentsIllustration`, `FolderIllustration`, `DownloadIllustration`, `CloudSyncIllustration`                                                                                                                     |
| Communication     | `NotificationsIllustration`, `MessagesIllustration`, `InboxIllustration`, `EmailSentIllustration`                                                                                                                                        |
| Security          | `AccessDeniedIllustration`, `SecureIllustration`                                                                                                                                                                                         |
| Commerce          | `PaymentIllustration`, `InvoiceIllustration`, `ShoppingCartIllustration`, `DeliveryIllustration`                                                                                                                                         |
| Infrastructure    | `ServerIllustration`, `DatabaseIllustration`                                                                                                                                                                                             |

File SVG dari galeri adalah snapshot statis dengan warna tema yang sedang digunakan, tanpa ketergantungan pada CSS aplikasi. Untuk animasi loading dan perubahan tema secara langsung, gunakan komponen React bersama stylesheet kit.

## Decoration untuk login dan hero

Grup **Decoration** berisi 20 dekorasi abstrak untuk latar login, onboarding, hero, dan aksen sudut. Buka `/illustrations?category=decoration` untuk memilihnya. Semua komponen memakai props `IllustrationProps` yang sama dan juga dapat diimpor langsung dari `@/template/ui/illustrations/decorations`.

- `AuroraDecoration`
- `OrbitDecoration`
- `MeshDecoration`
- `WavesDecoration`
- `BlobDecoration`
- `RibbonDecoration`
- `GridDecoration`
- `DotsDecoration`
- `RingsDecoration`
- `SparklesDecoration`
- `PetalsDecoration`
- `ArchesDecoration`
- `CubesDecoration`
- `PrismDecoration`
- `BotanicalDecoration`
- `LandscapeDecoration`
- `ConstellationDecoration`
- `SpiralDecoration`
- `BubblesDecoration`
- `CornerFlourishDecoration`

```tsx
import { AuroraDecoration, BotanicalDecoration } from '@/template/ui/illustrations'

;<div style={{ position: 'relative', overflow: 'hidden' }}>
  <AuroraDecoration
    size="100%"
    tone="violet"
    style={{ position: 'absolute', inset: 0, opacity: 0.45 }}
  />
  <section style={{ position: 'relative' }}>{/* Your login form */}</section>
</div>
```

Tanpa `title`, dekorasi disembunyikan dari screen reader. Stylesheet kit memberi `pointer-events: none` agar dekorasi tidak menghalangi form. Gunakan `size="100%"`, posisi, dan opacity sesuai layout. ID gradien dan clip bersifat unik per instance, sehingga beberapa dekorasi dapat ditampilkan bersamaan. Ekspor SVG menyertakan warna gradien yang sedang digunakan dan mempertahankan transparansi.
