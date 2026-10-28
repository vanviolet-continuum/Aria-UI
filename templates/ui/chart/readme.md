# AreaChart

Grafik satu seri memakai Recharts. Axis, garis, fill, dan tooltip mengambil token tema Aria. Import dari leaf module agar dependency grafik hanya dipakai oleh fitur yang memerlukannya.

```tsx
import { AreaChart } from '@templates/ui/chart'

;<AreaChart
  data={weeklyOrders}
  categoryKey="day"
  valueKey="amount"
  label={t('Order value')}
  height={260}
  formatValue={formatCurrency}
  formatAxisValue={formatCompactNumber}
/>
```

data berupa array object. categoryKey dan valueKey adalah key data yang dipilih secara eksplisit. Nilai seri harus angka. color menerima primary, success, info, warning, atau violet. height berupa pixel; container mengikuti lebar parent. className dan native div props tersedia.

Animasi grafik dimatikan agar tidak bertentangan dengan preferensi motion. label memberi konteks aksesibel, dan Recharts accessibility layer menyediakan navigasi data. Untuk kebutuhan multi-seri atau tipe grafik lain, susun Recharts langsung menggunakan token tema yang sama. Loading/error/empty ditangani pada area hasil aplikasi, bukan disamarkan menjadi data nol.
