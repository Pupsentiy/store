import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  console.log(Object.entries(RoutePath))
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <ThemeSwitcher /> */}
      <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={RoutePath.store} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
    </div>
  )
}
