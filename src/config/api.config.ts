import type { ApiErrorOptions } from '@templates/lib/api.error'

export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  /** Update these paths and formatter ignores when configuring the actual generator. */
  generatedPaths: ['src/generated.ts', 'src/generated/'] as readonly string[],
  errors: {} satisfies ApiErrorOptions,
}
