import { createTemplateI18n } from '@templates/i18n'
import id from '../locales/id.json'
import en from '../locales/en.json'
import workspaceId from '../locales/workspace.id.json'
import workspaceEn from '../locales/workspace.en.json'
import operationsId from '../locales/operations.id.json'
import operationsEn from '../locales/operations.en.json'
import scenariosId from '../locales/scenarios.id.json'
import scenariosEn from '../locales/scenarios.en.json'

export const demoI18n = createTemplateI18n({
  storageKey: 'aria-ui-demo-language-v1',
  resources: {
    id: { app: { ...id, ...workspaceId, ...operationsId, ...scenariosId } },
    en: { app: { ...en, ...workspaceEn, ...operationsEn, ...scenariosEn } },
  },
})
