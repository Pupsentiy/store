import { type ButtonHTMLAttributes, type FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  type?: 'reset' | 'button' | 'submit'
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    type,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props
  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles[size]]: true
  }
  return (
    <button
      type={type || 'button'}
      className={classNames(styles.Button, mods, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
