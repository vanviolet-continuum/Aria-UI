# Aria Workspace demo

Jalankan npm run demo lalu buka alamat Vite dengan base /preview/. Starter npm run dev tetap memakai src dan hanya menu Beranda.

## Struktur contoh

```text
preview/
  index.html
  vite.config.ts
  tsconfig.json
  scripts/update.catalog.mjs
  src/
    app.tsx                  # Entry komposisi provider dan router
    main.tsx                 # TemplateProvider, i18n, tema, stylesheet Tailwind
    providers.tsx            # Orkestrasi store demo
    routes.tsx               # Route lazy, fallback, dan redirect tautan lama
    config/
      navigation.config.ts   # Satu sumber menu dan konteks breadcrumb
      theme.config.ts
      i18n.config.ts
    layouts/admin/root.tsx   # Adapter AdminLayout, Cmdk, breadcrumb outlet
    pages/
      home/root.tsx
      workspace/             # dashboard, users, projects, tasks, calendar,
                             # clients, invoices, documents, activity, settings
      commerce/              # overview, products, orders, inventory, customers
      learning/              # overview, courses, students, enrollments,
                             # classroom, course.builder
      catalog/               # overview, components, icons, illustrations, theme
    data/
      workspace/             # Orang, pengaturan, aktivitas
      operations/            # Proyek, tugas, klien, tagihan, dokumen, jadwal
      scenarios/             # Dataset Commerce/Learning dan aturan relasinya
    components/              # Komposisi bersama milik aplikasi demo
    catalog/                 # Registry publik UI/ikon/ilustrasi milik demo
    locales/                 # Copy aplikasi ID/EN
    styles.css               # Satu entry bridge Tailwind + token tema Aria
```

Semua menu adalah halaman dalam pages/<case>/<menu>. Tidak ada menu yang disimpan di features atau folder workspace tingkat root. Komponen khusus halaman diletakkan di dekat root.tsx; contoh wizard memisahkan brief, curriculum, access, review, dan types. Data/provider dipisahkan dari halaman. Komponen kit yang portabel tetap di templates.

## Case dan alur kerja

| Area            | Menu dan interaksi                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Beranda         | Ringkasan lintas case, pintasan alur, dan aktivitas terbaru.                                                              |
| Team Operations | Dashboard, Users CRUD/selection, Projects, Tasks board/tabel, Calendar, Clients, Invoices, Documents, Activity, Settings. |
| Commerce        | Ringkasan toko/grafik, produk grid/tabel, pelanggan/riwayat, pesanan dan tahap fulfillment, stok serta dialog restok.     |
| Learning        | Ringkasan pembelajaran, kursus grid/tabel, peserta, enrollment, classroom, dan wizard pembuat kursus.                     |
| Katalog UI      | Sidebar sesuai folder publik kit, panduan Markdown dari kit, contoh interaktif, galeri aset, dan Theme Studio.            |

Pesanan menyimpan snapshot nama dan harga satuan. Create/edit/cancel memperbarui reservasi stok secara atomik; pembatalan mengembalikan unit. Produk/pelanggan yang terkait pesanan tidak dapat dihapus. Hanya pesanan pending/cancelled yang dapat dihapus. Restok menambahkan unit yang tersedia.

Enrollment unik untuk pasangan peserta-kursus. Kursus harus published untuk menerima enrollment baru. Classroom menyimpan completedLessons per enrollment dan menyediakan alternatif tombol untuk semua interaksi. Wizard juga mengubah kurikulum kursus yang sudah ada, mempertahankan progres untuk ID pelajaran yang masih tersedia, dan membersihkan progres pelajaran yang dihapus. Wizard memvalidasi setiap tahap, mendukung pengurutan pelajaran melalui drag atau tombol panah, mempertahankan draft saat kembali, dan membuat kursus beserta enrollment pilihan dalam satu commit lokal.

Calendar menyediakan navigasi bulan/minggu/hari, akhir pekan, create dari rentang, preview hover/fokus, detail/editor, serta drag/resize dengan revert bila penyimpanan gagal. Waktu mengikuti zona browser; date/view/weekends disimpan di URL. Tinggi auto menjaga scroll pada outlet. Tasks menyediakan drag antar-status dan menu status sebagai alternatif keyboard/touch.

Tabel memakai filter ber-chip yang dapat dihapus, satu menu aksi terkunci kanan, dan URL untuk pencarian/filter/sort/pagination. Form memakai validasi live dan guard draft. Drawer tetap mounted selama exit, dengan dua klik backdrop. Semua toast mempunyai description. Cmdk mencari menu dan record lintas case; breadcrumb berada di outlet.

## Tema dan Tailwind

Preview memakai Tailwind v4 melalui @tailwindcss/vite. styles.css mengimpor templates/integrations/tailwind/styles.css sekali, bukan stylesheet kit kedua di luar layer. Komposisi halaman menggunakan utility semantik seperti bg-surface, text-content, border-outline, gap-aria-md, p-aria-lg, dan rounded-aria-lg. Text/Heading tetap menjaga peran tipografi kit. ThemeProvider menjadi sumber warna, ukuran, radius, mode, dan motion.

react-markdown dan remark-gfm hanya dipakai dokumentasi preview. HoverCard, Wizard, AreaChart, dan FullCalendar berada di kit. Import selektif/leaf module tetap tersedia; registry seluruh komponen/aset hanya dimiliki demo. npm run demo:catalog memperbarui registry setelah ekspor/folder publik berubah.

## Data lokal

- aria-teams-workspace-v1: anggota, pengaturan, aktivitas.
- aria-teams-operations-v1: operasional tim.
- aria-demo-scenarios-v1: Commerce dan Learning.

Data divalidasi Zod saat dibaca. Storage yang tidak tersedia memakai state sesi. Reset pada Settings memulihkan ketiga dataset; tema/bahasa mempunyai key terpisah. Store ini sengaja merupakan adapter demo, bukan pola cache API produksi. Proyek dengan API mengikuti TanStack Query, generated SDK read-only, dan panduan templates/integrations.

Tidak ada autentikasi/backend, pengiriman email, supplier, pembayaran, atau sinkronisasi kalender eksternal. CSV/Markdown dibuat lokal. Source test lama dipertahankan; batas test/build/QA mengikuti instruksi tugas.

## Komposisi visual default

Header halaman memakai SVG kontekstual melalui ModuleArtwork dan PageHeader.artwork. Tombol tambah utama berada pada header card daftar. Semua statistik memakai StatCard dengan ikon semantik; pilihan visual di metric.visual.ts tetap milik demo. Footer sidebar mempunyai satu pemilik border/padding tanpa margin kosong tambahan. Field form memakai chip Wajib/Opsional melalui FieldLabel, bukan asterisk.
