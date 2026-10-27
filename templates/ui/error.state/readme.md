# ErrorState

Tampilan gagal GET dengan ilustrasi, pesan asli API, dan aksi retry pada area hasil yang juga digunakan untuk empty state. DataTable dan Combobox sudah menggunakannya; tidak ada toast GET otomatis.

```tsx
import { ErrorState } from '@templates/ui/error.state'

;<ErrorState error={query.error} onRetry={() => query.refetch()} />
```

Props mencakup error unknown/ApiError/string, title ReactNode, illustration, onRetry, retrying, compact, dan native div props/className. Default menggunakan ErrorIllustration. Panel tidak membuat scroll container baru. Pesan API tidak diterjemahkan; fallback teknis dapat mengikuti locale.
