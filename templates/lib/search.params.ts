export interface SearchCodec<T extends object> {
  keys: readonly string[]
  parse: (params: URLSearchParams) => T
  serialize: (value: T) => URLSearchParams
}

/** Serialize owned, flat search state; unknown URL keys are merged by the router adapter. */
export function serializeSearchState(value: object, defaults?: object): URLSearchParams {
  const params = new URLSearchParams()
  const baseline = defaults as Record<string, unknown> | undefined
  for (const [key, entry] of Object.entries(value)) {
    if (entry == null || JSON.stringify(entry) === JSON.stringify(baseline?.[key])) continue
    // Absence means default; an explicit empty value clears a nonempty default.
    if (Array.isArray(entry) && !entry.length) {
      params.append(key, '')
      continue
    }
    if (Array.isArray(entry) && entry.includes(''))
      throw new TypeError(`Search parameter ${key} reserves the empty string for an empty array.`)
    for (const item of Array.isArray(entry) ? entry : [entry]) {
      if (typeof item !== 'string' && typeof item !== 'number' && typeof item !== 'boolean')
        throw new TypeError(`Search parameter ${key} must be a primitive or primitive array.`)
      params.append(key, String(item))
    }
  }
  params.sort()
  return params
}

export function mergeSearchState<T extends object>(
  current: URLSearchParams,
  codec: SearchCodec<T>,
  value: T,
) {
  const next = new URLSearchParams(current)
  for (const key of codec.keys) next.delete(key)
  for (const [key, entry] of codec.serialize(value)) next.append(key, entry)
  return next
}
