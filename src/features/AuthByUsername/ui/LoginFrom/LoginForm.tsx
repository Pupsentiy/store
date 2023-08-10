import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import styles from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input type="text" className={styles.input} placeholder={'Логин'} />
      <Input type="text" className={styles.input} placeholder={'Пароль'} />
      <Button className={styles.loginBtn}>Войти</Button>
    </div>
  )
}
