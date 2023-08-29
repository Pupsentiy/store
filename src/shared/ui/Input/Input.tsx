import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    readonly,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }
  return (
    <input
      className={classNames('Input', mods, [className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  )
})
