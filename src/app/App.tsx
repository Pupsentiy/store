import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProviders'
import { getUserMounted, userActions } from 'entities/User'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const mounted = useSelector(getUserMounted)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <main className="content-page">{mounted && <AppRouter />}</main>
    </div>
  )
}

export default App
