# Ikon, ilustrasi, dan katalog

Lihat [ikon](../../../../templates/icons/readme.md) dan [ilustrasi](../../../../templates/ui/illustrations/readme.md) untuk kelompok serta daftar ekspor. Aset SVG reusable tetap berada di `templates/`, walaupun galeri aplikasi lama dihapus.

```tsx
import { Home } from '@templates/icons/navigation/home.icon'
import { EmptyIllustration } from '@templates/ui/illustrations/states/empty.illustration'

<Home size={18} />
<EmptyIllustration size={180} title={t('No records yet')} tone="primary" />
```

Ikon memiliki `size`, `strokeWidth`, `color`, `title`, native SVG props, dan ref. Gunakan `currentColor`/token untuk warna. Ikon dekoratif tidak menggantikan nama aksesibel tombol; berikan label pada IconButton atau kontrol pemiliknya.

Ilustrasi memakai `IllustrationProps` dengan `size`, `tone`, `title`, `className`, dan `style`. Pilih file berdasarkan kebutuhan visual, bukan nomor batch. Nama seperti `access.denied.illustration.tsx` mengikuti dot case. Gunakan frame/style bersama ketika membuat ilustrasi baru.

Import bernama atau leaf module menjaga aset tidak terpakai dapat dibuang bundler. Barrel tetap berupa ekspor ESM. Data pencarian, deskripsi katalog, daftar kategori untuk navigasi, serializer download, dan registry seluruh aset merupakan milik galeri `preview/` ketika demo tersebut diminta. Jangan menghubungkan galeri itu ke `templates/index.ts` atau starter Beranda.

Untuk ilustrasi baru, ikuti gaya kelompok yang sudah ada dan gunakan token tema. Preferensi visual proyek saat ini adalah objek/non-people; buat people hanya jika diminta secara khusus.
