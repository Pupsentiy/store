import { memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
  }: TextProps) => {
    const mods: Mods = {
      [cls[theme]]: true
    }

    return (
      <div className={classNames(cls.Text, mods, [className, cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)
