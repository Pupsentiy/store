import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <ThemeSwitcher /> */}
      <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
    </div>
  )
}
