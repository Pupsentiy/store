import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const dispatch = useAppDispatch()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.links}
          onClick={onLogout}
        >
          Выйти
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <ThemeSwitcher /> */}
      <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={RoutePath.store} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>

      <Button
        theme={ButtonTheme.CLEAR}
        className={cls.links}
        onClick={onShowModal}
      >
        Войти
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
