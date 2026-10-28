# Format dan pemeliharaan memory

Lokasi data selalu `.agents/.memory/` pada root repository yang sedang dikerjakan. Nama file/folder memakai dot case; nama skill project-memory mengikuti konvensi skill.

## Struktur minimal

```text
.agents/
  .memory/
    index.md
    decisions/       dibuat saat ada keputusan yang perlu disimpan
    preferences/     dibuat saat ada preferensi yang perlu disimpan
    pitfalls/        dibuat saat ada pelajaran masalah yang perlu disimpan
    integrations/    dibuat saat ada konteks integrasi yang perlu disimpan
  skills/
    project-memory/
      SKILL.md
```

Kategori adalah pilihan pengelompokan, bukan folder wajib. Topik kecil boleh langsung di root .memory. Jangan membuat folder/file kosong untuk setiap fitur, atau menyimpan memory proyek dalam folder global pengguna.

## Catatan topik

Gunakan Markdown dengan frontmatter berikut. Ini template penulisan; isi dengan fakta/sumber nyata sebelum disimpan, jangan membuat catatan dari teks template.

```yaml
---
type: decision
status: active
summary: 'Satu kalimat tentang keputusan atau pengetahuan yang berguna.'
scope:
  - 'Path, fitur, atau jenis pekerjaan tempat informasi ini berlaku.'
tags:
  - 'Istilah pencarian yang benar-benar terkait'
updated: YYYY-MM-DD
sources:
  - 'Path source/dokumen dari root repo, atau inti permintaan pengguna dengan tanggal bila tersedia'
---
```

Setelah frontmatter, tulis judul lalu isi singkat: apa yang perlu diingat, alasan yang membantu keputusan, dan kondisi yang membuatnya perlu diperiksa ulang. Gunakan bahasa proyek; nama API/file tetap mengikuti source.

| Field   | Makna                                                                                         |
| ------- | --------------------------------------------------------------------------------------------- |
| type    | preference, decision, pitfall, integration, atau context untuk konteks yang diminta eksplisit |
| status  | active, needs-verification, atau superseded                                                   |
| summary | Ringkasan spesifik untuk pemilihan; tidak sekadar “catatan penting”                           |
| scope   | Area/jenis tugas yang berlaku; jangan memberi scope seluruh repo bila hanya satu modul        |
| tags    | Sedikit istilah yang membantu pencarian, termasuk sinonim bila berguna                        |
| updated | Tanggal edit aktual; bukan tanggal verifikasi semua fakta                                     |
| sources | Bukti/pointer yang dapat ditelusuri; jangan mengarang lokasi pesan/commit/hasil pemeriksaan   |

Tidak perlu confidence numerik, skor prioritas, atau ID acak. Nama file stabil menjadi identitas. Untuk sumber percakapan tanpa link/ID, tulis “Pengguna, percakapan proyek” dan inti keputusan; tambahkan tanggal hanya jika diketahui.

Scope berupa teks/path/glob untuk membantu AI memilih, bukan pola yang dieksekusi otomatis. Fakta konfigurasi yang bisa berubah tetap dicek pada source. Jika waktu berakhirnya konteks diketahui, tulis secara eksplisit pada batas berlaku dan ringkasan indeks.

## Indeks kecil, bukan salinan seluruh isi

index.md berisi baris yang mudah dipilih:

| Memory                     | Gunakan ketika                                | Kata kunci      | Status                         |
| -------------------------- | --------------------------------------------- | --------------- | ------------------------------ |
| Link relatif ke file topik | Scope/masalah yang dibantu dalam satu kalimat | Istilah relevan | active atau needs-verification |

Baris di atas menerangkan bentuk tabel, bukan entri yang harus dibuat. Jangan memasukkan frontmatter/isi panjang, log sesi, atau semua sumber ke indeks. Metadata rinci dimiliki file topik.

Setelah create/update/delete, sesuaikan link, ringkasan, kata kunci, dan status. Catatan superseded tidak masuk daftar kandidat aktif; tautkan dari penggantinya hanya bila riwayat itu berguna. Jika indeks membesar, kelompokkan dengan heading kategori dalam file yang sama sebelum menambah indeks bertingkat.

## Contoh keputusan penyimpanan

- “Untuk perubahan ini jangan QA”: batas tugas; tidak menjadi preference permanen. Jika pengguna meminta default proyek untuk tugas berikutnya, simpan lingkup yang dinyatakan.
- Default tabel sudah ada pada kontrak modul: arahkan ke kontrak. Jangan menulis ulang seluruh aturan dalam memory.
- Perbaikan masalah yang penyebabnya telah dibuktikan: simpan gejala/penyebab, solusi dan kondisi berlaku, plus path sumber; jangan hanya “jangan pakai komponen X”.
- API hasil generator belum tersedia: jangan menyimpan nama metode/DTO hasil tebakan. Jika pengguna menjelaskan rencana integrasi, tandai sebagai rencana, bukan kontrak yang sudah berjalan.
- Catatan lama menyebut file yang pindah: temukan source pengganti sebelum mengubah pointer. Bila belum terbukti, tandai needs-verification dan jangan jadikan dasar perubahan kode.
- Pengguna mengganti keputusan: perbarui topik dan alasannya, tanpa mempertahankan dua keputusan aktif.
- Pengguna meminta melupakan satu preferensi: hapus preferensi itu saja, rapikan file/indeks yang terdampak, dan jangan menyimpan ulang isi yang dilupakan.

## Perawatan proporsional

Rawat catatan yang disentuh tugas; jangan melakukan audit seluruh memory setiap giliran. Gabungkan duplikat jika isinya memang sama, pertahankan scope/bukti yang berbeda, dan hindari menimpa edit paralel. Jangan menghapus file yang sumber/otoritasnya masih diperdebatkan hanya untuk merapikan indeks.

Memory yang salah/usang harus dikoreksi dari bukti, bukan disalin ke ringkasan baru. Dokumentasi kanonis dan source tetap pemilik detail implementasi.
