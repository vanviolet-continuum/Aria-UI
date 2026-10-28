# Membaca default modul

Sebelum membuat modul, baca [kontrak default modul](../../../../../templates/ui/module.defaults.md). Dokumen itu memiliki aturan visual/interaksi dan contoh source yang hidup. Jangan menyalin daftar kebijakan ke fitur atau menciptakan default kedua.

Lalu pilih bagian pekerjaan:

| Bagian                                       | Panduan                                                |
| -------------------------------------------- | ------------------------------------------------------ |
| Susunan halaman, dashboard, wizard, kalender | [Blueprint](../module.blueprints.md)                   |
| Pembagian fitur/route                        | [CRUD](crud.md), [struktur file](../file.structure.md) |
| Filter/chip, kolom aksi, pagination          | [Tabel](table.filters.md)                              |
| Live validation dan submit API               | [Form](forms.validation.md)                            |
| Detail compact dan exit drawer               | [Detail/drawer](detail.drawer.md)                      |
| Pemilik URL/Query/Form                       | [Alur API](../api.workflow.md)                         |
| Source yang sesuai kebutuhan                 | [Peta acuan](../reference.map.md)                      |

Permintaan eksplisit pengguna dapat mengubah pola. Gunakan prop/slot/komposisi yang sesuai tanpa menghilangkan perilaku standar lain yang masih berlaku. Source API tetap menentukan prop yang tersedia.
