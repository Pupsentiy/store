import { type FC } from 'react'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <h1>{t('Ошибка приложения')}</h1>
      <Button className={styles.button} onClick={reload} type="button">
        {t('Перезагрузить приложение')}
      </Button>
    </div>
  )
}
