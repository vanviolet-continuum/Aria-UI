# Aria UI

React + TypeScript + Vite dengan pustaka UI reusable. Untuk pekerjaan fitur/komponen Aria UI, baca [skill aria-ui](.agents/skills/aria-ui/SKILL.md) dan pilih referensinya sesuai tugas.

## Struktur dan lingkup

- `src/`: aplikasi starter. Saat ini hanya menu Beranda; config di `src/config/`, integrasi shell di `src/layouts/admin/root.tsx`, halaman di `src/pages/`, serta locale di `src/locales/`.
- `templates/`: kit portabel. Import internal relatif; tidak mengimpor `src/`, `preview/`, router aplikasi, atau service/data bisnis.
- `preview/`: folder kosong yang disediakan untuk aplikasi demo, galeri ilustrasi/ikon, dan dokumentasi komponen di masa mendatang. Isi area ini ketika pengguna meminta pekerjaan demo.
- `examples/` sudah dihapus. Jangan mengembalikan route atau showcase lama sebagai efek samping pekerjaan lain.

Alias `@/` menuju `src/`; `@templates` dan `@templates/…` menuju kit. Konfigurasi alias ada di Vite dan TypeScript.

## Konvensi

- File/folder source memakai dot case, misalnya `navigation.config.ts`, `confirm.dialog/`, dan `access.denied.illustration.tsx`. Nama tooling standar tetap mengikuti konvensi alatnya.
- Gunakan komponen layout, tipografi, header, card, field, menu, dan detail yang sudah tersedia sebelum menambah pola bersama baru. Pertahankan native props, komposisi children, className, dan slot yang relevan untuk custom.
- Warna dan ukuran bersama berasal dari token/tema. Config aplikasi berada di `src/config/theme.config.ts`; mesin/default kit di `templates/theme/`.
- Copy aplikasi ID/EN berada di `src/locales/`; copy umum kit di `templates/i18n/locales/`. Nilai data pengguna/API tidak diterjemahkan.
- Satu area scroll per panel. Seluruh area pilihan checkbox harus dapat diklik; gunakan CheckboxField atau pola item menu yang sesuai.
- Pertahankan ekspor ESM, leaf module, dan anotasi PURE. Registry semua komponen/aset milik aplikasi demo, bukan entry kit.
- Buat folder dan abstraction sesuai kebutuhan aktual. Fitur aplikasi yang khusus satu domain tetap berada dalam folder fitur.

## Entry dan perintah

- `index.html` → `src/main.tsx`; router aplikasi di `src/routes.tsx`; menu di `src/config/navigation.config.ts`.
- `npm run dev`: starter. `npm run build`: typecheck/build starter. `npm run preview`: menyajikan hasil build starter; berbeda dari folder demo kosong.
- `npm test`: test yang sudah ada. `npm run format`: formatter.
- Ikuti lingkup validasi yang diminta pengguna. Jangan mengklaim pemeriksaan yang tidak dijalankan atau membuat test yang hanya meniru implementasi.

Panduan API: [kit](templates/readme.md), [UI](templates/ui/readme.md), [layout](templates/ui/layout.md), [tipografi](templates/ui/typography.md), [komposisi](templates/ui/composition.md). Source dan tipe props merupakan acuan API; perbarui dokumentasi yang terdampak ketika mengubah kontrak publik.
