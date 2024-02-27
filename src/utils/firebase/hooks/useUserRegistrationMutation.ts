import { type UserCredential } from 'firebase/auth'
import { useMutation, type UseMutationResult } from 'react-query'

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
    Promise<UserCredential | any>,
    unknown,
    IRegistrationUser,
    unknown
  >({
    mutationKey: ['userRegistration'],
    mutationFn: async (param: IRegistrationUser) => {
      const result = await userRegistration(param)
      return result
    }
  })
}
