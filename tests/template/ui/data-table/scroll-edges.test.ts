import { describe, expect, it } from 'vitest'
import { scrollEdges } from '../../../../src/template/ui/data-table/use-scroll-edges'

describe('pinned column edge indicators', () => {
  it('hides the shadow at each reached edge and shows both between edges', () => {
    expect(scrollEdges(0, 800, 1400)).toEqual({ left: false, right: true })
    expect(scrollEdges(200, 800, 1400)).toEqual({ left: true, right: true })
    expect(scrollEdges(600, 800, 1400)).toEqual({ left: true, right: false })
  })
  it('handles fractional pixels and removes both indicators when no overflow remains', () => {
    expect(scrollEdges(0.6, 800, 1400)).toEqual({ left: false, right: true })
    expect(scrollEdges(599.7, 800, 1400)).toEqual({ left: true, right: false })
    expect(scrollEdges(0, 1400, 1400)).toEqual({ left: false, right: false })
    expect(scrollEdges(0, 1600, 1400)).toEqual({ left: false, right: false })
  })
})
