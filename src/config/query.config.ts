import { createAriaQueryClient } from '@templates/integrations/tanstack.query'
import { appI18n } from './i18n.config'
import { apiConfig } from './api.config'

export const queryClient = createAriaQueryClient({
  apiErrorOptions: apiConfig.errors,
  translate: (message) => appI18n.t(message),
})
