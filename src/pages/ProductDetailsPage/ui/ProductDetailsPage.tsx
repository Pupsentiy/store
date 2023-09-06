import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ProductDetailsPage.module.scss'

interface ProductDetailsPageProps {
  className?: string
}

const ProductDetailsPage = ({ className }: ProductDetailsPageProps) => {
  return (
    <div className={classNames(cls.ProductDetailsPage, {}, [className])}></div>
  )
}
export default memo(ProductDetailsPage)
