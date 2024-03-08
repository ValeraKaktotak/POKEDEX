import { useMutation, type UseMutationResult } from 'react-query'

import { type UserCredential } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_COOKIE } from '../../constants/cookie'
import { StoreContext } from '../../context/store'
import { setCookie } from '../../helpers/cookies/setCookie'
import { userLogInWithGoogle } from '../requests/userLogInWithGoogle'

export const useUserLogInWithGoogleMutation = (): UseMutationResult<
  UserCredential,
  unknown,
  unknown,
  unknown
> => {
  const navigation = useNavigate()
  const { setStore } = useContext(StoreContext)
  return useMutation(
    ['userLogInWithGoogleMutation'],
    async () => {
      const result = await userLogInWithGoogle()
      return result
    },
    {
      onError: async (data) => {
        return data
      },
      onSuccess(data) {
        setCookie(AUTH_COOKIE, data.user.uid, 10)
        setStore((prev) => ({
          ...prev,
          session: { isLogin: true },
          userProfile: data.user
        }))
        navigation('/pokedex')
      }
    }
  )
}
