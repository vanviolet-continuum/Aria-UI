/** Produce a standalone SVG with the current theme colors baked into its attributes. */
export function serializeIllustration(svg: SVGSVGElement, title: string) {
  const clone = svg.cloneNode(true) as SVGSVGElement
  const originalElements = [svg, ...svg.querySelectorAll<SVGElement>('*')]
  const clonedElements = [clone, ...clone.querySelectorAll<SVGElement>('*')]

  originalElements.forEach((element, index) => {
    const target = clonedElements[index]
    const computed = getComputedStyle(element)
    for (const property of ['fill', 'stroke', 'color']) {
      const value = element.getAttribute(property)
      if (value?.includes('var(')) target.setAttribute(property, computed.getPropertyValue(property))
    }
    if (element.tagName.toLowerCase() === 'text') target.setAttribute('font-family', computed.fontFamily)
    target.removeAttribute('class')
    target.removeAttribute('style')
  })

  const bounds = svg.viewBox.baseVal
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.setAttribute('width', String(bounds.width || 260))
  clone.setAttribute('height', String(bounds.height || 180))
  clone.setAttribute('role', 'img')
  clone.setAttribute('aria-label', title)
  clone.removeAttribute('aria-hidden')
  let label = clone.querySelector('title')
  if (!label) {
    label = document.createElementNS('http://www.w3.org/2000/svg', 'title')
    clone.insertBefore(label, clone.firstChild)
  }
  label.textContent = title
  return new XMLSerializer().serializeToString(clone)
}
