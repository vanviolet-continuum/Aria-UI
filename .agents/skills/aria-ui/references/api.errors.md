# Pesan API dan GET error inline

Source: [normalizer](../../../../templates/lib/api.error.ts), [ErrorState](../../../../templates/ui/error.state/error.state.tsx), [toast API](../../../../templates/ui/toast/api.error.toast.ts), dan [Field](../../../../templates/ui/field/field.tsx).

## Prioritas pesan

ApiError mempertahankan message, status, code, fieldErrors, body, requestId, serta cause. Default pembacaan mencakup Axios response.data, Fetch/SDK error/data, message/detail/title, dan errors per field. Raw Response dibaca melalui clone oleh normalizer async. Sesuaikan readMessage/readFieldErrors/readCode mengikuti kontrak backend proyek.

Jika backend menyediakan pesan, tampilkan apa adanya. Jangan mem-parafrasa, mengganti dengan kalimat umum frontend, atau menerjemahkan pesan melalui t/text. Fallback frontend digunakan saat pesan API tidak tersedia, misalnya timeout/network error/respons kosong. Cancellation tidak menimbulkan toast.

## Query/GET

DataTable dan Combobox menampilkan ErrorState pada area hasil yang sama dengan empty/not-found, memakai ilustrasi error serta retry. Jangan tambahkan toast untuk error GET tersebut. Berikan error asli/ApiError, bukan string custom yang menutupi pesan. onRetry mengulang query pemilik data. Pencarian/header tetap dapat digunakan dan panel hanya memiliki satu area scroll.

ErrorState juga tersedia untuk GET detail atau koleksi lain. Gunakan tampilan lokal tersebut untuk loading/error/empty sesuai konteks, dengan backend message tetap mentah.

## Mutation dan form

MutationCache pada createAriaQueryClient menjadi satu pemilik toast error. Jangan melakukan toast error lagi pada interceptor, useAppMutation callback, atau halaman. onError form tetap dapat memetakan field error tanpa menambah toast kedua.

Gunakan useApiFormErrors/apiFieldMessages untuk memetakan nama field DTO ke field form. serverError memiliki source api; Field memakai errorSource api untuk mempertahankan teksnya. Pesan Zod lokal memiliki source local dan dapat diterjemahkan. Membersihkan error field ketika pengguna mengubah nilainya tidak boleh mengubah teks backend yang masih ditampilkan pada field lain.

Jangan menelan kegagalan request: apiRequest/executeApi harus reject. Jangan memakai runTask sebagai queryFn/mutationFn karena hasil union resolve-nya dapat dianggap sukses oleh Query.

Error/TypeError JavaScript biasa tidak diambil message-nya sebagai pesan API. Normalizer memerlukan bukti transport/response atau ApiError eksplisit; kegagalan fetch yang dikenal diklasifikasi network. readMessage/readFieldErrors/readCode tetap diterapkan pada body ApiError yang sudah dinormalisasi, dengan pesan backend tetap mentah.
