# Benda dan botani

20 SVG tanpa figur manusia: delapan perlengkapan, enam benda rumah, dan enam ilustrasi tanaman atau alam. Setiap komposisi memakai satu fokus utama, garis membulat setebal 1.8, serta detail sekunder yang lebih ringan. Koleksi tersedia di kategori **Objects**, **Everyday life**, dan **Nature** pada `/illustrations`.

Komponen memakai `IllustrationProps` yang sama: `size`, `tone`, `title`, `className`, dan `style`. Rasio SVG adalah 260:180. Tanpa `title`, ilustrasi disembunyikan dari screen reader. Warna mengikuti token `--illustration-*` dan tema aplikasi.

```tsx
import {
  VinylPlayerIllustration,
  CeramicVaseIllustration,
  MonsteraIllustration,
} from '@/template/ui/illustrations'
import '@/template/styles.css'

<VinylPlayerIllustration size={220} title="Musik pilihan" />
<CeramicVaseIllustration size={220} tone="violet" />
<MonsteraIllustration size={220} tone="mint" title="Tanaman dalam ruang" />
```

Semua komponen juga diekspor dari `@/template/ui/illustrations`, `@/template/ui`, dan `@/template`. Galeri menyediakan pencarian, salin kode React, salin SVG, dan unduh SVG dengan warna tema saat ini.

## Perlengkapan dan perangkat

Buka `/illustrations?category=objects`.

| Komponen                         | Ilustrasi              |
| -------------------------------- | ---------------------- |
| `BinocularsIllustration`         | Teropong               |
| `VinylPlayerIllustration`        | Pemutar piringan hitam |
| `PortableRadioIllustration`      | Radio portabel         |
| `InstantCameraIllustration`      | Kamera instan          |
| `TableFanIllustration`           | Kipas meja             |
| `MechanicalKeyboardIllustration` | Keyboard mekanis       |
| `CoffeeGrinderIllustration`      | Penggiling kopi        |
| `FrenchPressIllustration`        | French press           |

## Benda rumah

Buka `/illustrations?category=lifestyle`.

| Komponen                  | Ilustrasi        |
| ------------------------- | ---------------- |
| `ArmchairIllustration`    | Kursi santai     |
| `PendantLampIllustration` | Lampu gantung    |
| `CeramicVaseIllustration` | Vas keramik      |
| `WallShelfIllustration`   | Rak dinding      |
| `WateringCanIllustration` | Penyiram tanaman |
| `CandleIllustration`      | Lilin            |

## Tanaman dan alam

Buka `/illustrations?category=nature`.

| Komponen                   | Ilustrasi       |
| -------------------------- | --------------- |
| `BonsaiIllustration`       | Bonsai          |
| `MonsteraIllustration`     | Monstera        |
| `FernIllustration`         | Pakis           |
| `SucculentIllustration`    | Sukulen         |
| `MushroomsIllustration`    | Jamur           |
| `PebbleGardenIllustration` | Taman batu mini |
