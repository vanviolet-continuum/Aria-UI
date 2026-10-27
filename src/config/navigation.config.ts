import { Home } from '@templates/icons/navigation/home.icon'
import { appConfig } from './app.config'

export const navigationConfig = [{ label: 'Home', href: appConfig.home, icon: Home }] as const
