# Guard draft yang belum disimpan

API dan contoh: [panduan guard](../../../../templates/integrations/react.router/unsaved.changes.md).

Gunakan useUnsavedChangesGuard untuk drawer/dialog tanpa router, atau useUnsavedRouteGuard untuk halaman dengan data router. Nilai when mengikuti dirty && !isSubmitSuccessful, bukan sekadar pernah mengubah input.

Render guard.confirmation satu kali. Berikan guard.confirmDiscard pada Drawer/Dialog.onBeforeClose agar X, Escape dan backdrop melewati batas yang sama. Tombol custom yang mengubah open langsung memakai guard.requestClose. Bila form dalam drawer juga memblokir route, gunakan guard yang sama dan satu blocker per layar.

Route guard memerlukan createBrowserRouter/RouterProvider; starter sudah memakai data router. BrowserRouter/Routes biasa tidak mendukung useBlocker. beforeunload hanya aktif ketika draft dirty dan mengikuti prompt bawaan browser.

Setelah mutation berhasil, reset baseline form sebelum menutup/navigasi. Jangan bypass guard atau menghapus draft saat API gagal. Hook menjaga transisi UI, bukan penyimpanan draft ke server/localStorage.
