import { useCallback, useState } from 'react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
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
        onClick={onToggleModal}
      >
        Войти
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
        animi, corporis cum dicta, eum fuga impedit laborum maiores odio
        perferendis provident quam quo tenetur veniam vero vitae voluptate
        voluptatibus?
      </Modal>
    </div>
  )
}
