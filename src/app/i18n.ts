import { createTemplateI18n } from '../template/i18n'
import app from './locales/id.json'
import en from './locales/en.json'

export const appI18n = createTemplateI18n({ resources: { id: { app }, en: { app: en } } })
