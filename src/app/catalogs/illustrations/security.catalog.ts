import { AccessDeniedIllustration } from '../../../template/ui/illustrations/security/access.denied.illustration'
import { AlarmSirenIllustration } from '../../../template/ui/illustrations/security/alarm.siren.illustration'
import { DoorbellCameraIllustration } from '../../../template/ui/illustrations/security/doorbell.camera.illustration'
import { FireExtinguisherIllustration } from '../../../template/ui/illustrations/security/fire.extinguisher.illustration'
import { KeycardIllustration } from '../../../template/ui/illustrations/security/keycard.illustration'
import { PadlockIllustration } from '../../../template/ui/illustrations/security/padlock.illustration'
import { PasswordTokenIllustration } from '../../../template/ui/illustrations/security/password.token.illustration'
import { SafeVaultIllustration } from '../../../template/ui/illustrations/security/safe.vault.illustration'
import { SecureIllustration } from '../../../template/ui/illustrations/security/secure.illustration'
import { SecurityCameraIllustration } from '../../../template/ui/illustrations/security/security.camera.illustration'
import { SecurityGateIllustration } from '../../../template/ui/illustrations/security/security.gate.illustration'
import { SmokeDetectorIllustration } from '../../../template/ui/illustrations/security/smoke.detector.illustration'
import type { IllustrationEntry } from './illustration.types'

export const securityIllustrations: IllustrationEntry[] = [
  {
    id: 'access-denied',
    name: 'Access denied',
    componentName: 'AccessDeniedIllustration',
    description: 'Restricted pages and protected workspaces.',
    category: 'security',
    isNew: true,
    component: AccessDeniedIllustration,
  },
  {
    id: 'extended-alarm-siren',
    name: 'Alarm siren',
    componentName: 'AlarmSirenIllustration',
    description: 'A domed warning beacon above a slatted siren base.',
    category: 'security',
    isNew: true,
    component: AlarmSirenIllustration,
  },
  {
    id: 'extended-doorbell-camera',
    name: 'Doorbell camera',
    componentName: 'DoorbellCameraIllustration',
    description: 'A narrow video doorbell with a round lens and call button.',
    category: 'security',
    isNew: true,
    component: DoorbellCameraIllustration,
  },
  {
    id: 'extended-fire-extinguisher',
    name: 'Fire extinguisher',
    componentName: 'FireExtinguisherIllustration',
    description: 'A portable extinguisher with a hose, gauge, and clear label.',
    category: 'security',
    isNew: true,
    component: FireExtinguisherIllustration,
  },
  {
    id: 'extended-keycard',
    name: 'Keycard',
    componentName: 'KeycardIllustration',
    description: 'A contact card with a chip, magnetic band, and signal marks.',
    category: 'security',
    isNew: true,
    component: KeycardIllustration,
  },
  {
    id: 'extended-padlock',
    name: 'Padlock',
    componentName: 'PadlockIllustration',
    description: 'A sturdy padlock with a clear shackle and simple keyhole.',
    category: 'security',
    isNew: true,
    component: PadlockIllustration,
  },
  {
    id: 'extended-password-token',
    name: 'Password token',
    componentName: 'PasswordTokenIllustration',
    description: 'A compact access token with a small display and key loop.',
    category: 'security',
    isNew: true,
    component: PasswordTokenIllustration,
  },
  {
    id: 'extended-safe-vault',
    name: 'Safe vault',
    componentName: 'SafeVaultIllustration',
    description: 'A square safe with reinforced hinges and a round locking wheel.',
    category: 'security',
    isNew: true,
    component: SafeVaultIllustration,
  },
  {
    id: 'secure',
    name: 'Secure',
    componentName: 'SecureIllustration',
    description: 'Verified access and protected information.',
    category: 'security',
    isNew: true,
    component: SecureIllustration,
  },
  {
    id: 'extended-security-camera',
    name: 'Security camera',
    componentName: 'SecurityCameraIllustration',
    description: 'A mounted outdoor camera with an angled protective hood.',
    category: 'security',
    isNew: true,
    component: SecurityCameraIllustration,
  },
  {
    id: 'extended-security-gate',
    name: 'Security gate',
    componentName: 'SecurityGateIllustration',
    description: 'Two access posts with clear readers and small glass gates.',
    category: 'security',
    isNew: true,
    component: SecurityGateIllustration,
  },
  {
    id: 'extended-smoke-detector',
    name: 'Smoke detector',
    componentName: 'SmokeDetectorIllustration',
    description: 'A round smoke alarm with subtle vents and a test button.',
    category: 'security',
    isNew: true,
    component: SmokeDetectorIllustration,
  },
]
