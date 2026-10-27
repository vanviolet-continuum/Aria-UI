import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createTemplateI18n,
  localeOf,
  supportedLanguages,
} from '../../../templates/i18n/create.i18n'
import id from '../../../templates/i18n/locales/id/ui.json'
import en from '../../../templates/i18n/locales/en/ui.json'

afterEach(() => vi.unstubAllGlobals())
describe('portable i18n', () => {
  it('defaults to Indonesian and supports exactly ID and EN', () => {
    const instance = createTemplateI18n()
    expect(instance.resolvedLanguage).toBe('id')
    expect(instance.t('Clear filters')).toBe('Hapus filter')
    expect(supportedLanguages).toEqual(['id', 'en'])
    expect(Object.keys(id).sort()).toEqual(Object.keys(en).sort())
  })
  it('switches language and interpolates labels without changing their data values', async () => {
    const instance = createTemplateI18n()
    expect(instance.t('Select row {{value0}}', { value0: 'PT001' })).toBe('Pilih baris PT001')
    await instance.changeLanguage('en')
    expect(instance.t('Select row {{value0}}', { value0: 'PT001' })).toBe('Select row PT001')
    expect(localeOf(instance.resolvedLanguage!)).toBe('en-US')
    await instance.changeLanguage('id')
    expect(instance.t('Rows per page')).toBe('Baris per halaman')
  })
  it('restores a saved language and persists future choices with a scoped key', async () => {
    const values = new Map([['test-language', 'en']])
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    })
    const instance = createTemplateI18n({ storageKey: 'test-language' })
    expect(instance.resolvedLanguage).toBe('en')
    await instance.changeLanguage('id')
    expect(values.get('test-language')).toBe('id')
  })
  it('accepts application namespaces and UI overrides while retaining kit defaults', () => {
    const instance = createTemplateI18n({
      resources: {
        id: { app: { 'Project dashboard': 'Dasbor proyek' }, ui: { Cancel: 'Kembali' } },
      },
    })
    expect(instance.t('Project dashboard')).toBe('Dasbor proyek')
    expect(instance.t('Cancel')).toBe('Kembali')
    expect(instance.t('Close panel')).toBe('Tutup panel')
  })
  it('still works when storage is blocked or contains an unsupported language', () => {
    vi.stubGlobal('localStorage', {
      getItem: () => 'fr',
      setItem: () => {
        throw new Error('Blocked')
      },
    })
    expect(createTemplateI18n().resolvedLanguage).toBe('id')
    expect(localeOf('id')).toBe('id-ID')
  })
})
