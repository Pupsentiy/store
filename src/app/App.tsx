import { Suspense } from 'react'

import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProviders'

const App = () => {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="content-page">
          <AppRouter />
        </main>
      </Suspense>
    </div>
  )
}

export default App
