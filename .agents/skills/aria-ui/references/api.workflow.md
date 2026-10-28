# Alur fitur backend dari kontrak sampai UI

Gunakan bersama [generated API](generated.api.md). Contoh source demo menunjukkan tampilan dan interaksi, sedangkan alur berikut menentukan kepemilikan data backend. Tidak ada SDK generated bisnis pada starter saat panduan ini ditulis; jangan menganggap operasi contoh sebagai endpoint yang tersedia.

## 1. Temukan kontrak dan batas adapter

Baca `src/config/api.config.ts`, script/config generator, header output, serta signature operasi terkait. Pastikan path/query/body, response/envelope, error, pagination, dan security yang sesungguhnya. Baca hanya potongan operasi/DTO yang diperlukan.

Generated SDK read-only. Instance client/auth/base URL berada di aplikasi. Feature adapter memanggil operasi nyata melalui [apiRequest](../../../../src/api/client.ts), lalu memetakan response yang sudah diketahui ke kebutuhan UI, misalnya rows/total. Nama adapter seperti `usersApi.list` adalah nama lokal aplikasi yang harus dibuat dari kontrak nyata, bukan klaim metode SDK.

Teruskan cancellation Query ke transport bila signature SDK mendukungnya. Response HTTP 200 yang berisi kegagalan bisnis harus reject melalui assertResult sesuai kontrak aplikasi. Jangan mengganti error dengan data kosong atau success false yang resolve.

## 2. Bentuk state URL dan query key

Definisikan schema/codec terapan: q, filter, sort, page, pageSize. Gunakan [useUrlState](search.params.md), pertahankan parameter lain dan Back/Forward, serta reset page saat kriteria berubah.

Key memakai seluruh parameter request dan scope akun/workspace yang relevan. Bentuk key menggunakan [createQueryKeys](query.cache.md), bukan string cache yang disusun berbeda per layar. Detail memakai ID stabil. QueryClient dibuat sekali; jangan membuatnya pada render fitur.

Query menjadi pemilik response/error/loading. Jangan menambahkan cache lokal tabel/combobox di atasnya. Debounce input boleh memiliki draft sementara; nilai yang sudah diterapkan tetap milik URL.

## 3. Hubungkan area hasil

| Komponen         | Sambungan                                                                         |
| ---------------- | --------------------------------------------------------------------------------- |
| DataTable        | rows/total dari response; server state dari query + URL; filter/search terkontrol |
| Combobox async   | options dan loading/error dari query; key memuat search serta scope dependensi    |
| Detail           | query per ID; state loading/error/not-found dibedakan sesuai kontrak              |
| Metrik/dashboard | query dataset yang memang mendukung total/agregat tersebut                        |

GET error berada pada area hasil yang sama dengan empty, menggunakan ErrorState/ilustrasi serta retry ke refetch. Jangan menerjemahkan error backend, menampilkan toast GET, atau menyamakan gagal load dengan dataset kosong. Baca tipe aktual `server` dan props error/retry sebelum memasangnya; jangan menebak prop dari dokumentasi library lain.

Dalam server mode, sort/filter/pagination dilakukan backend. Jangan menjalankannya lagi pada satu halaman response. Selection lintas halaman harus mengikuti kemampuan backend dan produk; bukan dianggap otomatis lengkap oleh tabel.

## 4. Siapkan form dan mutation

Schema Zod lokal memvalidasi nilai UI; DTO generated menentukan payload backend. Pisahkan keduanya bila perlu mapping/transform. [Recipe form](recipes/forms.validation.md) memberi contoh useAppForm + liveFormValidators dan mapping error.

Gunakan useAppMutation untuk satu operasi write. `feedback` menentukan overlay/label, successMessage, successDescription, dan invalidates. Error toast milik MutationCache. Pilih prefix invalidation yang terdampak; jangan selalu menghapus seluruh cache.

```tsx
const save = useAppMutation({
  mutationFn: adapter.create,
  feedback: {
    label: t('Saving user'),
    successMessage: t('User saved'),
    successDescription: t('The directory now includes this user.'),
    invalidates: [keys.lists()],
  },
})
```

Potongan ini menunjukkan API wrapper. `adapter`, `keys`, dan key locale adalah milik fitur dan harus didefinisikan berdasarkan kontrak aktual. Jangan menambahkan toast sukses/error kedua atau membungkus mutateAsync dengan runTask.

## 5. Selesaikan submit tanpa kehilangan draft

```text
Validasi live + parsing schema
→ server.run(formApi, operation)
→ mutateAsync(payload)
→ invalidation yang ditunggu
→ reset baseline form
→ close/navigate
```

Tunggu operasi sukses sebelum reset/close. Pada gagal, pertahankan nilai, isi field error backend mentah, dan biarkan rejection menjaga isSubmitSuccessful false. Untuk nama field DTO yang berbeda, buat mapping path di adapter error fitur.

Guard draft menangani route/panel dengan satu pemilik konfirmasi; baca [unsaved changes](unsaved.changes.md). Kegagalan callback UI setelah write sukses masuk onCallbackError, bukan dilaporkan sebagai API gagal atau toast kedua. Jika GET refresh gagal setelah write sukses, koleksi menampilkan GET error tanpa menyuruh mengulangi write.

## 6. Jaga batas sesi bila fitur memakainya

Scope query mengikuti akun/workspace. Logout/pergantian scope memakai clearQuerySession; persistence opsional dibersihkan dan dibuat untuk epoch/scope baru. Gunakan [auth/session](auth.session.md) bila tugas menyentuh login atau pergantian workspace; jangan menambah auth/persistence pada fitur yang tidak memerlukannya.

Rincian retry, invalidation, callback async, error normalizer, dan persistence tetap dimiliki [query/cache](query.cache.md), [API error](api.errors.md), dan [lifecycle mutation](mutation.lifecycle.md).
