import { createTemplateI18n } from '@templates/i18n'
import id from '../locales/id.json'
import en from '../locales/en.json'

export const appI18n = createTemplateI18n({
  resources: { id: { app: id }, en: { app: en } },
})
