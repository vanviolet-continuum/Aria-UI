import type { ThemePreset } from './types'

export const themePresets: ThemePreset[] = [
  {
    id: 'zendenta',
    name: 'Aria UI',
    description: 'The original. Calm indigo, familiar spacing.',
    colors: { light: {}, dark: {} },
    radius: 8,
    font: 'hanken',
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Fresh greens and a quiet, natural palette.',
    colors: {
      light: {
        primary: '#28795f',
        mint: '#409d82',
        surfaceSubtle: '#f5f9f6',
        surfaceHover: '#eaf3ed',
      },
      dark: {
        primary: '#87c9aa',
        mint: '#6fbca3',
        surface: '#16201d',
        surfaceSubtle: '#1c2924',
        surfaceHover: '#26392f',
        border: '#30463b',
      },
    },
    radius: 10,
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Clear blue with a crisp, focused feel.',
    colors: {
      light: {
        primary: '#247caa',
        info: '#307ebc',
        surfaceSubtle: '#f5f9fc',
        surfaceHover: '#eaf3f9',
      },
      dark: {
        primary: '#7cc5ea',
        surface: '#151f2a',
        surfaceSubtle: '#1b2837',
        surfaceHover: '#25394b',
        border: '#304357',
      },
    },
    radius: 6,
  },
  {
    id: 'rose',
    name: 'Rose',
    description: 'Soft berry accents and warmer neutrals.',
    colors: {
      light: { primary: '#a24e77', surfaceSubtle: '#fcf7fa', surfaceHover: '#f7edf2' },
      dark: {
        primary: '#e7a4c4',
        surface: '#241b24',
        surfaceSubtle: '#2d2230',
        surfaceHover: '#3b2d3c',
        border: '#49364a',
      },
    },
    radius: 12,
  },
  {
    id: 'graphite',
    name: 'Graphite',
    description: 'Understated neutrals, precise corners.',
    colors: {
      light: { primary: '#525b6c', surfaceSubtle: '#f7f7f8', surfaceHover: '#eeeeef' },
      dark: {
        primary: '#c3c9d4',
        surface: '#1b1d22',
        surfaceSubtle: '#23262c',
        surfaceHover: '#30343b',
        border: '#393e48',
      },
    },
    radius: 4,
  },
]
