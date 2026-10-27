import { z } from 'zod'
import { serializeSearchState, type SearchCodec } from '../../lib/search.params'

export const listSearchSchema = z.object({
  q: z.string().catch(''),
  page: z.coerce.number().int().min(1).catch(1),
  pageSize: z.coerce.number().int().min(1).max(200).catch(20),
  sort: z.string().catch(''),
  order: z.enum(['asc', 'desc']).catch('asc'),
})
export type ListSearch = z.output<typeof listSearchSchema>
export const searchStringArray = z
  .array(z.string())
  .catch([])
  .transform((values) => [...new Set(values)].sort())

/** Use catch/default on individual fields to retain other valid filters on malformed URLs. */
export function createZodSearchCodec<T extends z.ZodObject>(
  schema: T,
  defaults: z.input<T>,
  options: {
    arrayKeys?: readonly string[]
    omitDefaults?: boolean
  } = {},
): SearchCodec<z.output<T>> {
  const baseline = schema.parse(defaults)
  const keys = Object.keys(schema.shape)
  const arrays = new Set(
    options.arrayKeys ??
      Object.keys(baseline).filter((key) =>
        Array.isArray((baseline as Record<string, unknown>)[key]),
      ),
  )
  return {
    keys,
    parse(params) {
      const raw: Record<string, unknown> = { ...defaults }
      for (const key of keys) {
        const values = params.getAll(key)
        if (values.length) raw[key] = arrays.has(key)
          ? values.length === 1 && values[0] === '' ? [] : values
          : values.at(-1)
      }
      const parsed = schema.safeParse(raw)
      return parsed.success ? parsed.data : schema.parse(defaults)
    },
    serialize(value) {
      const owned = Object.fromEntries(
        keys.map((key) => [key, (value as Record<string, unknown>)[key]]),
      )
      return serializeSearchState(owned, options.omitDefaults === false ? undefined : baseline)
    },
  }
}
