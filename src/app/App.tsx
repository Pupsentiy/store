import { useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProviders'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <main className="content-page">
        <AppRouter />
      </main>
    </div>
  )
}

export default App
