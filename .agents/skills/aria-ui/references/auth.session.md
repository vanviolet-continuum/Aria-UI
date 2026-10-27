# Auth, scope sesi, dan cache

Baca [kontrak auth](../../../../templates/integrations/auth/readme.md) dan [source](../../../../templates/integrations/auth/auth.tsx) untuk API. createAuthIntegration<User, Credentials> menghasilkan context bertipe; buat sekali di modul aplikasi, bersama adapter stabil yang memanggil SDK aktual.

- Adapter load/refresh menerima AbortSignal dan mengembalikan AuthSession atau null; kegagalan teknis tetap reject. Tidak ada endpoint maupun token storage bawaan.
- Session.key mencakup akun/workspace yang menentukan akses data. Query key tetap memasukkan scope yang sama.
- Bagikan getQuerySession(queryClient) ke AuthProvider.sessionScope. onSessionChange membersihkan cache melalui clearQuerySession sebelum sesi baru diekspos.
- clearQuerySession menaikkan epoch segera, membatalkan query, membersihkan memory dan snapshot. Konfigurasi persistence terikat epoch; buat ulang/remount provider persistence setelah pergantian scope, dengan storage key sesuai identitas.
- useAppMutation menjaga respons serta callback sesi lama. Write yang telah diterima server tetap dapat berjalan; kode callback async yang sudah dimulai perlu memeriksa sesi lagi sebelum efek setelah await.
- AuthGate menyediakan loading, error inline/retry, anonymous, serta permission fallback. Route/return URL dan permission backend tetap milik aplikasi.
- Metode signIn/signOut mengubah scope sendiri. Panggil langsung dari action/form, tanpa membungkusnya di useAppMutation pada scope yang sama. Pilih satu pemilik feedback; form login dapat memakai server.run + error \_form inline.
- signOut membersihkan identitas/cache lokal sebelum endpoint revoke selesai; error endpoint tetap harus ditangani pemilik UI.

Starter tidak memasang auth palsu. Integrasikan adapter dan route aplikasi ketika backend/SDK aktual tersedia.
