import { Suspense } from 'react'

import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProviders'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main>
          <AppRouter />
        </main>
      </Suspense>
    </div>
  )
}

export default App
