import { ArchiveBoxIllustration } from '../../../template/ui/illustrations/files/archive.box.illustration'
import { CloudSyncIllustration } from '../../../template/ui/illustrations/files/cloud.sync.illustration'
import { DocumentsIllustration } from '../../../template/ui/illustrations/files/documents.illustration'
import { DocumentTubeIllustration } from '../../../template/ui/illustrations/files/document.tube.illustration'
import { DownloadIllustration } from '../../../template/ui/illustrations/files/download.illustration'
import { FileCabinetIllustration } from '../../../template/ui/illustrations/files/file.cabinet.illustration'
import { FolderIllustration } from '../../../template/ui/illustrations/files/folder.illustration'
import { UploadIllustration } from '../../../template/ui/illustrations/files/upload.illustration'
import type { IllustrationEntry } from './illustration.types'

export const filesIllustrations: IllustrationEntry[] = [
  {
    id: 'extended-archive-box',
    name: 'Archive box',
    componentName: 'ArchiveBoxIllustration',
    description: 'A lidded archive box keeping folders neatly together.',
    category: 'files',
    isNew: true,
    component: ArchiveBoxIllustration,
  },
  {
    id: 'cloud-sync',
    name: 'Cloud sync',
    componentName: 'CloudSyncIllustration',
    description: 'Cloud storage and synchronized changes.',
    category: 'files',
    isNew: true,
    component: CloudSyncIllustration,
  },
  {
    id: 'documents',
    name: 'Documents',
    componentName: 'DocumentsIllustration',
    description: 'Documents, attachments, and shared resources.',
    category: 'files',
    isNew: true,
    component: DocumentsIllustration,
  },
  {
    id: 'extended-document-tube',
    name: 'Document tube',
    componentName: 'DocumentTubeIllustration',
    description: 'A capped mailing tube with a clean address label.',
    category: 'files',
    isNew: true,
    component: DocumentTubeIllustration,
  },
  {
    id: 'download',
    name: 'Download',
    componentName: 'DownloadIllustration',
    description: 'Exports and files ready to download.',
    category: 'files',
    isNew: true,
    component: DownloadIllustration,
  },
  {
    id: 'extended-file-cabinet',
    name: 'File cabinet',
    componentName: 'FileCabinetIllustration',
    description: 'A two-drawer filing cabinet with clear inset labels.',
    category: 'files',
    isNew: true,
    component: FileCabinetIllustration,
  },
  {
    id: 'folder',
    name: 'Folder',
    componentName: 'FolderIllustration',
    description: 'Collections, folders, and organized files.',
    category: 'files',
    isNew: true,
    component: FolderIllustration,
  },
  {
    id: 'upload',
    name: 'Upload',
    componentName: 'UploadIllustration',
    description: 'Documents, images, and files on their way.',
    category: 'files',
    component: UploadIllustration,
  },
]
