# Adapter auth dan session

`createAuthIntegration<User, Credentials>()` membuat AuthProvider, useAuth, dan AuthGate dengan context bertipe untuk aplikasi. Buat factory dan objek adapter sekali di modul aplikasi. Kit tidak menentukan endpoint, bentuk generated SDK, tempat token, role backend, atau route login.

```tsx
import { createAuthIntegration } from '@templates/integrations/auth'
import { clearQuerySession, getQuerySession } from '@templates/integrations/tanstack.query'

export const { AuthProvider, useAuth, AuthGate } = createAuthIntegration<User, Credentials>()

// Implement authAdapter.load/signIn/signOut/refresh using the actual generated SDK.
// Each read receives AbortSignal and returns { key, user, workspaceId?, permissions? } | null.
<AuthProvider adapter={authAdapter}
  sessionScope={getQuerySession(queryClient)}
  errorOptions={apiConfig.errors}
  onSessionChange={next => clearQuerySession(queryClient, persistence, next?.key ?? null)}>
  <Application />
</AuthProvider>
```

User, Credentials, authAdapter, queryClient, persistence, dan apiConfig di contoh adalah milik aplikasi, bukan SDK palsu yang disertakan kit. signIn mengembalikan session; signOut opsional dapat revoke sesi server; refresh opsional, default memakai load. load mengembalikan null ketika memang anonymous; error teknis harus reject agar tampil inline dan dapat di-retry.

Session.key harus memuat identitas akun dan workspace/tenant bila data bergantung padanya. SessionScope memiliki epoch selain key; logout lalu login akun yang sama tetap membatalkan hasil frontend lama. Hubungkan scope auth dan Query melalui getQuerySession agar mutation lama tidak menjalankan callback/toast/invalidation ke sesi baru.

Perubahan sesi membatalkan efek scope lama segera, lalu menunggu onSessionChange sebelum mengekspos sesi baru. clearQuerySession membatalkan query, membersihkan cache, menghapus snapshot, dan menaikkan epoch lagi; kenaikan tambahan ini aman. Query key tetap harus memuat scope data. Perintah write yang sudah diterima server mungkin tetap berjalan; epoch mencegah efek frontend yang sudah kedaluwarsa.

useAuth menyediakan status loading/authenticated/anonymous/error, session, error, reload, signIn, signOut, refresh, dan hasPermission. Permintaan auth sebelumnya di-abort saat operasi baru dimulai. AuthGate menerima children atau fungsi session, fallback loading/anonymous/forbidden, dan permission opsional. Redirect ke login/return URL merupakan keputusan router aplikasi. Kontrol akses backend tetap berada pada API.

signOut membersihkan sesi/cache lokal sebelum menunggu endpoint sign-out; kegagalan endpoint tetap reject. Tampilkan error tersebut melalui satu pemilik feedback pada UI pemanggil. Metode auth memiliki lifecycle sesi sendiri; panggil langsung dari submit/action, tanpa membungkusnya dalam useAppMutation yang sedang dijaga oleh scope yang sama. Perubahan sesi memang membatalkan mutation lama. Untuk form login gunakan server.run(formApi, () => auth.signIn(credentials)) dan tampilkan error \_form secara inline.

AuthGate menangani GET error auth dengan ErrorState serta retry tanpa toast. Refresh token, interceptor 401, single-flight retry dan penyimpanan kredensial ditentukan adapter sesuai backend. Kit tidak memasang auth di starter yang belum memiliki backend.

## Persistence dan pergantian workspace

Buat persistence hanya setelah identitas sesi diketahui, dengan storage key terpisah per aplikasi/akun/workspace. Setelah clearQuerySession atau epoch berubah, buat konfigurasi persistence baru dan remount provider persistence untuk sesi baru. Konfigurasi lama tidak lagi menulis atau merestore snapshot. Jangan menyalin snapshot sesi lama ke key sesi baru.

Untuk aplikasi dengan perubahan workspace, implement adapter.refresh/load sesuai workspace aktif lalu panggil refresh/reload. Session.key yang berubah memicu pembersihan melalui onSessionChange.
