# Layout, jarak, dan tipografi

Acuan API: [layout](../../../../templates/ui/layout.md), [tipografi](../../../../templates/ui/typography.md), dan [komposisi blok](../../../../templates/ui/composition.md).

## Menyusun halaman

Gunakan `Box` sebagai elemen semantik/surface, `Stack` untuk susunan vertikal, `Inline` untuk aksi yang boleh wrap, dan `Grid` untuk kolom. `Container` default full width; tambahkan max-width hanya bila kebutuhan halaman memang membatasinya. Berikan `PageHeader` untuk pembuka halaman, `SectionHeader` untuk bagian, serta Card untuk kelompok konten.

```tsx
import { Box, Grid, Inline, PageHeader, Stack } from '@templates/ui'

;<Box as="section" padding={{ base: 'md', md: 'lg' }} minWidth={0}>
  <Stack gap="lg">
    <PageHeader titleAs="h1" title={t('Products')} actions={pageActions} />
    <Grid columns={{ base: 1, md: 2 }}>{panels}</Grid>
    <Inline gap="sm">{secondaryActions}</Inline>
  </Stack>
</Box>
```

`LayoutSpace` berupa token skala, bukan angka pixel bebas. Gunakan gap untuk jarak antar-anak; hindari margin tambahan untuk jarak yang sama. Pada child yang perlu membagi lebar ketika horizontal dan mengikuti tinggi konten ketika vertikal, gunakan `flex: 1 1 0%`. Tetapkan `min-width: 0` pada item fleksibel yang dapat memanjang.

## Memilih peran teks

- `Heading`: display, page, section, card, dialog. Level `h1`–`h6` mengikuti struktur dokumen, terpisah dari ukuran visual.
- `Text`: body, description, caption, label, helper, serta peran teks di kontrol.
- `Eyebrow`: pengantar singkat; `MetricValue`: angka statistik.
- `FieldLabel`, `FieldHint`, `FieldError`: teks form dengan hubungan aksesibilitas.
- `TextLink`, `CodeText`, `CodeBlock`: tautan dan kode.

Pilih peran dan tone semantik sebelum mengatur ukuran/warna lokal. Gunakan `tone="inherit"` saat warna ditentukan oleh konteks selected, disabled, destructive, atau hover komponen. Ikon mewarisi `currentColor`. Jangan membungkus ReactNode yang sudah berupa komponen/layout dengan Text hanya untuk menerapkan warna.

Custom lokal boleh menggunakan `className`, `style`, props ukuran, atau `slotProps`; default bersama tetap berasal dari tema. Perubahan ukuran semua teks halaman dilakukan melalui konfigurasi typography, bukan penyesuaian setiap halaman satu per satu.
