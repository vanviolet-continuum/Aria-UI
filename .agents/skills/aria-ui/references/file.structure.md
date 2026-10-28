# Struktur fitur dan penamaan

Pilih root berdasarkan [arsitektur](architecture.md), lalu simpan file pada pemilik fitur.

| Jenis                 | Starter                         | Demo                                     |
| --------------------- | ------------------------------- | ---------------------------------------- |
| Menu/halaman          | src/pages/<menu>/root.tsx       | preview/src/pages/<case>/<menu>/root.tsx |
| Route                 | src/routes.tsx                  | preview/src/routes.tsx                   |
| Menu                  | src/config/navigation.config.ts | preview/src/config/navigation.config.ts  |
| Shell/router adapter  | src/layouts/admin/root.tsx      | preview/src/layouts/admin/root.tsx       |
| Locale                | src/locales/                    | preview/src/locales/                     |
| Konfigurasi           | src/config/                     | preview/src/config/                      |
| Data demo lintas menu | Tidak disalin ke starter        | preview/src/data/<case>/                 |

Demo memiliki case workspace, commerce, learning, catalog. Jangan membuat direktori menu kedua seperti preview/features atau preview/workspace yang sejajar dengan pages. Komponen aplikasi yang lintas menu boleh berada pada components; kit portabel berada di templates.

## Bentuk fitur sesuai kebutuhan

Fitur kecil boleh cukup root.tsx. Tambahkan file ketika sudah memiliki tanggung jawab nyata:

| File                                      | Digunakan untuk                                         |
| ----------------------------------------- | ------------------------------------------------------- |
| root.tsx                                  | Entry menu, parent/outlet, atau koordinator halaman     |
| list.tsx                                  | Daftar terpisah bila koordinator sudah perlu dibagi     |
| form.tsx                                  | Isi tambah/ubah yang sama                               |
| add.tsx / update.tsx                      | Wrapper mode/route bila alurnya memang terpisah         |
| detail.tsx                                | Isi detail yang dapat dipakai halaman/drawer            |
| drawer.tsx                                | Adapter panel khusus fitur bila tidak lagi ringkas      |
| search.schema.ts                          | Codec kriteria URL                                      |
| form.schema.ts                            | Schema nilai form ketika perlu dipisah                  |
| query.keys.ts / queries.ts / mutations.ts | Key dan operasi backend yang sudah dipakai              |
| api.ts / types.ts                         | Adapter SDK atau tipe lokal yang benar-benar diperlukan |

Jangan menghasilkan semua file sebagai boilerplate, membuat barrel per folder tanpa kebutuhan, atau menduplikasi DTO generated ke types.ts. Domain wrapper tetap dekat fitur; helper lintas domain tidak otomatis menjadi API publik kit.

## Menambah menu

Pasang route pada router target, menu yang dapat dibuka pada navigation config target, dan copy ID/EN pada locale target. Hubungkan hierarchy breadcrumb melalui shell aplikasi. Starter saat ini Beranda; penambahan menu mengikuti permintaan, bukan efek samping memperbarui kit.

Untuk preview, pertahankan relasi data/provider pada case yang sesuai. Baca [preview](preview.app.md) sebelum mengubah store atau menu lintas case.

## Nama dan ekspor

File/folder source memakai dot case: `confirm.dialog/`, `access.denied.illustration.tsx`, `query.keys.ts`, `course.builder/`. Nama satu kata tetap sederhana: root.tsx, form.tsx, index.ts. Komponen PascalCase; hook use…. Nama tooling standar mengikuti alatnya, termasuk AGENTS.md, SKILL.md, package.json dan folder skill aria-ui.

Komponen kit baru berada di `templates/ui/<nama>/` dengan leaf index.ts, ekspor bernama yang diperlukan dari UI index, serta stylesheet terpisah bila perlu. Sambungkan stylesheet pada entry kit yang sesuai dan perbarui dokumentasi kontrak. Jangan menambah registry semua komponen/aset ke entry kit.

SDK generated tetap di lokasi generator aktual. Jangan memindahkan, rename, atau format output agar cocok dengan struktur fitur. Config/client aplikasi memanggilnya melalui adapter; lihat [generated API](generated.api.md).
