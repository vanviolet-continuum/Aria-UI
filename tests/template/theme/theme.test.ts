import { afterEach, describe, expect, it, vi } from 'vitest'
import { contrastColor, resolvePalette, themeVariables } from '../../../templates/theme/apply.theme'
import {
  isThemeConfig,
  readThemeConfig,
  serializeTheme,
  THEME_STORAGE_KEY,
} from '../../../templates/theme/config'
import { defaultTheme } from '../../../templates/theme/defaults'
import { basePalettes } from '../../../templates/theme/palettes'
import { themePresets } from '../../../templates/theme/presets'
import { selectThemePreset } from '../../../templates/theme/select.preset'
import starterTheme from '../../../src/config/theme.config'
afterEach(() => vi.unstubAllGlobals())

describe('theme configuration', () => {
  it('uses the requested typography and shared text tones in every light palette', () => {
    expect(defaultTheme.font).toBe('hanken')
    expect(basePalettes.light).toMatchObject({
      textSecondary: '#575757',
      muted: '#595959',
      success: '#2e7d32',
      warning: '#d97706',
      error: '#d32f2f',
      info: '#4655e8',
    })
    for (const preset of themePresets) {
      const palette = resolvePalette({ ...defaultTheme, preset: preset.id }, 'light')
      expect(palette.textSecondary).toBe('#575757')
      expect(palette.muted).toBe('#595959')
    }
    expect(themeVariables(defaultTheme, 'light')['--font-family']).toContain(
      'Hanken Grotesk Variable',
    )
  })
  it('shares Aria UI defaults between starter and demo and restores saved size overrides', () => {
    expect(starterTheme).toEqual(defaultTheme)
    const customized = {
      ...defaultTheme,
      mode: 'dark' as const,
      sidebarWidth: 290,
      spaceScale: 1.2,
      controlSize: 'lg' as const,
    }
    expect(selectThemePreset(customized, 'zendenta')).toEqual({ ...defaultTheme, mode: 'dark' })
    expect(selectThemePreset(customized, 'forest').sidebarWidth).toBe(290)
  })
  it('keeps the existing Aria UI theme as the project default', () => {
    expect(isThemeConfig(defaultTheme)).toBe(true)
    expect(resolvePalette(defaultTheme, 'light')).toEqual(basePalettes.light)
    expect(resolvePalette(defaultTheme, 'dark')).toEqual(basePalettes.dark)
  })
  it('validates every preset in both modes', () => {
    for (const preset of themePresets)
      for (const mode of ['light', 'dark'] as const) {
        const config = { ...defaultTheme, preset: preset.id, mode }
        expect(isThemeConfig(config)).toBe(true)
        expect(
          Object.values(resolvePalette(config, mode)).every((color) =>
            /^#[a-f\d]{6}$/i.test(color),
          ),
        ).toBe(true)
      }
  })
  it('applies custom colors only to their selected mode and overrides the preset', () => {
    const config = {
      ...defaultTheme,
      preset: 'forest',
      colors: { light: { primary: '#123456' }, dark: {} },
    }
    expect(resolvePalette(config, 'light').primary).toBe('#123456')
    expect(resolvePalette(config, 'dark').primary).toBe('#87c9aa')
    expect(resolvePalette(defaultTheme, 'light').primary).toBe('#4655e8')
  })
  it('rejects malformed colors, unknown keys, inherited font names, and invalid dimensions', () => {
    expect(
      isThemeConfig({ ...defaultTheme, colors: { light: { primary: 'red' }, dark: {} } }),
    ).toBe(false)
    expect(
      isThemeConfig({ ...defaultTheme, colors: { light: { surprise: '#123456' }, dark: {} } }),
    ).toBe(false)
    expect(isThemeConfig({ ...defaultTheme, font: 'toString' })).toBe(false)
    expect(isThemeConfig({ ...defaultTheme, colors: null })).toBe(false)
    for (const patch of [
      { radius: -1 },
      { fontScale: 2 },
      { spaceScale: 0 },
      { sidebarWidth: 900 },
      { radius: NaN },
    ])
      expect(isThemeConfig({ ...defaultTheme, ...patch })).toBe(false)
  })
  it('exports a complete, typed config that can replace the project file', () => {
    const config = { ...defaultTheme, preset: 'ocean', radius: 12, fontScale: 1.1, spaceScale: 0.9 }
    const output = serializeTheme(config)
    const json = output.split('export default ')[1].split(' satisfies ThemeConfig')[0]
    expect(JSON.parse(json)).toEqual(config)
    expect(isThemeConfig(JSON.parse(json))).toBe(true)
    expect(output).toContain("import type { ThemeConfig } from './types'")
  })
  it('maps radius, font, spacing, control size, sidebar, and density to CSS tokens', () => {
    const variables = themeVariables(
      {
        ...defaultTheme,
        radius: 0,
        controlSize: 'lg',
        density: 'compact',
        fontScale: 1.2,
        spaceScale: 0.9,
        sidebarWidth: 260,
      },
      'dark',
    )
    expect(variables).toMatchObject({
      '--radius-scale': '0',
      '--control-height': '46px',
      '--button-height': '44px',
      '--table-density': '.7',
      '--font-scale': '1.2',
      '--space-scale': '0.9',
      '--sidebar-width': '260px',
      '--primary': '#8a96ff',
    })
  })
  it('chooses readable foregrounds for both dark and bright brand colors', () => {
    expect(contrastColor('#ffffff')).toBe('#171b25')
    expect(contrastColor('#171b25')).toBe('#ffffff')
    expect(contrastColor('#4655e8')).toBe('#ffffff')
    expect(contrastColor('#8a96ff')).toBe('#171b25')
  })
  it('restores a saved preview only when it belongs to the current project configuration', () => {
    const preview = { ...defaultTheme, radius: 12 }
    vi.stubGlobal('localStorage', {
      getItem: (key: string) =>
        key === THEME_STORAGE_KEY
          ? JSON.stringify({ source: JSON.stringify(defaultTheme), config: preview })
          : null,
    })
    expect(readThemeConfig(defaultTheme)).toEqual(preview)
    const newProject = { ...defaultTheme, preset: 'ocean' }
    expect(readThemeConfig(newProject)).toEqual(newProject)
  })
  it('falls back to the project configuration when browser storage is unavailable', () => {
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('Storage unavailable')
      },
    })
    expect(readThemeConfig(defaultTheme)).toEqual(defaultTheme)
  })
})
