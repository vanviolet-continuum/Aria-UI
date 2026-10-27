# Perubahan form yang belum disimpan

Untuk drawer/dialog tanpa router, gunakan useUnsavedChangesGuard dari @templates/hooks. Hook memasang beforeunload hanya ketika dirty, menyatukan permintaan konfirmasi bersamaan, dan mengembalikan confirmDiscard, requestClose, confirmation, serta isConfirming.

```tsx
const guard = useUnsavedChangesGuard(isDirty && !isSubmitSuccessful)

return (
  <>
    <Drawer
      open={open}
      onOpenChange={setOpen}
      title={t('Edit')}
      onBeforeClose={guard.confirmDiscard}
    >
      {form}
    </Drawer>
    {guard.confirmation}
  </>
)
```

X, Escape, dan backdrop Drawer/Dialog melewati onBeforeClose. Tombol cancel custom yang langsung mengubah state parent menggunakan `void guard.requestClose(() => setOpen(false))`. Jangan menutup parent sebelum hasil konfirmasi. Render confirmation sebagai sibling panel sehingga tetap hidup selama dialog konfirmasi terbuka.

Setelah save berhasil, reset dirty/baseline form sebelum menutup atau navigasi. Guard tidak menyimpan draft sendiri. Pilihan beforeUnload false mematikan prompt refresh/menutup tab; browser menentukan teks prompt native tersebut.

## Route

```tsx
const guard = useUnsavedRouteGuard(isDirty && !isSubmitSuccessful)

return (
  <>
    {form}
    {guard.confirmation}
  </>
)
```

useUnsavedRouteGuard dari @templates/integrations/react.router menangani perpindahan path/search/hash dan Back/Forward lewat useBlocker. Adapter memerlukan data router createBrowserRouter/RouterProvider; starter sudah memakai bentuk ini dengan menu Beranda yang sama. Jangan memanggilnya di bawah BrowserRouter/Routes biasa.

Gunakan satu route blocker per layar; apabila form ada dalam drawer, pakai guard.confirmDiscard yang sama untuk onBeforeClose drawer dan render satu confirmation. Navigasi di luar kontrol router seperti reload ditangani beforeunload, tanpa janji mempertahankan state form setelah browser ditutup.
