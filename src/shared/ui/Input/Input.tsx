import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

const MemoInput = (props: InputProps) => {
  const { className, type = 'text', value, onChange, ...otherProps } = props
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }
  return (
    <input
      className={classNames('', {}, [className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  )
}
export const Input = memo(MemoInput)
