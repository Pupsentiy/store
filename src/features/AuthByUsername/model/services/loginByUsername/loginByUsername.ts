import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import type { User } from 'entities/User'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI
  try {
    const response = await extra.api.post<User>('/login', authData)
    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))
    extra.navigate?.('/')
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('Вы ввели неверный логин или пароль')
  }
})
