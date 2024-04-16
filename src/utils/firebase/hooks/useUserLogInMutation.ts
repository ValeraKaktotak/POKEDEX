import type { UserCredential } from 'firebase/auth'
import { useContext } from 'react'
import { useMutation, type UseMutationResult } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { AUTH_COOKIE } from '../../constants/cookie'
import { StoreContext } from '../../context/store'
import { setCookie } from '../../helpers/cookies/setCookie'
import { type ILoginUser,userLogIn } from '../requests/userLogIn'

export const useUserLogInMutation = (): UseMutationResult<
  Promise<UserCredential | any>,
  unknown,
  ILoginUser,
  unknown
> => {
  const navigation = useNavigate()
  const { setStore } = useContext(StoreContext)
  return useMutation<
    Promise<UserCredential | any>,
    unknown,
    ILoginUser,
    unknown
  >(
    ['userLogIn'],
    async (param: ILoginUser) => {
      const result = await userLogIn(param)
      return result
    },
    {
      onError: async (data) => {
        return data
      },
      onSuccess: async (data) => {
        const result = await data
        setCookie(AUTH_COOKIE, result.user.uid, 10)
        setStore((prev) => ({ ...prev, session: { isLogin: true } }))
        navigation('/')
      }
    }
  )
}
