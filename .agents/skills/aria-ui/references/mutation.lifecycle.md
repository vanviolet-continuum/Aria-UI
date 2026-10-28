# Lifecycle aksi dan feedback

Source: [useAppMutation](../../../../templates/integrations/tanstack.query/use.app.mutation.ts), [MutationCache](../../../../templates/integrations/tanstack.query/create.query.client.ts), [MutationActivity](../../../../templates/integrations/tanstack.query/mutation.activity.tsx), dan [MutationProvider](../../../../templates/providers/mutation.provider.tsx).

```text
Validasi lokal → mutation API → awaited invalidation → callback UI → status terminal dan satu feedback
```

Gunakan useAppMutation untuk operasi create/update/delete. feedback.label mengisi overlay, successMessage mengisi toast sukses, dan invalidates menyebut prefix query yang terdampak. retry mutation default false agar operasi write tidak diulang otomatis tanpa kebijakan eksplisit.

MutationActivity mengamati lifecycle asli dan memakai beginTask dari provider yang sudah ada. Pending mencakup invalidation yang ditunggu. Beberapa aksi bersamaan memiliki task masing-masing; overlay selesai setelah task aktif selesai. Mutation yang paused tidak memblokir layar dan background GET tidak membuat overlay.

Gunakan feedback.overlay false untuk aksi berindikator lokal. Gunakan errorToast false hanya ketika pemilik UI sudah menampilkan seluruh kegagalan. Error toast default dimiliki MutationCache, bukan HTTP client atau setiap komponen. API text tetap dipertahankan.

Tutup drawer, reset form, atau pindah route hanya setelah mutateAsync berhasil. Jika API gagal, pertahankan draft dan petakan field error; jangan lakukan refresh/navigasi seolah berhasil. Jika write berhasil tetapi GET refresh gagal, write tetap berhasil dan koleksi menampilkan GET error inline, sehingga pengguna tidak diarahkan mengulangi write.

runTask lama tetap berguna untuk tugas non-TanStack yang memang mengharapkan TaskResult. Jangan membungkus mutateAsync dalam runTask atau menggunakannya sebagai mutationFn; itu menumpuk feedback dan dapat mengubah rejection menjadi hasil normal.

useAppMutation membaca apiErrorOptions QueryClient pada normalisasi pertama. Exception onSuccess/onSettled UI dilaporkan melalui onCallbackError, sehingga tidak menjadi API error setelah server sukses. MutationCache menerbitkan toast pada status terminal setelah callback; GET refresh tetap memiliki error inline sendiri.

Gunakan clearQuerySession saat akun/workspace berubah. Epoch menghalangi hasil/callback/feedback mutation lama; raw useMutation tidak memiliki batas callback yang disediakan useAppMutation. Baca [auth/session](auth.session.md). Untuk callback async panjang, panggil assertMutationSession(context) lagi setelah await sebelum efek UI berikutnya.

Semua toast memakai description. Mutation feedback dapat mengisi successDescription; API error toast menampilkan pesan backend mentah dalam description dengan judul lokal. Import wrapper kit, bukan toast dari Sonner langsung.
