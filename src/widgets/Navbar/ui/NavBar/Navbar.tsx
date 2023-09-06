import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { NavbarItemList } from '../../model/item'
import { NavbarItem } from '../NavBarItem/NavbarItem'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
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

  // if (authData) {
  //   return (
  //     <div className={classNames(cls.Navbar, {}, [className])}>
  //       <Button
  //         theme={ButtonTheme.CLEAR}
  //         className={cls.links}
  //         onClick={onLogout}
  //       >
  //         Выйти
  //       </Button>
  //     </div>
  //   )
  // }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* <ThemeSwitcher /> */}
      {NavbarItemList.map((item) => (
        <NavbarItem item={item} key={item.path} />
      ))}
      {authData
        ? (
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.link}
          onClick={onLogout}
        >
          Выйти
        </Button>
          )
        : (
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.link}
          onClick={onShowModal}
        >
          Войти
        </Button>
          )}

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  )
})
