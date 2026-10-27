import type { ComponentType } from 'react'
import type { IllustrationProps } from '../../../template/ui/illustrations/illustration.types'

export type IllustrationCategory =
  | 'nature'
  | 'travel'
  | 'food'
  | 'health'
  | 'technology'
  | 'finance'
  | 'business'
  | 'creative'
  | 'science'
  | 'lifestyle'
  | 'people'
  | 'education'
  | 'objects'
  | 'states'
  | 'workspace'
  | 'files'
  | 'communication'
  | 'security'
  | 'commerce'
  | 'infrastructure'
  | 'decoration'

export interface IllustrationEntry {
  id: string
  name: string
  componentName: string
  description: string
  category: IllustrationCategory
  component: ComponentType<IllustrationProps>
  isNew?: boolean
}
