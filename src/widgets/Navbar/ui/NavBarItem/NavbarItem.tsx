import { memo } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type NavBarItemType } from '../../model/item'
import cls from './NavbarItem.module.scss'

interface NavBarItemProps {
  item: NavBarItemType
}

export const NavbarItem = memo(({ item }: NavBarItemProps) => {
  return (
    <AppLink className={cls.link} to={item.path} theme={AppLinkTheme.SECONDARY}>
      {item.text}
    </AppLink>
  )
})
