# Wizard

Kerangka presentasi alur bertahap. State, validasi, aturan bisnis, dan penyimpanan tetap dimiliki aplikasi. Wizard tidak membuat router atau mengimpor store bisnis.

```tsx
import { Wizard } from '@templates/ui/wizard'

;<Wizard
  steps={[
    { id: 'brief', title: t('Brief'), description: t('Define the outcome.') },
    { id: 'review', title: t('Review') },
  ]}
  activeStep={step}
  onStepChange={setStep}
  introduction={<Heading as="h2">{t('Create a course')}</Heading>}
  aside={<Text variant="caption">{t('Changes stay in this draft.')}</Text>}
  footer={<WizardActions />}
>
  {renderStep(step)}
</Wizard>
```

| Prop                             | Perilaku                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------ |
| steps                            | Item id, title, description opsional; gunakan label terjemahan aplikasi.                         |
| activeStep                       | Indeks berbasis nol. Nilai sebesar steps.length menandai seluruh langkah selesai.                |
| onStepChange                     | Navigasi ke langkah saat ini atau sebelumnya melalui Stepper. Aplikasi memvalidasi sebelum maju. |
| orientation                      | vertical (default) dengan sidebar, atau horizontal. Layout beradaptasi pada layar kecil.         |
| errorStep                        | Indeks langkah yang harus diperbaiki.                                                            |
| introduction / aside / footer    | Slot ReactNode, dapat berisi komponen custom.                                                    |
| children                         | Isi langkah aktif. Tidak memiliki area scroll internal.                                          |
| className / style / native props | Override tampilan dan atribut HTML tetap tersedia.                                               |

Pertahankan satu pemilik scroll pada halaman. Gunakan useZodValidation atau useAppForm untuk validasi live dan useUnsavedRouteGuard untuk draft. Jangan menjadikan progres tampilan sebagai ukuran persentase request jaringan.

Contoh lengkap: preview/src/pages/learning/course.builder. Wizard demo menghasilkan kursus dan enrollment dalam satu commit data lokal.
