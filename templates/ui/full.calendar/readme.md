# FullCalendar

Scheduler event month/week/day berbasis @fullcalendar/react v7. Renderer dan dependency kalender dimuat secara lazy. Calendar kecil untuk input tanggal tetap berada di ui/calendar.

```tsx
import { FullCalendar } from '@templates/ui/full.calendar'

;<FullCalendar
  events={events}
  height="auto"
  view={calendarView}
  date={calendarDate}
  onRangeChange={(range) => updateCalendarUrl(range)}
  onSelect={(selection) => openEventEditor(selection)}
  onEventClick={(id) => openDetails(id)}
  onEventMove={(move) => saveSchedule(move)}
  onError={(error) => showMutationError(error)}
  renderEventPreview={(event) => <EventSummary event={event} />}
/>
```

| Prop                        | Perilaku                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| events                      | EventInput[] FullCalendar; id stabil diperlukan untuk mutation. extendedProps dapat memuat metadata aplikasi.                                         |
| initialView / initialDate   | Nilai awal ketika navigasi tidak dikontrol.                                                                                                           |
| view / date                 | Navigasi terkontrol; view dayGridMonth, timeGridWeek, atau timeGridDay. date berupa tanggal kalender.                                                 |
| onRangeChange               | start/end rentang tampilan, date aktif, view, dan title. Simpan parameter terapan ke URL dengan perbandingan sebelum menulis. end bersifat eksklusif. |
| onSelect                    | start/end/allDay untuk membuat acara. Rentang select bersifat eksklusif pada end.                                                                     |
| onEventMove                 | Drag dan resize. Return false atau reject otomatis me-revert event. Promise harus tetap reject bila API gagal.                                        |
| onError                     | Pelaporan mutation gagal. Aplikasi memiliki satu pemilik toast ber-description.                                                                       |
| editable                    | Default mengikuti keberadaan onEventMove. Gesture tidak menggantikan editor sebagai alternatif keyboard/touch.                                        |
| renderEventPreview          | Slot kartu read-only untuk hover dan fokus. Mendapat id, title, start, end, allDay, extendedProps.                                                    |
| renderEventContent          | Mengganti isi trigger event. Jangan menaruh tombol lain di dalamnya.                                                                                  |
| toolbar / toolbarActions    | Ganti toolbar dengan ReactNode, false untuk menyembunyikan, atau tambahkan aksi melalui slot.                                                         |
| weekends / onWeekendsChange | Kontrol hari akhir pekan. showWeekendsControl false menyembunyikan kontrol tersebut.                                                                  |
| height                      | Default auto, menjaga satu scroll halaman. Tinggi angka dapat dipakai jika kalender menjadi scroll owner panel.                                       |
| calendarOptions             | Opsi native FullCalendar untuk kebutuhan khusus. Override eksplisit dapat mengganti callback default.                                                 |

Default toolbar memakai Button/IconButton/Tabs Aria dan mengikuti i18n. Event kategori work/care/stock/personal mempunyai warna token. Event tanpa kategori memakai work. Tema tidak bergantung pada warna literal data bisnis.

Waktu mengikuti zona waktu browser kecuali calendarOptions.timeZone diatur. Tampilkan konteks zona waktu pada aplikasi. Untuk API gunakan TanStack Query dan error backend mentah; untuk GET error gunakan ErrorState inline pada area kalender. Contoh aplikasi: preview/src/pages/workspace/calendar/root.tsx.
