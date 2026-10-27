# Memilih dan memperluas komponen

Gunakan tabel ini untuk menemukan komponen, lalu baca tipe props dan source target. Daftar ekspor aktual berada di [UI index](../../../../templates/ui/index.ts) dan [API UI](../../../../templates/ui/readme.md).

| Kebutuhan                   | Pilihan awal                                                                                          | Source/dokumentasi                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Susunan, surface, jarak     | Box, Stack, Inline, Grid, GridItem, Container, Spacer, Divider                                        | [Layout](../../../../templates/ui/layout.md)                                                                    |
| Judul dan teks              | Heading, Text, Eyebrow, FieldLabel, FieldHint, FieldError, TextLink, CodeText, CodeBlock, MetricValue | [Tipografi](../../../../templates/ui/typography.md)                                                             |
| Pembuka halaman/section     | PageHeader, SectionHeader, HeadingGroup                                                               | [Komposisi](../../../../templates/ui/composition.md)                                                            |
| Konten berkartu dan toolbar | Card dan part-nya, Toolbar dan part-nya                                                               | [Komposisi](../../../../templates/ui/composition.md)                                                            |
| Baris pengaturan            | SettingsRow, SettingsRowContent, SettingsRowControl                                                   | [SettingsRow](../../../../templates/ui/settings.row/settings.row.tsx)                                           |
| Input dan pilihan           | Field, FormSection, Input, Textarea, Combobox, CheckboxField, Switch                                  | [Field](../../../../templates/ui/field/field.tsx), [Combobox props](../../../../templates/ui/combobox/types.ts) |
| Daftar data                 | DataTable, TableColumnMenu, TableFilter, SearchInput                                                  | [Tabel](../../../../templates/ui/data.table/data.table.tsx), [blok](../../../../templates/ui/blocks.md)         |
| Aksi dan floating content   | Button, IconButton, Menu, Popover, PopoverContent                                                     | [Menu](../../../../templates/ui/menu/menu.tsx), [Popover](../../../../templates/ui/popover/popover.tsx)         |
| Detail dan panel            | DetailView, DetailSection, DetailList, DetailStats, DetailTimeline, Drawer                            | [Detail](../../../../templates/ui/detail/detail.tsx), [Drawer](../../../../templates/ui/drawer/drawer.tsx)      |
| Status dan feedback         | Badge, Chip, StatusBadge, EmptyState, LoadingOverlay, Skeleton, toast                                 | [UI API](../../../../templates/ui/readme.md)                                                                    |
| Tanggal dan tahapan         | Calendar, RangeCalendar, DateRangePicker, Stepper, ParallelStepper                                    | [Blok lanjutan](../../../../templates/ui/blocks.md)                                                             |
| Kontrol nilai/pilihan       | Slider, RangeSlider, RadioGroup, MultiSelect                                                          | [Komponen umum](../../../../templates/ui/primitives.md)                                                         |
| Overlay dan penjelasan      | Dialog, Tooltip                                                                                       | [Komponen umum](../../../../templates/ui/primitives.md)                                                         |
| Informasi dan navigasi      | Alert, Progress, Avatar, AvatarGroup, Accordion, Breadcrumb                                           | [Komponen umum](../../../../templates/ui/primitives.md)                                                         |

## Ruang custom

Integrasi opsional tersedia untuk [TanStack Query/cache, form/Zod, URL, dan Tailwind](../../../../templates/integrations/readme.md). ErrorState merupakan pilihan GET error pada area hasil/empty, dengan ilustrasi serta retry tanpa toast. Gunakan bound field adapter untuk form ber-Zod; UI core tetap bebas dari dependency integrasi tersebut.

Mulai dari props yang sudah tersedia. Komponen layout dan blok umumnya menerima elemen semantik melalui `as`, native props, `className`, `style`, dan token ukuran. Header menerima ReactNode untuk judul/deskripsi/aksi serta `slotProps`; `children` dapat dipakai untuk komposisi lengkap. Card menyediakan part terpisah ketika shortcut props tidak cocok.

Jangan menambahkan prop yang hanya melayani satu data bisnis pada primitive umum. Susun wrapper di fitur untuk kebutuhan tersebut. Bila beberapa penggunaan memiliki kebutuhan struktural yang sama, perluas kontrak kit secara terarah dan pertahankan default serta native accessibility.

Gunakan `Menu` untuk daftar aksi/pilihan, dan `Popover` untuk konten form atau konten custom. Dropdown baru sebaiknya tetap memakai primitive yang menyediakan navigasi keyboard dan pengelolaan fokus.

RadioGroup variant card dan MultiSelect juga menangani klik seluruh area pilihan serta keyboard. Jangan menulis kontrol pilihan baru untuk kebutuhan yang sudah dipenuhi API ini.

Untuk checkbox di dalam area pilihan, gunakan `CheckboxField` sehingga seluruh label/kartu beserta padding dapat diklik. Untuk komponen menu, gunakan aksi seluruh item yang sudah tersedia; jangan menambahkan handler toggle kedua pada checkbox dan parent sekaligus.

Ketika merevisi komponen dengan portal atau panel panjang, tentukan satu pemilik scroll. `PopoverContent scrollArea="content"` tersedia bagi komposit yang mengelola scroll pada isi; jangan memberi scroll independen pada panel luar dan list yang sama.
