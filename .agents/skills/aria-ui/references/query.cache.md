# TanStack Query dan cache

Source: [integrasi query](../../../../templates/integrations/tanstack.query/index.ts), [factory client](../../../../templates/integrations/tanstack.query/create.query.client.ts), [config aplikasi](../../../../src/config/query.config.ts), dan [contoh integrasi](../../../../templates/integrations/readme.md).

QueryClient starter dibuat sekali di config, lalu AriaQueryProvider dipasang di dalam TemplateProvider. UI core tidak wajib memakai TanStack; integrasi ini merupakan entry terpisah. Jangan membuat QueryClient baru di setiap render.

## Menyusun query

- Gunakan queryOptions/useQuery/useInfiniteQuery dengan operasi SDK yang dibungkus apiRequest/executeApi.
- Gunakan createQueryKeys untuk scope yang tepat. Sertakan ID account/workspace bila data tergantung scope tersebut, serta seluruh filter, pencarian, page, pageSize, dan sort.
- State filter yang diterapkan berasal dari [URL](search.params.md), bukan state lokal yang disalin melalui efek.
- Query function mengembalikan data yang benar-benar berhasil dan melempar error ketika gagal. Sambungkan AbortSignal ke SDK/transport sesuai kontrak client aktual.
- Default client: staleTime 30 detik, gcTime 5 menit, retry maksimal dua kali untuk network/5xx, tanpa retry cancellation/4xx. Sesuaikan bila resource memerlukan kebijakan berbeda.

## Tabel dan combobox

DataTable menerima data, server pagination/sort, loading, error, dan onRetry dari query. Server data tidak dipotong atau diurutkan kembali oleh client. GET error ditampilkan di body hasil dengan ilustrasi dan tombol retry; tidak menjadi toast.

Combobox menerima controlled options/loading/error/onRetry. onSearchChange untuk pencarian server, onOpenChange untuk query enabled, serta loadingMore/hasMore/onLoadMore untuk infinite query. selectedOption membantu nilai edit sebelum opsi dimuat. Jangan memberikan loadOptions bersamaan dengan query eksternal.

useServerTable dan loader combobox lama masih tersedia untuk penggunaan tanpa TanStack, namun memiliki cache lokal. Jangan menumpukkannya sebagai loader ber-cache di atas Query. Placeholder data dapat mempertahankan isi saat halaman berganti; background fetch tidak menyalakan overlay seluruh layar.

## Mutation dan persistence

Gunakan useAppMutation serta feedback.invalidates untuk prefix list/detail yang terdampak. Jangan invalidasi seluruh cache tanpa kebutuhan domain. Detail alur ada pada [lifecycle mutation](mutation.lifecycle.md).

createQueryPersistence dan AriaPersistQueryProvider bersifat opt-in; provider biasa tidak mengimpor runtime persistence. Storage key harus membedakan app/account/workspace. Hanya query sukses dengan meta.persist true disimpan, tanpa mutation; default maxAge satu jam. Helper menyesuaikan gcTime global, sedangkan override gcTime per-query tetap perlu sesuai maxAge. clearQuerySession membatalkan request dan menghapus memory/snapshot ketika scope berganti atau logout.

URL menyimpan kriteria tampilan, sementara persistence menyimpan snapshot response. Reload dapat memulihkan filter walaupun persistence tidak diaktifkan.

clearQuerySession menaikkan epoch sebelum await, jadi callback mutation lama tidak menjangkau sesi baru melalui useAppMutation. Snapshot persistence memakai storage key aplikasi/akun/workspace dan terikat epoch; buat ulang konfigurasi/remount persistence setelah pergantian sesi. Persister menulis sinkron tanpa timer throttle yang dapat menulis ulang snapshot lama setelah clear. Lihat [auth/session](auth.session.md).
