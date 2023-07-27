import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          <ThemeSwitcher />
          <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
              {t('Главная')}
            </AppLink>
          <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
              {t('О сайте')}
            </AppLink>
      </div>
  )
}
