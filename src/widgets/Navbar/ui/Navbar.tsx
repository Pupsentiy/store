import { useCallback, useState } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      {/* <ThemeSwitcher /> */}
      <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={RoutePath.store} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>

      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={onShowModal}
      >
        Войти
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
