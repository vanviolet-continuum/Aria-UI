import { Blocks, Home, Image, ListChecks, PanelsTopLeft, Palette, Table2 } from 'lucide-react'

export const navigation = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Detail example', href: '/details', icon: PanelsTopLeft },
  { label: 'Table Example', href: '/table-example', icon: Table2 },
  { label: 'Example Wizard', href: '/wizard', icon: ListChecks },
  { label: 'Component UI', href: '/components', icon: Blocks },
  { label: 'SVG Illustration', href: '/illustrations', icon: Image },
  { label: 'Theme settings', href: '/settings/appearance', icon: Palette },
]
