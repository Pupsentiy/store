import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginErrorState } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoadingState } from '../../model/selectors/getLoginIsLading/getLoginIsLoading'
import { getLoginPasswordState } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsernameState } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsernameState)
  const password = useSelector(getLoginPasswordState)
  const isLoading = useSelector(getLoginIsLoadingState)
  const error = useSelector(getLoginErrorState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value))
    },
    [dispatch]
  )
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    await dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Input
          type="text"
          className={cls.input}
          placeholder={'Логин'}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={'Пароль'}
          onChange={onChangePassword}
          value={password}
        />
        {error && <Text text={error} theme={TextTheme.ERROR} />}

        <Button
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

LoginForm.displayName = 'LoginForm'
export default LoginForm
