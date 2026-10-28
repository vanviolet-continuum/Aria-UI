# HoverCard

Pratinjau informasi ringkas saat pointer diarahkan atau trigger mendapat fokus keyboard. Konten dibatasi pada informasi yang dapat dibaca. Untuk tombol, input, atau aksi di dalam panel, gunakan Popover.

```tsx
import { HoverCard } from '@templates/ui/hover.card'

;<HoverCard side="top" align="start" content={<ProfileSummary user={user} />}>
  <Button>{user.name}</Button>
</HoverCard>
```

children harus satu elemen yang menerima ref dan event, misalnya Button, anchor, atau span focusable. Trigger tetap memiliki nama aksesibel. Escape menutup pratinjau.

Props content, open, onOpenChange, openDelay (350ms), closeDelay (120ms), side, align, sideOffset, collisionPadding, className, dan props content Radix tetap tersedia. Positioning menyesuaikan viewport. Tidak ada scroll bertingkat; gunakan konten singkat.

Komponen ini memakai @radix-ui/react-hover-card. Tooltip digunakan untuk label pendek; HoverCard untuk ringkasan visual yang lebih kaya. Informasi yang dibutuhkan untuk menyelesaikan tugas juga harus tersedia pada halaman/detail, bukan hanya hover.
