import { type FC } from 'react'
import styles from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <h1>Ошибка приложения</h1>
      <Button className={styles.button} onClick={reload} type="button">
        Перезагрузить приложение
      </Button>
    </div>
  )
}
