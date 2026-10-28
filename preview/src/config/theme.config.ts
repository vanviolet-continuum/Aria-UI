import { defaultTheme, type ThemeConfig } from '@templates/theme'

export const themeStorageKey = 'aria-ui-demo-theme-v1'

export default {
  ...defaultTheme,
  radius: 10,
  sidebarWidth: 244,
  typography: {
    page: { fontSize: 30, fontWeight: 600 },
    description: { fontSize: 13 },
    caption: { fontSize: 11 },
  },
} satisfies ThemeConfig
