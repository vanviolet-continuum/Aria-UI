import { createTemplateI18n } from '@/template/i18n'
import navigation from './locales/id/navigation.json'
import clinic from './locales/id/clinic.json'
import playground from './locales/id/playground.json'
import workflows from './locales/id/workflows.json'
import messages from './locales/id/messages.json'
import enNavigation from './locales/en/navigation.json'
import enClinic from './locales/en/clinic.json'
import enPlayground from './locales/en/playground.json'
import enWorkflows from './locales/en/workflows.json'
import enMessages from './locales/en/messages.json'

const app = { ...navigation, ...clinic, ...playground, ...workflows, ...messages }
const en = { ...enNavigation, ...enClinic, ...enPlayground, ...enWorkflows, ...enMessages }
export const exampleI18n = createTemplateI18n({
  storageKey: 'zendenta-language-v1',
  resources: { id: { app }, en: { app: en } },
})
