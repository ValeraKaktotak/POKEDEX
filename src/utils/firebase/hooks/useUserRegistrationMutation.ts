import { type UserCredential } from 'firebase/auth'
import { useMutation, type UseMutationResult } from 'react-query'

import { AUTH_COOKIE } from '../../constants/cookie'
import { setCookie } from '../../helpers/cookies/setCookie'
import {
  userRegistration,
  type IRegistrationUser
} from '../requests/userRegistration'

export const useUserRegistrationMutation = (): UseMutationResult<
  Promise<UserCredential | any>,
  unknown,
  IRegistrationUser,
  unknown
> => {
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
    }
  })
}
