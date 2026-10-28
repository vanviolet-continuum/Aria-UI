# Menyelesaikan perubahan sesuai lingkup

Gunakan bagian yang terkait tugas. Panduan ini tidak menambah izin, mewajibkan approval baru, atau mengharuskan audit seluruh aplikasi.

## Kesesuaian hasil

- Modul baru: bandingkan komposisi dengan kontrak modul dan source acuan yang dipilih. Perbedaan mengikuti kebutuhan pengguna/domain, bukan karena AI melewatkan komponen.
- Perbaikan kecil: fokus pada penyebab, pemilik default, dan pemanggil yang terdampak; jangan redesign modul lain.
- Kit/public API: pertahankan pemanggil lama yang relevan, native props, slot, ekspor/stylesheet/leaf, serta dokumentasi kontrak.
- Data backend: bedakan gagal, kosong, tidak ditemukan, dan sukses; pertahankan raw backend message, satu feedback mutation, URL state, query scope, serta draft saat gagal.
- Layout/interaksi: perhatikan min-width pada flex/grid, lebar kolom aksi, chip di baris bawah search, satu scroll per panel, serta payload drawer saat exit.
- Kontrol: label/requirement sesuai schema, keyboard/fokus tetap bekerja, seluruh area checkbox dapat dipilih, gesture memiliki alternatif yang relevan.

## Batas pemeriksaan

Ikuti batas pengguna. Bila pengguna meminta tanpa test/QA, jangan menjalankan test, build/typecheck, browser QA, atau evaluasi agen untuk mengakalinya. Lakukan perubahan yang diminta dan nyatakan pemeriksaan tersebut tidak dijalankan.

Jika pemeriksaan diizinkan, pilih yang memberi bukti atas perubahan: pemeriksaan tipe untuk kontrak TypeScript, perilaku untuk interaksi/state, atau browser untuk masalah visual. Jangan menjalankan semua command repo otomatis, menulis test yang meniru implementasi, atau mengklaim pemeriksaan yang belum dilakukan. Lolos formatter tidak membuktikan UI benar.

Perubahan skill berupa dokumentasi juga tidak membuktikan bahwa seluruh AI akan mengikuti aturan. Evaluasi perilaku hanya dilakukan bila diminta/diizinkan, dengan tugas realistis dan hasil yang dapat diamati; jangan menjalankannya otomatis sebagai syarat menyelesaikan pekerjaan biasa.

## Handoff

Jelaskan perubahan, alasan yang memengaruhi hasil, pemeriksaan aktual, dan batas material seperti backend/demo lokal yang belum dihubungkan. Sebut path source yang membantu pengguna meninjau hasil. Jangan menyatakan skill sempurna, UI sudah terverifikasi, atau backend sudah bekerja tanpa bukti.
