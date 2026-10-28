# SettingsRow

Label/deskripsi dengan kontrol bebas serta asosiasi aksesibilitas.

Jika slot control berisi tepat satu checkbox atau switch yang aktif, klik area kosong dan deskripsi baris juga mengganti nilainya. Cursor menjadi pointer. Klik langsung pada kontrol atau label tetap memakai perilaku native; tombol, link, select, textarea, dan elemen `data-no-toggle` mempertahankan aksinya sendiri. Kontrol disabled/readOnly tidak diteruskan kliknya.

```tsx
import { SettingsRow } from '@templates/ui/settings.row'
import '@templates/base.css'
import '@templates/ui/blocks.css'
```

Stylesheet lengkap `templates/styles.css` sudah memuat style blok. Props, default, slotProps, part komposisi, aksesibilitas, dan contoh tersedia di [Reusable content blocks](../composition.md). Dokumentasi interaktif tersedia di aplikasi demo preview/; source komponen tetap menjadi acuan API.
