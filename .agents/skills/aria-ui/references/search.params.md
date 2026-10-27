# Filter sebagai state URL

Source: [useUrlState](../../../../templates/integrations/react.router/use.url.state.ts), [Zod codec](../../../../templates/integrations/zod/search.schema.ts), dan [serializer](../../../../templates/lib/search.params.ts).

Semua filter yang diterapkan, pencarian, sort, page, dan pageSize berasal dari URL. Jangan menggunakan useState lain sebagai sumber state yang bersaing untuk nilai-nilai tersebut. Input draft boleh lokal selama debounce atau sebelum Apply; commit melalui hook URL.

## Pola fitur

1. Buat search.schema.ts pada fitur dan extend listSearchSchema sesuai kontrak API.
2. Definisikan default valid serta codec di luar render; gunakan searchStringArray untuk filter set multi-value.
3. Gunakan useUrlState(codec), lalu masukkan state hasil parse ke query key dan request adapter.
4. Sambungkan UI filter/search/pagination/sort ke setState. Update filter mereset page; update page eksplisit tidak direset. Gabungkan perubahan terkait dalam satu patch.

Codec menangani parameter miliknya saja. Hook mempertahankan parameter lain dan membaca URL kembali saat Back/Forward. Default update menggunakan replace; berikan replace false bila tindakan perlu masuk history. Hook menggabungkan beberapa patch sinkron sebelum navigasi berikutnya.

Array memakai parameter berulang, misalnya `status=active&status=invited`; tanggal memakai YYYY-MM-DD lokal. Serializer mendukung primitive dan array datar. Untuk range, gunakan key from/to atau nama stabil per fitur. Hindari JSON kompleks di URL bila parameter sederhana cukup.

Gunakan .catch(default) pada field schema agar satu nilai invalid dikoreksi tanpa membuang filter lain. Batasi page/pageSize, enum sort/order/status, serta format tanggal sesuai API. Bila keseluruhan schema gagal, codec kembali ke defaults valid. Nilai default/kosong dapat dihilangkan dari URL untuk hasil kanonis.

Jangan memasukkan draft form, token autentikasi, atau seluruh response API ke search params. Peta URL adalah kontrak tampilan daftar, bukan penyimpanan seluruh aplikasi.

Key tidak ada berarti default. Key kosong eksplisit seperti status= menandai array kosong, sehingga default array nonempty dapat dibersihkan. String kosong pada field teks juga tetap ditulis bila berbeda dari default. String kosong tidak digunakan sebagai item array; null/undefined dihilangkan oleh serializer. Baca source codec jika fitur membutuhkan kontrak search khusus.
