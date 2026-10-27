import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'
import { basePalettes } from '../../../templates/theme/palettes'

const src = fileURLToPath(new URL('../../../templates', import.meta.url))
function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((item) =>
    item.isDirectory() ? files(join(directory, item.name)) : [join(directory, item.name)],
  )
}
it('keeps raw UI colors inside the theme layer', () => {
  const offenders = files(src)
    .filter(
      (file) =>
        /\.(css|tsx?)$/.test(file) &&
        !file.includes(`${join('templates', 'theme')}`) &&
        !file.endsWith('.test.ts'),
    )
    .filter((file) =>
      /#[a-f\d]{3,8}\b|\brgba?\(|\bhsla?\(|(?:color|background|fill|stroke)\s*:[^;{}]*(?:\bwhite\b|\bblack\b)/i.test(
        readFileSync(file, 'utf8'),
      ),
    )
    .map((file) => relative(src, file))
  expect(offenders).toEqual([])
})
it('keeps the portable CSS fallback in sync with the default palettes', () => {
  const css = readFileSync(join(src, 'theme/palette.css'), 'utf8')
  for (const palette of Object.values(basePalettes))
    for (const color of Object.values(palette)) expect(css).toContain(color)
})
