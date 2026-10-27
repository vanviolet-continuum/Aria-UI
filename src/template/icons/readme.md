# Aria Icons

Ikon memakai satu modul per glyph, dikelompokkan berdasarkan fungsi. Barrel hanya berisi ekspor ESM statis; factory diberi anotasi PURE untuk tree shaking.

```tsx
import { Search } from '@/template/icons'
// Impor langsung:
import { ArrowRight } from '@/template/icons/navigation/arrow.right.icon'

<Search size={20} strokeWidth={1.8} title="Cari" />
<ArrowRight size={16} />
```

Props bersama berada di `types.ts`. `size`, `color`, `strokeWidth`, `absoluteStrokeWidth`, atribut SVG, dan ref didukung. Ikon tanpa label diperlakukan sebagai dekorasi. Tidak ada registry seluruh ikon pada entry point ini.
