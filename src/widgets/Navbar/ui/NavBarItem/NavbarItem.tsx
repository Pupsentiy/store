import { getUserAuthData } from 'entities/User'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type NavBarItemType } from '../../model/item'
import cls from './NavbarItem.module.scss'

interface NavBarItemProps {
  item: NavBarItemType
}

export const NavbarItem = memo(({ item }: NavBarItemProps) => {
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }
  return (
    <AppLink className={cls.link} to={item.path} theme={AppLinkTheme.SECONDARY}>
      {item.text}
    </AppLink>
  )
})
