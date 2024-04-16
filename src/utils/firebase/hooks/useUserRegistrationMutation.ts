import { type UserCredential } from 'firebase/auth'
import { useContext } from 'react'
import { useMutation, type UseMutationResult } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { AUTH_COOKIE } from '../../constants/cookie'
import { StoreContext } from '../../context/store'
import { setCookie } from '../../helpers/cookies/setCookie'
import {
  type IRegistrationUser,
  userRegistration} from '../requests/userRegistration'

export const useUserRegistrationMutation = (): UseMutationResult<
  Promise<UserCredential | any>,
  unknown,
  IRegistrationUser,
  unknown
> => {
  const navigation = useNavigate()
  const { setStore } = useContext(StoreContext)
  return useMutation<
    Promise<UserCredential>,
    unknown,
    IRegistrationUser,
    unknown
  >({
    mutationKey: ['userRegistration'],
    mutationFn: async (param: IRegistrationUser) => {
      const result = await userRegistration(param)
      return result
    },
    onSuccess: async (data) => {
      const result = await data
      setCookie(AUTH_COOKIE, result.user.uid, 10)
      setStore((prev) => ({ ...prev, session: { isLogin: true } }))
      navigation('/')
    }
  })
}
