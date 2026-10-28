# Typography

Sistem teks berbasis peran untuk seluruh UI Aria UI. Gunakan variant untuk memilih fungsi teks; ukuran, weight, warna, line height, tracking, dan transform berasal dari tema. Props lokal dan style tetap dapat menimpa default.

## Komponen

| Komponen    | Default        | Penggunaan                                                                          |
| ----------- | -------------- | ----------------------------------------------------------------------------------- |
| Heading     | h2, section    | display/page/section/card/dialog; level HTML terpisah dari ukuran                   |
| Text        | p, body        | body/description/label/caption/helper serta teks button/input/table/menu/navigation |
| Eyebrow     | span, eyebrow  | Label pengantar dengan tracking dan transform tema                                  |
| FieldLabel  | label, label   | htmlFor dan required marker untuk kontrol form                                      |
| FieldHint   | p, helper      | Petunjuk input dengan id untuk aria-describedby                                     |
| FieldError  | p, error       | Pesan validasi; atribut live region dapat diberikan aplikasi                        |
| TextLink    | a, link        | Link native beserta href, target, download, focus, dan hover                        |
| CodeText    | code, code     | Kode inline dengan font monospace                                                   |
| CodeBlock   | pre, code      | Kode multiline; wrap aktif secara default                                           |
| MetricValue | strong, metric | Angka/statistik dengan tabular numerals; pemformatan nilai milik aplikasi           |

```tsx
import { Heading, Text, TextLink, Field, Input, MetricValue } from '@templates/ui'

<Heading as="h1" variant="page">Team members</Heading>
<Text variant="description">Manage everyone in one place.</Text>
<Text variant="caption" tone="muted">Updated just now</Text>
<TextLink href="/settings/appearance">Customize your theme</TextLink>
<Field label="Workspace name" hint="Choose a familiar name."><Input /></Field>
<MetricValue>12,840</MetricValue>
```

Default yang disediakan berjumlah 20 peran:

| Peran                                                                           | Default px sebelum fontScale |
| ------------------------------------------------------------------------------- | ---------------------------- |
| display                                                                         | 44                           |
| page                                                                            | 28                           |
| section                                                                         | 24                           |
| card                                                                            | 16                           |
| dialog                                                                          | 20                           |
| body                                                                            | 13                           |
| description, label, helper, button, input, table, menu, navigation, error, code | 12                           |
| caption, eyebrow                                                                | 10                           |
| link                                                                            | 13                           |
| metric                                                                          | 28                           |

Peran button/input mengikuti ukuran kontrol untuk dimensi default. Tone: inherit, text, secondary, muted, primary, success, warning, error, info, violet, mint. Warna semantik mengikuti palette light/dark. Tone inherit mempertahankan warna yang diberikan konteks/komponen, termasuk selected/hover/destructive pada kontrol.

## Pengaturan tema

```tsx
import { defaultTheme, type ThemeConfig } from '@templates/theme'

const theme: ThemeConfig = {
  ...defaultTheme,
  typography: {
    page: { fontSize: 30, fontWeight: 600, lineHeight: 1.25, tone: 'text' },
    description: { fontSize: 13, lineHeight: 1.75, tone: 'secondary' },
    caption: { fontSize: 11, tone: 'muted' },
    eyebrow: { letterSpacing: 0.08, textTransform: 'uppercase' },
  },
}
```

Typography pada ThemeConfig adalah partial: properti/peran yang tidak disebutkan memakai default. ResolvedThemeConfig selalu mempunyai konfigurasi lengkap. updateConfig menggabungkan perubahan per role dan per field sehingga pengaturan lain tetap tersimpan. Konfigurasi lama tanpa typography tetap didukung.

Theme Studio menyediakan pemilihan peran, ukuran dasar, weight, line height, tracking dalam em, tone, transform, preview, dan reset per peran. Pengaturan tersimpan serta ikut ekspor/impor JSON atau TypeScript. Validasi menerima fontSize 8–72px, fontWeight 100–900, lineHeight 1–2.5, letterSpacing -0.1–0.3em, serta nilai tone/transform yang dikenal. Global fontScale diterapkan satu kali melalui CSS.

Engine menulis token --typography-{role}-size/weight/leading/tracking/color/transform. Fallback portable ada di theme/typography.tokens.css. Font family umum mengikuti pengaturan font global, sedangkan kode memakai font mono.

Tinggi input, tombol, dan baris combobox dihitung dari konfigurasi font. Batas minimum header runtime menyesuaikan judul/tombol; headerHeight yang disimpan tetap merupakan preferensi pengguna yang valid.

## Custom dan responsive

```tsx
<Heading variant="page" size={{ base: 'md', lg: 'xl' }} tone="primary" />
<Text variant="body" weight={500} leading="relaxed" lineClamp={2} />
<Text as="time" variant="caption" dateTime="2026-10-27">27 Oct 2026</Text>
<CodeBlock wrap={false}>{source}</CodeBlock>
```

Size tetap tersedia sebagai override visual; Heading mempunyai xs/sm/md/lg/xl/2xl dan Text mempunyai xs/sm/md/lg/xl, ditambah inherit. Jika size tidak diberikan, fontSize dari role tema dipakai. Align menerima objek responsive. Tracking/transform, className, style, native props dan ref React 19 tetap diteruskan. Style eksplisit mempunyai prioritas akhir. Komponen presentasional menampilkan ReactNode apa adanya; terjemahkan konten melalui useI18n di aplikasi.

Field menghubungkan FieldLabel/FieldHint/FieldError, mempertahankan aria-describedby yang sudah ada, dan menandai input invalid ketika error diberikan. Jika memakai part secara langsung, berikan id/htmlFor/aria-describedby yang sesuai.

FieldLabel menampilkan chip kecil Required/Wajib berwarna error ketika required true, atau Optional/Opsional untuk field lainnya. Chip menggantikan asterisk dan mengikuti bahasa aktif. Indikator kewajiban terpisah dari validasi; required tidak otomatis membuat input invalid. Field meneruskan aria-required dari required atau atribut kontrol yang sudah ada. showRequirement false tersedia pada Field dan FieldLabel untuk kontrol mekanis/nested yang sudah dijelaskan field induknya.

CodeBlock wrap=true membungkus baris dan tidak membuat scroll vertikal internal. Wrap=false mengizinkan scroll horizontal untuk kode yang perlu mempertahankan baris. Kode ditampilkan sebagai teks, tidak dieksekusi.

## Penerapan di template

Halaman starter, header/sidebar, table, menu/combobox, drawer/dialog, card, wizard, form, dan blok detail memakai komponen tipografi. Kontrol native seperti input/textarea mempertahankan semantik serta ref-nya dan memakai token input yang sama. Komponen pihak ketiga seperti FullCalendar dan Sonner mengikuti token melalui style adapter. Teks di dalam SVG ilustrasi, logo, serta isi dokumen PDF mempertahankan tipografi aset/dokumen tersebut.

Slot primitive pada CardBody/CardFooter/metadata diberi Text sesuai perannya, sedangkan ReactElement custom diteruskan tanpa wrapper DOM tambahan. Pemformatan data, navigasi, dan state aplikasi tetap terpisah dari tipografi.

## Import selektif

```tsx
import { Text } from '@templates/ui/text'
import { Heading } from '@templates/ui/heading'
import { MetricValue } from '@templates/ui/metric.value'
import '@templates/base.css'
import '@templates/ui/blocks.css'
```

Stylesheet lengkap template/styles.css sudah menyertakan semuanya. Ekspor ESM per komponen tetap mendukung tree shaking. Semua nama file/folder memakai dot case.
