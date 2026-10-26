# Example application

Seluruh isi folder ini opsional. Starter di `src/app/` dan kit di `src/template/` tidak mengimpornya.

```bash
npm run dev:examples      # Port 5174
npm run build:examples    # Output dist-examples/
npm run preview:examples  # Port 4174
```

- `app/`: entry, provider, routing, stylesheet entry, dan konfigurasi tema demo.
- `clinic/`: Stocks, Dashboard, direktori bersama, Reports, Support, serta state/tipe/data bisnis. `layout/` adalah adapter antara workspace klinik dan AdminLayout dari template.
- `playground/`: katalog UI, contoh interaksi, serta snippet kode.
- `workflows/`: wizard tiga langkah dan kalender event CRUD.
- `mocks/`: endpoint Vite `/api/demo/members`, service async, dan fixture members. Static build memakai fixture URL yang dibundel; file ini tidak berada di public starter.
- `assets/`: branding contoh.

Halaman utama demo adalah `/stocks`; katalog ada di `/components`, wizard di `/wizard`, kalender di `/calendar`, dan tema di `/settings/appearance`.

Tab `/components?category=blocks` berisi enam fitur referensi terbaru. Komposisinya ada di `playground/blocks/`; komponen general ada di `src/template/ui/`. PDF contoh di `playground/assets/` hanya untuk demo.

Data contoh memakai localStorage pada origin demo. Mode, warna, dan layout demo memiliki config/storage sendiri. Download Theme studio demo menggantikan `examples/app/theme.config.ts`.

Folder ini bisa dihapus tanpa mengubah source starter atau template. Script `*:examples` di package.json hanya perlu dihapus bila Anda ingin membersihkan daftar perintah. Dependensi Recharts juga hanya dipakai contoh grafik.
