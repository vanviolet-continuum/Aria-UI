import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { dirname, resolve, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const template = resolve(root, 'templates')
const app = resolve(root, 'src')
const extensions = ['', '.ts', '.tsx', '.css', '.json', '/index.ts', '/index.tsx']
function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? files(resolve(dir, entry.name)) : [resolve(dir, entry.name)],
  )
}
function references(file: string) {
  return [
    ...readFileSync(file, 'utf8').matchAll(
      /(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*|@import\s*)['"]([^'"\n]+)['"]/g,
    ),
  ].map((match) => match[1])
}
function resolveImport(file: string, specifier: string) {
  const start = specifier.startsWith('@/')
    ? resolve(root, 'src', specifier.slice(2))
    : specifier.startsWith('.')
      ? resolve(dirname(file), specifier)
      : null
  return start
    ? extensions
        .map((extension) => start + extension)
        .find((path) => statSync(path, { throwIfNoEntry: false })?.isFile())
    : null
}
describe('portable template boundaries', () => {
  it('keeps every relative/alias import in the template inside the copied folder', () => {
    const violations: string[] = []
    for (const file of files(template).filter((file) => /\.(tsx?|css)$/.test(file)))
      for (const specifier of references(file)) {
        if (!specifier.startsWith('.') && !specifier.startsWith('@/')) continue
        const target = resolveImport(file, specifier)
        if (specifier.startsWith('@/') || !target || !target.startsWith(template + sep))
          violations.push(`${relative(root, file)} → ${specifier}`)
      }
    expect(violations).toEqual([])
  })
  it('keeps the starter independent from demo data, routes, and build plugins', () => {
    const content = [
      ...files(app).filter((file) => /\.(tsx?|css)$/.test(file)),
      resolve(root, 'vite.config.ts'),
      resolve(root, 'tsconfig.app.json'),
    ]
      .map((file) => readFileSync(file, 'utf8'))
      .join('\n')
    expect(content).not.toMatch(
      /@preview|(?:from|import|@import)[^\n]*preview|demoApiPlugin|useWorkspace/,
    )
  })
  it('keeps layout components independent from any router or domain store', () => {
    const imports = files(resolve(template, 'layouts'))
      .filter((file) => /\.tsx?$/.test(file))
      .flatMap(references)
    expect(imports.some((value) => /react-router|workspace|clinic|preview/.test(value))).toBe(false)
  })
  it('provides one documented code and stylesheet entry for copying', () => {
    expect(existsSync(resolve(template, 'index.ts'))).toBe(true)
    expect(existsSync(resolve(template, 'styles.css'))).toBe(true)
    expect(existsSync(resolve(template, 'readme.md'))).toBe(true)
  })
})
