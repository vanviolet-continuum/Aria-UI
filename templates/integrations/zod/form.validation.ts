import { z } from 'zod'
import { normalizeApiError } from '../../lib/api.error'

export type FormMessage = { message: string; source: 'local' | 'api' }

export function zodFieldMessages(error: z.ZodError): Record<string, FormMessage> {
  const result: Record<string, FormMessage> = {}
  for (const issue of error.issues) {
    const name = issue.path.map(String).join('.') || '_form'
    result[name] ??= { message: issue.message, source: 'local' }
  }
  return result
}

/** Map DTO field names to form fields without rewriting backend messages. */
export function apiFieldMessages(
  reason: unknown,
  fields: Record<string, string> = {},
): Record<string, FormMessage> {
  const error = normalizeApiError(reason)
  return Object.fromEntries(
    Object.entries(error.fieldErrors).map(([key, messages]) => [
      fields[key] ?? key,
      { message: messages.join('\n'), source: 'api' as const },
    ]),
  )
}

/** Submission must use parsed output when a schema transforms/coerces editable values. */
export async function parseFormValues<T extends z.ZodType>(
  schema: T,
  values: z.input<T>,
): Promise<z.output<T>> {
  return schema.parseAsync(values)
}
