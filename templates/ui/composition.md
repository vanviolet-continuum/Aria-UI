# Reusable content blocks

Tipografi sekarang memakai role tema melalui variant. `Heading` menyediakan display/page/section/card/dialog; `Text` menyediakan body/description/label/caption/helper dan role kontrol. Komponen FieldLabel/FieldHint/FieldError/TextLink/CodeText/CodeBlock/MetricValue tersedia untuk kebutuhan khusus. Panduan konfigurasi, prioritas override, dan contoh lengkap ada di [Typography](./typography.md). Ukuran pada tabel di bawah merupakan default awal yang dapat diubah melalui tema.

Blok presentasional untuk halaman, card, form, dan drawer, dibangun di atas token layout/tema. Seluruhnya mandiri dari router, data fetching, dan state bisnis; tidak membuat scroll container internal. Dokumentasi interaktif akan dibuat di aplikasi demo `preview/`, yang saat ini kosong.

## Pemakaian praktis

```tsx
import { PageHeader, Card, Text, Button } from '@templates/ui'
import '@templates/styles.css'
;<>
  <PageHeader
    eyebrow="TEAM"
    title="People, in one place."
    description="Manage your workspace members."
    actions={<Button variant="contained">Add member</Button>}
  />
  <Card title="Team directory" description="Everyone in your workspace.">
    <Text>Your content goes here.</Text>
  </Card>
</>
```

Konten menerima ReactNode, termasuk string, ikon, badge, link, dan komponen aplikasi. Blok baru menampilkan konten apa adanya; terjemahkan string aplikasi dengan `useI18n().t` sebelum diberikan ke blok.

## Komposisi custom

```tsx
import {
  PageHeader,
  PageHeaderContent,
  PageHeaderTitleRow,
  PageHeaderTitle,
  PageHeaderDescription,
  PageHeaderActions,
  PageHeaderMeta,
  Eyebrow,
  Badge,
  Button,
} from '@templates/ui'
;<PageHeader size="lg">
  <PageHeaderContent>
    <Eyebrow>ARIA STUDIO</Eyebrow>
    <PageHeaderTitleRow>
      <PageHeaderTitle as="h2">Team members</PageHeaderTitle>
      <Badge variant="success" dot>
        Active
      </Badge>
    </PageHeaderTitleRow>
    <PageHeaderDescription>
      Manage members or{' '}
      <a className="text-link" href="/help">
        read the guide
      </a>
      .
    </PageHeaderDescription>
    <PageHeaderMeta>8 members · Professional plan</PageHeaderMeta>
  </PageHeaderContent>
  <PageHeaderActions>
    <Button>Invite members</Button>
  </PageHeaderActions>
</PageHeader>
```

`children` pada HeadingGroup/PageHeader/SectionHeader menggantikan seluruh bagian otomatis. Tidak ada deteksi nama/tipe child. Native props, event, ref React 19, className, dan style diteruskan ke root. `as` mengganti elemen semantik; ukuran visual tetap independen.

## Tipografi

| Komponen | Default elemen | Ukuran visual sebelum fontScale                       |
| -------- | -------------- | ----------------------------------------------------- |
| Heading  | h2             | xs 16px, sm 20px, md 24px, lg 28px, xl 36px, 2xl 44px |
| Text     | p              | xs 10px, sm 12px, md 13px, lg 15px, xl 17px           |
| Eyebrow  | span           | Skala Text; default xs, uppercase dengan tracking     |

`size` dan `align` menerima nilai tunggal atau objek responsive `{ base, sm, md, lg, xl }` dengan breakpoint yang sama seperti [fondasi layout](./layout.md). `size="inherit"` mengikuti font parent.

Props bersama: tone (inherit, text, secondary, muted, primary, success, warning, error, info), weight, leading (tight/normal/relaxed), truncate, lineClamp, as, className, style, serta native props elemen yang dipilih. Truncate memotong satu baris, lineClamp membatasi jumlah baris secara visual. Teks sumber tetap sama; tooltip tidak ditambahkan otomatis.

Pilih level heading sesuai struktur dokumen. `as="h3" size="lg"` tetap h3 meskipun tampil besar. PageHeader default h2 agar selaras dengan AdminHeader yang memiliki h1; aplikasi tanpa shell dapat memakai `titleAs="h1"`.

## HeadingGroup, PageHeader, SectionHeader

Ketiganya berbagi struktur. HeadingGroup default size md, PageHeader lg dengan jarak bawah tema, SectionHeader sm tanpa margin luar. Size sm/md/lg menghasilkan judul 16/24/28px. Title default h2 untuk group/page dan h3 untuk section.

| Prop                        | Kegunaan                                                                                             |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| eyebrow, title, description | Konten utama opsional                                                                                |
| leading, trailing           | Ikon sebelum judul; badge/konten setelah judul                                                       |
| navigation                  | Breadcrumb atau tombol kembali milik aplikasi                                                        |
| meta                        | Informasi sekunder di bawah deskripsi                                                                |
| actions                     | Tombol, menu, atau kontrol bebas                                                                     |
| titleAs                     | Level h1–h6 untuk judul otomatis                                                                     |
| layout                      | split atau stacked; split membungkus actions jika ruang tidak cukup                                  |
| align                       | start/center/end, responsive                                                                         |
| gap                         | Jarak antarwilayah, token responsive                                                                 |
| size                        | sm/md/lg                                                                                             |
| slotProps                   | Props per bagian: content, titleRow, eyebrow, title, description, actions, meta, navigation, leading |

Root juga menerima props Box seperti padding/radius/background/width. Deskripsi otomatis memakai div agar dapat menampung konten rich. Wilayah kosong tidak dibuat; angka 0 tetap ditampilkan.

```tsx
<PageHeader
  title="Team members"
  slotProps={{
    title: { as: 'h1', size: { base: 'md', lg: 'xl' }, className: 'my-title' },
    description: { className: 'my-description' },
    actions: { className: 'my-actions' },
  }}
/>
```

HeadingGroup menyediakan part Content, TitleRow, Title, Description, Actions, Meta, Navigation. PageHeader mengekspor alias berawalan PageHeader; SectionHeader menyediakan Content, TitleRow, Title, Description, Actions, Meta. Gunakan Eyebrow langsung untuk label. Part Title mengikuti size root; Heading biasa dapat dipakai dengan size pilihan sendiri.

## Card

```tsx
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@templates/ui'
;<Card variant="outlined" size="md">
  <CardHeader divider>
    <Heading as="h3" size="xs">
      Custom header
    </Heading>
  </CardHeader>
  <CardBody>
    <Text>Custom body.</Text>
  </CardBody>
  <CardFooter divider>
    <Button>Continue</Button>
  </CardFooter>
</Card>
```

Root mendukung props Box. Variant default outlined; pilihan lain plain/surface/subtle/elevated. Size sm memakai padding 16px, md memakai layoutPadding, lg memakai 32px, semuanya mengikuti spaceScale. Overflow tidak dipotong otomatis sehingga konten custom dan focus ring tetap terlihat.

Shortcut tersedia melalui title/description/eyebrow/actions/header/body/footer dan slotProps.header/body/footer. Jika salah satu field shortcut diberikan, children menjadi konten CardBody, kecuali body diberikan secara eksplisit. Header custom menggantikan seluruh header; footer shortcut dibungkus CardFooter.

Jika hanya children yang diberikan, children adalah komposisi langsung tanpa wrapper tambahan. Card sederhana tanpa judul dapat memakai `<Card body={<Text>Content</Text>} />` atau `<Card><CardBody>Content</CardBody></Card>`. Hindari memasukkan CardBody lagi ketika menggunakan shortcut title agar padding tidak berlapis.

CardHeader menerima props SectionHeader dan divider. CardBody menerima props Box. CardFooter menerima props Box dan divider. Padding part dapat ditimpa secara lokal; misalnya CardBody padding={0} untuk tabel/media yang mencapai tepi. Header/footer yang berdiri sendiri tetap mempertahankan padding utuh.

## Toolbar

```tsx
<Toolbar label="Project actions" variant="outlined">
  <ToolbarGroup grow>
    <SearchInput value={search} onChange={setSearch} />
    <MyFilters />
  </ToolbarGroup>
  <ToolbarActions>
    <Button>Export</Button>
    <Button>Create</Button>
  </ToolbarActions>
</Toolbar>
```

Toolbar/ToolbarGroup mendukung direction, gap, align, justify, dan wrap responsive seperti Stack; default row/center/wrap. ToolbarActions memakai group dengan margin inline-start auto. Grow pada group membagi ruang tersisa. Kontrol dan state tetap milik aplikasi. Gunakan style/props lokal untuk alignment khusus pada susunan vertikal.

Label membuat root menjadi group berlabel. Setiap kontrol mempertahankan navigasi Tab normal; tidak ada roving keyboard navigation atau role toolbar otomatis.

## SettingsRow

```tsx
<SettingsRow
  variant="outlined"
  label="Project notifications"
  description="Keep the team informed."
  control={<Switch checked={enabled} onChange={event => setEnabled(event.target.checked)} />}
/>
<SettingsRow
  label="Workspace name"
  direction={{ base: 'column', md: 'row' }}
  control={connection => <Input {...connection} value={name} onChange={changeName} />}
/>
```

Props: label, description, leading, control, controlId, direction responsive, size sm/md/lg, divider, props Box, dan slotProps content/label/description/control/leading. Default variant plain; padding 12/16/24px mengikuti size dan spaceScale. Pilih outlined/subtle untuk surface terpisah.

Untuk satu ReactElement control, SettingsRow meneruskan id dan menggabungkan aria-labelledby/aria-describedby yang sudah ada. Id kontrol yang sudah ada dipertahankan. Kontrol custom harus meneruskan atribut ke elemen interaktifnya. Render function menerima connection berisi id serta atribut ARIA, sehingga dapat diterapkan pada bagian tertentu dari kontrol kompleks. Value/onChange/ref/disabled tetap milik kontrol.

Children menggantikan seluruh isi otomatis. SettingsRowContent/SettingsRowControl tersedia untuk komposisi langsung; pada mode ini aplikasi menghubungkan label dengan kontrolnya sendiri.

## Tema dan import

Token di theme/block.tokens.css: font-text-_, font-heading-_, font-heading-weight, leading-\*, page-header-space. FontScale/spaceScale/layoutGap/layoutPadding/radius/shadowStrength serta palette light/dark memengaruhi blok melalui CSS, tanpa state tambahan per komponen.

```tsx
import { PageHeader, PageHeaderContent, PageHeaderTitle } from '@templates/ui/page.header'
import '@templates/base.css'
import '@templates/ui/blocks.css'
```

Stylesheet lengkap sudah memuat blocks.css. Untuk penggunaan selektif, blocks.css memuat fondasi layout dan style blok; layout.css tidak perlu diimpor lagi. Ekspor komponen/part adalah ESM statis, tanpa registry atau object namespace runtime. JavaScript yang tidak direferensikan dapat dibuang bundler, sedangkan CSS mengikuti stylesheet yang dipilih.

FormSection dan DetailSection memakai SectionHeader yang sama. FormSection juga menerima title/description ReactNode, actions, leading, native props root, dan slotProps heading untuk kebutuhan custom.
