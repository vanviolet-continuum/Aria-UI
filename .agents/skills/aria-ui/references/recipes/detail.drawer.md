# Detail halaman dan drawer

Acuan API: [Detail](../../../../../templates/ui/detail/detail.tsx), [Drawer](../../../../../templates/ui/drawer/drawer.tsx), dan [useDrawerPresence](../../../../../templates/ui/drawer/use.drawer.presence.ts).

Konten detail dibuat sekali. Wrapper memiliki route/query, open/close, dan aksi bisnis. Contoh berikut hanya kontrak tampilan record kecil, bukan DTO backend:

```tsx
import { useI18n } from '@templates/i18n'
import { DetailList, DetailSection, DetailView, Drawer, useDrawerPresence } from '@templates/ui'

type User = { id: string; name: string; email: string }

function UserDetail({ user, compact = false }: { user: User; compact?: boolean }) {
  const { t } = useI18n()
  return (
    <DetailView
      variant={compact ? 'compact' : 'default'}
      title={user.name}
      description={user.email}
    >
      <DetailSection title={t('Contact')}>
        <DetailList items={[{ id: 'email', label: t('Email'), value: user.email }]} />
      </DetailSection>
    </DetailView>
  )
}

function UserDetailDrawer({ user, onClose }: { user: User | null; onClose: () => void }) {
  const { t } = useI18n()
  const panel = useDrawerPresence(user)
  if (!panel.value) return null
  return (
    <Drawer
      title={t('User details')}
      size="lg"
      open={panel.open}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
      onAfterClose={panel.onAfterClose}
    >
      <UserDetail user={panel.value} compact />
    </Drawer>
  )
}
```

Koordinator selalu merender `<UserDetailDrawer user={selected} onClose={() => setSelected(null)} />`; jangan membungkusnya lagi dengan selected &&. Halaman memakai `<UserDetail user={record} />`; panel memakai compact. Untuk fitur API, query/payload dan not-found mengikuti kontrak fitur; jangan bergantung pada objek row yang sudah kedaluwarsa bila detail membutuhkan query sendiri.

## Komposisi isi

DetailView menerima title, description, avatar, badge, meta, actions, summary, aside sebagai ReactNode. DetailSection mengelompokkan bagian, DetailList menyusun label/nilai, DetailStats untuk ringkasan, DetailTimeline untuk riwayat. Gunakan slot sesuai kebutuhan domain, bukan memaksa setiap detail memiliki semua bagian.

Compact menyesuaikan identitas/spacing pada panel. Ikuti ukuran slot avatar dan jangan memaksakan style halaman besar ke dalam drawer.

## Close, fokus, dan scroll

Default close mengikuti [kontrak modul](../../../../../templates/ui/module.defaults.md): backdrop dua klik, toast pertama, serta guard dirty bila perlu. Drawer mengelola focus trap, Escape, portal, dan pemulihan fokus; jangan membuat close handler global pengganti.

Pertahankan instance dan payload sampai onAfterClose melalui useDrawerPresence. Menghapus JSX segera saat selected null, atau memasang open selalu true lalu unmount, memutus exit. Saat perpindahan overlay, restoreFocus false pada panel sebelumnya dapat mencegah fokus direbut kembali. Hormati reduced motion.

Hanya body Drawer yang scroll. Footer tetap di luar scroll; tombol submit di footer dapat terhubung ke form melalui atribut native form. Jangan menambah wrapper tinggi tetap/overflow-auto pada seluruh detail.

Draft form memakai [unsaved changes](../unsaved.changes.md). Close X/Escape/Cancel juga melewati guard; reset baseline setelah sukses, bukan setelah request gagal. Contoh hidup: [Users coordinator](../../../../../preview/src/pages/workspace/users/root.tsx) dan [detail](../../../../../preview/src/pages/workspace/users/detail.tsx).
