# Education SVG

100 ilustrasi pendidikan baru, dibagi menjadi 10 tema dengan masing-masing 10 komponen. Semuanya masuk kategori **Education** di `/illustrations?category=education`. Dengan tujuh komponen pendidikan sebelumnya, kategori ini memiliki **107 SVG**; keseluruhan galeri memiliki **295 SVG**.

Komponen mengikuti `IllustrationProps`: `size`, `tone`, `title`, `className`, dan `style`. Rasio gambar adalah 260:180. Tanpa `title`, SVG disembunyikan dari screen reader. Warna berasal dari token `--illustration-*` agar mengikuti tema terang, gelap, dan palet aplikasi.

```tsx
import {
  ClassroomIllustration,
  VirtualClassroomIllustration,
  KnowledgeTreeIllustration,
} from '@/template/ui/illustrations'
import '@/template/styles.css'

<ClassroomIllustration size={260} title="Ruang belajar" />
<VirtualClassroomIllustration size={220} tone="violet" title="Kelas virtual" />
<KnowledgeTreeIllustration size={220} tone="mint" title="Pengetahuan yang bertumbuh" />
```

Semua komponen juga diekspor dari `@/template/ui/illustrations/education`, `@/template/ui`, dan `@/template`. Galeri mendukung pencarian nama, deskripsi, atau nama komponen; salin kode React, salin SVG, serta unduh SVG mandiri dengan warna tema saat ini. Utilitas bentuk pada `education-parts.tsx` merupakan bagian internal dan tidak masuk katalog.

## Mata pelajaran

| Komponen                      | Ilustrasi          |
| ----------------------------- | ------------------ |
| `ArithmeticIllustration`      | Aritmetika         |
| `AlgebraIllustration`         | Aljabar            |
| `GeometryIllustration`        | Geometri           |
| `FractionsIllustration`       | Pecahan            |
| `CalculusIllustration`        | Kalkulus           |
| `StatisticsIllustration`      | Statistika         |
| `PhysicsLessonIllustration`   | Pelajaran fisika   |
| `GeographyLessonIllustration` | Pelajaran geografi |
| `HistoryLessonIllustration`   | Pelajaran sejarah  |
| `LanguageLessonIllustration`  | Pelajaran bahasa   |

## Perlengkapan sekolah

| Komponen                     | Ilustrasi               |
| ---------------------------- | ----------------------- |
| `PencilCaseIllustration`     | Kotak pensil            |
| `StationerySetIllustration`  | Perlengkapan alat tulis |
| `SchoolScissorsIllustration` | Gunting sekolah         |
| `GeometrySetIllustration`    | Peralatan geometri      |
| `SchoolRulerIllustration`    | Penggaris sekolah       |
| `AbacusIllustration`         | Sempoa                  |
| `CrayonsIllustration`        | Krayon                  |
| `HighlighterIllustration`    | Stabilo                 |
| `GlueStickIllustration`      | Lem stik                |
| `SchoolBinderIllustration`   | Binder sekolah          |

## Membaca dan menulis

| Komponen                       | Ilustrasi          |
| ------------------------------ | ------------------ |
| `LibraryCardIllustration`      | Kartu perpustakaan |
| `BookStackIllustration`        | Tumpukan buku      |
| `DictionaryIllustration`       | Kamus              |
| `StorybookIllustration`        | Buku cerita        |
| `AudiobookIllustration`        | Buku audio         |
| `BookmarkIllustration`         | Pembatas buku      |
| `JournalIllustration`          | Jurnal             |
| `EssayWritingIllustration`     | Menulis esai       |
| `SpellingPracticeIllustration` | Latihan mengeja    |
| `ReadingLampIllustration`      | Lampu baca         |

## Kehidupan di kelas

| Komponen                      | Ilustrasi            |
| ----------------------------- | -------------------- |
| `ClassroomIllustration`       | Ruang kelas          |
| `TeacherIllustration`         | Guru                 |
| `StudentDeskIllustration`     | Meja siswa           |
| `ChalkboardIllustration`      | Papan tulis kapur    |
| `WhiteboardIllustration`      | Papan tulis spidol   |
| `SchoolBellIllustration`      | Bel sekolah          |
| `ClassScheduleIllustration`   | Jadwal pelajaran     |
| `AttendanceIllustration`      | Presensi             |
| `LessonPlanIllustration`      | Rencana pembelajaran |
| `ClassDiscussionIllustration` | Diskusi kelas        |

## Belajar online

| Komponen                       | Ilustrasi              |
| ------------------------------ | ---------------------- |
| `VirtualClassroomIllustration` | Kelas virtual          |
| `VideoLessonIllustration`      | Video pembelajaran     |
| `DigitalTextbookIllustration`  | Buku pelajaran digital |
| `LearningAppIllustration`      | Aplikasi belajar       |
| `OnlineQuizIllustration`       | Kuis online            |
| `CoursePlaylistIllustration`   | Daftar video kursus    |
| `StudyDashboardIllustration`   | Dasbor belajar         |
| `WebinarIllustration`          | Webinar                |
| `CodingLessonIllustration`     | Pelajaran pemrograman  |
| `CloudLearningIllustration`    | Pembelajaran cloud     |

## Pembelajaran sains

| Komponen                        | Ilustrasi           |
| ------------------------------- | ------------------- |
| `BiologyLessonIllustration`     | Pelajaran biologi   |
| `ChemistryLessonIllustration`   | Pelajaran kimia     |
| `AstronomyLessonIllustration`   | Pelajaran astronomi |
| `BotanyLessonIllustration`      | Pelajaran botani    |
| `AnatomyLessonIllustration`     | Pelajaran anatomi   |
| `ElectricCircuitIllustration`   | Rangkaian listrik   |
| `ScienceExperimentIllustration` | Eksperimen sains    |
| `RoboticsClassIllustration`     | Kelas robotika      |
| `EcologyLessonIllustration`     | Pelajaran ekologi   |
| `FossilStudyIllustration`       | Studi fosil         |

## Seni dan keterampilan

| Komponen                      | Ilustrasi            |
| ----------------------------- | -------------------- |
| `DrawingLessonIllustration`   | Pelajaran menggambar |
| `WatercolorClassIllustration` | Kelas cat air        |
| `PotteryClassIllustration`    | Kelas keramik        |
| `MusicLessonIllustration`     | Pelajaran musik      |
| `PianoLessonIllustration`     | Pelajaran piano      |
| `DanceClassIllustration`      | Kelas tari           |
| `DramaClassIllustration`      | Kelas drama          |
| `SewingClassIllustration`     | Kelas menjahit       |
| `WoodworkClassIllustration`   | Kelas pertukangan    |
| `CulinaryClassIllustration`   | Kelas memasak        |

## Sekolah dan kampus

| Komponen                       | Ilustrasi           |
| ------------------------------ | ------------------- |
| `SchoolBuildingIllustration`   | Gedung sekolah      |
| `UniversityCampusIllustration` | Kampus universitas  |
| `CampusLibraryIllustration`    | Perpustakaan kampus |
| `SchoolBusIllustration`        | Bus sekolah         |
| `SchoolLockerIllustration`     | Loker sekolah       |
| `CafeteriaIllustration`        | Kantin              |
| `PlaygroundIllustration`       | Taman bermain       |
| `ScienceFairIllustration`      | Pameran sains       |
| `SchoolSportsIllustration`     | Olahraga sekolah    |
| `FieldTripIllustration`        | Kunjungan belajar   |

## Kebiasaan belajar

| Komponen                    | Ilustrasi              |
| --------------------------- | ---------------------- |
| `StudyPlannerIllustration`  | Agenda belajar         |
| `StudyTimerIllustration`    | Pengatur waktu belajar |
| `FlashcardsIllustration`    | Kartu belajar          |
| `MindMapIllustration`       | Peta pikiran           |
| `GroupStudyIllustration`    | Belajar kelompok       |
| `HomeworkIllustration`      | Pekerjaan rumah        |
| `StudyBreakIllustration`    | Istirahat belajar      |
| `LearningGoalsIllustration` | Target belajar         |
| `ResearchIllustration`      | Riset                  |
| `NoteTakingIllustration`    | Mencatat               |

## Pencapaian akademik

| Komponen                       | Ilustrasi               |
| ------------------------------ | ----------------------- |
| `SchoolAdmissionIllustration`  | Penerimaan sekolah      |
| `StudentIdIllustration`        | Kartu pelajar           |
| `ExamPaperIllustration`        | Lembar ujian            |
| `ExamResultsIllustration`      | Hasil ujian             |
| `ScholarshipIllustration`      | Beasiswa                |
| `DiplomaIllustration`          | Ijazah                  |
| `AcademicMedalIllustration`    | Medali akademik         |
| `GraduationGownIllustration`   | Toga wisuda             |
| `KnowledgeTreeIllustration`    | Pohon pengetahuan       |
| `LifelongLearningIllustration` | Belajar sepanjang hayat |
