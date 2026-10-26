export interface PasswordRequirement {
  id: string
  label: string
  test: (password: string) => boolean
}
export const defaultPasswordRequirements: PasswordRequirement[] = [
  { id: 'length', label: 'At least 8 characters', test: (value) => value.length >= 8 },
  {
    id: 'case',
    label: 'Uppercase and lowercase letters',
    test: (value) => /[a-z]/.test(value) && /[A-Z]/.test(value),
  },
  { id: 'number', label: 'At least one number', test: (value) => /\d/.test(value) },
  { id: 'symbol', label: 'At least one symbol', test: (value) => /[^\w\s]|_/.test(value) },
]
export function evaluatePassword(value: string, requirements = defaultPasswordRequirements) {
  const checks = requirements.map((rule) => ({
    id: rule.id,
    label: rule.label,
    met: !!value && rule.test(value),
  }))
  const passed = checks.filter((rule) => rule.met).length
  const rawScore =
    !value || !checks.length ? 0 : Math.max(1, Math.ceil((passed / checks.length) * 4))
  const score =
    requirements === defaultPasswordRequirements && value.length < 8
      ? Math.min(2, rawScore)
      : rawScore
  return {
    score,
    label: ['No password', 'Weak', 'Fair', 'Strong', 'Very strong'][score],
    checks,
    valid: !!value && checks.length > 0 && passed === checks.length,
  }
}
