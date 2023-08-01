import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(styles.Header, {}, [className])}></header>
  )
}
