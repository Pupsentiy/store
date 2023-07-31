import { type ButtonHTMLAttributes, type FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  type?: 'reset' | 'button' | 'submit'
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, type, ...otherProps } = props
  return (
    <button
      type={type || 'button'}
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
