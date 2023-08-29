import type React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface NavBarItemType {
  path: string
  text: string
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const NavbarItemList: NavBarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Store'
  },
  {
    path: RoutePath.mac,
    text: 'Mac'
  },
  {
    path: RoutePath.iphone,
    text: 'Iphone'
  },
  {
    path: RoutePath.watch,
    text: 'Watch'
  },
  {
    path: RoutePath.ipad,
    text: 'Ipad'
  }
]
