# StatCard

Kartu angka dengan label, nilai, keterangan, dan ikon/ilustrasi. Gunakan untuk count dan ringkasan data agar jarak serta hierarki teks konsisten.

```tsx
import { StatCard } from '@templates/ui/stat.card'
import { Users } from '@templates/icons'

;<StatCard
  label={t('Active users')}
  value={activeUsers}
  description={t('Ready to collaborate')}
  icon={<Users size={22} />}
  color="success"
/>
```

label, value, description, icon, dan illustration menerima ReactNode. Berikan visual sesuai arti statistik. Jika icon tidak diberikan tersedia ikon Layers umum; icon false menyembunyikannya secara eksplisit. illustration menggantikan icon dengan area SVG lebih besar.

color memakai primary/secondary/success/warning/error/info. valueClassName, valueStyle, visualClassName, className, style, native div props, dan children tersedia untuk custom. Children ditambahkan setelah ringkasan utama. Warna, radius, tipografi, dan spacing mengambil token tema. Visual dekoratif disembunyikan dari pembaca layar; arti kartu dijelaskan label dan nilainya.

Kit tidak menebak ikon bisnis. Pilihan konteks berada di aplikasi; contoh demo: preview/src/components/record.display.tsx dan metric.visual.ts.
