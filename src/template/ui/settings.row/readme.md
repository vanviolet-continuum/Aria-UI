# SettingsRow

Label/deskripsi dengan kontrol bebas serta asosiasi aksesibilitas.

Jika slot control berisi tepat satu checkbox atau switch yang aktif, klik area kosong dan deskripsi baris juga mengganti nilainya. Cursor menjadi pointer. Klik langsung pada kontrol atau label tetap memakai perilaku native; tombol, link, select, textarea, dan elemen `data-no-toggle` mempertahankan aksinya sendiri. Kontrol disabled/readOnly tidak diteruskan kliknya.

```tsx
import { SettingsRow } from './template/ui/settings.row'
import './template/base.css'
import './template/ui/blocks.css'
```

Stylesheet lengkap `template/styles.css` sudah memuat style blok. Props, default, slotProps, part komposisi, aksesibilitas, dan contoh tersedia di [Reusable content blocks](../composition.md). Preview interaktif: `/components?component=settings-row`.
