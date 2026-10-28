# Memilih dan memperluas komponen

Temukan simbol pada [UI index](../../../../templates/ui/index.ts), lalu baca tipe/source leaf. Tabel ini adalah peta pemilihan, bukan salinan semua prop.

| Kebutuhan                       | Pilihan awal                                                                      | Acuan                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Susunan dan jarak               | Box, Stack, Inline, Grid, GridItem, Container, Spacer, Divider                    | [Layout](../../../../templates/ui/layout.md)                                                                       |
| Teks dan hierarki               | Heading, Text, Eyebrow, MetricValue, TextLink, CodeText, CodeBlock                | [Tipografi](../../../../templates/ui/typography.md)                                                                |
| Pembuka halaman/bagian          | PageHeader, SectionHeader, HeadingGroup                                           | [Komposisi](../../../../templates/ui/composition.md)                                                               |
| Surface/header/body/footer      | Card dan part-nya, Toolbar dan part-nya                                           | [Komposisi](../../../../templates/ui/composition.md)                                                               |
| Count/metrik dengan visual      | StatCard                                                                          | [API](../../../../templates/ui/stat.card/readme.md)                                                                |
| Tren numerik                    | AreaChart                                                                         | [Chart](../../../../templates/ui/chart)                                                                            |
| Baris pengaturan                | SettingsRow, SettingsRowContent, SettingsRowControl                               | [Source](../../../../templates/ui/settings.row/settings.row.tsx)                                                   |
| Field/pilihan                   | Field, Input, Textarea, Combobox, CheckboxField, Switch                           | [Field](../../../../templates/ui/field/field.tsx), [Combobox types](../../../../templates/ui/combobox/types.ts)    |
| Kontrol nilai/pilihan banyak    | Slider, RangeSlider, RadioGroup, MultiSelect                                      | [Primitives](../../../../templates/ui/primitives.md)                                                               |
| Daftar data dan kontrol         | DataTable, TableToolbar, TableColumnMenu                                          | [DataTable](../../../../templates/ui/data.table/data.table.tsx)                                                    |
| Filter grup + chip              | TableFilter; TableFilterControl dan TableFilterChips untuk komposisi              | [Filter](../../../../templates/ui/table.filter/readme.md)                                                          |
| Menu aksi/pilihan               | ActionMenu, Menu                                                                  | [ActionMenu](../../../../templates/ui/action.menu/action.menu.tsx), [Menu](../../../../templates/ui/menu/menu.tsx) |
| Floating form/konten interaktif | Popover, PopoverContent                                                           | [Popover](../../../../templates/ui/popover/popover.tsx)                                                            |
| Preview baca saat hover/focus   | HoverCard                                                                         | [API](../../../../templates/ui/hover.card/readme.md)                                                               |
| Penjelasan pendek               | Tooltip                                                                           | [Primitives](../../../../templates/ui/primitives.md)                                                               |
| Detail reusable                 | DetailView, DetailSection, DetailList, DetailStats, DetailTimeline                | [Source](../../../../templates/ui/detail/detail.tsx)                                                               |
| Panel/dialog                    | Drawer + useDrawerPresence, Dialog, ConfirmDialog                                 | [Drawer](../../../../templates/ui/drawer/drawer.tsx), [primitives](../../../../templates/ui/primitives.md)         |
| State/feedback                  | StatusBadge, Badge, Chip, EmptyState, ErrorState, Skeleton, LoadingOverlay, toast | [UI](../../../../templates/ui/readme.md)                                                                           |
| Tanggal/waktu                   | Calendar, RangeCalendar, DateRangePicker, TimePicker                              | [Blok](../../../../templates/ui/blocks.md)                                                                         |
| Agenda interaktif               | FullCalendar                                                                      | [API](../../../../templates/ui/full.calendar/readme.md)                                                            |
| Alur bertahap                   | Wizard; Stepper/ParallelStepper untuk progres saja                                | [Wizard](../../../../templates/ui/wizard/readme.md)                                                                |
| Navigasi dan informasi          | Cmdk, Breadcrumb, Tabs, Alert, Progress, Avatar, Accordion                        | [UI](../../../../templates/ui/readme.md)                                                                           |

## Memutuskan cara custom

1. Mulai dari prop/variant/ukuran/slot yang sudah tersedia.
2. Gunakan part dan children bila susunan shortcut kurang cocok. Contohnya CardHeader + CardBody + CardFooter untuk susunan custom.
3. Buat wrapper fitur untuk data domain; jangan memasukkan field bisnis ke primitive kit.
4. Perluas kontrak kit ketika kebutuhan reusable belum dapat dikomposisikan. Jaga default lama dan dokumentasikan prop baru.

Komponen layout mendukung semantik melalui as; header/blok menerima ReactNode dan slot yang didokumentasikan. Pastikan prop yang dibutuhkan memang ada pada komponen target. Native props, className, dan style tetap berguna untuk custom tanpa mengganti tema bersama.

## Pilihan yang sering keliru

- Menu adalah daftar aksi/pilihan dengan navigasi keyboard; Popover untuk konten interaktif bebas. HoverCard untuk preview baca saja, bukan tempat tombol/form tersembunyi.
- Drawer memiliki body scroll sendiri; jangan membungkus seluruh detail dengan overflow-auto lagi. PopoverContent scrollArea="content" tersedia saat komposit mengelola scroll isi.
- CheckboxField membuat area label/kartu dapat diklik. Menu checkbox memakai interaksi item menu. Jangan memasang handler toggle parent dan checkbox sekaligus.
- Wizard menyediakan presentasi, bukan validasi/persistence. FullCalendar menyediakan gesture/rendering; aplikasi tetap mengelola data dan hasil mutation.
- StatCard menerima ikon/ilustrasi semantik; pilih sesuai metrik. PageHeader.artwork menerima SVG konteks halaman. Kit tidak menebak domain dari judul.
- DataTable integrated toolbar sudah menyusun chip pada baris bawah search. Gunakan API tersebut sebelum menulis filter/pagination pengganti.

## Integrasi opsional

[Adapter](../../../../templates/integrations/readme.md) menyediakan TanStack Query/Form, Zod, URL, auth/session, dan bridge Tailwind. UI core tidak wajib mengimpor dependency itu.

Pada useAppForm, bound checkbox dipanggil `field.CheckboxField`; ekspor standalone bernama `CheckboxFormField`. Jangan menyamakan nama bound field dengan komponen UI CheckboxField native. Lihat [recipe form](recipes/forms.validation.md).
