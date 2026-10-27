# Layout foundations

Gunakan fondasi layout untuk menyusun halaman, panel, toolbar, dan isi drawer dengan ritme yang sama. Komponen tidak membuat scroll container, tidak membaca ukuran viewport melalui JavaScript, dan tidak bergantung pada router atau data aplikasi.

```tsx
import { Box, Container, Stack, Inline, Grid, GridItem, Divider, Button } from '@templates/ui'
import '@templates/styles.css'

export function ProjectPage() {
  return (
    <Container as="section">
      <Stack gap="lg">
        <Inline justify="between">
          <Stack gap="xs">
            <h2>Projects</h2>
            <p>Manage your workspace.</p>
          </Stack>
          <Button variant="contained">Create project</Button>
        </Inline>
        <Grid columns={{ base: 1, md: 12 }}>
          <GridItem colSpan={{ base: 1, md: 8 }}>
            <Box variant="outlined">
              <Stack>
                <h3>Overview</h3>
                <Divider />
                <p>Project content.</p>
              </Stack>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <Box variant="subtle">Supporting information.</Box>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  )
}
```

## Memilih komponen

| Komponen    | Kegunaan                                                         | Default                                     |
| ----------- | ---------------------------------------------------------------- | ------------------------------------------- |
| `Box`       | Elemen semantik, surface, padding, radius, border, warna, ukuran | `div`, `variant="plain"`, tanpa padding     |
| `Stack`     | Susunan vertikal atau horizontal                                 | column, align stretch, tanpa wrap, gap tema |
| `Inline`    | Toolbar, badge, tombol, informasi singkat                        | row, align center, wrap aktif, gap tema     |
| `Grid`      | Kolom sama lebar atau auto-fit                                   | 1 kolom, gap tema                           |
| `GridItem`  | Rentang kolom, baris, dan urutan sebuah item grid                | Penempatan otomatis                         |
| `Container` | Lebar konten halaman                                             | full width tanpa max-width                  |
| `Divider`   | Pemisah horizontal/vertikal                                      | Horizontal, role separator                  |
| `Spacer`    | Jarak khusus atau ruang fleksibel                                | Vertikal, ukuran gap tema, dekoratif        |

Pilih `Stack gap` untuk jarak antaranak yang teratur. Gunakan `Spacer` ketika satu jarak memang berbeda atau perlu mendorong tombol ke ujung toolbar. Jangan menggabungkan gap dengan margin manual untuk jarak yang sama.

Untuk child yang membagi lebar saat direction row sekaligus mempertahankan tinggi konten saat column, gunakan `flex: 1 1 0%`. Basis `0` dalam px dapat meratakan tinggi konten pada Stack vertikal. Komposisi ReactNode yang sudah berisi layout diteruskan langsung tanpa dibungkus Text lagi.

## Spacing dan ukuran

`LayoutSpace` menerima token nama dan angka skala. Angka adalah langkah 4px, bukan pixel mentah.

| Token  | Langkah | Ukuran pada `spaceScale: 1` |
| ------ | ------- | --------------------------- |
| `none` | `0`     | 0px                         |
| `xs`   | `2`     | 8px                         |
| `sm`   | `3`     | 12px                        |
| `md`   | `4`     | 16px                        |
| `lg`   | `6`     | 24px                        |
| `xl`   | `8`     | 32px                        |
| `2xl`  | `12`    | 48px                        |
| `3xl`  | `16`    | 64px                        |

Langkah numerik lengkap: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16`. Semua dikalikan skala spacing tema.

`Box` dan seluruh turunan layout menerima:

- `padding`, `paddingX`, `paddingY`: `Responsive<LayoutSpace>`. X memakai sumbu inline dan Y memakai block, sehingga mendukung RTL. Padding sumbu lebih spesifik daripada padding umum.
- `variant`: `plain`, `surface`, `subtle`, `outlined`, `elevated`. Semua surface selain plain memakai padding tema dan radius lg secara default; outlined/elevated menambahkan border, elevated menambahkan shadow.
- `radius`: `none`, `sm`, `md`, `lg`, `xl`, `full`; mengikuti radius tema, kecuali full yang tetap berbentuk pill.
- `shadow`: `none`, `sm`, `md`, `lg`; mengikuti kekuatan shadow tema.
- `border`: boolean untuk menimpa border varian.
- `background`: `transparent`, `surface`, `subtle`, `primary`, `success`, `warning`, `error`, `info`. Warna semantik memakai surface soft.
- `color`: `inherit`, `text`, `secondary`, `muted`, `primary`, `success`, `warning`, `error`, `info`.
- `width`, `minWidth`, `maxWidth`, `height`, `minHeight`, `maxHeight`: panjang CSS biasa. Angka pada dimensi berarti px, seperti React style.
- `as`: elemen React/HTML, beserta native props dan ref yang sesuai. Misalnya `<Box as="a" href="/projects">` atau `<Stack as="form" onSubmit={save}>`.
- `className`, `style`: escape hatch untuk kebutuhan khusus. Nilai pada `style` memiliki prioritas terakhir.

Komponen tidak mengganti tipografi elemen anak. Pilih heading semantik yang sesuai dan tetap gunakan komponen form/action dari kit.

## Responsive

Props responsive menerima satu nilai atau objek mobile first. Nilai yang tidak disebutkan meneruskan breakpoint sebelumnya. Tanpa `base`, default komponen dipakai hingga breakpoint pertama yang disebutkan.

| Breakpoint | Min-width    |
| ---------- | ------------ |
| `base`     | Semua ukuran |
| `sm`       | 40rem        |
| `md`       | 48rem        |
| `lg`       | 64rem        |
| `xl`       | 80rem        |

```tsx
<Stack
  direction={{ base: 'column', md: 'row' }}
  gap={{ base: 'sm', lg: 'lg' }}
  align={{ base: 'stretch', md: 'center' }}
  justify="between"
/>
```

Breakpoint tersebut mengikuti viewport dan tetap stabil saat server render. Untuk grid di dalam drawer/panel yang lebarnya berubah, gunakan auto-fit agar jumlah kolom mengikuti lebar container:

```tsx
<Grid minItemWidth={220} gap="md">
  <Box variant="outlined">First card</Box>
  <Box variant="outlined">Second card</Box>
</Grid>
```

`minItemWidth` menerima panjang CSS (angka px, `rem`, dan lainnya), mengambil prioritas atas `columns`, dan tetap mengecil hingga lebar container pada layar sempit.

## API layout

`Stack` dan `Inline` menerima `direction`, `gap`, `align`, `justify`, dan `wrap`, semuanya responsive. Direction: `row`, `column`, `row-reverse`, `column-reverse`. Align: `start`, `center`, `end`, `stretch`, `baseline`. Justify: `start`, `center`, `end`, `between`, `around`, `evenly`. Wrap: boolean atau `wrap-reverse`. Pertahankan urutan DOM yang logis untuk pembaca layar dan navigasi keyboard.

`Grid`: `columns` (1–12), `gap`, `rowGap`, `columnGap`, `align`, seluruhnya responsive; serta `minItemWidth` untuk auto-fit. Kolom memakai `minmax(0, 1fr)` dan seluruh grid child dapat menyusut.

`GridItem`: `colSpan` (1–12 atau `full`), `rowSpan` (1–12), `order` (angka), seluruhnya responsive; `align` dan `justify` mengatur self alignment. Sesuaikan span dengan kolom parent pada setiap breakpoint. Contoh: span 8 baru diterapkan saat parent memakai 12 kolom. `colSpan="full"` mencakup semua kolom eksplisit.

`Container`: `size="full | sm | md | lg | xl"`. Lebar maksimal opt-in masing-masing 40, 52, 64, 80rem, terpusat dengan margin inline otomatis. Outlet tetap full width jika size tidak diberikan.

`Divider`: `orientation="horizontal | vertical"`, `spacing` untuk jarak di sekitar garis, `inset` untuk lekukan ujung garis, dan `decorative` untuk menyembunyikan separator dari accessibility tree. Divider vertikal mengikuti tinggi parent flex/grid yang stretch. Beri `aria-label` jika pemisah memerlukan nama.

`Spacer`: `size` responsive, `axis="horizontal | vertical"`, dan `grow`. Spacer tidak memiliki children dan disembunyikan dari pembaca layar.

## Konfigurasi tema

```tsx
const themeConfig = {
  ...defaultTheme,
  spaceScale: 1.1,
  layoutGap: 16,
  layoutPadding: 24,
  radius: 8,
  shadowStrength: 1,
}
```

`layoutGap` mengatur gap default Stack/Inline/Grid dan ukuran default Spacer; `layoutPadding` mengatur padding default Box dengan surface. Keduanya adalah px dasar yang masih dikalikan `spaceScale`, tersedia di Theme Studio, tersimpan, dan ikut impor/ekspor tema. Konfigurasi lama tanpa properti baru mendapat default 16px/24px.

Memberikan `gap="sm"` atau `padding="lg"` memilih token tertentu yang tetap mengikuti `spaceScale`, tetapi tidak mengikuti perubahan default gap/padding. Kosongkan prop agar menggunakan default tema. Warna mengikuti palette light/dark, radius mengikuti `radius`, dan shadow mengikuti `shadowStrength`.

## Import dan tree shaking

Komponen tersedia dari `templates/ui` atau entry masing-masing (`templates/ui/stack`, `templates/ui/grid.item`, dan seterusnya). Ekspor ESM statis tidak membuat registry runtime.

Stylesheet lengkap sudah memuat fondasi layout. Untuk penggunaan selektif:

```tsx
import { Stack } from '@templates/ui/stack'
import { Box } from '@templates/ui/box'
import '@templates/base.css'
import '@templates/ui/layout.css'
```

`layout.css` adalah stylesheet bersama yang kecil untuk seluruh fondasi. CSS tersebut memuat reset responsive, Box, lalu komponen turunannya; tidak perlu mengimpor ulang setiap file CSS layout. Fondasi tidak memakai inline style tag atau menyuntik CSS saat module diimpor.

Contoh interaktif akan dibuat di aplikasi demo `preview/`, yang saat ini kosong.
