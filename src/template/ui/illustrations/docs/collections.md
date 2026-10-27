# Koleksi tematik SVG

100 ilustrasi SVG dalam 10 kategori, masing-masing berisi 10 adegan. Galeri di `/illustrations` menampilkan koleksi ini bersama batch lain. Jumlah seluruh koleksi ditampilkan langsung di galeri. Setiap kartu mendukung salin komponen React, salin SVG, dan unduh SVG mandiri dengan warna tema yang sedang dipakai.

Semua komponen memakai props `IllustrationProps`: `size`, `tone`, `title`, `className`, dan `style`. Tanpa `title`, ilustrasi disembunyikan dari screen reader. Warna berasal dari token `--illustration-*` untuk mengikuti tema terang dan gelap.

```tsx
import { MountainIllustration, RobotIllustration, PetCatIllustration } from '@/template/ui/illustrations'
import '@/template/styles.css'

<MountainIllustration size={260} tone="mint" title="Jelajahi alam" />
<RobotIllustration size={220} tone="violet" title="Asisten siap membantu" />
<PetCatIllustration size={180} title="Teman di rumah" />
```

Komponen juga diekspor dari `@/template/ui/illustrations`, `@/template/ui`, serta `@/template`. Setiap file tema berisi 10 komponen bernama; utilitas adegan bersifat internal.

## Nature

Buka `/illustrations?category=nature`.

| Komponen                   | Ilustrasi       |
| -------------------------- | --------------- |
| `MountainIllustration`     | Pegunungan      |
| `ForestIllustration`       | Hutan           |
| `SunriseIllustration`      | Matahari terbit |
| `FlowerGardenIllustration` | Taman bunga     |
| `CactusIllustration`       | Kaktus          |
| `TreeHouseIllustration`    | Rumah pohon     |
| `WaterfallIllustration`    | Air terjun      |
| `OceanIllustration`        | Samudra         |
| `CampingIllustration`      | Berkemah        |
| `RainbowIllustration`      | Pelangi         |

## Travel

Buka `/illustrations?category=travel`.

| Komponen                    | Ilustrasi        |
| --------------------------- | ---------------- |
| `AirplaneIllustration`      | Pesawat          |
| `TrainIllustration`         | Kereta           |
| `BicycleIllustration`       | Sepeda           |
| `SailboatIllustration`      | Perahu layar     |
| `RoadTripIllustration`      | Perjalanan darat |
| `PassportIllustration`      | Paspor           |
| `LuggageIllustration`       | Koper            |
| `HotAirBalloonIllustration` | Balon udara      |
| `IslandIllustration`        | Pulau            |
| `CityscapeIllustration`     | Lanskap kota     |

## Food & drink

Buka `/illustrations?category=food`.

| Komponen                  | Ilustrasi      |
| ------------------------- | -------------- |
| `BreakfastIllustration`   | Sarapan        |
| `PizzaIllustration`       | Pizza          |
| `SushiIllustration`       | Sushi          |
| `BurgerIllustration`      | Burger         |
| `CupcakeIllustration`     | Kue mangkuk    |
| `IceCreamIllustration`    | Es krim        |
| `FruitBasketIllustration` | Keranjang buah |
| `TeaPotIllustration`      | Teko teh       |
| `CookingIllustration`     | Memasak        |
| `PicnicIllustration`      | Piknik         |

## Health & wellness

Buka `/illustrations?category=health`.

| Komponen                  | Ilustrasi         |
| ------------------------- | ----------------- |
| `HeartCareIllustration`   | Kesehatan jantung |
| `MedicalKitIllustration`  | Kotak medis       |
| `WellnessIllustration`    | Perawatan diri    |
| `YogaIllustration`        | Yoga              |
| `FitnessIllustration`     | Latihan kebugaran |
| `RunningIllustration`     | Berlari           |
| `HydrationIllustration`   | Hidrasi           |
| `SleepIllustration`       | Tidur             |
| `HealthyMealIllustration` | Makanan sehat     |
| `MeditationIllustration`  | Meditasi          |

## Technology

Buka `/illustrations?category=technology`.

| Komponen                             | Ilustrasi         |
| ------------------------------------ | ----------------- |
| `RobotIllustration`                  | Robot             |
| `RocketIllustration`                 | Roket             |
| `SmartphoneIllustration`             | Ponsel            |
| `SmartwatchIllustration`             | Jam pintar        |
| `HeadphonesIllustration`             | Headphone         |
| `GamingIllustration`                 | Bermain gim       |
| `VirtualRealityIllustration`         | Realitas virtual  |
| `ArtificialIntelligenceIllustration` | Kecerdasan buatan |
| `SatelliteIllustration`              | Satelit           |
| `DroneIllustration`                  | Drone             |

## Finance

Buka `/illustrations?category=finance`.

| Komponen                       | Ilustrasi           |
| ------------------------------ | ------------------- |
| `SavingsIllustration`          | Tabungan            |
| `WalletIllustration`           | Dompet              |
| `InvestmentIllustration`       | Investasi           |
| `BudgetIllustration`           | Anggaran            |
| `BankingIllustration`          | Perbankan           |
| `CoinsIllustration`            | Koin                |
| `ReceiptIllustration`          | Struk               |
| `CalculatorIllustration`       | Kalkulator          |
| `CurrencyExchangeIllustration` | Penukaran mata uang |
| `FinancialGoalIllustration`    | Target keuangan     |

## Business

Buka `/illustrations?category=business`.

| Komponen                      | Ilustrasi          |
| ----------------------------- | ------------------ |
| `BrainstormingIllustration`   | Curah ide          |
| `InterviewIllustration`       | Wawancara          |
| `HandshakeIllustration`       | Jabat tangan       |
| `StrategyIllustration`        | Strategi           |
| `ProjectPlanningIllustration` | Perencanaan proyek |
| `TargetIllustration`          | Sasaran            |
| `GrowthIllustration`          | Pertumbuhan        |
| `RemoteWorkIllustration`      | Kerja jarak jauh   |
| `MeetingIllustration`         | Rapat              |
| `DeskIllustration`            | Meja kerja         |

## Creative & arts

Buka `/illustrations?category=creative`.

| Komponen                        | Ilustrasi          |
| ------------------------------- | ------------------ |
| `ArtStudioIllustration`         | Studio seni        |
| `MusicIllustration`             | Musik              |
| `PhotographyStudioIllustration` | Studio fotografi   |
| `VideoEditingIllustration`      | Penyuntingan video |
| `DesignToolsIllustration`       | Alat desain        |
| `ColorPaletteIllustration`      | Palet warna        |
| `PodcastIllustration`           | Podcast            |
| `WritingIllustration`           | Menulis            |
| `SculptureIllustration`         | Patung             |
| `TheaterIllustration`           | Teater             |

## Science

Buka `/illustrations?category=science`.

| Komponen                  | Ilustrasi        |
| ------------------------- | ---------------- |
| `MicroscopeIllustration`  | Mikroskop        |
| `TelescopeIllustration`   | Teleskop         |
| `ChemistryIllustration`   | Kimia            |
| `AtomIllustration`        | Atom             |
| `DnaIllustration`         | DNA              |
| `PlanetIllustration`      | Planet bercincin |
| `SolarSystemIllustration` | Tata surya       |
| `LaboratoryIllustration`  | Laboratorium     |
| `MagnetIllustration`      | Magnet           |
| `LightBulbIllustration`   | Bola lampu       |

## Everyday life

Buka `/illustrations?category=lifestyle`.

| Komponen                  | Ilustrasi         |
| ------------------------- | ----------------- |
| `HomeIllustration`        | Rumah nyaman      |
| `KeyIllustration`         | Kunci             |
| `UmbrellaIllustration`    | Payung            |
| `BackpackIllustration`    | Tas ransel        |
| `ShoesIllustration`       | Sepatu            |
| `ShoppingBagIllustration` | Tas belanja       |
| `LaundryIllustration`     | Cucian            |
| `CleaningIllustration`    | Bersih-bersih     |
| `PetDogIllustration`      | Anjing peliharaan |
| `PetCatIllustration`      | Kucing peliharaan |
