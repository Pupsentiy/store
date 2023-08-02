import React from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

const MainPage = () => {
  return (
    <div>
      Главная страница
      <Button
        onClick={() => {
          location.reload()
        }}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}
      >
        reload
      </Button>
    </div>
  )
}

export default MainPage
