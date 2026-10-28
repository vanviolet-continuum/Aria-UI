# Kontrol dan komponen umum

Semua komponen di bawah tersedia dari `@templates/ui` atau leaf entry, misalnya `@templates/ui/slider`. Import stylesheet lengkap sekali; untuk CSS selektif gunakan `@templates/base.css`, CSS komponen, serta CSS dependensinya. MultiSelect juga memakai CSS Combobox, Popover, Checkbox, Chip/Badge, Button, LoadingOverlay, ErrorState, EmptyState, dan ilustrasi. Hook konfirmasi memakai CSS Dialog dan Button.

Komponen mengikuti warna semantik, token tipografi, controlHeight, spaceScale, radiusScale, shadowStrength, dan motionScale. Native props, className/style, serta part atau render callback mempertahankan ruang custom. Teks konten, nama orang, dan label opsi merupakan data display milik pemanggil; terjemahkan copy aplikasi sebelum diberikan. Default copy internal tersedia dalam ID/EN.

## Slider dan RangeSlider

`Slider` menerima satu number; `RangeSlider` menerima tuple `[number, number]`. Keduanya controlled melalui value/onValueChange atau uncontrolled melalui defaultValue. onValueChange cocok untuk pratinjau langsung; onValueCommit untuk menyimpan pilihan setelah interaksi. Bila nilainya menjadi filter API, commit ke URL dan masukkan ke query key.

```tsx
import { Slider, RangeSlider } from '@templates/ui/slider'

<Slider label={t('Volume')} value={volume} onValueChange={setVolume}
  min={0} max={100} step={5} showValue
  formatValue={value => value + '%'} />

<RangeSlider label={t('Price range')} value={price}
  onValueChange={setPrice} onValueCommit={commitPriceToUrl}
  min={0} max={1000000} step={10000} showValue
  thumbLabels={[t('Minimum price'), t('Maximum price')]}
  formatValue={formatCurrency} />
```

| Prop                            | Pilihan/perilaku                                                                       |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| min / max / step                | Default 0 / 100 / 1; gunakan batas finite, max > min, step positif, nilai sesuai batas |
| label / showValue / formatValue | Label dan output nilai; formatter juga dipakai aria-valuetext                          |
| size / color                    | sm, md, lg / primary, secondary, success, warning, error, info                         |
| orientation / inverted / dir    | Horizontal atau vertikal, arah dan inversi mengikuti primitive Radix                   |
| marks                           | Array { value, label? }; penanda horizontal tanpa membuat elemen fokus tambahan        |
| minStepsBetweenThumbs           | Jarak minimum antarthumb RangeSlider dalam jumlah step                                 |
| thumbLabels                     | Dua nama aksesibel berbeda untuk nilai minimum/maksimum                                |
| thumbClassName / trackClassName | Custom part; root ref menuju elemen slider Radix                                       |

RangeSlider mempertahankan urutan thumb. Keyboard mendukung panah, Home/End, dan step besar melalui primitive Radix. Berikan label atau aria-label; jangan mengandalkan tooltip sebagai satu-satunya label. Slider vertikal memakai CSS variable `--slider-vertical-height` untuk panjangnya.

## RadioGroup

```tsx
<RadioGroup
  aria-label={t('Plan')}
  name="plan"
  variant="card"
  value={plan}
  onValueChange={setPlan}
  options={[
    { value: 'starter', label: t('Starter'), description: t('For small teams') },
    { value: 'pro', label: t('Pro'), description: t('More room to grow') },
  ]}
/>
```

variant plain/card, orientation vertical/horizontal, columns opsional, required, disabled, name/form, dan props Radix tersedia. Seluruh label/kartu dapat diklik. Disabled pada group maupun item tetap dihormati. Arrow keys berpindah dan memilih; Tab mengikuti roving focus.

Untuk komposisi, gunakan children berupa `RadioGroupItem` dengan value, label, description, leading, trailing, wrapperClassName, dan native button props. Isi leading/trailing/label merupakan presentasi; letakkan link/tombol tambahan di luar label pilihan.

## MultiSelect

```tsx
<MultiSelect
  options={query.data ?? []}
  value={selected}
  onValueChange={setSelected}
  selectedOptions={initialOptions}
  placeholder={t('Choose teams')}
  onSearchChange={setSearch}
  loading={query.isLoading}
  error={query.error}
  onRetry={() => query.refetch()}
/>
```

value/defaultValue adalah string[]. options memakai bentuk ComboboxOption: value, label, description?, disabled?. Label pilihan dipertahankan saat hasil pencarian/pagination berganti; selectedOptions mengisi label awal data edit.

Pilihan memakai checkbox native dalam label yang menutupi seluruh baris. Space memilih, ArrowUp/Down dan Home/End memindahkan fokus, Escape menutup dan mengembalikan fokus. Searchable false cocok untuk daftar pendek. onSearchChange berarti filtering dimiliki server; tanpa callback itu, filtering lokal dilakukan pada opsi.

| Prop                               | Perilaku                                                                    |
| ---------------------------------- | --------------------------------------------------------------------------- |
| maxSelected                        | Batas pilihan; pilihan yang sudah tercentang tetap dapat dihapus            |
| showChips / clearable              | Default true; chip memiliki tombol hapus terpisah dari trigger              |
| renderOption / renderValue         | Custom isi opsi dan ringkasan trigger; hindari kontrol interaktif bersarang |
| contentProps                       | Posisi, native event, dan class/style panel Popover                         |
| open / onOpenChange                | Kendali panel, misalnya untuk query enabled                                 |
| name / form                        | Hidden input per nilai untuk native FormData                                |
| loading / error / onRetry          | GET error memakai ErrorState dengan ilustrasi pada area hasil, tanpa toast  |
| hasMore / loadingMore / onLoadMore | Load halaman berikutnya dengan query eksternal                              |

Panel mempunyai satu area scroll; search dan footer tetap terlihat. MultiSelect tidak memiliki cache request lokal dan tidak memanggil SDK sendiri. Untuk filter terapan, simpan value pada search params.

## Dialog dan Tooltip

```tsx
;<Dialog
  open={open}
  onOpenChange={setOpen}
  title={t('Edit preferences')}
  description={t('Choose the settings for this workspace.')}
  onBeforeClose={guard.confirmDiscard}
  footer={
    <Button type="submit" form="preferences">
      {t('Save')}
    </Button>
  }
>
  <form id="preferences">{fields}</form>
</Dialog>
{
  guard.confirmation
}

;<Tooltip content={t('Download report')}>
  <IconButton aria-label={t('Download report')}>
    <Download />
  </IconButton>
</Tooltip>
```

Dialog: controlled atau trigger/defaultOpen; size sm/md/lg/xl, hideClose, closeOnOutside, overlayClassName, bodyClassName, footer, native content events. title wajib untuk nama aksesibel; description opsional. Header/footer tidak scroll; body adalah pemilik scroll. onBeforeClose mengembalikan boolean/Promise<boolean> dan berlaku untuk X, Escape, backdrop, serta DialogClose. Perubahan open dari parent tetap otoritas pemanggil, jadi tombol custom yang langsung memanggil setOpen(false) harus memakai guard.requestClose.

DialogHeader/Title/Description/Body/Footer dan DialogClose diekspor untuk komposisi. Untuk layout sepenuhnya custom, gunakan primitive Radix dengan part ini di dalam Content/Root yang sesuai. layer confirmation disediakan untuk konfirmasi di atas drawer/dialog. Drawer juga menerima onBeforeClose dengan kontrak yang sama.

Tooltip: content, children (satu trigger yang meneruskan ref), open/defaultOpen/onOpenChange, delayDuration, disableHoverableContent, serta props posisi Content. TooltipProvider dapat membagi timing/skip-delay antartooltip; satu Tooltip juga bekerja tanpa provider eksplisit. Trigger harus fokusable dan sudah bernama aksesibel. Untuk disabled button, gunakan wrapper fokusable secara eksplisit. Tooltip berisi penjelasan singkat; aksi interaktif memakai Popover.

## Accordion

```tsx
<Accordion
  type="single"
  collapsible
  variant="separated"
  items={[{ value: 'billing', title: t('Billing'), content: <BillingInfo /> }]}
/>
```

type single memakai string; type multiple memakai string[]. value/defaultValue/onValueChange mengikuti type. variant bordered/separated/plain; item berisi value, title, description?, content, leading?, disabled?. Keyboard/fokus mengikuti primitive Radix dan animasi menghormati reduced motion. Untuk children custom, susun AccordionItem > AccordionTrigger + AccordionContent. Header trigger memakai heading h3 bawaan Radix; atur struktur halaman di sekitarnya sesuai hierarki.

## Alert, Progress, Avatar, dan Breadcrumb

| Komponen    | Kontrak utama                                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alert       | title, description, children, severity info/success/warning/error, variant soft/outlined, icon atau false, actions, dismissible/onDismiss/dismissLabel                  |
| Progress    | value number atau null/undefined untuk indeterminate; min/max; label, showValue, formatValue(percent), size sm/md/lg, color semantik, trackClassName/indicatorClassName |
| Avatar      | name, src, alt, fallback ReactNode, size xs/sm/md/lg/xl, shape circle/rounded, status online/away/busy/offline, statusLabel, imageProps                                 |
| AvatarGroup | children Avatar, max default 5, overflowLabel(count), native div props                                                                                                  |
| Breadcrumb  | items { id?, label, href?, icon?, current? }, separator, renderLink, native nav props                                                                                   |

Alert menggunakan role alert untuk warning/error, status untuk info/success; role dapat diubah. Pesan API yang diberikan ke description tetap mentah. Dismissible bersifat uncontrolled; unmount/remount atau key baru bila alert baru perlu muncul kembali.

Progress menjepit nilai finite ke rentang min/max dan mengekspos aria-valuenow/min/max. formatValue menerima persentase 0–100; min/max/value tetap satuan data asli. Jangan memakai Progress untuk melaporkan persentase palsu pada operasi tanpa total.

Avatar menampilkan gambar, lalu fallback inisial ketika gambar gagal dimuat. Gunakan alt/name untuk label; statusLabel menamai indikator status. AvatarGroup menampilkan overflow, tanpa registry orang atau fetch internal.

Breadcrumb mengasumsikan item terakhir current bila current tidak diisi. renderLink dapat mengembalikan Link milik router aplikasi. Untuk komposisi bebas tersedia BreadcrumbItem/Link/Current/Separator sebagai children dari Breadcrumb. Komponen core tidak mengimpor router.

## Form dan impor selektif

Adapter `@templates/integrations/tanstack.form` menyediakan SliderField, RangeSliderField, RadioGroupField, dan MultiSelectField. useAppForm mendaftarkannya bersama empat field awal. Untuk bundle yang hanya membutuhkan field tertentu, gunakan createFormHook + fieldContext/formContext dengan registrasi selektif. UI core tidak bergantung pada TanStack Form atau Zod.

Ekspor komponen tetap ESM dan factory React diberi anotasi PURE. Aplikasi demo yang mengimpor seluruh katalog akan membawa seluruh katalog; entry kit tidak membuat registry semua komponen. CSS lengkap tetap mencakup seluruh stylesheet secara sengaja.

Default modul yang mengikat komposisi tabel/form/header/panel dijelaskan pada [kontrak modul](module.defaults.md). Cmdk kini memakai Dialog terpusat; AdminLayout menyediakan trigger dan Ctrl/Cmd+K. Combobox fitur tetap searchable. Semua toast dari wrapper memiliki description, dengan fallback untuk pemanggilan lama.
