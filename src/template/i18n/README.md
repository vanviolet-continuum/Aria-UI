# Bahasa dan format lokal

Template menggunakan **i18next + react-i18next**. Default adalah Bahasa Indonesia (`id`), dengan English (`en`) sebagai pilihan kedua dan fallback. Tidak ada deteksi bahasa browser otomatis. Pilihan tersimpan di localStorage dan atribut `html.lang` mengikuti bahasa aktif.

`TemplateProvider` sudah memasang `LocaleProvider`. Komponen kit juga memiliki instance fallback, sehingga dapat digunakan secara mandiri.

```tsx
import { TemplateProvider, LanguageSwitcher, createTemplateI18n, useI18n } from './template'
import id from './locales/id.json'
import en from './locales/en.json'

// Buat satu kali, di luar komponen.
const i18n = createTemplateI18n({
  storageKey: 'my-project-language',
  resources: { id: { app: id }, en: { app: en } },
})

<TemplateProvider i18n={i18n}>
  <LanguageSwitcher />
  <Application />
</TemplateProvider>

function Application() {
  const { t, language, locale, setLanguage } = useI18n()
  return <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}>
    {t('Hello {{name}}', { name: 'Olivia' })}
  </button>
}
```

Terjemahan menggunakan **flat natural keys**, contohnya `"Save changes": "Simpan perubahan"`. Tanda titik dan titik dua tetap bagian dari key, bukan pemisah nested object/namespace. Key Inggris membantu fallback tetap terbaca. Kedua file ID/EN tersedia dan dapat diedit terpisah.

Aktifkan `resolveJsonModule: true` dalam tsconfig proyek konsumen agar TypeScript dapat mengimpor resource JSON. Konfigurasi starter sudah mengaktifkannya.

- `template/i18n/locales/{id,en}/ui.json`: copy general milik kit.
- `src/app/locales/{id,en}.json`: copy starter.
- `examples/app/locales/{id,en}/`: copy demo dipisah menjadi navigation, clinic, playground, workflows, dan messages. Tidak ikut terbawa saat hanya menyalin template.

Namespace `app` didahulukan, kemudian `ui`. Override copy kit melalui `resources.id.ui` / `resources.en.ui`. Anda juga dapat memberikan instance i18next aplikasi sendiri ke `TemplateProvider` atau memakai `LocaleProvider` secara terpisah.

`t(key, variables)` untuk copy statis/interpolasi. `text(value)` menerjemahkan string yang terdaftar dan mempertahankan nilai non-string. Nama pengguna, ID, SKU, enum API, dan data form tetap memakai nilai asli. Label pilihan diterjemahkan saat ditampilkan; pencarian lokal juga mengenali label yang diterjemahkan. Jika data backend tidak merupakan copy UI, tampilkan langsung tanpa `t`.

`locale` menghasilkan `id-ID` atau `en-US`. Kalender/picker mengikuti locale aktif. `formatDate(value, options, locale)` menerima locale eksplisit untuk pemakaian di luar komponen. Bahasa tidak mengonversi mata uang atau mengubah timezone; mata uang mengikuti konfigurasi field/aplikasi. Formatter demo memakai cache kecil untuk menghindari membuat formatter baru pada setiap sel tabel.

Untuk aplikasi SSR, buat instance per request dan berikan bahasa request melalui opsi `language`. Simpan instance di luar render untuk aplikasi browser agar pergantian bahasa tidak mereset state form atau tabel.
