# Tailwind dan tema Aria yang sama

Source: [token bridge](../../../../templates/integrations/tailwind/theme.css), [entry layer](../../../../templates/integrations/tailwind/styles.css), dan [panduan integrasi](../../../../templates/integrations/readme.md).

Tailwind adalah opt-in. Jangan menginstal, mengganti CSS entry, atau memigrasikan seluruh aplikasi hanya karena suatu halaman diberi className. Baca versi dan konfigurasi proyek konsumen ketika integrasi Tailwind memang diminta.

## Tailwind v4

Setelah aplikasi konsumen memasang/configure Tailwind v4, import `@templates/integrations/tailwind/styles.css` sekali sebagai pengganti import stylesheet kit biasa. Entry ini memuat Tailwind, kit pada layer components, dan @theme inline yang merujuk token runtime. Jangan mengimpor kit lengkap lagi di luar layer karena akan mengubah prioritas cascade.

Untuk proyek Tailwind yang sudah dikonfigurasi, import theme.css dan atur layer kit secara eksplisit. Preflight/reset harus mempunyai satu urutan yang jelas. Varian dark mengikuti html data-theme, bukan preferensi OS yang berbeda dari pilihan ThemeProvider.

Gunakan class semantik seperti bg-surface, text-content, border-outline, p-aria-md, gap-aria-gap, rounded-aria-lg, shadow-aria-sm, dan text-aria-body. Utility type-aria-_ mengikuti seluruh role termasuk tone dan transform; text-aria-_ menyediakan metrik font. Bridge menyediakan 20 peran tipografi, spacing/radius/shadow dinamis, dan warna yang membaca CSS variables yang sama dengan komponen.

Ukuran bawaan p-4/text-sm tetap berasal dari konfigurasi Tailwind. Gunakan alias aria-\* ketika ukuran harus mengikuti tema Aria. Props/style inline eksplisit lebih kuat daripada CSS utility; gunakan props, token, atau slot ketika mengubah Heading/Text atau blok yang memiliki override inline.

Tailwind v3 memakai theme.extend/pemetaan CSS variable yang sesuai versinya; jangan menyalin @theme v4 ke proyek v3. UI kit tetap dapat dipakai dengan CSS biasa dan tidak mengimpor dependency Tailwind pada entry JavaScript core.
