import { describe, expect, it } from 'vitest'
import { acceptsFile, validateFiles } from '../../../../templates/ui/file.upload/file.utils'

describe('file upload validation', () => {
  const image = new File(['image'], 'portrait.PNG', { type: 'image/png', lastModified: 1 })
  const pdf = new File(['pdf'], 'brief.pdf', { type: 'application/pdf', lastModified: 2 })
  it('accepts MIME wildcards and case-insensitive extensions', () => {
    expect(acceptsFile(image, 'image/*,.pdf')).toBe(true)
    expect(acceptsFile(image, '.png')).toBe(true)
    expect(acceptsFile(pdf, 'image/*')).toBe(false)
  })
  it('keeps existing files and prevents duplicate entries', () => {
    expect(
      validateFiles([image, pdf, pdf], [image], { maxFiles: 3, maxSize: 1024 }).accepted,
    ).toEqual([image, pdf])
  })
  it('rejects unsupported, oversized, and excess files without discarding valid files', () => {
    const large = new File(['123456789'], 'large.png', { type: 'image/png' })
    const extra = new File(['x'], 'extra.png', { type: 'image/png' })
    const result = validateFiles([pdf, large, image, extra], [], {
      accept: 'image/*',
      maxFiles: 1,
      maxSize: 6,
    })
    expect(result.accepted).toEqual([image])
    expect(result.rejected.map((item) => item.reason)).toEqual([
      'This file type is not supported.',
      'File exceeds 6 B.',
      'Choose up to 1 files.',
    ])
  })
})
