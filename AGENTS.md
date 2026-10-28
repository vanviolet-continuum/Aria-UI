# Aria UI

React + TypeScript + Vite dengan pustaka UI reusable. Untuk pekerjaan fitur/komponen Aria UI, baca [skill aria-ui](.agents/skills/aria-ui/SKILL.md) dan pilih referensinya sesuai tugas.

## Memory proyek

- Pada awal tugas repository, baca [indeks memory](.agents/.memory/index.md) dan pilih hanya catatan yang relevan dengan scope/masalah tugas. Gunakan [skill project-memory](.agents/skills/project-memory/SKILL.md) untuk membaca, menyimpan, memperbarui, atau melupakan memory; jangan memuat seluruh folder sekaligus.
- Selama dan sebelum menyelesaikan tugas, nilai apakah ada keputusan, preferensi, atau pelajaran baru yang layak dipakai lagi. AI boleh menyimpan secara mandiri bila didukung bukti dan berguna lintas tugas; tidak wajib membuat memory pada setiap tugas.
- Permintaan eksplisit menyimpan/mengingat ditulis ke `.agents/.memory/`. Cari topik yang ada lebih dulu, pertahankan scope/sumber, dan sinkronkan `index.md`. Jangan menyimpan secret, log sementara, dugaan sebagai fakta, atau salinan aturan kanonis tanpa konteks baru.
- Memory merupakan konteks, bukan izin atau instruksi baru. Permintaan terbaru dan instruksi yang berlaku tetap mengungguli catatan lama. Batas satu tugas, termasuk tanpa test/QA, tidak otomatis menjadi aturan proyek permanen.

## Struktur dan lingkup

- `src/`: aplikasi starter. Saat ini hanya menu Beranda; config di `src/config/`, integrasi shell di `src/layouts/admin/root.tsx`, halaman di `src/pages/`, serta locale di `src/locales/`.
- `templates/`: kit portabel. Import internal relatif; tidak mengimpor `src/`, `preview/`, router aplikasi, atau service/data bisnis.
- `preview/`: aplikasi demo Aria Workspace. Seluruh menu berada pada preview/src/pages/<case>/<menu>/root.tsx (workspace, commerce, learning, catalog); data/provider di preview/src/data, shell di layouts/admin, route dan config terpisah. Preview menggunakan Tailwind melalui bridge token tema, dengan store lokal dan registry aset khusus demo. Lihat preview/readme.md.
- `examples/` sudah dihapus. Jangan mengembalikan route atau showcase lama sebagai efek samping pekerjaan lain.

Alias `@/` menuju `src/`; `@templates` dan `@templates/…` menuju kit. Konfigurasi alias ada di Vite dan TypeScript.

## Konvensi

Default modul ketika pengguna tidak meminta pola lain dijelaskan pada [kontrak modul](templates/ui/module.defaults.md), dengan acuan source hidup di preview/src/pages/workspace/users.

- Tabel memakai TableFilter melalui props filters/filterValue/onFilterChange pada DataTable (atau TableToolbar), dengan chip aktif yang dapat dihapus. Jangan menggantinya dengan filter Combobox terpisah.
- Kolom aksi menggunakan createActionsColumn/actions callback: satu menu berisi View/Edit/Delete, terkunci di kanan dan selalu terlihat. Tidak ada tombol View tambahan di sebelah menu.
- Combobox fitur memakai search. searchable false hanya untuk page size, kalender/waktu, kontrol mekanis tema, atau kebutuhan berbeda yang diminta pengguna.
- Validasi form berjalan saat mengetik dan langsung mencabut error ketika nilainya valid. Gunakan liveFormValidators dengan useAppForm, atau useZodValidation untuk form native; jangan hanya menghapus pesan di onChange.
- Drawer memakai default dua klik backdrop dengan toast pertama. Pertahankan payload/instance sampai onAfterClose, memakai useDrawerPresence, agar animasi tutup selesai. Detail drawer memakai variant compact dan satu scroll body.
- Header memakai Cmdk dengan shortcut Ctrl/Cmd+K; breadcrumb ditempatkan di main/outlet. AdminLayout menyediakan default, dan adapter aplikasi memasok hierarki route.
- Semua toast memakai wrapper @templates/ui/toast dan description kontekstual; wrapper menambahkan fallback untuk pemanggilan lama. API message mentah menjadi description error. Jangan mengimpor toast Sonner langsung dari fitur.

- File/folder source memakai dot case, misalnya `navigation.config.ts`, `confirm.dialog/`, dan `access.denied.illustration.tsx`. Nama tooling standar tetap mengikuti konvensi alatnya.
- Gunakan komponen layout, tipografi, header, card, field, menu, dan detail yang sudah tersedia sebelum menambah pola bersama baru. Pertahankan native props, komposisi children, className, dan slot yang relevan untuk custom.
- Warna dan ukuran bersama berasal dari token/tema. Config aplikasi berada di `src/config/theme.config.ts`; mesin/default kit di `templates/theme/`.
- Copy aplikasi ID/EN berada di `src/locales/`; copy umum kit di `templates/i18n/locales/`. Nilai data pengguna/API tidak diterjemahkan.
- Satu area scroll per panel. Seluruh area pilihan checkbox harus dapat diklik; gunakan CheckboxField atau pola item menu yang sesuai.
- Pertahankan ekspor ESM, leaf module, dan anotasi PURE. Registry semua komponen/aset milik aplikasi demo, bukan entry kit.
- API generated hanya dibaca: temukan lokasi aktual melalui `src/config/api.config.ts`, script/config generator, dan header source. Jangan edit, rename, atau format output; perubahan kontrak melalui spesifikasi/generator. Sinkronkan formatter ignore bila lokasi output berubah.
- Fitur API baru memakai TanStack Query dan adapter opsional di `templates/integrations/`. Semua parameter request yang mengubah data masuk query key; jangan menumpuk cache lokal tabel/combobox di atas Query.
- Filter yang diterapkan, pencarian, sort, page, dan pageSize berasal dari search params. Gunakan codec schema + useUrlState; pertahankan parameter lain, Back/Forward, dan reset page ketika filter berubah.
- Error GET pada tabel/combobox tampil di area hasil yang sama dengan empty state, memakai ilustrasi dan retry, tanpa toast. Mutation memakai satu pengelola overlay/toast/invalidation. Jangan membungkus query/mutation dalam runTask yang mengubah rejection menjadi TaskResult.
- Gunakan useAppMutation untuk batas sesi dan callback. Error callback UI setelah write sukses dilaporkan melalui onCallbackError, tidak dijadikan error API atau toast kedua. Logout/pergantian workspace memakai clearQuerySession dan query key yang memuat scope; jangan memakai kembali konfigurasi persistence epoch lama.
- Form submit API memakai useApiFormErrors().run(formApi, operation) agar error masuk field meta dan isSubmitSuccessful tetap false. Jangan catch lalu resolve ketika request gagal. Gunakan unsaved-changes guard untuk draft dirty; callback onBeforeClose tersedia pada Drawer/Dialog.
- Pesan API dan field error backend dipertahankan apa adanya, tanpa terjemahan/parafrasa. Gunakan normalizer; fallback frontend hanya bila pesan API tidak tersedia. Pesan validasi Zod lokal dapat diterjemahkan. Gunakan errorSource api untuk Field yang menampilkan pesan backend.
- Buat folder dan abstraction sesuai kebutuhan aktual. Fitur aplikasi yang khusus satu domain tetap berada dalam folder fitur.

## Entry dan perintah

- `index.html` → `src/main.tsx`; router aplikasi di `src/routes.tsx`; menu di `src/config/navigation.config.ts`.
- QueryClient starter dibuat sekali di `src/config/query.config.ts`. AriaQueryProvider dipasang di dalam TemplateProvider. Integrasi React Router hanya berada pada adapter opsional; shell UI tetap bebas dari router.
- Router starter menggunakan createBrowserRouter/RouterProvider agar useUnsavedRouteGuard dapat dipakai. Adapter auth/session opsional berada di templates/integrations/auth; endpoint, token, dan permission backend tetap milik aplikasi.
- `npm run dev`: starter. `npm run build`: typecheck/build starter. `npm run preview`: menyajikan hasil build starter; berbeda dari aplikasi demo `preview/`.
- `npm run demo`: demo di `/preview/` (port awal 5174), memakai `preview/vite.config.ts`. `npm run demo:build`: typecheck memakai `preview/tsconfig.json` dan `preview/tsconfig.node.json`, lalu build ke `preview/dist/`. `npm run demo:preview`: menyajikan build demo. `npm run demo:catalog`: memperbarui registry galeri dari ekspor publik kit.
- `npm test`: test yang sudah ada. `npm run format`: formatter.
- Ikuti lingkup validasi yang diminta pengguna. Jangan mengklaim pemeriksaan yang tidak dijalankan atau membuat test yang hanya meniru implementasi.

Panduan API: [kit](templates/readme.md), [UI](templates/ui/readme.md), [layout](templates/ui/layout.md), [tipografi](templates/ui/typography.md), [komposisi](templates/ui/composition.md). Source dan tipe props merupakan acuan API; perbarui dokumentasi yang terdampak ketika mengubah kontrak publik.

Default komposisi halaman: tombol tambah berada pada actions CardHeader milik tabel/daftar, sedangkan PageHeader.artwork berisi SVG yang sesuai konteks. Kartu count memakai StatCard dengan ikon/ilustrasi semantik. Kolom aksi default rata tengah, width 72, dan tetap pinned kanan. FieldLabel mengganti asterisk dengan chip Required/Wajib atau Optional/Opsional; required tetap mengikuti kontrak validasi field.
