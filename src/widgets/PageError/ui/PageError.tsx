import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>Ошибка приложения</h1>
      <Button className={cls.button} onClick={reload} type="button">
        Перезагрузить приложение
      </Button>
    </div>
  )
}
