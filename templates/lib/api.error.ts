export type ApiErrorSource = 'api' | 'network' | 'unknown' | 'cancelled'
export type ApiFieldErrors = Record<string, string[]>

export interface ApiErrorOptions {
  fallbackMessage?: string
  readMessage?: (body: unknown) => string | undefined
  readFieldErrors?: (body: unknown) => ApiFieldErrors | undefined
  readCode?: (body: unknown) => string | undefined
}

export class ApiError extends Error {
  readonly status?: number
  readonly code?: string
  readonly fieldErrors: ApiFieldErrors
  readonly source: ApiErrorSource
  readonly body: unknown
  readonly requestId?: string

  constructor(
    message: string,
    details: {
      status?: number
      code?: string
      fieldErrors?: ApiFieldErrors
      source?: ApiErrorSource
      body?: unknown
      requestId?: string
      cause?: unknown
    } = {},
  ) {
    super(message, { cause: details.cause })
    this.name = 'ApiError'
    this.status = details.status
    this.code = details.code
    this.fieldErrors = details.fieldErrors ?? {}
    this.source = details.source ?? 'api'
    this.body = details.body
    this.requestId = details.requestId
  }
}

const record = (value: unknown): Record<string, unknown> | undefined =>
  value !== null && typeof value === 'object' ? (value as Record<string, unknown>) : undefined

function message(value: unknown): string | undefined {
  if (typeof value === 'string' && value.trim() && !/^\s*(?:<!doctype|<html)/i.test(value))
    return value
  if (Array.isArray(value)) {
    const messages = value.filter(
      (item): item is string => typeof item === 'string' && !!item.trim(),
    )
    if (messages.length) return messages.join('\n')
  }
}

function readFields(body: unknown): ApiFieldErrors {
  const errors = record(body)?.errors
  const result: ApiFieldErrors = {}
  if (Array.isArray(errors)) {
    for (const item of errors) {
      const entry = record(item)
      const path = entry?.field ?? entry?.path
      const key = Array.isArray(path) ? path.join('.') : typeof path === 'string' ? path : undefined
      const text = message(entry?.message)
      if (key && text) (result[key] ??= []).push(text)
    }
  } else {
    for (const [key, value] of Object.entries(record(errors) ?? {})) {
      const text = message(value)
      if (text)
        result[key] = Array.isArray(value)
          ? value.filter((item): item is string => typeof item === 'string' && !!item.trim())
          : [text]
    }
  }
  return result
}

export function isApiCancellation(reason: unknown): boolean {
  if (reason instanceof ApiError) return reason.source === 'cancelled'
  const value = record(reason)
  return (
    value?.name === 'AbortError' ||
    value?.name === 'CanceledError' ||
    value?.name === 'CancelledError' ||
    value?.code === 'ERR_CANCELED' ||
    value?.__CANCEL__ === true
  )
}

/** Preserve server text, field messages, status and original cause. Never translate API messages. */
export function normalizeApiError(reason: unknown, options: ApiErrorOptions = {}): ApiError {
  if (reason instanceof ApiError) {
    if (!options.readMessage && !options.readFieldErrors && !options.readCode) return reason
    if (reason.source === 'unknown' && reason.body instanceof Error) return reason
    const customMessage = options.readMessage?.(reason.body)
    const customFields = options.readFieldErrors?.(reason.body)
    return new ApiError(customMessage ?? reason.message, {
      ...reason,
      source:
        customMessage && reason.source !== 'cancelled' && reason.source !== 'network'
          ? 'api'
          : reason.source,
      fieldErrors: customFields ?? reason.fieldErrors,
      code: options.readCode?.(reason.body) ?? reason.code,
      cause: reason.cause ?? reason,
    })
  }
  const value = record(reason)
  const response = record(value?.response)
  const body = response?.data ?? value?.error ?? value?.data ?? reason
  const details = record(body)
  const statusValue = response?.status ?? value?.status
  const status = typeof statusValue === 'number' ? statusValue : undefined
  const transport =
    !!response ||
    status !== undefined ||
    (!!value &&
      !(reason instanceof Error) &&
      ('error' in value || 'data' in value || 'message' in value || 'errors' in value))
  const fieldErrors = transport ? (options.readFieldErrors?.(body) ?? readFields(body)) : {}
  const apiMessage = transport
    ? (options.readMessage?.(body) ??
      message(body) ??
      message(details?.message) ??
      message(details?.detail) ??
      message(details?.title) ??
      Object.values(fieldErrors)[0]?.[0])
    : undefined
  const cancelled = isApiCancellation(reason)
  const network =
    !response &&
    status === undefined &&
    ((reason instanceof TypeError &&
      /^(failed to fetch|fetch failed|load failed|networkerror when attempting to fetch resource)/i.test(
        reason.message,
      )) ||
      value?.code === 'ERR_NETWORK' ||
      value?.code === 'ECONNABORTED' ||
      value?.code === 'ETIMEDOUT')
  return new ApiError(apiMessage ?? options.fallbackMessage ?? 'Unable to complete the request.', {
    status,
    code: options.readCode?.(body) ?? message(details?.code) ?? message(value?.code),
    fieldErrors,
    source: cancelled ? 'cancelled' : network ? 'network' : apiMessage ? 'api' : 'unknown',
    body,
    requestId: message(details?.requestId) ?? message(details?.traceId),
    cause: reason,
  })
}

/** Fetch/SDKs may reject with a raw Response; consume a clone, retaining the original. */
export async function normalizeApiErrorAsync(
  reason: unknown,
  options?: ApiErrorOptions,
): Promise<ApiError> {
  if (
    typeof Response !== 'undefined' &&
    reason instanceof Response &&
    !('error' in reason && reason.error)
  ) {
    let body: unknown
    try {
      const text = await reason.clone().text()
      try {
        body = JSON.parse(text)
      } catch {
        body = text
      }
    } catch {
      /* A used/unreadable response still retains its status and cause. */
    }
    const error = normalizeApiError({ status: reason.status, error: body }, options)
    return new ApiError(error.message, { ...error, cause: reason })
  }
  return normalizeApiError(reason, options)
}

export function getApiErrorMessage(reason: unknown, options?: ApiErrorOptions): string {
  return normalizeApiError(reason, options).message
}

/** HTTP and business-envelope failures must reject, so Query never caches them as success. */
export interface ApiRequestOptions<T> extends ApiErrorOptions {
  /** Project-specific envelopes (including HTTP 200 failures) must throw here. */
  assertResult?: (result: T) => void
}
export async function executeApi<T>(
  operation: () => Promise<T>,
  options?: ApiRequestOptions<T>,
): Promise<T> {
  try {
    const result = await operation()
    if (typeof Response !== 'undefined' && result instanceof Response && !result.ok) throw result
    options?.assertResult?.(result)
    return result
  } catch (reason) {
    throw await normalizeApiErrorAsync(reason, options)
  }
}
