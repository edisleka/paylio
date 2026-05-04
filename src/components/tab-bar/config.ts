import { Feather } from '@expo/vector-icons'

export type IconName = React.ComponentProps<typeof Feather>['name']

type TabScreenConfig = {
  readonly name: string
  readonly title: string
  readonly icon: IconName
}

export const TAB_SCREENS = [
  { name: 'home', title: 'Home', icon: 'home' },
  { name: 'dashboard', title: 'Dashboard', icon: 'briefcase' },
  { name: 'insights', title: 'Insights', icon: 'bar-chart-2' },
  { name: 'subscription', title: 'Subscription', icon: 'settings' },
] as const satisfies ReadonlyArray<TabScreenConfig>

const FALLBACK_ICON: IconName = 'circle'

const ICON_BY_ROUTE: Record<string, IconName> = Object.fromEntries(
  TAB_SCREENS.map((screen) => [screen.name, screen.icon]),
)

export function getIconForRoute(routeName: string): IconName {
  return ICON_BY_ROUTE[routeName] ?? FALLBACK_ICON
}
