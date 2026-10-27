# Konten detail di halaman dan drawer

Acuan: [Detail API](../../../../../templates/ui/detail/detail.tsx), [Drawer API](../../../../../templates/ui/drawer/drawer.tsx), dan [komposisi blok](../../../../../templates/ui/composition.md).

Buat konten detail fitur sekali, lalu gunakan dalam wrapper halaman atau drawer. Wrapper bertanggung jawab atas route, pengambilan data, open/close, dan aksi bisnis.

```tsx
import { DetailList, DetailSection, DetailView, Drawer } from '@templates/ui'
import { useI18n } from '@templates/i18n'

type User = { id: string; name: string; email: string }

function UserDetail({ user }: { user: User }) {
  const { t } = useI18n()
  return (
    <DetailView title={user.name} description={user.email}>
      <DetailSection title={t('Contact')}>
        <DetailList items={[{ id: 'email', label: t('Email'), value: user.email }]} />
      </DetailSection>
    </DetailView>
  )
}

;<Drawer open={open} onOpenChange={setOpen} title={user.name} size="lg">
  <UserDetail user={user} />
</Drawer>
```

Sesuaikan tipe User dengan kontrak fitur. Pada halaman, tempatkan UserDetail di surface/layout aplikasi yang diperlukan, tanpa menduplikasi daftar field.

DetailView menerima ReactNode untuk title, description, avatar, badge, meta, actions, summary, dan aside. DetailSection mengelompokkan bagian, DetailList menyusun pasangan label/nilai, DetailStats untuk statistik, dan DetailTimeline untuk riwayat. Data bisnis tidak dimasukkan ke komponen kit.

Drawer sudah mengelola focus trap, Escape, pemulihan fokus, portal, header/body/footer, dan kebijakan close. Default backdrop memakai dua klik; gunakan prop `outsideClose` jika alur membutuhkan perilaku lain. Berikan judul yang bermakna serta tombol dengan label aksesibel.

Body Drawer menjadi pemilik scroll. Hindari height/overflow-auto tambahan pada seluruh konten detail di dalam body. Footer tetap berada di luar scroll; form dihubungkan dengan atribut form pada tombol footer bila perlu.
